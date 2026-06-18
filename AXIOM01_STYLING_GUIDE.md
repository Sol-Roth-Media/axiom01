# Axiom01 Styling Guide - Updated July 2025
*Comprehensive guide reflecting current implementation patterns*

This guide helps developers create beautiful, maintainable components using the Axiom01 UI framework's semantic-first philosophy with modern accessibility standards.

## 0. Design Token System

Axiom01 provides a comprehensive CSS variable system for consistent design implementation across all projects. These design tokens establish a single source of truth for colors, spacing, typography, animations, and more.

**Key Tokens:**
- **Colors**: Primary, secondary, semantic (success, warning, error, info), surface/text, grayscale
- **Spacing**: xs (4px), s (8px), m (14px), l (21px), xl (35px), xxl (56px)
- **Typography**: Font families, sizes, weights, line heights
- **Shadows**: Medium and large depth levels
- **Borders**: Radius variants (small, base, medium, large)
- **Breakpoints**: xs (480px), sm (576px), md (768px), lg (992px), xl (1200px), xxl (1400px)

**Get Started:**
- See [Design Token Reference](docs/tokens/VARIABLES.md) for complete token documentation
- All tokens are optional — use them to maintain consistency
- Dark mode support built-in via `[data-theme="dark"]` attribute

**Usage Example:**
```css
.component {
  padding: var(--a-space-m);
  background: var(--a-color-primary);
  color: var(--a-color-on-primary);
  border-radius: var(--a-border-radius-base);
}
```

---

## 1. Core Philosophy: Semantic Purity

Axiom01 is an HTML-centric framework. Your primary focus should always be on writing clean, semantic, and accessible HTML. The CSS is designed to style this semantic structure with minimal class-based intervention. **If you find yourself adding classes to every element, you are not following the Axiom01 philosophy.**

## 2. Class Naming Strategy: No BEM, No Utility Stacking

This is a foundational principle of Axiom01. We explicitly forbid complex, multi-part class names.

- **Component-Level Classes:** Assign a single, descriptive class to the root element of a component (e.g., `<article class="card">`, `<section class="hero">`, `<header class="main">`).
- **Descendant Styling:** Style child elements using descendant selectors based on the semantic structure. Avoid adding classes to every child.
- **Variant Classes:** Use single, adjective-like classes to modify a component's appearance or behavior (e.g., `<button class="primary">`, `<article class="card elevated">`). **Multiple separate classes, not hyphenated variants.**
- **Absolutely No BEM:** The Block__Element--Modifier syntax (e.g., `card__header--large` or `button--lg`) is strictly prohibited. It is verbose, couples the CSS to a rigid DOM structure, and violates our principle of semantic purity.

**Correct Implementation:**
```html
<!-- ✅ GOOD: Clean, semantic, and minimal -->
<section class="hero">
  <h1>Hero Title</h1>
  <p>A compelling subtitle.</p>
  <div class="actions">
    <button class="primary">Get Started</button>
    <button>Learn More</button>
  </div>
</section>
```
```css
/* ✅ GOOD: Styling semantic descendants */
.hero {
  padding: var(--a-space-xl);
  background: var(--a-color-surface-variant);
}

.hero h1 {
  font-size: var(--a-font-size-h1);
}

.hero .actions {
  margin-top: var(--a-space-l);
  display: flex;
  gap: var(--a-space-m);
}
```

## 3. The Cascading Spacing & Sizing Model

Axiom01 uses a cascading system of CSS variables to control spacing, padding, margins, and gaps. This allows for global control over the framework's rhythm and feel from a single source.

- **Base Unit:** The core of the system is `--a-space-unit` (typically `1rem`).
- **Tiered Variables:** All spacing values are derived from this base unit (e.g., `--a-space-s`, `--a-space-m`, `--a-space-l`).
- **Consistent Application:** Use these variables for all `padding`, `margin`, and `gap` properties. Do not use hardcoded pixel values.

**Example:**
```css
:root {
  --a-space-unit: 1rem;
  --a-space-xs:  calc(var(--a-space-unit) * 0.25); /* 4px */
  --a-space-s:   calc(var(--a-space-unit) * 0.5);  /* 8px */
  --a-space-m:   calc(var(--a-space-unit) * 1);    /* 16px */
  --a-space-l:   calc(var(--a-space-unit) * 1.5);  /* 24px */
  --a-space-xl:  calc(var(--a-space-unit) * 2.5);  /* 40px */
  --a-space-xxl: calc(var(--a-space-unit) * 4);    /* 64px */
}

.card {
  padding: var(--a-space-l);
  border-radius: var(--a-border-radius-medium);
}

.card header {
  margin-bottom: var(--a-space-m);
}
```

## 4. Accessibility (WCAG 2.1 AA)

Accessibility is not optional.
- **Semantic HTML:** Use elements like `<nav>`, `<main>`, `<article>`, and `<aside>` correctly.
- **ARIA Attributes:** Use appropriate ARIA roles, states, and properties, especially for interactive components.
- **Keyboard Navigation:** Ensure all interactive elements are focusable and operable via keyboard.
- **Focus Management:** Manage focus correctly for modals, drawers, and other dynamic UI.

## 5. Built-In Components (Session 3)

Axiom01 now includes a comprehensive component library with production-ready styles for buttons, cards, badges, tags, and alerts. All components use separate variant classes, never BEM-style hyphenated names.

### Button Component

Semantic buttons with multiple variants (each variant is a separate class):

```html
<!-- Size variants - use separate classes -->
<button class="button sm">Small</button>
<button class="button">Default</button>
<button class="button lg">Large</button>
<button class="button xl">Extra Large</button>

<!-- Type variants - use separate classes -->
<button class="button primary">Primary (default)</button>
<button class="button secondary">Secondary</button>
<button class="button success">Success</button>
<button class="button warning">Warning</button>
<button class="button danger">Danger</button>
<button class="button ghost">Ghost</button>
<button class="button outline">Outline</button>

<!-- Combining variants - multiple separate classes -->
<button class="button lg success">Large Success Button</button>
<button class="button sm secondary">Small Secondary Button</button>

<!-- Special states -->
<button class="button loading" disabled>Loading...</button>
<button class="button icon" aria-label="Close">✕</button>
```

**Features**:
- 4 sizes (sm, default, lg, xl)
- 7 type variants for different actions
- Loading and icon-only states
- Full keyboard accessibility
- Smooth hover and focus effects
- Touch-target safe (minimum 2rem height)

### Card Component

Container for grouped content:

```html
<article class="card elevated">
  <header>
    <h2>Card Title</h2>
  </header>
  <div>Main content section</div>
  <footer>
    <button class="button secondary">Cancel</button>
    <button class="button primary">Save</button>
  </footer>
</article>
```

**Card Variants** (separate classes):
- `.elevated` - Shadow-based depth
- `.outlined` - Border-based style
- `.filled` - Background color variant
- `.hover-lift` - Lifts on hover
- `.interactive` - Clickable with hover effect

**Features**:
- Semantic structure (header, content sections, footer)
- Responsive grid layout (`.card-grid`)
- Automatic dark mode support
- Interactive states for clickable cards

### Badge Component

Small labels for status and categories:

```html
<!-- Color variants - separate classes -->
<span class="badge primary">Primary</span>
<span class="badge success">Active</span>
<span class="badge warning">Pending</span>
<span class="badge error">Critical</span>
<span class="badge info">Info</span>
<span class="badge secondary">Secondary</span>

<!-- Size variants - separate classes -->
<span class="badge sm">Small</span>
<span class="badge">Default</span>
<span class="badge lg">Large</span>

<!-- Combining variants -->
<span class="badge success lg">Active (Large)</span>
```

**Features**:
- 6 semantic color variants (primary, secondary, success, warning, error, info)
- 3 sizes for flexibility
- Uppercase, bold, pill-shaped design
- Perfect for status indicators and tags
- Full accessibility with sufficient color contrast

### Alert Component

Prominent notifications and messages:

```html
<!-- Semantic types - separate classes -->
<div class="alert info">
  <h3>Information</h3>
  <p>This is an informational message.</p>
</div>

<div class="alert success dismissible">
  <div>
    <h3>Success</h3>
    <p>Your action completed successfully.</p>
  </div>
  <button aria-label="Dismiss">×</button>
</div>

<!-- Size variants - separate classes -->
<div class="alert warning sm">Compact warning</div>
<div class="alert error lg">Large error message</div>

<!-- Combining variants -->
<div class="alert success lg">Large success alert</div>
```

**Features**:
- 4 semantic types (info, success, warning, error)
- 3 sizes (sm, default, lg)
- Optional dismissible button
- Color-coded with left border indicator
- Structured with heading and message

### Tag Component

Flexible tags with optional removal:

```html
<span class="tag">Technology</span>

<span class="tag dismissible">
  Selected Item
  <button aria-label="Remove">×</button>
</span>
```

**Features**:
- Pill-shaped with rounded corners
- Optional dismissible variant
- Smooth hover effects
- Flexible sizing
- Perfect for tag clouds and filters

### Component Reference

For comprehensive component documentation, see:
- [Component Reference Guide](docs/COMPONENTS.md) - Complete API and examples
- [Design Tokens](docs/tokens/VARIABLES.md) - Customization through variables
- [Animations](docs/ANIMATIONS.md) - Animation system
- [Utilities](docs/UTILITIES.md) - Optional utility classes

---

**Updated:** January 20, 2025 - Refactored all components to use separate variant classes instead of BEM-style hyphenated names. This is a foundational principle of Axiom01.

## Empty State Component
```html
<!-- ✅ CORRECT: Minimal classes, semantic structure -->
<div class="empty-state search" role="status" aria-label="No search results">
  <div aria-hidden="true">🔍</div>
  <h3>No Results Found</h3>
  <p>We couldn't find anything matching your search terms.</p>
  <div>
    <button class="button secondary">Clear Search</button>
    <button class="button primary">Browse All Items</button>
  </div>
</div>
```

## Alert Component (Built-In)
```html
<!-- ✅ CORRECT: Semantic alert with proper structure -->
<div class="alert success">
  <h3>Success</h3>
  <p>Your changes have been saved successfully.</p>
</div>

<div class="alert error dismissible">
  <div>
    <h3>Error</h3>
    <p>Something went wrong. Please try again.</p>
  </div>
  <button aria-label="Dismiss">×</button>
</div>
```

## Card Component (Built-In)
```html
<!-- ✅ CORRECT: Semantic card structure -->
<article class="card elevated">
  <header>
    <h2>Product Details</h2>
  </header>
  <div>
    <p>Main product information goes here.</p>
  </div>
  <footer>
    <button class="button secondary">Cancel</button>
    <button class="button success">Add to Cart</button>
  </footer>
</article>
```

## Button Component (Built-In)
```html
<!-- ✅ CORRECT: Using semantic buttons with separate variant classes -->
<button class="button primary">Primary Action</button>
<button class="button secondary">Secondary</button>
<button class="button success">Confirm</button>
<button class="button danger">Delete</button>

<!-- ✅ CORRECT: Combining multiple variants -->
<button class="button lg success">Large Success Button</button>
<button class="button sm secondary">Small Secondary</button>

<div class="button-group">
  <button class="button primary">Save</button>
  <button class="button secondary">Cancel</button>
  <button class="button danger">Delete</button>
</div>
```

## Breadcrumb Navigation
```html
<!-- ✅ CORRECT: Semantic nav with minimal classes -->
<nav class="breadcrumb" aria-label="Breadcrumb navigation">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/dashboard">Dashboard</a></li>
    <li aria-current="page">Reports</li>
  </ol>
</nav>
```

## Modal Component
```html
<!-- ✅ CORRECT: Semantic structure, minimal classes -->
<div class="modal" id="basic-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-hidden="true">
  <div>
    <header>
      <h3 id="modal-title">Modal Title</h3>
      <button aria-label="Close modal">×</button>
    </header>
    <section>
      <p>Modal content goes here.</p>
    </section>
    <footer>
      <button class="button secondary">Cancel</button>
      <button class="button primary">Confirm</button>
    </footer>
  </div>
</div>
```

## Form Group Pattern
```html
<!-- ✅ CORRECT: Semantic fieldset with one root class -->
<fieldset class="form-group">
  <legend>Contact Preferences</legend>

  <label for="email">Email</label>
  <input id="email" type="email" required>

  <label for="frequency">Frequency</label>
  <select id="frequency">
    <option>Weekly</option>
    <option>Monthly</option>
  </select>
</fieldset>
```

## Animation Philosophy

Axiom01 treats animation as a **functional tool**, not decoration. Every animation must serve a purpose:

- **State Communication**: Show that something has changed (opened/closed, loading/done)
- **Feedback**: Respond to user interactions with tactile feedback
- **Attention Guidance**: Subtly direct focus where needed
- **Performance Perception**: Make wait states feel shorter

### Animation Principles

1. **Purposeful**: If you can remove an animation and the interface still works, don't animate it.
2. **Accessible**: Always respect `prefers-reduced-motion` media query.
3. **GPU-Accelerated**: Use only `transform` and `opacity` for performance.
4. **Timely**: Keep animations between 150ms–500ms.
5. **Professional**: Use smooth, standard easing (`cubic-bezier(0.4, 0, 0.2, 1)`).

### Quick Animation Examples

```css
/* Micro-interaction: Button hover */
.button {
  transition: transform 150ms ease-in-out;
}

.button:hover {
  transform: translateY(-2px);
}

/* State change: Card hover */
.card.elevated:hover {
  box-shadow: var(--a-shadow-lg);
}

/* Respect reduced-motion preference */
@media (prefers-reduced-motion: reduce) {
  .button, .card {
    transition: none;
  }
}
```

See [Animation Guide](docs/ANIMATIONS.md) for complete animation system documentation.

---

## 6. Icon System: Axicons (NEW v2.1.1)

Axiom01 now includes **Axicons**, a native SVG icon system with 200+ curated icons designed specifically for the framework. Instead of external icon fonts, Axicons are injected via lightweight JavaScript and styled with CSS.

### Philosophy

Axicons embody Axiom01's core principles:
- **Semantic**: Single meaningful class (`.axicon`)
- **Minimal**: No BEM, no utility stacking  
- **Cascading**: Icons inherit text color via `currentColor`
- **Native**: 100% control, no CDN dependency
- **Accessible**: Automatic `aria-hidden="true"` on SVGs

### Quick Start

```html
<!-- Include in head -->
<link rel="stylesheet" href="css/axicons.css">

<!-- Include before </body> -->
<script src="js/axicons.js"></script>
<script>
    document.querySelectorAll('.axicon.render').forEach(el => {
        const name = el.getAttribute('data-name');
        const icon = axicons.find(i => i.name.toLowerCase() === name.toLowerCase());
        if (icon) {
            el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${icon.svgContent}</svg>`;
        }
    });
</script>
```

### Usage Patterns

```html
<!-- Simple icon (default 1em size) -->
<span class="axicon render" data-name="Search"></span>

<!-- With size variant -->
<span class="axicon render axicon-lg" data-name="Settings"></span>
<span class="axicon render axicon-xl" data-name="Bell"></span>

<!-- With semantic color -->
<span class="axicon render axicon-success" data-name="Check"></span>
<span class="axicon render axicon-error" data-name="AlertTriangle"></span>

<!-- With animation -->
<span class="axicon render axicon-spin" data-name="Loader"></span>

<!-- With inline color -->
<span class="axicon render" style="color: var(--a-color-primary);" data-name="Heart"></span>

<!-- In a button (semantic context) -->
<button>
    <span class="axicon render" data-name="Download"></span>
    Download
</button>
```

### Size Utilities

```css
.axicon-sm  { width: 0.875em; height: 0.875em; }
.axicon     { width: 1em;     height: 1em; }       /* default */
.axicon-lg  { width: 1.25em;  height: 1.25em; }
.axicon-xl  { width: 1.5em;   height: 1.5em; }
.axicon-2xl { width: 2em;     height: 2em; }
```

### Color Utilities

```html
<!-- Semantic color classes (auto-updated with themes) -->
<span class="axicon render axicon-primary" data-name="Star"></span>
<span class="axicon render axicon-secondary" data-name="Star"></span>
<span class="axicon render axicon-success" data-name="Star"></span>
<span class="axicon render axicon-warning" data-name="Star"></span>
<span class="axicon render axicon-error" data-name="Star"></span>
<span class="axicon render axicon-info" data-name="Star"></span>
<span class="axicon render axicon-muted" data-name="Star"></span>
```

### Animation Utilities

```html
<!-- Spinning (for loading states) -->
<span class="axicon render axicon-spin" data-name="Loader"></span>

<!-- Pulsing (for attention) -->
<span class="axicon render axicon-pulse" data-name="Bell"></span>
```

### Dark Mode

Axicons automatically adapt to dark mode via `currentColor`. No CSS changes needed!

### All 200+ Icons

Complete icon browser: **[docs/AXICONS_REFERENCE.md](docs/AXICONS_REFERENCE.md)**

### Resources

- **Full Reference**: [docs/AXICONS_REFERENCE.md](docs/AXICONS_REFERENCE.md)
- **SVG Data**: [js/axicons.js](js/axicons.js)
- **CSS Styling**: [css/axicons.css](css/axicons.css)

---

## 7. Grid System (Updated v2.1.0)



Axiom01 uses a mobile-first, semantic grid system that adapts responsively without magic sizing or horizontal overflow.

### Quick Start

```html
<!-- Automatically responsive: 1/2/3/4 columns per breakpoint -->
<div class="grid">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Explicit 2-column layout -->
<div class="grid grid-cols-2">
  <div>Left</div>
  <div>Right</div>
</div>
```

### Key Features

- ✅ **Mobile-first**: Starts with 1 column, scales up
- ✅ **No overflow**: Fixed columns never exceed viewport
- ✅ **Semantic**: Minimal classes, clear intent
- ✅ **Responsive**: Automatic at 576px, 992px, 1200px
- ✅ **Accessible**: WCAG 2.1 AA compliant

### Why We Changed It

The old `repeat(auto-fit, minmax())` pattern was unpredictable and could overflow. The new system uses explicit breakpoints:

| Breakpoint | Columns | Use Case |
|-----------|---------|----------|
| Default | 1 | Mobile |
| 576px+ | 2 | Tablet |
| 992px+ | 3 | Laptop |
| 1200px+ | 4 | Desktop |

### Advanced Patterns

**Sidebar + Main:**
```html
<div class="grid grid-sidebar">
  <aside>Sidebar</aside>
  <main>Main</main>
</div>
```

**Featured item (spans 2 cols):**
```html
<div class="grid grid-cols-4">
  <div class="grid-item-featured">Featured</div>
  <!-- More items -->
</div>
```

**Responsive reordering (no HTML change):**
```css
@media (max-width: 768px) {
  aside { order: 2; }
  main { order: 1; }
}
```

### Resources

- Complete Guide: [GRID_SYSTEM_IMPLEMENTATION.md](GRID_SYSTEM_IMPLEMENTATION.md)
- Design Rationale: [GRID_SYSTEM_AUDIT.md](GRID_SYSTEM_AUDIT.md)
- Live Examples: [Layout Advanced](docs/layout-advanced.html)

---
