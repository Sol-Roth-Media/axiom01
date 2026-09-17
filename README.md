# Axiom01

Semantic-first UI framework for teams that want clean HTML, accessible defaults, and a cohesive design system without utility-class sprawl.

## Why Axiom01

- Pure Semantic HTML first — completely devoid of utility-class soup and BEM styling conventions.
- Minimal Class Density Metric ($D_c \le 1$): style directly on native HTML tags with single-word modifiers (`<article class="card deck">`, `<button class="primary">`).
- 84+ production-ready layout and UI components (including pro-audio & stage performance suites).
- 149 design tokens (colors, spacing, shadows).
- 3-Tier Icon System: Base (1,100+ standard), Premium (600+ contextual), and Luxe (324 ultra-detailed 3D illustrative icons).
- Modular architecture: use the unified bundle or independently import `@axiom01/core` and `@axiom01/audio`.
- Built-in dark mode and WCAG 2.1 AA-minded defaults.
- Zero runtime dependencies, purely optional JavaScript enhancements.

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

The npm package ships the full framework assets, modular subpackages, and pro-audio extensions:

- `css/axiom.css` / `css/axiom.min.css` (Full bundle: Core + Audio + Tokens)
- `css/axiom-core.css` / `css/axiom-core.min.css` (Core framework only)
- `css/axiom-audio.css` / `css/axiom-audio.min.css` (Pro-audio & live stage suite)
- `css/axicons.css` (Base icon styles)
- `js/axiom.js` / `js/axiom.min.js` (Core framework runtime)
- `js/axiom-audio.js` (Audio component helpers & state synchronizers)
- `js/axicons-base.js` / `js/axicons-premium.js` / `js/axicons-premium-variants.js`
- `packages/core/` (Modular core package)
- `packages/audio/` (Modular audio package)

---

## 🎧 Pro-Audio & Live Performance Suite (`@axiom01/audio`)

Axiom01 v3.2+ introduces a battle-tested pro-audio component suite engineered for mission-critical concert HUDs, DJ performance software, and audio workstations.

| Component | Semantic HTML Structure | Purpose & Features |
|---|---|---|
| **Stage Dock** | `<aside class="dock">` | Viewport-anchored stage control dock with mini, split, and expanded states. |
| **Deck Telemetry** | `<article class="card deck">` | Real-time deck card with BPM, Camelot Key badge, and waveform meters. |
| **Scene Status** | `<article class="card scene">` | Live visualizer scene badge and status monitor. |
| **Stage Prompter** | `<section class="prompter">` | Teleprompter with fluid responsive typography and beat-tracked line scrolling. |
| **Pad Matrix** | `<div class="padgrid">` | 16-pad tactile performance grid with active/armed stem lighting states. |
| **Camelot Wheel** | `<div class="wheel">` | Interactive 24-key harmonic mixing wheel with relative major/minor arcs. |

### Audio Component Quick Example

```html
<!-- Real-Time DJ Deck Telemetry Card -->
<article class="card deck" data-deck="1" data-state="playing">
  <header>
    <h3>Deck 1 // Master</h3>
    <span class="badge" data-key="8A">8A (Am)</span>
  </header>
  <main>
    <div class="meta">
      <strong>128.0 BPM</strong>
      <span>Tech House</span>
    </div>
    <progress value="68" max="100" aria-label="Track Progress"></progress>
  </main>
  <footer>
    <button class="primary sm">CUE</button>
    <button class="outline sm">SYNC</button>
  </footer>
</article>

<!-- 16-Pad Performance Matrix -->
<div class="padgrid" data-columns="4">
  <button data-stem="vocal" data-state="active"><span>VOCAL</span></button>
  <button data-stem="drums" data-state="active"><span>DRUMS</span></button>
  <button data-stem="bass" data-state="muted"><span>BASS</span></button>
  <button data-stem="inst" data-state="muted"><span>INST</span></button>
</div>
```

---

## Quick start

### 1. Unified Bundle (CSS only)

```html
<link rel="stylesheet" href="node_modules/axiom01/css/axiom.min.css">
```

### 2. Modular Loading (Core + Audio Extensions)

```html
<link rel="stylesheet" href="node_modules/axiom01/css/axiom-core.min.css">
<link rel="stylesheet" href="node_modules/axiom01/css/axiom-audio.min.css">
<script src="node_modules/axiom01/js/axiom-audio.js"></script>
```

### 3. CSS + Icons

```html
<link rel="stylesheet" href="node_modules/axiom01/css/axiom.min.css">
<link rel="stylesheet" href="node_modules/axiom01/css/axicons.css">
<script src="node_modules/axiom01/js/axicons-base.js"></script>
<script src="node_modules/axiom01/js/render-icons.js"></script>
```

### 4. CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/axiom01/css/axiom.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/axiom01/css/axicons.css">
<script src="https://cdn.jsdelivr.net/npm/axiom01/js/axicons-base.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axiom01/js/render-icons.js"></script>
```

---

## Example page

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
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
        <li><a href="#audio">Audio</a></li>
        <li><a href="#tokens">Tokens</a></li>
      </ul>
    </nav>
  </header>

  <main class="container">
    <section class="hero">
      <h1>Write less code. Ship cleaner UI.</h1>
      <p class="tagline">A semantic-first framework with polished defaults.</p>
      <div class="actions">
        <a href="#components" class="button primary">Explore Components</a>
        <a href="https://sol-roth-media.github.io/axiom01/docs/audio-components.html" class="button secondary">Audio Suite</a>
      </div>
    </section>

    <section id="components">
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
    </section>
  </main>

  <script src="node_modules/axiom01/js/axicons-base.js"></script>
  <script src="node_modules/axiom01/js/render-icons.js"></script>
</body>
</html>
```

---

## Component model

Axiom01 favors a small number of semantic classes with structural selectors.

| Use case | Axiom01 | Typical utility-heavy alternative |
|---|---|---|
| Card | `class="card"` | `class="rounded-xl border bg-white p-6 shadow"` |
| Deck Telemetry | `class="card deck"` | `class="flex flex-col bg-slate-900 border rounded-lg p-4 font-mono"` |
| Primary action | `class="primary"` | `class="inline-flex rounded bg-blue-600 px-4 py-2 text-white"` |
| Success alert | `class="alert success"` | `class="flex rounded border border-green-300 bg-green-50 p-4 text-green-900"` |
| Stage prompter | `class="prompter"` | `class="h-full overflow-y-auto flex flex-col text-center font-bold text-4xl"` |

## Included categories

- **Actions**: buttons, button groups, CTA patterns
- **Content**: cards, alerts, badges, avatars, stats
- **Pro-Audio**: stage docks, deck cards, scene cards, teleprompters, pad grids, Camelot wheels
- **Forms**: fields, validation, sliders, ratings, multi-step flows
- **Navigation**: navbar, tabs, breadcrumb, pagination, sidebar, steps
- **Overlays**: modal, drawer, tooltip, popover
- **Data**: tables, timelines, progress, data lists
- **Media**: audio, video, carousel, gallery, lightbox
- **Advanced**: AI chat, masonry, pull-to-refresh, swiping cards, story view

---

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

- `focus-visible` styles across interactive elements
- Semantic HTML-first examples
- Keyboard-friendly navigation patterns
- Reduced-motion support
- Dark-mode-aware color system
- Strong baseline contrast targets for built-in themes (WCAG 2.1 AA)

## Browser support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Android Chrome 90+

## Package metrics

Measured from the shipped minified assets in this repository:

| Asset | Description | Minified | Gzipped |
|---|---|---:|---:|
| `css/axiom.min.css` | Complete Bundle (Core + Audio) | 105.5 KB | 17.8 KB |
| `css/axiom-core.min.css` | Core Framework | 14.3 KB | 3.4 KB |
| `css/axiom-audio.min.css` | Pro-Audio Suite | 12.1 KB | 2.6 KB |
| `js/axiom.min.js` | Core Runtime Helpers | 14.6 KB | 3.9 KB |
| `js/axiom-audio.js` | Audio Runtime Helpers | 4.3 KB | 1.4 KB |
| `css/axicons.css` | Icon Stylesheet | 5.8 KB | 2.0 KB |
| `js/axicons-base.js` | Base Icon Set (1,100+ icons) | 357.4 KB | 40.9 KB |
| `js/axicons-premium.js` | Premium Icon Set (600+ icons) | 265.0 KB | 29.4 KB |

---

## Documentation & Case Studies

- **Live Framework Site**: <https://sol-roth-media.github.io/axiom01/>
- **Audio Components Suite**: <https://sol-roth-media.github.io/axiom01/docs/audio-components.html>
- **Production Case Study**: <https://sol-roth-media.github.io/axiom01/docs/case-study-live-performance.html>
- **Quickstart Guide**: <https://sol-roth-media.github.io/axiom01/docs/overview-quickstart.html>
- **Component Browser**: <https://sol-roth-media.github.io/axiom01/docs/components-overview.html>
- **Axicons Browser**: <https://sol-roth-media.github.io/axiom01/docs/axicons.html>
- **GitHub Repository**: <https://github.com/Sol-Roth-Media/axiom01>

## License

MIT © Solomon Rothman / Sol Roth Media
