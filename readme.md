# cap

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

## Sass modules usage

You can use cap's internal variables, functions & mixins via the distributed Sass modules:

```scss
@use '@cgoern/cap/www/sass/cap.m' as cap;
@use '@cgoern/cap/www/sass/cap-heading.m' as capHeading;
@use '@cgoern/cap/www/sass/cap-label.m' as capLabel;
@use '@cgoern/cap/www/sass/cap-paragraph.m' as capParagraph;
```

### Examples

#### Base rules

```scss
@use '@cgoern/cap/www/sass/cap.m' as cap;

body {
  cap.base;
}

```

##### Output

```css
body {
  font-family: 'Inter var', sans-serif;
  font-feature-settings: 'calt', 'liga', 'ss03', 'zero', 'cv05', 'cv10';
  font-kerning: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
  text-rendering: optimizeLegibility;
  -webkit-text-size-adjust: none;
}
```

#### Extend your own selector(s)

```scss
@use 'sass:map';
@use '@cgoern/cap/www/sass/cap.m' as cap;
@use '@cgoern/cap/www/sass/cap-heading.m' as capHeading;

$headingLevels: map.get(capHeading.$levels, 'desktop');

.my-heading {
  @include cap.rules;
}

@each $name, $props in $headingLevels {
  .my-heading--#{$name} {
    @include cap.level($props);
  }
}
```

##### Output

```css
.my-heading {
  font-size: var(--size);
  letter-spacing: var(--spacing);
  line-height: var(--height);
}

.my-heading--primary {
  --height: 42px;
  --size: 34px;
  --spacing: -0.0218em;
}

.my-heading--secondary {
  --height: 34px;
  --size: 27px;
  --spacing: -0.0206em;
}

/* ... */
```
