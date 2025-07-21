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
  <h1 class="hero__title">Hero Title</h1>
  <p class="hero__subtitle">A compelling subtitle.</p>
  <div class="hero__actions">
    <button class="hero__button--primary">Get Started</button>
    <button class="hero__button">Learn More</button>
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