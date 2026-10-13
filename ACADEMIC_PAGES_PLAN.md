# Academic Pages migration plan

Move this site to [Academic Pages](https://academicpages.github.io/) in the existing repository. Keep the compact, early-web personality while giving publications, research, and software a clearer academic presentation.

Estimated effort: **4–8 focused hours**, including content conversion, light customization, and deployment checks. This is a small static-site migration; Ruby dependency setup and visual refinement are the main uncertainties.

## Current scope

The site has four hand-written HTML pages, one stylesheet, and a Vite build. GitHub Pages currently serves `https://hunterschep.github.io/website/` from the root of the `gh-pages` branch. There is no custom domain.

| Existing content | Academic Pages destination |
| --- | --- |
| Home: biography, eight news items, contact links, headshot | `_pages/about.md`, author settings in `_config.yml`, image in `images/` |
| Research: interests, current work, experience | `_pages/research.html` with permalink `/research/` |
| Three publications, including one forthcoming paper | Three `_publications/` entries, rendered on Research |
| Two presentations | Two `_talks/` entries, rendered on Research |
| Five software projects | Five `_portfolio/` entries, listed at `/software/` |
| Writing: one tutorial and five external destinations | `_pages/writing.md` with permalink `/writing/` |
| Curriculum vitae | Keep the existing Google Drive link initially |

Navigation stays **Home / Research / Software / Writing / CV**. Use publication categories to retain the first-author and co-authored distinction. Preserve citations, resource links, forthcoming status, and the personal links on Writing. The EMNLP entry currently lacks an author list and paper URL; carry its existing status forward without filling in unknown metadata.

## Implementation

1. **Set up the template.** Work on `migrate/academic-pages` and tag the current site for recovery. Import a recorded upstream revision, retain its license, remove demonstration content, and configure identity, sidebar links, and navigation. Use `url: https://hunterschep.github.io`, `baseurl: /website`, and `repository: hunterschep/website`.

2. **Convert the content.** Move existing text into pages and collections. Keep `/`, `/research/`, `/software/`, and `/writing/` working. Use collection entries as the source for publication and project listings. Preserve the headshot, favicon, news chronology, and CV destination. Add a small selected-publications section to Home so the research record is visible immediately.

3. **Apply a restrained visual pass.** Use the Academic Pages masthead and author sidebar. Carry over the burgundy accent, warm white background, serif reading text, visible links, and compact spacing through a small SCSS override. Put research identity and the AWS role in the biography. Let papers, venues, talks, and public tools establish credibility. Keep customization concentrated so future template updates are manageable.

4. **Replace the build and deploy path.** Use Bundler/Jekyll for local preview and production builds. Adapt the upstream Pages workflow for `main`; give the Configure Pages step `id: pages` if using its `base_path` output. Remove the Vite and `gh-pages` tooling once the Jekyll build works. Update the README with the new preview commands. Switch Settings → Pages to GitHub Actions when the migration is ready to publish.

## Completion checks

- Run a production Jekyll build and inspect desktop and mobile previews.
- Account for all four pages, three publications, two talks, five projects, eight news items, and external writing links.
- Check internal links, collection pages, images, favicon, CV link, metadata, and 404 behavior under `/website/`.
- Remove sample identities, publications, posts, and unused template features from the generated site.
- Review the complete diff; after deployment, confirm the successful Pages run and all four live routes.

The first migration should produce a working, recognizable academic site with Markdown-based editing. A native CV page, locally hosted PDF, and original blog posts can follow when their content is available.

References: [template and setup instructions](https://github.com/academicpages/academicpages.github.io), [content and CV guide](https://academicpages.github.io/markdown/), [current site configuration](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), [Pages workflow](https://github.com/academicpages/academicpages.github.io/blob/master/.github/workflows/jekyll.yml).
