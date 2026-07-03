# Axiom01

Semantic-first UI framework for teams that want clean HTML, accessible defaults, and a cohesive design system without utility-class sprawl.

## Why Axiom01

- Semantic HTML first — components are styled by structure, not class soup
- 79 production-ready components
- 149 design tokens
- Built-in dark mode and WCAG 2.1 AA-minded defaults
- Zero runtime dependencies
- Optional JavaScript enhancements instead of a required framework runtime

```html
<article class="card">
  <header><h3>Title</h3></header>
  <p>Meaningful markup in, polished UI out.</p>
  <footer><button class="primary">Action</button></footer>
</article>
```

## Install

```bash
npm install axiom01
```

### Package contents

The npm package now ships the core framework assets you actually need:

- `css/axiom.css`
- `css/axiom.min.css`
- `css/axicons.css`
- `js/axiom.js`
- `js/axiom.min.js`
- `js/axicons-base.js`
- `js/axicons-premium.js`
- `js/axicons-premium-variants.js`
- `js/render-icons.js`

## Quick start

### CSS only

```html
<link rel="stylesheet" href="node_modules/axiom01/css/axiom.min.css">
```

### CSS + icons

```html
<link rel="stylesheet" href="node_modules/axiom01/css/axiom.min.css">
<link rel="stylesheet" href="node_modules/axiom01/css/axicons.css">
<script src="node_modules/axiom01/js/axicons-base.js"></script>
<script src="node_modules/axiom01/js/render-icons.js"></script>
```

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/axiom01/css/axiom.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/axiom01/css/axicons.css">
<script src="https://cdn.jsdelivr.net/npm/axiom01/js/axicons-base.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axiom01/js/render-icons.js"></script>
```

### Optional runtime enhancements

If you want the optional framework runtime helpers, add:

```html
<script src="node_modules/axiom01/js/axiom.min.js"></script>
```

## Example page

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="node_modules/axiom01/css/axiom.min.css">
  <link rel="stylesheet" href="node_modules/axiom01/css/axicons.css">
  <title>Axiom01 quick start</title>
</head>
<body>
  <header class="main">
    <nav aria-label="Main Navigation">
      <a href="/" class="brand">ax[10]m</a>
      <ul class="links">
        <li><a href="#components">Components</a></li>
        <li><a href="#tokens">Tokens</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="container">
        <h1>Write less code. Ship cleaner UI.</h1>
        <p class="tagline">A semantic-first framework with polished defaults.</p>
        <div class="actions">
          <a href="#components" class="button primary">Explore Components</a>
          <a href="https://axiom01.com/docs/overview-quickstart.html" class="button secondary">Read Docs</a>
        </div>
      </div>
    </section>

    <section id="components">
      <div class="container">
        <div class="grid">
          <article class="card">
            <span class="axicon render" data-name="Check-Circle"></span>
            <header><h3>Semantic markup</h3></header>
            <p>Use native HTML and let tokens + structure handle presentation.</p>
            <footer><button class="primary">Primary action</button></footer>
          </article>

          <article class="card">
            <header><h3>Token-driven theming</h3></header>
            <p>Change a handful of variables to reshape the entire interface.</p>
          </article>
        </div>
      </div>
    </section>
  </main>

  <script src="node_modules/axiom01/js/axicons-base.js"></script>
  <script src="node_modules/axiom01/js/render-icons.js"></script>
</body>
</html>
```

## Component model

Axiom01 favors a small number of semantic classes with structural selectors.

| Use case | Axiom01 | Typical utility-heavy alternative |
|---|---|---|
| Card | `class="card"` | `class="rounded-xl border bg-white p-6 shadow"` |
| Primary action | `class="primary"` | `class="inline-flex rounded bg-blue-600 px-4 py-2 text-white"` |
| Success alert | `class="alert success"` | `class="flex rounded border border-green-300 bg-green-50 p-4 text-green-900"` |

## Included categories

- Actions: buttons, button groups, CTA patterns
- Content: cards, alerts, badges, avatars, stats
- Forms: fields, validation, sliders, ratings, multi-step flows
- Navigation: navbar, tabs, breadcrumb, pagination, sidebar, steps
- Overlays: modal, drawer, tooltip, popover
- Data: tables, timelines, progress, data lists
- Media: audio, video, carousel, gallery, lightbox
- Advanced: AI chat, masonry, pull-to-refresh, swiping cards, story view

## Icons

Axicons ships in focused layers.

### Base icons

```html
<span class="axicon render" data-name="Check"></span>
<span class="axicon render" data-name="Plus"></span>
```

### Optional premium set

```html
<script src="node_modules/axiom01/js/axicons-premium.js"></script>
```

### Premium variants set used by selected component demos

```html
<script src="node_modules/axiom01/js/axicons-premium-variants.js"></script>
```

## Theming

```css
:root {
  --a-color-primary: #7c3aed;
  --a-color-secondary: #0ea5e9;
  --a-border-radius-base: 0.75rem;
  --a-space-unit: 1rem;
  --a-heading-scale: 1.2;
}

[data-theme="dark"] {
  --a-color-surface: #0f172a;
  --a-color-on-surface: #f8fafc;
}
```

## Accessibility

Axiom01 is built around accessible defaults:

- focus-visible styles across interactive elements
- semantic HTML-first examples
- keyboard-friendly navigation patterns
- reduced-motion support
- dark-mode-aware color system
- strong baseline contrast targets for built-in themes

## Browser support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Android Chrome 90+

## Current package metrics

Measured from the shipped minified assets in this repository:

| Asset | Minified | Gzipped |
|---|---:|---:|
| `css/axiom.min.css` | 87.8 KB | 15.3 KB |
| `js/axiom.min.js` | 14.6 KB | 3.9 KB |
| `css/axicons.css` | 5.7 KB | 2.0 KB |
| `js/axicons-base.js` | 357.4 KB | 40.9 KB |
| `js/axicons-premium.js` | 265.0 KB | 29.4 KB |

## Documentation

- Live site: <https://axiom01.com>
- Quickstart: <https://axiom01.com/docs/overview-quickstart.html>
- Component overview: <https://axiom01.com/docs/components-overview.html>
- Icon browser: <https://axiom01.com/docs/axicons.html>
- Repository: <https://github.com/Sol-Roth-Media/axiom01>

## License

MIT
