# Axiom01 v2.0.0 — The Semantic-First UI Framework

> **Build beautiful, accessible websites with clean HTML and minimal CSS.** Stop wrestling with utility classes and BEM naming. Axiom01 lets you write semantic HTML and handles the styling beautifully.

[![npm](https://img.shields.io/npm/v/axiom01.svg?color=blue)](https://www.npmjs.com/package/axiom01)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CSS Bundle](https://img.shields.io/badge/CSS-13.3KB%20gzipped-brightgreen.svg)]()
[![WCAG 2.1 Level AA](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-blue.svg)]()
[![JavaScript Free](https://img.shields.io/badge/JavaScript-Not%20Required-ff69b4.svg)]()

---

## 🎯 Why Axiom01?

### The Problem
Most UI frameworks make you choose: **clean code OR beautiful design**. You write verbose HTML cluttered with utility classes, or you're forced into rigid component-based structures.

### The Solution  
**Axiom01 is different.** Write *semantic HTML first*, and let the framework handle the beauty. One meaningful class per component. That's it.

```html
<!-- ✅ Axiom01 — Clean & Simple -->
<button class="primary lg">Save Changes</button>

<article class="card elevated">
  <header><h2>Dashboard</h2></header>
  <div>Your content here</div>
  <footer>
    <button class="secondary">Cancel</button>
    <button class="success">Confirm</button>
  </footer>
</article>

<!-- ❌ What you'd write with other frameworks -->
<!-- <button class="px-4 py-2 bg-blue-500 text-white rounded font-bold hover:bg-blue-600 focus:outline-none">Save</button> -->
<!-- <div class="max-w-sm rounded-lg shadow-md bg-white p-6"> ... 15 classes ... </div> -->
```

**Result:** Less markup. Fewer classes. Cleaner code. Faster updates.

---

## ✨ What You Get

### 🎨 Professional Design System
- **149 Design Tokens** — Colors, spacing, typography, animations, shadows, borders, breakpoints
- **Dark Mode Built-In** — Automatic theme detection and smooth transitions
- **Semantic Color System** — Primary, secondary, success, warning, error, info colors (auto-calculated for harmony)
- **Customizable via CSS Variables** — Change one variable, update the entire site

### 🧩 67 Production-Ready Components
- **Button** — 4 sizes, 7 types, all states (hover, focus, disabled, loading)
- **Card** — 5 variants, semantic structure, responsive footer layout
- **Badge** — 6 colors, 3 sizes, perfect for status indicators
- **Alert** — 4 types, 3 sizes, dismissible option, WCAG AA compliant
- **Tag** — With optional close button for filtering
- **Link** — 5 semantic variants for different contexts
- **Plus 61 More** — Accordion, Avatar, Modal, Table, Tabs, Carousel, Slider, Video Player, Audio Player, Datepicker, and much more

### 🎬 20+ Animations
- **GPU-Accelerated** — Uses only transform/opacity for 60fps performance
- **Accessible** — Respects `prefers-reduced-motion` preference
- **Smooth Timing** — 150ms (fast), 300ms (standard), 500ms (slow) with easing
- **Ready to Use** — `.animate-fade-in`, `.animate-slide-up`, `.animate-bounce`, and more

### ♿ Accessibility First
- ✅ **WCAG 2.1 Level AA** — All components tested and certified
- ✅ **Keyboard Navigation** — Full support, no mouse required
- ✅ **Screen Readers** — Semantic HTML + ARIA attributes
- ✅ **High Contrast** — 4.5:1 or better color contrast on all text
- ✅ **Focus Indicators** — Clear, visible focus states on all interactive elements
- ✅ **Touch Friendly** — Minimum 2rem (32px) touch targets

### 📱 Fully Responsive
- Mobile-first approach
- 6 breakpoints (480px, 576px, 768px, 992px, 1200px, 1400px)
- Flexible grid and spacing systems
- Touch-optimized interactions

### 🚀 Performance
- **13.3 KB CSS (gzipped)** — Incredibly lean bundle size with 67 components
- **1.0 KB JavaScript (gzipped)** — Optional component loader
- **14.3 KB Total (gzipped)** — Production-ready, zero dependencies

---

## 🚀 Get Started in 30 Seconds

### Option 1: CDN (Fastest)
```html
<link rel="stylesheet" href="https://unpkg.com/axiom01@2.0.0/css/axiom.min.css">
```

Then use Axiom components in your HTML:
```html
<button class="primary lg">Click Me</button>
<div class="card elevated">Content</div>
```

**✨ Done.** No build tools. No configuration. Just works.

### Option 2: npm (Recommended for Projects)
```bash
npm install axiom01
```

Import in your CSS:
```css
@import 'axiom01/css/axiom.min.css';
```

Or in your JavaScript:
```javascript
import 'axiom01/css/axiom.min.css';
```

### Option 3: Yarn or pnpm
```bash
yarn add axiom01
pnpm add axiom01
```

---

## 📚 Documentation & Demo

**Everything you need to build with Axiom01:**

| Resource | Link |
|----------|------|
| 🎨 **Live Demo** | [axiom01.com](https://axiom01.com) |
| 📖 **Component Guide** | [docs/COMPONENTS.md](docs/COMPONENTS.md) |
| 🎯 **Quick Start** | [See below](#quick-start-examples) |
| 🎬 **Animations** | [docs/ANIMATIONS.md](docs/ANIMATIONS.md) |
| 🎨 **Design Tokens** | [docs/tokens/VARIABLES.md](docs/tokens/VARIABLES.md) |
| 🛠 **Utilities** | [docs/UTILITIES.md](docs/UTILITIES.md) |
| 📋 **Styling Philosophy** | [AXIOM01_STYLING_GUIDE.md](AXIOM01_STYLING_GUIDE.md) |

---

## 💡 Quick Start Examples

### Buttons
```html
<!-- Size variants -->
<button class="sm">Small</button>
<button>Default</button>
<button class="lg">Large</button>
<button class="xl">Extra Large</button>

<!-- Type variants -->
<button class="primary">Primary Action</button>
<button class="secondary">Secondary</button>
<button class="success">Success</button>
<button class="warning">Warning</button>
<button class="danger">Danger</button>
<button class="outline">Outline</button>
<button class="ghost">Ghost</button>

<!-- Special states -->
<button disabled>Disabled</button>
<button class="loading"><span class="spinner"></span> Loading...</button>
```

### Cards
```html
<!-- Basic Card -->
<article class="card">
  <header><h2>Card Title</h2></header>
  <div>Your content here</div>
</article>

<!-- Card with Footer (Elevated Variant) -->
<article class="card elevated">
  <header>
    <h3>Dashboard</h3>
  </header>
  <div>
    <p>Your main content</p>
  </div>
  <footer>
    <button class="secondary">Cancel</button>
    <button class="success">Save</button>
  </footer>
</article>

<!-- Card Variants -->
<div class="card">Default</div>
<div class="card outlined">Outlined</div>
<div class="card elevated">Elevated</div>
<div class="card filled">Filled</div>
<div class="card hover-lift">Hover Lift</div>
```

### Badges & Alerts
```html
<!-- Badges -->
<span class="badge">Default</span>
<span class="badge success">Active</span>
<span class="badge error">Error</span>

<!-- Alerts -->
<div class="alert success">
  <i class="icon">✓</i>
  <div>Success message!</div>
</div>

<div class="alert warning dismissible">
  <div>Warning: please review this</div>
  <button class="close">×</button>
</div>
```

### Using Design Tokens
```css
.my-component {
  /* Colors */
  background: var(--a-color-primary);
  color: var(--a-color-on-primary);
  border: 2px solid var(--a-color-primary-container);

  /* Spacing */
  padding: var(--a-space-l);
  margin: var(--a-space-m);
  gap: var(--a-space-s);

  /* Typography */
  font-family: var(--a-font-family-sans);
  font-size: var(--a-font-size-lg);
  line-height: var(--a-line-height-relaxed);

  /* Effects */
  border-radius: var(--a-border-radius-base);
  box-shadow: var(--a-shadow-md);
  transition: all var(--a-transition-base);
}
```

---

## 🎯 Core Philosophy

### 1. **Semantic HTML First**
Write clean, meaningful HTML. One class per component. Let descendants inherit styles from structure.

### 2. **No BEM, No Utility Stacking**
- ✅ `.button.lg.success` (separate classes)
- ❌ `.button--lg--success` (BEM nesting)
- ❌ `.flex .items-center .gap-m .p-l` (utility chaos)

### 3. **CSS Variables for Everything**
Change one variable, update your entire site. No hunting through utility classes.

### 4. **Accessibility by Default**
WCAG 2.1 AA compliance out of the box. Built into every component.

### 5. **Dark Mode Included**
Automatic detection. Smooth transitions. Zero extra work.

---

## 📊 Bundle Sizes

| Asset | Size (gzipped) | Notes |
|-------|---|---|
| **CSS** | 13.3 KB | Full framework with all 67 components |
| **JavaScript** | 1.0 KB | Optional component loader |
| **Total** | 14.3 KB | Production-ready, zero dependencies |

For comparison:
- Bootstrap: ~150 KB CSS
- Tailwind: ~40-80 KB CSS (depends on PurgeCSS config)
- Axiom01: **40 KB CSS + all components + dark mode + animations**

---

## 🔄 100% Backward Compatible

Upgrading from v1.x? No breaking changes. All existing code continues to work. New features are completely optional.

```javascript
npm update axiom01
// Your site works unchanged
// New features available to use immediately
```

---

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| iOS Safari | 14+ | ✅ Full |
| Android | 90+ | ✅ Full |

---

## ♿ Accessibility Commitment

Axiom01 is built with accessibility at its core, not as an afterthought:

- ✅ **Semantic HTML** — Meaningful structure for screen readers
- ✅ **Keyboard Navigation** — All components fully keyboard accessible
- ✅ **Focus Management** — Clear, visible focus indicators
- ✅ **Color Contrast** — WCAG AA (4.5:1) minimum on all text
- ✅ **Motion Respect** — Honors `prefers-reduced-motion`
- ✅ **ARIA Attributes** — Proper labels and roles for assistive tech
- ✅ **Touch Targets** — Minimum 32px for mobile interaction

**Tested and verified by:** Screen readers (NVDA, JAWS), voice control (Voice Control), keyboard navigation, automated accessibility scanners

---

## 🤝 Contributing

Contributions are welcome! Please ensure:

1. ✅ **Semantic HTML** — One root class per component
2. ✅ **No BEM** — No `__` or `--` naming
3. ✅ **WCAG 2.1 AA** — All components accessibility tested
4. ✅ **Mobile-First** — Responsive from 320px up
5. ✅ **CSS Variables** — Use design tokens, no hardcoded values
6. ✅ **Zero Dependencies** — Pure CSS and vanilla JS only

See [AXIOM01_STYLING_GUIDE.md](AXIOM01_STYLING_GUIDE.md) for detailed contribution guidelines.

---

## 📄 License

MIT License — Use Axiom01 in any project, commercial or personal.

```
Copyright (c) 2024 Sol Roth Media

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

[Full License](LICENSE)

---

## 🙋 Support & Community

- 📖 **Documentation**: [axiom01.com](https://axiom01.com)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/Sol-Roth-Media/axiom01/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Sol-Roth-Media/axiom01/discussions)
- 📦 **npm**: [@axiom01](https://www.npmjs.com/package/axiom01)

---

## 📈 Who's Using Axiom01?

Axiom01 is powering beautiful, semantic websites for developers and teams who value clean code:

- [solroth.com](https://solroth.com) — Personal portfolio
- [unruled.org](https://unruled.org) — Open-source projects

Building with Axiom01? [Let us know!](https://github.com/Sol-Roth-Media/axiom01/discussions)

---

## 🎯 Version Info

| Property | Value |
|----------|-------|
| **Latest** | 2.0.0 |
| **Released** | January 20, 2025 |
| **License** | MIT |
| **Bundle Size** | 13.3 KB CSS + 1.0 KB JS (gzipped) |

---

## Quick Links

- 🚀 **Get Started**: [Quick Start Examples](#quick-start-examples) above
- 📚 **Full Docs**: [axiom01.com](https://axiom01.com)
- 🔗 **npm**: [npmjs.com/package/axiom01](https://www.npmjs.com/package/axiom01)
- 💾 **GitHub**: [github.com/Sol-Roth-Media/axiom01](https://github.com/Sol-Roth-Media/axiom01)
- 🎨 **Live Demo**: [axiom01.com/demo](https://axiom01.com)

---

**Made with ❤️ for developers who believe in clean code, semantic HTML, and accessible design.**

---

### About

**Axiom01** is created by [Sol Roth](https://www.solroth.com). Licensed under MIT, open source and free to use.

*Axiom01 — The semantic-first UI framework.*
