# cap

[![npm publish](https://github.com/cgoern/cap/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/cgoern/cap/actions/workflows/npm-publish.yml)

Adaptive typography for the web.

## Components usage

Run `npm i @cgoern/cap` in your project directory.

For non framework driven webapps and websites, include the files from the `www` output target:
```html
<script type="module" src="node_modules/@cgoern/cap/www/build/cap.esm.js"></script>
<script nomodule src="node_modules/@cgoern/cap/www/build/cap.js"></script>
```

To integrate this library into a framework like Angular, React, etc., take a look at the [Stencil documentation](https://stenciljs.com/docs/overview).

### Available components

For a full list of supported properties, take a look at the appropiate component readme:
- [cap-heading](https://github.com/cgoern/cap/blob/main/src/components/cap-heading/readme.md)
- [cap-label](https://github.com/cgoern/cap/blob/main/src/components/cap-label/readme.md)
- [cap-paragraph](https://github.com/cgoern/cap/blob/main/src/components/cap-paragraph/readme.md)

```html
<!-- heading: Headline text -->
<cap-heading level="primary" tag="1">My Heading</cap-heading>
```

```html
<!-- label: Single line or short descriptive body text -->
<cap-label level="primary" weight="strong">My Label</cap-label>
```

```html
<!-- paragraph: Multi line body text -->
<cap-paragraph level="primary">My paragraph</cap-paragraph>
```
