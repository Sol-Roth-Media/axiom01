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
- **Variant Classes:** Use single, adjective-like classes to modify a component's appearance or behavior (e.g., `<button class="primary">`, `<article class="card elevated">`).
- **Absolutely No BEM:** The Block__Element--Modifier syntax (e.g., `card__header--large`) is strictly prohibited. It is verbose, couples the CSS to a rigid DOM structure, and violates our principle of semantic purity.

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

Axiom01 now includes a comprehensive component library with production-ready styles for buttons, cards, badges, tags, and alerts.

### Button Component

Semantic buttons with multiple variants:

```html
<!-- Size variants -->
<button class="button--sm">Small</button>
<button>Default</button>
<button class="button--lg">Large</button>
<button class="button--xl">Extra Large</button>

<!-- Type variants -->
<button>Primary</button>
<button class="button--secondary">Secondary</button>
<button class="button--success">Success</button>
<button class="button--warning">Warning</button>
<button class="button--danger">Danger</button>
<button class="button--ghost">Ghost</button>
<button class="button--outline">Outline</button>

<!-- Special states -->
<button class="button--loading" disabled>Loading...</button>
<button class="button--icon" aria-label="Close">✕</button>
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
<div class="card card--elevated">
  <header>
    <h2>Card Title</h2>
  </header>
  <div>Main content section</div>
  <footer>
    <button class="button--secondary">Cancel</button>
    <button>Save</button>
  </footer>
</div>
```

**Card Variants**:
- `.card--elevated` - Shadow-based depth
- `.card--outlined` - Border-based style
- `.card--filled` - Background color variant
- `.card--hover-lift` - Lifts on hover
- `.card--interactive` - Clickable with hover effect

**Features**:
- Semantic structure (header, content sections, footer)
- Responsive grid layout (`.card-grid`)
- Automatic dark mode support
- Interactive states for clickable cards

### Badge Component

Small labels for status and categories:

```html
<!-- Color variants -->
<span class="badge badge--primary">Primary</span>
<span class="badge badge--success">Active</span>
<span class="badge badge--warning">Pending</span>
<span class="badge badge--error">Critical</span>
<span class="badge badge--info">Info</span>
<span class="badge badge--secondary">Secondary</span>

<!-- Size variants -->
<span class="badge badge--sm">Small</span>
<span class="badge">Default</span>
<span class="badge badge--lg">Large</span>
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
<!-- Semantic types -->
<div class="alert alert--info">
  <h3>Information</h3>
  <p>This is an informational message.</p>
</div>

<div class="alert alert--success alert--dismissible">
  <div>
    <h3>Success</h3>
    <p>Your action completed successfully.</p>
  </div>
  <button aria-label="Dismiss">×</button>
</div>

<!-- Size variants -->
<div class="alert alert--warning alert--sm">Compact warning</div>
<div class="alert alert--error alert--lg">Large error message</div>
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

<span class="tag tag--dismissible">
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

**Updated:** July 20, 2025 - This guide has been updated to reinforce the framework's foundational principles and explicitly forbid non-compliant patterns.

**Component Examples (Updated July 2025):**

## Empty State Component
```html
<!-- ✅ CORRECT: Minimal classes, semantic structure -->
<div class="empty-state search" role="status" aria-label="No search results">
  <div aria-hidden="true">🔍</div>
  <h3>No Results Found</h3>
  <p>We couldn't find anything matching your search terms.</p>
  <div>
    <button class="button--secondary">Clear Search</button>
    <button>Browse All Items</button>
  </div>
</div>
```

## Alert Component (Built-In)
```html
<!-- ✅ CORRECT: Semantic alert with proper structure -->
<div class="alert alert--success">
  <h3>Success</h3>
  <p>Your changes have been saved successfully.</p>
</div>

<div class="alert alert--error alert--dismissible">
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
<div class="card card--elevated">
  <header>
    <h2>Product Details</h2>
  </header>
  <div>
    <p>Main product information goes here.</p>
  </div>
  <footer>
    <button class="button--secondary">Cancel</button>
    <button class="button--success">Add to Cart</button>
  </footer>
</div>
```

## Button Component (Built-In)
```html
<!-- ✅ CORRECT: Using semantic buttons with variants -->
<button>Primary Action</button>
<button class="button--secondary">Secondary</button>
<button class="button--success">Confirm</button>
<button class="button--danger">Delete</button>

<div class="button-group">
  <button>Save</button>
  <button class="button--secondary">Cancel</button>
  <button class="button--danger">Delete</button>
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
      <button class="button--secondary">Cancel</button>
      <button>Confirm</button>
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
.card--elevated:hover {
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
