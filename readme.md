<style>
  #logo {
    fill: rgba(0, 0, 0, 0.9);
  }

  @media (prefers-color-scheme: dark) {
    #logo {
      fill: rgba(255, 255, 255, 0.9);
    }
  }
</style>

<svg id="logo" width="134" height="48" viewBox="0 0 134 48" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M63.4128 4.40791C64.565 2.4448 65.1411 1.46325 66 1.46325C66.8589 1.46325 67.435 2.4448 68.5873 4.4079L89.1531 39.4461C90.7798 42.2175 91.5932 43.6031 90.9642 44.4068C90.3353 45.2105 88.7947 44.754 85.7136 43.8411L68.2727 38.6734C67.1443 38.3391 66.5801 38.1719 66 38.1719C65.4199 38.1719 64.8557 38.3391 63.7273 38.6734L46.2864 43.8411C43.2053 44.754 41.6647 45.2105 41.0358 44.4068C40.4069 43.6031 41.2202 42.2175 42.8469 39.4461L63.4128 4.40791ZM36.4883 5.88335C37.9053 6.86252 38.6138 7.35211 38.6983 8.28468C38.7828 9.21724 38.0978 9.90219 36.7279 11.2721L26.8284 21.1716C25.4951 22.5049 24.8284 23.1716 24.8284 24C24.8284 24.8284 25.4951 25.4951 26.8284 26.8284L26.8284 26.8284L36.7279 36.7279C38.0978 38.0978 38.7828 38.7828 38.6983 39.7153C38.6138 40.6479 37.9053 41.1375 36.4883 42.1166C27.9157 48.0404 16.0743 47.187 8.44365 39.5563C-0.147884 30.9648 -0.147884 17.0352 8.44365 8.44365C16.0743 0.813018 27.9157 -0.040414 36.4883 5.88335ZM131.506 23.2808C132.105 22.5616 131.951 21.7145 131.641 20.0201C129.768 9.7697 120.791 2 110 2C97.8497 2 88 11.8497 88 24C88 34.7913 95.7697 43.768 106.02 45.6409C107.714 45.9505 108.562 46.1053 109.281 45.5056C110 44.906 110 43.9373 110 42V28C110 26.1144 110 25.1716 110.586 24.5858C111.172 24 112.114 24 114 24H128C129.937 24 130.906 24 131.506 23.2808Z" />
</svg>

[![npm publish](https://github.com/cgoern/cap/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/cgoern/cap/actions/workflows/npm-publish.yml)

Adaptive typography for the web. Trimmed on the baseline, calculated on the cap height.

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
