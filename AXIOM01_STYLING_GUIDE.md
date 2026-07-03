# Axiom01 Styling Guide

## Table of Contents
1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Accessibility](#accessibility)
7. [Dark Mode](#dark-mode)
8. [Best Practices](#best-practices)

---

## Design Philosophy

Axiom01 embraces the **Semantic Web** — where markup is meaningful, styles follow content, not the reverse, and every component serves a clear purpose.

### Core Principles

- **Semantic HTML First**: Use proper semantic elements (`<button>`, `<nav>`, `<article>`, etc.)
- **CSS Variables**: Leverage CSS custom properties for theming and consistency
- **Accessible by Default**: WCAG 2.1 AA compliance built into every component
- **Responsive Design**: Mobile-first, scales to any screen size
- **Minimal Dependencies**: Pure HTML, CSS, and SVG (no external icon libraries)
- **Dark Mode Support**: Full theme toggle support built-in

---

## Color System

Axiom01 provides a comprehensive, semantic color palette with CSS variables for easy theming.

### Primary Color Palette

```css
/* Light Mode */
--a-color-primary: #0066cc;           /* Primary blue */
--a-color-primary-container: #e6f2ff; /* Light blue container */
--a-color-on-primary: #ffffff;        /* Text on primary */

/* Secondary Color */
--a-color-secondary: #666666;         /* Neutral gray */
--a-color-secondary-container: #f5f5f5;
--a-color-on-secondary: #ffffff;

/* Tertiary Color */
--a-color-tertiary: #00a8a8;          /* Teal accent */
--a-color-tertiary-container: #e0f7f7;
--a-color-on-tertiary: #ffffff;

/* Error & Status Colors */
--a-color-error: #d32f2f;             /* Error red */
--a-color-error-container: #ffebee;
--a-color-warning: #f57c00;           /* Warning orange */
--a-color-success: #388e3c;           /* Success green */
--a-color-info: #1976d2;              /* Info blue */

/* Neutral Colors */
--a-color-background: #ffffff;        /* Main background */
--a-color-surface: #f9f9f9;           /* Secondary surface */
--a-color-surface-variant: #f0f0f0;   /* Tertiary surface */
--a-color-outline: #cccccc;           /* Borders */
--a-color-outline-variant: #e0e0e0;   /* Subtle borders */

/* Text Colors */
--a-color-text: #1a1a1a;              /* Primary text */
--a-color-text-secondary: #666666;    /* Secondary text */
--a-color-text-muted: #999999;        /* Muted text */
--a-color-text-disabled: #cccccc;     /* Disabled text */
```

### Dark Mode Adjustments

In dark mode, all colors are inverted automatically:

```css
[data-theme="dark"] {
  --a-color-background: #1a1a1a;
  --a-color-surface: #2a2a2a;
  --a-color-text: #ffffff;
  --a-color-text-secondary: #cccccc;
  /* ... other dark mode colors */
}
```

### Using Colors in Your Components

```html
<!-- Using CSS variables -->
<div style="background: var(--a-color-primary-container); color: var(--a-color-primary);">
  Primary themed content
</div>

<!-- Status colors -->
<span style="color: var(--a-color-success);">✓ Success</span>
<span style="color: var(--a-color-error);">✗ Error</span>
<span style="color: var(--a-color-warning);">⚠ Warning</span>
```

---

## Typography

Axiom01 uses a carefully selected font stack with multiple font families optimized for different uses.

### Font Families

```css
/* Primary UI Font - Clean, modern */
--a-font-family-base: 'Inter', system-ui, -apple-system, sans-serif;

/* Serif for Editorial Content */
--a-font-family-serif: 'Lora', Georgia, serif;

/* Monospace for Code */
--a-font-family-mono: 'JetBrains Mono', 'Courier New', monospace;
```

### Font Sizes

```css
--a-font-size-xs: 0.75rem;    /* 12px */
--a-font-size-sm: 0.875rem;   /* 14px */
--a-font-size-base: 1rem;     /* 16px - standard body */
--a-font-size-lg: 1.125rem;   /* 18px */
--a-font-size-xl: 1.25rem;    /* 20px */
--a-font-size-2xl: 1.5rem;    /* 24px */
--a-font-size-3xl: 1.875rem;  /* 30px */
--a-font-size-4xl: 2.25rem;   /* 36px */
--a-font-size-5xl: 3rem;      /* 48px */
--a-font-size-6xl: 3.75rem;   /* 60px */
```

### Font Weights

```css
--a-font-weight-light: 300;
--a-font-weight-normal: 400;
--a-font-weight-medium: 500;
--a-font-weight-semibold: 600;
--a-font-weight-bold: 700;
--a-font-weight-extrabold: 900;
```

### Line Heights

```css
--a-line-height-tight: 1.2;      /* Headings */
--a-line-height-normal: 1.5;     /* Body text (default) */
--a-line-height-relaxed: 1.75;   /* Readable paragraphs */
--a-line-height-loose: 2;        /* Extra spacing for accessibility */
```

### Heading Scale

```css
h1 { font-size: var(--a-font-size-4xl); font-weight: var(--a-font-weight-bold); }
h2 { font-size: var(--a-font-size-3xl); font-weight: var(--a-font-weight-bold); }
h3 { font-size: var(--a-font-size-2xl); font-weight: var(--a-font-weight-semibold); }
h4 { font-size: var(--a-font-size-xl); font-weight: var(--a-font-weight-semibold); }
h5 { font-size: var(--a-font-size-lg); font-weight: var(--a-font-weight-semibold); }
h6 { font-size: var(--a-font-size-base); font-weight: var(--a-font-weight-bold); }
```

### Using Typography

```html
<!-- Semantic semantic elements with automatic styling -->
<h1>Page Title</h1>
<p>Body text uses default line height and font size.</p>

<!-- Override with CSS variables -->
<span style="font-size: var(--a-font-size-lg); font-weight: var(--a-font-weight-semibold);">
  Custom heading
</span>

<!-- Code blocks -->
<code style="font-family: var(--a-font-family-mono);">
  const x = 42;
</code>
```

---

## Spacing & Layout

Axiom01 uses a consistent 4px-based spacing system for predictable, harmonious layouts.

### Spacing Scale

```css
--a-space-xs: 0.25rem;   /* 4px */
--a-space-s: 0.5rem;     /* 8px */
--a-space-m: 1rem;       /* 16px - base unit */
--a-space-l: 1.5rem;     /* 24px */
--a-space-xl: 2rem;      /* 32px */
--a-space-2xl: 3rem;     /* 48px */
--a-space-3xl: 4rem;     /* 64px */
--a-space-4xl: 6rem;     /* 96px */
```

### Layout Containers

```css
--a-container-max-width: 1280px;      /* Max width for content */
--a-container-padding: var(--a-space-l); /* Responsive padding */
--a-container-gutter: var(--a-space-m);  /* Gap between columns */
```

### Border Radius

```css
--a-border-radius-sm: 0.25rem;  /* 4px - subtle */
--a-border-radius-md: 0.5rem;   /* 8px - standard */
--a-border-radius-lg: 0.75rem;  /* 12px - prominent */
--a-border-radius-xl: 1rem;     /* 16px - large buttons */
--a-border-radius-2xl: 1.5rem;  /* 24px - cards */
--a-border-radius-full: 9999px; /* Fully rounded (pills) */
```

### Breakpoints (Responsive Design)

```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### Grid System

```html
<!-- Flexible container -->
<div class="container">
  <div class="grid">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
    <div class="col">Column 3</div>
  </div>
</div>
```

---

## Components

### Button Component

```html
<!-- Primary button -->
<button class="primary">Primary Action</button>

<!-- Secondary button -->
<button class="secondary">Secondary Action</button>

<!-- Disabled state -->
<button class="primary" disabled>Disabled</button>

<!-- With icon -->
<button class="primary">
  <span class="axicon render" data-name="Check"></span>
  Save
</button>
```

### Alert Component

```html
<!-- Success alert -->
<div class="alert success">
  <span class="axicon render" data-name="Check-Circle"></span>
  Operation completed successfully!
</div>

<!-- Error alert -->
<div class="alert error">
  <span class="axicon render" data-name="Alert-Circle"></span>
  An error occurred. Please try again.
</div>

<!-- Warning alert -->
<div class="alert warning">
  <span class="axicon render" data-name="Alert-Triangle"></span>
  Please review before proceeding.
</div>
```

### Card Component

```html
<div class="card">
  <div class="card-header">
    <h3>Card Title</h3>
  </div>
  <div class="card-body">
    <p>Card content goes here.</p>
  </div>
  <div class="card-footer">
    <button class="secondary">Learn More</button>
  </div>
</div>
```

### Form Elements

```html
<!-- Text input - no extra classes needed -->
<label for="name">Full Name
  <input type="text" id="name" placeholder="Enter your name">
</label>

<!-- Select - semantic and unstyled -->
<label for="category">Category
  <select id="category">
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</label>

<!-- Checkbox -->
<label>
  <input type="checkbox" id="agree">
  I agree to the terms
</label>

<!-- Toggle Switch - one class on label -->
<label class="toggle-switch">
  <input type="checkbox" id="notifications">
  Enable Notifications
</label>
```

---

## Accessibility

### Semantic HTML

Always use semantic elements:

```html
<!-- Good -->
<nav aria-label="Main Navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<!-- Bad (divitis) -->
<div class="nav">
  <div class="list">
    <div class="item"><a href="/">Home</a></div>
  </div>
</div>
```

### ARIA Labels

```html
<!-- Icon-only button needs accessible name -->
<button aria-label="Close dialog">
  <span class="axicon render" data-name="X"></span>
</button>

<!-- Complex regions need labels -->
<nav aria-label="Main Navigation"></nav>

<!-- Current page indicator -->
<a href="/current-page" aria-current="page">Current Page</a>
```

### Color Contrast

- Text on background: Minimum 4.5:1 contrast ratio
- UI components: Minimum 3:1 contrast ratio
- Large text (18pt+): Minimum 3:1 contrast ratio

### Keyboard Navigation

All interactive elements should be keyboard accessible:

```html
<!-- Native buttons and links are keyboard accessible by default -->
<button>Click Me</button>
<a href="/">Link</a>

<!-- Custom interactive elements need tabindex -->
<div tabindex="0" role="button" onclick="doSomething()">
  Custom Button
</div>
```

### Focus Styles

Always maintain visible focus indicators:

```css
*:focus {
  outline: 2px solid var(--a-color-primary);
  outline-offset: 2px;
}
```

---

## Dark Mode

### Enabling Dark Mode

```html
<!-- Set data-theme attribute on html element -->
<html data-theme="light">  <!-- or "dark" -->
  <!-- content -->
</html>
```

### JavaScript Toggle

```javascript
// Toggle between light and dark
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

// Respect user's system preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-theme', 'dark');
}
```

### Colors Automatically Adapt

All colors defined in the CSS variable system automatically adjust for dark mode — no additional work needed if you use CSS variables!

```css
/* These automatically change in dark mode */
background: var(--a-color-background);
color: var(--a-color-text);
border-color: var(--a-color-outline);
```

---

## Best Practices

### 1. Use CSS Variables for Consistency

```css
/* Good - Consistent with design system */
padding: var(--a-space-m);
margin: var(--a-space-l);
color: var(--a-color-text);

/* Avoid - Hard-coded values break consistency */
padding: 20px;
margin: 30px;
color: #333;
```

### 2. Mobile-First Responsive Design

```css
/* Start with mobile styles */
.card {
  display: flex;
  flex-direction: column;
}

/* Add tablet+ enhancements */
@media (min-width: 768px) {
  .card {
    flex-direction: row;
  }
}
```

### 3. Use Semantic HTML

```html
<!-- Good -->
<main>
  <article>
    <h1>Article Title</h1>
    <p>Content...</p>
  </article>
</main>

<!-- Avoid -->
<div class="main">
  <div class="article">
    <div class="heading">Article Title</div>
    <div>Content...</div>
  </div>
</div>
```

### 4. Accessibility First

```html
<!-- Always provide context for interactive elements -->
<button aria-label="Close modal">✕</button>

<!-- Use proper heading hierarchy -->
<h1>Main Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
<!-- Don't skip levels: h1 → h3 is confusing -->

<!-- Associate labels with form inputs -->
<label for="email">Email Address</label>
<input id="email" type="email">
```

### 5. Performance Optimization

```css
/* Use CSS variables (no browser repaints) */
.button.active {
  background: var(--a-color-primary);
}

/* Minimize specificity */
.btn { /* Good */ }
.container .card .btn { /* Avoid - too specific */ }

/* Use transitions instead of animations when possible */
.button {
  transition: background-color var(--a-transition-base) var(--a-ease-out);
}
```

### 6. Component Reusability

```html
<!-- Create flexible, reusable components -->
<div class="card">
  <img src="..." alt="...">
  <h3>Card Title</h3>
  <p>Description</p>
  <button class="btn">Action</button>
</div>

<!-- Use CSS modifier classes for variations -->
<div class="card card-elevated">...</div>
<div class="card card-outlined">...</div>
```

### 7. Class Naming Policy

- Prefer semantic component classes and short dashed helpers.
- Avoid BEM-style `__` and `--` tokens in docs and public examples.
- If an internal exception is unavoidable, document it in `DEVELOPER.md` before release and schedule removal.

### 8. Code Samples Without Prism

Axiom01 now uses a framework-owned code-block enhancement instead of Prism/CDN dependencies.

```html
<pre>
  <code class="language-html">&lt;button class="primary"&gt;Save&lt;/button&gt;</code>
</pre>
```

The runtime `code-block` component adds language labels and copy-to-clipboard actions while preserving semantic `pre/code` markup.

---

## Component Checklist

When creating components, ensure:

- [ ] Semantic HTML structure
- [ ] Accessible (WCAG 2.1 AA)
- [ ] Keyboard navigation support
- [ ] Focus indicators visible
- [ ] ARIA labels where needed
- [ ] Works in light and dark modes
- [ ] Responsive design (mobile to desktop)
- [ ] Uses CSS variables for theming
- [ ] Proper spacing using design system
- [ ] Clear visual hierarchy
- [ ] Performance optimized
- [ ] Cross-browser compatible
- [ ] Code documented
- [ ] Live examples included

---

## Resources

- [Axiom01 Components](components-overview.html)
- [Color System](colors-advanced.html)
- [Typography Guide](typography-advanced.html)
- [Layout & Grid](layout-advanced.html)
- [Axicons Browser](axicons.html)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/)

---

**Last Updated**: 2025 | **Version**: 1.0 | **Status**: Complete
