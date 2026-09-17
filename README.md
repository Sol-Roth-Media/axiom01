# Axiom01

> Semantic-first UI framework for teams that demand clean HTML, accessible defaults, and cohesive design tokens without utility-class sprawl.

[![npm version](https://img.shields.io/npm/v/axiom01.svg?color=blue)](https://www.npmjs.com/package/axiom01)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Framework Docs](https://img.shields.io/badge/Docs-Live%20Site-orange)](https://sol-roth-media.github.io/axiom01/)

---

## Why Axiom01

- **Pure Semantic HTML**: Built directly on native HTML5 elements (`<article>`, `<header>`, `<main>`, `<footer>`, `<dialog>`, `<details>`) without utility-class soup or BEM conventions.
- **Minimal Class Density Metric ($D_c \le 1$)**: Exactly one class on component roots extended by intuitive single-word modifiers (`<article class="card deck">`, `<button class="primary">`).
- **84+ Production-Ready Components**: Buttons, cards, modals, tables, forms, plus pro-audio and live concert suites.
- **149 Design Tokens**: OKLCH mathematical color palettes, 22 built-in themes, fluid typographic scales, and elevation systems.
- **Axifonts Typography Suite**: 9 built-in display, serif, and script font families (`QuietJournal`, `NeoGothic`, `QuicksilverScript`, and more).
- **3-Tier Icon System**: Base (1,100+ standard), Premium (600+ contextual), and Luxe (324 illustrative 3D vector icons).
- **Modular Extension Architecture**: Use the unified bundle or independently import `@axiom01/core` and `@axiom01/audio`.
- **Zero Runtime Dependencies**: Pure CSS core with lightweight, optional progressive JavaScript helpers.

```html
<article class="card">
  <header><h3>Title</h3></header>
  <p>Meaningful markup in, polished UI out.</p>
  <footer><button class="primary">Action</button></footer>
</article>
```

---

## Installation

```bash
npm install axiom01
```

### Package Contents

The official `axiom01` npm package ships the complete framework, standalone subpackages, typography assets, and extensions:

- `css/axiom.css` / `css/axiom.min.css` (Full unified bundle: Core + Audio + Tokens)
- `css/axiom-core.css` / `css/axiom-core.min.css` (Ultra-lightweight core framework only)
- `css/axiom-audio.css` / `css/axiom-audio.min.css` (Pro-audio & live stage suite)
- `css/axifonts.css` (9 custom typography font families)
- `fonts/` (High-resolution TTF font binaries)
- `css/axicons.css` (Base icon styles)
- `js/axiom.js` / `js/axiom.min.js` (Component lifecycle engine)
- `js/axiom-audio.js` (Audio helpers: `CamelotWheel`, `VUMeter`)
- `js/axicons-base.js` / `js/axicons-premium.js` / `js/axicons-luxe.js` (1,900+ SVG icons)
- `packages/core/` (Standalone modular core package)
- `packages/audio/` (Standalone modular audio extension package)

---

## 🎧 Pro-Audio & Live Performance Suite (`@axiom01/audio`)

Axiom01 introduces a battle-tested pro-audio component suite engineered for mission-critical concert displays, DJ software, VJ visualizers, and DAW interfaces:

| Component | Semantic HTML Structure | Purpose & Features |
|---|---|---|
| **Stage Dock** | `<aside class="dock">` | Viewport-anchored stage control dock with mini, split, and expanded states. |
| **Deck Telemetry** | `<article class="card deck">` | Real-time deck card with BPM, Camelot Key detection, and waveform meters. |
| **Stage Prompter** | `<section class="prompter">` | Teleprompter with fluid responsive scaling and beat-tracked line scrolling. |
| **Pad Matrix** | `<nav class="padgrid">` | 16-pad tactile performance grid with active/armed stem lighting states. |
| **Camelot Wheel** | `<div class="wheel">` | Interactive 24-key harmonic mixing wheel with relative major/minor arcs. |
| **4-Stem Mixer** | `<article class="card mixer">` | Channel strip with vertical faders, solo/mute latch toggles, and LED VU meters. |

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

<!-- 8-Pad Stem & Cue Matrix -->
<nav class="padgrid octa">
  <button data-stem="vocal" data-state="active"><span>VOCAL</span><small>SOLO</small></button>
  <button data-stem="drums" data-state="active"><span>DRUMS</span><small>PLAYING</small></button>
  <button data-stem="bass" data-state="muted"><span>BASS</span><small>MUTED</small></button>
  <button data-stem="synth" data-state="active"><span>SYNTH</span><small>ACTIVE</small></button>
</nav>
```

---

## 🔤 Axifonts Typography Suite

Axiom01 bundles 9 distinctive typography families designed for artistic titles, stage banners, editorial layouts, and technical documentation:

| Font Family | Style & Category | Ideal Use Case |
|---|---|---|
| **NeoGothic** | Angular display geometric | Cyberpunk, stage banners, tech headers |
| **QuietJournal** | Elegant handwritten serif | Editorials, author notes, personal blogs |
| **QuicksilverScript**| Expressive cursive signature | Branding, accents, creative callouts |
| **Thistle** | Classical botanical serif | Publishing, literature, luxury editorial |
| **ThickCut** | Ultra-bold heavy grotesque | Monumental headlines, poster titles |
| **Fray** | Distressed grunge slab | Music festival flyers, urban streetwear |
| **Twiggy** | Ultra-condensed minimalist | High-density data tables, sidebars |
| **Marginalia** | Architectural drafting serif | Technical annotations, code labels |
| **Daydreamer** | Retro flowing script | Casual invites, creative headers |

### Using Axifonts

```html
<!-- Include Axifonts Stylesheet -->
<link rel="stylesheet" href="node_modules/axiom01/css/axifonts.css">
```

```css
/* Apply directly via custom font-family */
h1.hero-title {
  font-family: "NeoGothic", sans-serif;
  letter-spacing: 0.05em;
}

blockquote {
  font-family: "QuietJournal", serif;
  font-size: 1.25rem;
}
```

---

## 🧩 Modular Extensions & Addons Architecture

Axiom01 Core is intentionally kept to a featherweight ~15KB gzipped footprint. Specialized domains (pro-audio, synthesizers, 3D WebGL stage controllers) are delivered through **Modular Extension Packs** (`@axiom01/audio`, `css/axiom-audio.min.css`) so general web applications aren't burdened with unwanted bytes.

- **Learn more**: Read the [Axiom01 Extensions Architecture Guide](https://sol-roth-media.github.io/axiom01/docs/extensions.html).
- **Live Performance Provenance**: See how these components power festival LED walls and 4-deck DJ systems in the [Live Performance Case Study](https://sol-roth-media.github.io/axiom01/docs/case-study-live-performance.html).

---

## Quick Start

### 1. Unified Bundle (Core + Audio + Tokens)

```html
<link rel="stylesheet" href="node_modules/axiom01/css/axiom.min.css">
```

### 2. Modular Loading (Core + Audio)

```html
<!-- Core Design System -->
<link rel="stylesheet" href="node_modules/axiom01/css/axiom-core.min.css">

<!-- Pro-Audio Extension -->
<link rel="stylesheet" href="node_modules/axiom01/css/axiom-audio.min.css">
<script src="node_modules/axiom01/js/axiom-audio.js"></script>
```

### 3. Direct CDN Include

```html
<link rel="stylesheet" href="https://sol-roth-media.github.io/axiom01/css/axiom.min.css">
<link rel="stylesheet" href="https://sol-roth-media.github.io/axiom01/css/axifonts.css">
<link rel="stylesheet" href="https://sol-roth-media.github.io/axiom01/css/axicons.css">
```

---

## Component Model

Axiom01 favors minimal class density with structural DOM selectors:

| Use Case | Axiom01 Semantic Markup | Typical Utility-Heavy Alternative |
|---|---|---|
| Card | `<article class="card">` | `<div class="rounded-xl border bg-white p-6 shadow">` |
| Deck Telemetry | `<article class="card deck">` | `<div class="flex flex-col bg-slate-900 border rounded-lg p-4 font-mono">` |
| Primary Action | `<button class="primary">` | `<button class="inline-flex rounded bg-blue-600 px-4 py-2 text-white">` |
| Success Alert | `<aside class="alert success">` | `<div class="flex rounded border border-green-300 bg-green-50 p-4 text-green-900">` |
| Stage Prompter | `<section class="prompter">` | `<div class="h-full overflow-y-auto flex flex-col text-center font-bold text-4xl">` |

---

## Package Metrics

Measured directly from the shipped production minified assets:

| Asset | Description | Minified | Gzipped |
|---|---|---:|---:|
| `css/axiom.min.css` | Complete Bundle (Core + Audio + Tokens) | 114.2 KB | 17.8 KB |
| `css/axiom-core.min.css` | Standalone Core Framework | 14.3 KB | 3.4 KB |
| `css/axiom-audio.min.css` | Pro-Audio Extension Suite | 12.1 KB | 2.6 KB |
| `css/axifonts.css` | 9 Custom Typography Families | 3.2 KB | 0.9 KB |
| `js/axiom.min.js` | Component Lifecycle Engine | 14.6 KB | 3.9 KB |
| `js/axiom-audio.js` | Audio Runtime Helpers (`CamelotWheel`, `VUMeter`) | 4.3 KB | 1.4 KB |
| `css/axicons.css` | Base Icon Stylesheet | 5.8 KB | 2.0 KB |
| `js/axicons-base.js` | Base Icon Set (1,100+ standard vectors) | 357.4 KB | 40.9 KB |
| `js/axicons-premium.js` | Premium Icon Set (600+ contextual vectors) | 265.0 KB | 29.4 KB |
| `js/axicons-luxe.js` | Luxe 3D Illustrative Icon Set (324 icons) | 482.4 KB | 46.2 KB |

---

## Documentation & Resources

- **Official Framework Site**: <https://sol-roth-media.github.io/axiom01/>
- **Extensions Architecture Guide**: <https://sol-roth-media.github.io/axiom01/docs/extensions.html>
- **Pro-Audio Components Suite**: <https://sol-roth-media.github.io/axiom01/docs/audio-components.html>
- **Concert Systems Case Study**: <https://sol-roth-media.github.io/axiom01/docs/case-study-live-performance.html>
- **Axifonts Typography**: <https://sol-roth-media.github.io/axiom01/docs/fonts.html>
- **Overview & Quickstart**: <https://sol-roth-media.github.io/axiom01/docs/overview-quickstart.html>
- **Component Browser**: <https://sol-roth-media.github.io/axiom01/docs/components-overview.html>
- **Axicons Browser**: <https://sol-roth-media.github.io/axiom01/docs/axicons.html>
- **GitHub Repository**: <https://github.com/Sol-Roth-Media/axiom01>

---

## License

MIT © Solomon Rothman / Sol Roth Media
