# Axiom01 v2.1.2 — The Semantic-First UI Framework

> **Build beautiful, accessible websites with clean HTML and minimal CSS.** Stop wrestling with utility classes and BEM naming conventions. Axiom01 lets you write semantic HTML and handles the styling beautifully.

[![npm version](https://img.shields.io/npm/v/axiom01.svg?color=2563eb)](https://www.npmjs.com/package/axiom01)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CSS Bundle Size](https://img.shields.io/badge/CSS-13.3KB%20gzipped-brightgreen.svg)]()
[![Accessibility: WCAG 2.1 AA](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-blue.svg)]()
[![JavaScript-Free](https://img.shields.io/badge/JavaScript-Optional-ff69b4.svg)]()
[![Fully Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-blueviolet.svg)]()

---

## 🎯 Why Choose Axiom01?

Most CSS frameworks force you to choose between **clean code** and **beautiful design**. You write markup cluttered with utility classes, or you're locked into rigid component structures. Axiom01 solves this.

### The Axiom01 Difference

Write **semantic HTML**, and let CSS variables handle the design beautifully.

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

<!-- Compare to other frameworks... -->
<!-- Utility classes: 20+ classes per element -->
<!-- BEM naming: .card__header, .card--elevated, etc. -->
```

**One class per component. That's it.**

- ✅ **Minimal markup** — One semantic class per element
- ✅ **CSS variables** — Change a variable, update your entire site
- ✅ **Dark mode included** — Automatic theme switching
- ✅ **Fully accessible** — WCAG 2.1 AA compliant
- ✅ **13.3 KB** — All 67 components included
- ✅ **Zero dependencies** — Pure CSS and optional vanilla JS

---

## ✨ What You Get

### 🎨 Professional Design System
- **149 Design Tokens** — Colors, spacing, typography, animations, shadows, borders
- **Dark Mode Built-In** — Automatic theme detection with smooth transitions
- **Semantic Color System** — Primary, secondary, success, warning, error, info
- **6 Responsive Breakpoints** — Mobile-first from 320px to 1400px+
- **CSS Variables for Everything** — One variable, update your entire site

### 🧩 67 Production-Ready Components
- **Button** (4 sizes, 7 variants, all states)
- **Card** (5 variants with semantic structure)
- **Badge** (6 colors, 3 sizes)
- **Alert** (4 types, dismissible option)
- **Form Elements** (inputs, selects, textareas)
- **Navigation** (navbar, breadcrumbs, pagination)
- **Tables** (responsive, sortable)
- **Modal / Dialog** (accessible, interactive)
- **Accordion** (keyboard accessible)
- **Tabs** (semantic structure)
- **Hero** (full-width with gradient support)
- **Grid / Layout** (flexible, responsive)
- **And 55+ More** — Everything you need for production

### 🎬 20+ GPU-Accelerated Animations
- `fade-in`, `slide-up`, `slide-down`, `bounce`, `pulse`, `spin`, `grow`
- Respects `prefers-reduced-motion` for accessibility
- Tuned for 60fps performance
- Timing: 150ms (fast), 300ms (default), 500ms (slow)

### ♿ Accessibility First (WCAG 2.1 Level AA)
- ✅ **Semantic HTML** — Proper heading hierarchy, meaningful elements
- ✅ **Keyboard Navigation** — Every component fully keyboard accessible
- ✅ **Focus Management** — Clear, visible focus indicators
- ✅ **Color Contrast** — 4.5:1 minimum on all text
- ✅ **Screen Readers** — Proper ARIA attributes and labels
- ✅ **Motion Preference** — Respects `prefers-reduced-motion`
- ✅ **Touch Friendly** — 32px+ minimum touch targets
- ✅ **Tested** — Verified with NVDA, JAWS, Voice Control

### 📱 Fully Responsive
- Mobile-first approach (320px up)
- 6 breakpoints for all device sizes
- Flexible grid and layout systems
- Touch-optimized interactions
- No media query hacks

### 🚀 Performance Optimized
- **13.3 KB CSS (gzipped)** — All 67 components included
- **1.0 KB JavaScript (gzipped)** — Optional component loader
- **14.3 KB Total** — Production-ready, zero dependencies
- **100% Pure CSS** — No build tools required

**For comparison:**
- Bootstrap: ~150 KB CSS
- Tailwind: ~40-80 KB CSS (depends on PurgeCSS)
- Axiom01: **13.3 KB CSS with MORE components**

---

## 🚀 Get Started in 30 Seconds

### Option 1: CDN (Fastest — No Build Tools)
```html
<link rel="stylesheet" href="https://unpkg.com/axiom01@2.1.2/css/axiom.min.css">
```

Then use components in your HTML:
```html
<button class="primary lg">Click Me</button>
<div class="card elevated">Your content here</div>
```

**✨ Done.** Works immediately. No npm, no build step, no configuration.

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

All packages include:
- ✅ Minified CSS for production
- ✅ Source CSS maps for development
- ✅ CSS variables documentation
- ✅ Component examples
- ✅ MIT License

---

## 💡 Quick Start Examples

### Buttons (All Variants)
```html
<!-- Sizes -->
<button class="sm">Small</button>
<button>Medium (default)</button>
<button class="lg">Large</button>
<button class="xl">Extra Large</button>

<!-- Types -->
<button class="primary">Primary Action</button>
<button class="secondary">Secondary</button>
<button class="success">Success</button>
<button class="warning">Warning</button>
<button class="error">Error</button>
<button class="outline">Outline Style</button>
<button class="ghost">Ghost Style</button>

<!-- States -->
<button disabled>Disabled</button>
<button class="loading"><span></span> Loading...</button>

<!-- Usage in forms -->
<form>
  <label>Email</label>
  <input type="email" placeholder="user@example.com">
  <button type="submit" class="primary">Send</button>
</form>
```

### Cards (All Variants)
```html
<!-- Basic Card -->
<article class="card">
  <header><h3>Title</h3></header>
  <div>Your content here</div>
</article>

<!-- Elevated Card (with shadow) -->
<article class="card elevated">
  <header><h3>Dashboard</h3></header>
  <div>Main content</div>
  <footer>
    <button class="secondary">Cancel</button>
    <button class="success">Save</button>
  </footer>
</article>

<!-- Outlined Card -->
<article class="card outlined">
  <div>Content with border instead of shadow</div>
</article>

<!-- Card Grid (Responsive) -->
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
  <article class="card">Card 1</article>
  <article class="card">Card 2</article>
  <article class="card">Card 3</article>
</div>
```

### Forms & Inputs
```html
<form>
  <!-- Text Input -->
  <div>
    <label for="name">Full Name</label>
    <input type="text" id="name" placeholder="John Doe">
  </div>

  <!-- Email Input -->
  <div>
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="user@example.com">
  </div>

  <!-- Select Dropdown -->
  <div>
    <label for="category">Category</label>
    <select id="category">
      <option>Choose...</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
  </div>

  <!-- Textarea -->
  <div>
    <label for="message">Message</label>
    <textarea id="message" rows="4"></textarea>
  </div>

  <!-- Checkbox -->
  <label>
    <input type="checkbox"> I agree to the terms
  </label>

  <!-- Radio -->
  <label>
    <input type="radio" name="choice"> Option A
  </label>
  <label>
    <input type="radio" name="choice"> Option B
  </label>

  <!-- Submit -->
  <button type="submit" class="primary lg">Send</button>
</form>
```

### Alerts & Badges
```html
<!-- Success Alert -->
<div class="alert success">
  <strong>Success!</strong> Your changes have been saved.
</div>

<!-- Error Alert -->
<div class="alert error">
  <strong>Error!</strong> Something went wrong. Please try again.
</div>

<!-- Dismissible Alert -->
<div class="alert warning">
  <div>Warning: This action cannot be undone.</div>
  <button class="close">×</button>
</div>

<!-- Badges -->
<span class="badge">Default</span>
<span class="badge success">Active</span>
<span class="badge error">Error</span>
<span class="badge warning">Warning</span>
```

### Using CSS Variables
```css
.my-component {
  /* Colors */
  background: var(--a-color-primary);
  color: var(--a-color-on-primary);
  border: 2px solid var(--a-color-primary-container);

  /* Spacing */
  padding: var(--a-space-lg);
  margin: var(--a-space-md);
  gap: var(--a-space-sm);

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
Write clean, meaningful HTML. One class per component. Let descendants inherit styles.

### 2. **No BEM, No Utility Chaos**
- ✅ `.button.lg.success` (separate classes)
- ❌ `.button--lg--success` (BEM naming)
- ❌ `.flex .items-center .gap-md .p-lg` (utility stacking)

### 3. **CSS Variables for Everything**
Change one variable, update your entire site. No hunting through utility classes.

### 4. **Accessibility by Default**
WCAG 2.1 AA compliance out of the box. Built into every component.

### 5. **Dark Mode Included**
Automatic detection. Smooth transitions. Zero extra work.

---

## 📚 Documentation

| Resource | Purpose |
|----------|---------|
| 📖 **Live Demo** | [axiom01.com](https://axiom01.com) |
| 🎨 **Component Docs** | Component reference and examples |
| 🎬 **Animations** | Animation classes and effects |
| 🎨 **Design Tokens** | CSS variables and values |
| 🛠 **Utilities** | Helper classes |
| 💾 **GitHub** | [github.com/Sol-Roth-Media/axiom01](https://github.com/Sol-Roth-Media/axiom01) |

---

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| iOS Safari | 14+ | ✅ Full |
| Android Chrome | 90+ | ✅ Full |

---

## 📊 Bundle Sizes (Comparison)

| Framework | CSS | JS | Total (gzipped) |
|-----------|-----|--|----|
| **Axiom01** | 13.3 KB | 1.0 KB | **14.3 KB** |
| Bootstrap | 150 KB | 50 KB | 200 KB |
| Tailwind | 40-80 KB | 5 KB | 45-85 KB |
| Foundation | 120 KB | 80 KB | 200 KB |

**Axiom01 includes 67 components, dark mode, animations, and WCAG AA compliance — all in 14.3 KB.**

---

## 🎓 Philosophy & Best Practices

### Why Semantic HTML?
```html
<!-- ❌ Not semantic -->
<div class="flex items-center gap-4 p-4 bg-white border rounded">
  <div class="w-16 h-16 bg-gray-300 rounded"></div>
  <div>
    <div class="text-lg font-bold">Title</div>
    <div class="text-sm text-gray-600">Description</div>
  </div>
</div>

<!-- ✅ Semantic with Axiom01 -->
<article class="card">
  <div><!-- Meaningful structure --></div>
</article>
```

### Why CSS Variables?
```css
/* ❌ Scattered hardcoded values */
.button-primary { background: #2563eb; }
.card-header { background: #2563eb; }
.link { color: #2563eb; }
.badge { background: #2563eb; }

/* ✅ Single source of truth */
:root {
  --a-color-primary: #2563eb;
}
.button-primary { background: var(--a-color-primary); }
.card-header { background: var(--a-color-primary); }
.link { color: var(--a-color-primary); }
.badge { background: var(--a-color-primary); }
/* Change once, update everywhere */
```

---

## 🤝 Contributing

Contributions welcome! Please ensure:

- ✅ Semantic HTML — One root class per component
- ✅ CSS Variables — Use design tokens, no hardcoded values
- ✅ Accessibility — WCAG 2.1 AA compliance
- ✅ Mobile-First — Responsive from 320px
- ✅ Dark Mode — Automatic theme support
- ✅ Performance — No unnecessary code

See [AXIOM01_STYLING_GUIDE.md](AXIOM01_STYLING_GUIDE.md) in the repository for detailed guidelines.

---

## 📄 License

MIT License — Free for commercial and personal use.

```
Copyright (c) 2024 Sol Roth Media

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software.
```

See [LICENSE](LICENSE) for full details.

---

## 🎯 What's New in v2.1.2

- ✅ Documentation cleanup and updates
- ✅ Enhanced README for better NPM visibility
- ✅ Improved component examples
- ✅ Better accessibility documentation
- ✅ Updated bundle size benchmarks
- ✅ Streamlined contribution guidelines

### Previous Version (v2.1.1)
- ✅ Dark mode support
- ✅ 67 components
- ✅ 20+ animations
- ✅ WCAG 2.1 AA compliance
- ✅ Responsive design system

---

## 🙋 Support & Community

- 📖 **Documentation**: [axiom01.com](https://axiom01.com)
- 🐛 **Report Bugs**: [GitHub Issues](https://github.com/Sol-Roth-Media/axiom01/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Sol-Roth-Media/axiom01/discussions)
- 📦 **NPM Package**: [@axiom01](https://www.npmjs.com/package/axiom01)

---

## 📈 Stats

| Metric | Value |
|--------|-------|
| **Components** | 67 |
| **Design Tokens** | 149 |
| **Animations** | 20+ |
| **CSS Bundle** | 13.3 KB (gzipped) |
| **JS Bundle** | 1.0 KB (gzipped) |
| **Accessibility** | WCAG 2.1 AA |
| **Browser Support** | Latest 2 versions |
| **License** | MIT (Free) |
| **Dependencies** | None |

---

## 🚀 Ready to Build?

```bash
# Install via npm
npm install axiom01

# Or use the CDN
# <link rel="stylesheet" href="https://unpkg.com/axiom01@2.1.2/css/axiom.min.css">

# Start building semantic HTML
<button class="primary">Get Started</button>
```

**Made with ❤️ for developers who believe in clean code, semantic HTML, and accessible design.**

---

**Axiom01** — *The semantic-first UI framework.*

*Built by [Sol Roth Media](https://solroth.com). Licensed under MIT. Open source and free to use.*
