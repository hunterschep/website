"""Check the generated site before uploading the Pages artifact."""

import argparse
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.links = []
        self.ids = set()
        self.canonical = None
        self.description = None
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.add(attrs["id"])
        if tag in {"a", "link"} and attrs.get("href"):
            self.links.append(attrs["href"])
        if tag in {"img", "script"} and attrs.get("src"):
            self.links.append(attrs["src"])
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonical = attrs.get("href")
        if tag == "meta" and attrs.get("name") == "description":
            self.description = attrs.get("content")


def check_site(root, site_url):
    origin = urlsplit(site_url).netloc
    prefix = urlsplit(site_url).path.rstrip("/") + "/"
    pages = {path: Page(path.read_text()) for path in root.rglob("*.html")}
    errors = []

    for required in ["index.html", "research/index.html", "software/index.html", "writing/index.html", "404.html"]:
        if root / required not in pages:
            errors.append(f"Missing page: {required}")

    for path, page in pages.items():
        relative = path.relative_to(root).as_posix()
        page_url = urljoin(site_url, relative.removesuffix("index.html"))
        if not page.canonical or page.canonical != page_url:
            errors.append(f"{relative}: incorrect canonical URL ({page.canonical})")
        if not page.description:
            errors.append(f"{relative}: missing description")
        if "main" not in page.ids:
            errors.append(f"{relative}: missing main content target")
        html = path.read_text()
        for sample in ["Your Name", "Your Sidebar Name", "Red Brick University", "none@example.org"]:
            if sample in html:
                errors.append(f"{relative}: template sample remains ({sample})")
        for href in page.links:
            target = urlsplit(urljoin(page_url, href))
            if target.scheme not in {"http", "https"} or target.netloc != origin:
                continue
            if not target.path.startswith(prefix):
                errors.append(f"{relative}: link escapes the site base path ({href})")
                continue
            target_path = root / unquote(target.path[len(prefix):])
            if target_path.is_dir():
                target_path /= "index.html"
            if not target_path.is_file():
                errors.append(f"{relative}: missing link target ({href})")
            elif target.fragment and target_path in pages and unquote(target.fragment) not in pages[target_path].ids:
                errors.append(f"{relative}: missing fragment target ({href})")

    if errors:
        raise SystemExit("\n".join(errors))
    print(f"Checked {len(pages)} pages: internal links, fragments, metadata, base path, and template cleanup passed.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--directory", type=Path, default=Path("_site"))
    parser.add_argument("--site-url", default="https://hunterschep.github.io/website/")
    args = parser.parse_args()
    check_site(args.directory, args.site_url)
