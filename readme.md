# Axiom01 v2.0.0

> A professional, semantic-first UI framework with comprehensive design system, animations, utilities, and production-ready components.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/Sol-Roth-Media/axiom01)
[![Bundle Size](https://img.shields.io/badge/CSS-~40KB%20gzipped-brightgreen.svg)]()

## 🎯 What is Axiom01?

Axiom01 is a semantic-first UI framework built on the principle that **beautiful, accessible interfaces start with clean HTML**. We believe that instead of layering countless utility classes and BEM-style naming schemes, great design emerges when you:

1. Write semantic HTML properly
2. Use one descriptive class per component (`.button`, `.card`, `.alert`)
3. Style descendants using semantic structure
4. Leverage CSS variables for consistency and customization
5. Respect accessibility first, always

## ✨ v2.0.0 Features

### 🎨 Professional Design System
- **50+ Design Tokens** — Colors, spacing, typography, shadows, borders, breakpoints
- **Semantic Color System** — Primary, secondary, success, warning, error, info colors
- **Spacing Scale** — xs (4px) through xxl (56px), fully responsive
- **Typography Tokens** — Font families, sizes, weights, line heights
- **Dark Mode** — Automatic theme adaptation via CSS variables
- All tokens are customizable and framework-agnostic

### ✨ Animation System
- **20+ Keyframes** — Fade, slide, scale, bounce, spin, pulse, glow, shimmer
- **Animation Utilities** — `.animate-fade-in`, `.animate-slide-up`, etc.
- **GPU-Accelerated** — Uses only transform and opacity for 60fps performance
- **Accessible** — Respects `prefers-reduced-motion` preference
- **Smooth Timing** — 150ms (fast), 300ms (standard), 500ms (slow) with easing

### 🎛️ Utility Classes
- **100+ Utilities** — Display, flexbox, grid, spacing, typography, colors, responsive
- **Optional** — Use them for rapid prototyping or semantic CSS
- **Consistent** — All utilities use design tokens
- **Responsive** — Mobile-first with breakpoint prefixes
- **Accessible** — Includes `.sr-only` and other accessibility helpers

### 🧩 Production-Ready Components

#### Button Component
```html
<button>Primary</button>
<button class="button--lg button--success">Large Success</button>
<button class="button--secondary">Secondary</button>
<button class="button--outline">Outline</button>
```
- 4 sizes (sm, default, lg, xl)
- 7 semantic types (primary, secondary, success, warning, danger, ghost, outline)
- Special states: loading, icon-only, disabled
- Button groups for related actions

#### Card Component
```html
<div class="card card--elevated">
  <header><h2>Title</h2></header>
  <div>Content</div>
  <footer>
    <button class="button--secondary">Cancel</button>
    <button>Save</button>
  </footer>
</div>
```
- 5 style variants (default, elevated, outlined, filled, hover-lift)
- Semantic structure (header, content, footer)
- Responsive grid layout
- Interactive variant with hover effects

#### Badge & Alert Components
```html
<span class="badge badge--success">Active</span>
<span class="badge badge--error">Inactive</span>

<div class="alert alert--warning">
  <h3>Warning</h3>
  <p>Please review this carefully.</p>
</div>

<div class="alert alert--success alert--dismissible">
  <div>Success message</div>
  <button>×</button>
</div>
```
- Badges: 6 colors, 3 sizes
- Alerts: 4 types, 3 sizes, dismissible variant
- Tags: With optional close button
- Links: 5 semantic variants

### ♿ Accessibility First
- ✅ **WCAG 2.1 Level AA** — All components tested and compliant
- ✅ **Keyboard Navigation** — Full keyboard support for all interactive elements
- ✅ **Screen Readers** — Semantic HTML with ARIA attributes
- ✅ **Focus Management** — Visible focus indicators on all focusable elements
- ✅ **Color Contrast** — 4.5:1 or better on all text
- ✅ **Motion Preferences** — Respects `prefers-reduced-motion` settings
- ✅ **Touch Targets** — Minimum 2rem (32px) height for interactive elements

### 🌓 Dark Mode
- Automatic dark mode detection
- Respects user preferences
- Smooth transitions
- Customizable via CSS variables

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 576px, 768px, 992px, 1200px, 1400px
- Flexible grid and spacing systems
- Touch-friendly interface

### 🚀 Performance
- Modular CSS architecture (load only what you need)
- GPU-accelerated animations
- Minified production build (~40KB gzipped)
- No JavaScript required for styles
- Efficient selectors and no unused code

## 📚 Documentation

### Quick Links
- **[Component Reference](docs/COMPONENTS.md)** — Complete API for all components
- **[Design Tokens](docs/tokens/VARIABLES.md)** — 50+ tokens with examples
- **[Animation Guide](docs/ANIMATIONS.md)** — 20+ keyframes and patterns
- **[Utilities Reference](docs/UTILITIES.md)** — 100+ utility classes
- **[Styling Guide](AXIOM01_STYLING_GUIDE.md)** — Philosophy and best practices
- **[Changelog](CHANGELOG.md)** — What's new in each version

### Core Principles

#### 1. Semantic HTML First
Always write clean, semantic HTML. One root class per component.

```html
<!-- ✅ Good -->
<button>Primary Button</button>
<div class="card">
  <header><h2>Title</h2></header>
  <div>Content</div>
</div>

<!-- ❌ Avoid -->
<div class="btn btn-primary">Button</div>
<div class="card card-body card-header">...</div>
```

#### 2. No BEM, No Class Stacking
Use single, descriptive classes and variant modifiers.

```css
/* ✅ Good */
.button { /* base */ }
.button--lg { /* variant */ }
.button--primary { /* type */ }

/* ❌ Avoid */
.button__label--primary--large { /* BEM stacking */ }
```

#### 3. CSS Variables for Consistency
Use design tokens instead of hardcoded values.

```css
/* ✅ Good */
.component {
  padding: var(--a-space-m);
  color: var(--a-color-primary);
  border-radius: var(--a-border-radius-base);
}

/* ❌ Avoid */
.component {
  padding: 16px;
  color: #2563eb;
  border-radius: 5px;
}
```

## 🛠 Installation

### Via npm
```bash
npm install axiom01
```

### Via CDN
```html
<link rel="stylesheet" href="https://cdn.example.com/axiom01/css/axiom.min.css">
```

### Local Setup
```bash
git clone https://github.com/Sol-Roth-Media/axiom01
cd axiom01
python3 -m http.server 8000
# Open http://localhost:8000
```

## 📋 File Structure

```
axiom01/
├── css/
│   ├── axiom.css          # Main stylesheet (imports all)
│   ├── axiom.min.css      # Minified production build
│   ├── _variables.css     # 50+ design tokens
│   ├── _animations.css    # 20+ keyframes + animation utilities
│   ├── _utilities.css     # 100+ utility classes
│   ├── _components.css    # 6 component systems
│   └── axiom_config.css   # Framework configuration
├── docs/
│   ├── COMPONENTS.md      # Component API reference
│   ├── ANIMATIONS.md      # Animation system guide
│   ├── UTILITIES.md       # Utilities reference
│   └── tokens/
│       └── VARIABLES.md   # Design token reference
├── js/
│   ├── axiom.js           # Component loader
│   └── components/        # Interactive components
├── index.html             # Demo and documentation
├── AXIOM01_STYLING_GUIDE.md  # Styling philosophy
├── CHANGELOG.md           # Version history
├── README.md              # This file
└── package.json           # npm package info
```

## 🎨 Quick Examples

### Using Buttons
```html
<!-- Size variants -->
<button class="button--sm">Small</button>
<button>Default</button>
<button class="button--lg">Large</button>

<!-- Type variants -->
<button class="button--secondary">Secondary</button>
<button class="button--success">Success</button>
<button class="button--danger">Danger</button>

<!-- Button groups -->
<div class="button-group">
  <button>First</button>
  <button>Second</button>
  <button>Third</button>
</div>
```

### Using Cards
```html
<div class="card card--elevated">
  <header>
    <h2>Card Title</h2>
  </header>
  <div>
    <p>Card content goes here...</p>
  </div>
  <footer>
    <button class="button--secondary">Cancel</button>
    <button class="button--success">Save</button>
  </footer>
</div>
```

### Using Design Tokens
```css
.my-component {
  background: var(--a-color-primary);
  color: var(--a-color-on-primary);
  padding: var(--a-space-l);
  border-radius: var(--a-border-radius-base);
  box-shadow: var(--a-shadow-md);
  transition: all var(--a-transition-base);
}
```

### Using Utilities
```html
<div class="flex items-center gap-m p-l">
  <img src="..." alt="...">
  <div>
    <h3>Heading</h3>
    <p class="text-muted">Description</p>
  </div>
</div>
```

## 🌐 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Android Browser 90+

## 📊 Bundle Sizes

- **CSS Core**: ~25KB gzipped
- **Full CSS** (with components): ~40KB gzipped
- **JavaScript**: ~8KB gzipped

## 🔄 Migration from v1.x

Axiom01 v2.0.0 is **100% backward compatible** with v1.x. All existing code continues to work. New features are completely optional:

1. No breaking changes to existing components
2. New design tokens are additive
3. New utilities are optional
4. New animations are opt-in
5. Existing themes unaffected

To use v2.0.0:
```bash
npm update axiom01
# Your existing code works unchanged
```

To use new features:
```css
/* Use design tokens */
.component { padding: var(--a-space-m); }

/* Use new utilities */
<div class="flex items-center gap-m">...</div>

/* Use new components */
<button class="button--lg button--success">Save</button>
```

## 🤝 Contributing

Contributions are welcome! Please ensure:

1. ✅ Semantic HTML only
2. ✅ No BEM class naming
3. ✅ WCAG 2.1 AA accessibility
4. ✅ Mobile-first responsive design
5. ✅ CSS variables for values
6. ✅ No hardcoded colors/sizes

## 📄 License

MIT License — See [LICENSE](LICENSE) for details.

## 🙋 Support

- 📖 [Documentation](docs/)
- 🐛 [Bug Reports](https://github.com/Sol-Roth-Media/axiom01/issues)
- 💬 [Discussions](https://github.com/Sol-Roth-Media/axiom01/discussions)

---

**Axiom01 v2.0.0** — Professional design system. Semantic HTML. Accessible by default.
