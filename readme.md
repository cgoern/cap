![cap logo](./cap.svg)

Adaptive typography for the web. Trimmed on the baseline, calculated on the cap height.

[![npm publish](https://github.com/cgoern/cap/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/cgoern/cap/actions/workflows/npm-publish.yml)

## Components usage

Run `npm i @cgoern/cap` in your project directory.

For non framework driven webapps and websites, include the files from the `www` output target:

<!-- prettier-ignore-start -->
```html
<script type="module" src="node_modules/@cgoern/cap/www/build/cap.esm.js"></script>
<script nomodule src="node_modules/@cgoern/cap/www/build/cap.js"></script>
```
<!-- prettier-ignore-end -->

To integrate this library into a framework like Angular, React, etc., take a look at the [Stencil documentation](https://stenciljs.com/docs/overview).

### Available components

For a full list of supported properties, take a look at the appropiate component readme:

- [cap-heading](https://github.com/cgoern/cap/blob/main/src/components/cap-heading/readme.md)
- [cap-label](https://github.com/cgoern/cap/blob/main/src/components/cap-label/readme.md)
- [cap-paragraph](https://github.com/cgoern/cap/blob/main/src/components/cap-paragraph/readme.md)

<!-- prettier-ignore-start -->
```html
<!-- heading: Headline text -->
<cap-heading level="primary" tag="1">My Heading</cap-heading>

<!-- label: Single line or short descriptive body text -->
<cap-label level="primary" weight="strong">My Label</cap-label>

<!-- paragraph: Multi line body text -->
<cap-paragraph level="primary">
  Est vero saepe amet minus molestias fugiat. Quae ab blanditiis quia. Autem et
  cupiditate exercitationem aut. Odit reiciendis cumque aut.
</cap-paragraph>
```
<!-- prettier-ignore-end -->
