# Axiom01 Styling Guide - Updated July 2025
*Comprehensive guide reflecting current implementation patterns*

This guide helps developers create beautiful, maintainable components using the Axiom01 UI framework's semantic-first philosophy with modern accessibility standards.

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

**Incorrect Implementation:**
```html
<!-- ❌ BAD: BEM methodology -->
<div class="hero">
  <h1>Hero Title</h1>
  <p>A compelling subtitle.</p>
  <div>
    <button class="primary">Get Started</button>
    <button>Learn More</button>
  </div>
</div>
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

---

**Updated:** July 20, 2025 - This guide has been updated to reinforce the framework's foundational principles and explicitly forbid non-compliant patterns.

**Current Framework Examples (Updated July 2025):**

## Empty State Component
```html
<!-- ✅ CORRECT: Minimal classes, semantic structure -->
<div class="empty-state search" role="status" aria-label="No search results">
  <div aria-hidden="true">🔍</div>
  <h3>No Results Found</h3>
  <p>We couldn't find anything matching your search terms.</p>
  <div>
    <button class="secondary">Clear Search</button>
    <button class="tertiary">Browse All Items</button>
  </div>
</div>
```
```css
/* CSS targets elements by type and order */
.empty-state {
  text-align: center;
  padding: var(--a-space-xl);
}

.empty-state > div:first-child {
  font-size: 3rem;
  margin-bottom: var(--a-space-l);
}

.empty-state h3 {
  margin-bottom: var(--a-space-m);
  color: var(--a-color-on-surface);
}

.empty-state p {
  margin-bottom: var(--a-space-l);
  color: var(--a-color-on-surface-variant);
}

.empty-state > div:last-child {
  display: flex;
  gap: var(--a-space-m);
  justify-content: center;
}
```

## Alert Component
```html
<!-- ✅ CORRECT: Single component class + semantic variant -->
<div class="alert success">
  <i class="fas fa-check-circle"></i>
  <div>This is a success alert.</div>
</div>

<div class="alert error dismissible">
  <i class="fas fa-exclamation-circle"></i>
  <div>This is a dismissible error alert.</div>
  <button data-alert-close>&times;</button>
</div>
```
```css
/* CSS targets child elements by type and order */
.alert {
  display: flex;
  align-items: center;
  padding: var(--a-space-m);
  border-radius: var(--a-border-radius-medium);
  gap: var(--a-space-s);
}

.alert i {
  flex-shrink: 0;
}

.alert > div {
  flex: 1;
}

.alert button {
  margin-left: auto;
  background: none;
  border: none;
  cursor: pointer;
}

.alert.success {
  background-color: var(--a-color-success-surface);
  color: var(--a-color-success-on-surface);
}
```

## Breadcrumb Navigation
```html
<!-- ✅ CORRECT: Semantic nav with minimal classes -->
<nav class="breadcrumb icons" aria-label="Breadcrumb navigation">
  <ol>
    <li><a href="/"><span aria-hidden="true">🏠</span> Home</a></li>
    <li><a href="/dashboard"><span aria-hidden="true">📊</span> Dashboard</a></li>
    <li aria-current="page"><span aria-hidden="true">📋</span> Reports</li>
  </ol>
</nav>
```
```css
/* CSS targets semantic structure */
.breadcrumb ol {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumb li {
  display: flex;
  align-items: center;
}

.breadcrumb li:not(:last-child)::after {
  content: '›';
  margin: 0 var(--a-space-s);
  color: var(--a-color-on-surface-variant);
}

.breadcrumb.icons span {
  margin-right: var(--a-space-xs);
}
```

## Modal Component
```html
<!-- ✅ CORRECT: Semantic structure, minimal classes -->
<div class="modal" id="basic-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-hidden="true">
  <div>
    <header>
      <h3 id="modal-title">Modal Title</h3>
      <button aria-label="Close modal" data-modal-close>&times;</button>
    </header>
    <section>
      <p>Modal content goes here.</p>
    </section>
    <footer>
      <button class="secondary" data-modal-close>Cancel</button>
      <button class="primary">Confirm</button>
    </footer>
  </div>
</div>
```
```css
/* CSS targets semantic elements directly */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal > div {
  background: var(--a-color-surface);
  border-radius: var(--a-border-radius-large);
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
}

.modal header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--a-space-l);
  border-bottom: 1px solid var(--a-color-outline);
}

.modal section {
  padding: var(--a-space-l);
}

.modal footer {
  padding: var(--a-space-l);
  border-top: 1px solid var(--a-color-outline);
  display: flex;
  gap: var(--a-space-m);
  justify-content: flex-end;
}
```

## Form Group Pattern
```html
<!-- ✅ CORRECT: semantic fieldset with one root class -->
<fieldset class="form-group">
  <legend>Contact Preferences</legend>

  <label for="email">Email</label>
  <input id="email" type="email" required aria-describedby="email-help">
  <small id="email-help">We'll only send product updates.</small>

  <label for="frequency">Frequency</label>
  <select id="frequency">
    <option>Weekly</option>
    <option>Monthly</option>
  </select>
</fieldset>
```
```css
.form-group {
  display: grid;
  gap: var(--a-space-s);
  padding: var(--a-space-l);
  border: 1px solid var(--a-color-outline);
  border-radius: var(--a-border-radius-medium);
}

.form-group legend {
  font-weight: var(--a-font-weight-bold);
  padding: 0 var(--a-space-xs);
}

.form-group small {
  color: var(--a-color-on-surface-variant);
}
```

## Tooltip Pattern
```html
<!-- ✅ CORRECT: one root class + semantic role + loader hook -->
<div class="tooltip top" data-component="tooltip">
  <button class="tooltip-trigger" aria-describedby="save-tip">
    Save
  </button>
  <div id="save-tip" role="tooltip" aria-hidden="true">
    Saves your changes immediately.
  </div>
</div>
```
```css
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip [role="tooltip"] {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease;
}

.tooltip.is-visible [role="tooltip"] {
  opacity: 1;
  visibility: visible;
}
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

/* State change: Dropdown open */
.dropdown.menu {
  max-height: 0;
  opacity: 0;
  transition: all 300ms ease-in-out;
}

.dropdown.is-open .dropdown.menu {
  max-height: 500px;
  opacity: 1;
}

/* Respect reduced-motion preference */
@media (prefers-reduced-motion: reduce) {
  .button, .dropdown.menu {
    transition: none;
  }
}
```

### Animation Variable Example (Future)

```css
/* Planned: Animation timing variables */
--a-duration-quick: 150ms;       /* Hover, micro-interactions */
--a-duration-standard: 300ms;    /* State changes, transitions */
--a-duration-long: 500ms;        /* Entrance animations */
--a-easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
```

For detailed animation guidance, see the [Animation Guide](docs/animation-guide.md).

