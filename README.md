# Hunter Scheppat’s website

[hunterschep.github.io/website](https://hunterschep.github.io/website/). Jekyll site adapted from [Academic Pages](https://academicpages.github.io/), with only the templates and styles in use.

## Local development

Ruby 4.0.7 and Bundler:

```sh
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --livereload
```

Open `http://localhost:4000/website/`.

## Editing

- `_pages/`: main pages.
- `_publications/`, `_talks/`, `_portfolio/`: individual records.
- `_data/`: navigation and news.
- `_config.yml`: profile and site settings.
- `assets/css/main.css`: all styling.

Copy a similar record to add content. Publications sort by descending `order`; projects sort ascending. `featured: true` includes a record on Home.

## Deployment

```sh
JEKYLL_ENV=production bundle exec jekyll build --strict_front_matter --trace
python3 scripts/check_site.py
```

GitHub Actions checks pull requests and deploys `main`. Output and dependencies are ignored by Git. The original site is preserved under `pre-academic-pages-20261012`.

Academic Pages source: [9c8f68fd](https://github.com/academicpages/academicpages.github.io/tree/9c8f68fd2582abba41365ea1ca459bbb222d5a92). Theme license: `LICENSE`. Personal text and images © Hunter Scheppat.
