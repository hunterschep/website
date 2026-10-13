# Hunter Scheppat’s website

A small academic website built with [Academic Pages](https://academicpages.github.io/) and Jekyll. Live at **https://hunterschep.github.io/website/**.

## Preview

Use Ruby **4.0.7** (also recorded in `.ruby-version`) and Bundler.

```sh
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --livereload
```

Open **http://localhost:4000/website/**. Restart the server after changing `_config.yml`.

## Edit

| Content | Location |
| --- | --- |
| Name, biography in the sidebar, profiles, site URL | `_config.yml` |
| Main navigation and CV link | `_data/navigation.yml` |
| Home, Research, Software, Writing | `_pages/` |
| News | `_data/news.yml`, newest first |
| Publications | `_publications/`, one Markdown file per paper |
| Presentations | `_talks/`, one Markdown file per talk |
| Software projects | `_portfolio/`, one Markdown file per project |
| Portrait | `images/headshot.png` |
| Personal colors, typography, spacing | `_sass/_custom.scss` |

Copy a similar collection entry when adding a paper, talk, or project. Front matter controls its title, venue, order, links, and short summary. Publication `order` sorts newest first; project `order` sorts lowest first. Set `featured: true` to include a publication or project on Home. Keep publications in the `first_author` or `coauthored` category. Use `year` and `month` for dates when the exact day is unknown.

The CV currently links to the existing Google Drive document. Writing links to external posts. Neither needs a second copy here.

## Build & deploy

```sh
JEKYLL_ENV=production bundle exec jekyll build --strict_front_matter --trace
python3 scripts/check_site.py
```

The check covers every generated HTML page, internal links and fragments, canonical URLs, descriptions, the `/website/` base path, and template samples. Production output goes into `_site/` and is not committed.

GitHub Actions builds and checks pull requests. Pushes to `main` also deploy through GitHub Pages. Pages uses **GitHub Actions** as its source. Keep `url` set to the host and `baseurl` set to `/website` while this is a project site.

## Theme & recovery

Theme source: [Academic Pages revision `9c8f68fd`](https://github.com/academicpages/academicpages.github.io/tree/9c8f68fd2582abba41365ea1ca459bbb222d5a92). Personal overrides are concentrated in `_sass/_custom.scss`, `_layouts/single.html`, and the masthead, author profile, head, and footer includes. Navigation works without JavaScript; the site has no analytics or comments.

The theme’s MIT license is in `LICENSE`. Personal text and images remain copyright Hunter Scheppat.

The original HTML/Vite site is preserved by the `pre-academic-pages-20261012` tag. The old `gh-pages` branch remains a deployment snapshot; restoring it as the Pages source also requires reverting the source/build changes on `main` to avoid a later workflow redeployment.
