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

- [cap-text](https://github.com/cgoern/cap/blob/main/src/components/cap-text/readme.md)

<!-- prettier-ignore-start -->
```html
<!-- heading: Heading text -->
<cap-text heading="1" weight="heavy" size="+6">My Heading</cap-text>

<!-- label: Single line or short descriptive body text -->
<cap-text size="0">My Label</cap-text>

<!-- paragraph: Multi line body text -->
<cap-text paragraph line-height="loose" size="+1">
  Est vero saepe amet minus molestias fugiat. Quae ab blanditiis quia. Autem et
  cupiditate exercitationem aut. Odit reiciendis cumque aut.
</cap-text>
```
<!-- prettier-ignore-end -->
