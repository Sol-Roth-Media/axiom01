# @axiom01/core

> Ultra-lightweight semantic-first design system with zero class bloat ($D_c \le 1$).

Axiom01 is the antidote to utility class chaos. It delivers mathematical design tokens, native semantic HTML element styling, and core component primitives in an ultra-compact ~14KB footprint.

---

## Core Principles

1. **Minimal Class Density ($D_c \le 1$)**: At most one class per component on the root element.
2. **Direct Element Targeting**: We style `<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`, `<article>`, `<button>`, `<h3>`, `<p>`, `<small>`, and `<progress>` directly.
3. **Zero BEM & Zero Dashed Classes**: No artificial `axiom-*` prefixes or `*-header` / `*-footer` suffixes.
4. **Fluid Mathematical Scaling**: Continuous spacing and typography driven by OKLCH color spaces and CSS `clamp()`.

---

## Quick Start

```bash
npm install @axiom01/core
```

```html
<link rel="stylesheet" href="node_modules/@axiom01/core/css/axiom-core.min.css">
```

Or via CDN:
```html
<link rel="stylesheet" href="https://sol-roth-media.github.io/axiom01/css/axiom-core.min.css">
```

---

## Example: Pure Semantic HTML

```html
<header class="main">
  <a class="brand" href="/">
    <span>⚡</span>
    <strong>Axiom01 Core</strong>
  </a>
  <nav>
    <a href="/docs">Docs</a>
    <button class="primary sm">Get Started</button>
  </nav>
</header>

<main>
  <article class="card">
    <header>
      <h3>Zero Utility Chaos</h3>
      <span class="badge primary">Fast</span>
    </header>
    <p>Axiom styles native semantic HTML elements using structural order and mathematical tokens.</p>
    <footer>
      <button class="primary">Explore</button>
    </footer>
  </article>
</main>
```

---

## License
MIT © Sol Roth Media
