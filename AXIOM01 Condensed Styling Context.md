# AXIOM01 Styling & Component Context (for AI Agents)

## Markup Philosophy
- Use semantic HTML: `<header>`, `<section>`, `<footer>`, `<article>`, `<nav>`, etc.
- Minimize wrapper elements and classes; style with parent class + element selectors (e.g., `.card header`).
- Compose variants by combining classes (e.g., `.alert.success`).
- Accessibility: Use ARIA roles/attributes, logical order, and keyboard navigation.

## CSS & Variables
- **Spacing:** Use variables for all margin/padding/gaps:
  - Padding: `var(--a-padding-small)`, `var(--a-padding-medium)`, etc.
  - Margin: `var(--a-margin-small)`, `var(--a-margin-base)`, etc.
  - Grid gutter: `var(--a-grid-gutter)`
  - Spacing variables cascade from `axiom_vars.css`.
- **Colors:** Use theme variables for backgrounds, text, and states:
  - `var(--a-color-primary)`, `var(--a-color-on-primary)`, `var(--a-color-surface)`, `var(--a-color-error)`, etc.
  - Colors and gradients are defined in `colors_vars.css` and support many themes via `[data-theme]`.
- **Typography:** Use font and heading variables:
  - `var(--a-font-size-h1)`, `var(--a-font-family-sans)`, `var(--a-font-weight-bold)`, etc.
- **Borders/Radii:** Use variables for border width, style, and radius.
- **Responsiveness:** Use breakpoints from `axiom_config.css`:
  - `@media (min-width: var(--a-breakpoint-md)) { ... }`
  - Prefer flex/grid layouts with variable-driven gaps.

## Component Structure
**Example:**
```html
<article class="card">
  <header>Title</header>
  <section>Content</section>
  <footer>Actions</footer>
</article>
```
Style with:
```css
.card header { ... }
.card section { ... }
.card footer { ... }
```

## Component Patterns
- **Modal:** Use semantic structure, ARIA roles, focus management, and keyboard navigation.
- **Notification:** Use ARIA roles, auto-dismiss, and type-based styling (`.success`, `.error`, etc.).
- **Datepicker:** Enhance native input, provide accessible calendar popup.
- **Infinite Scroll:** Add `.axiom-infinite-scroll` to containers, use custom events/callbacks.
- **Carousel:** Use `.carousel`, `.track`, `.slide`, ARIA roles, keyboard/touch navigation.

## Theming
- Switch themes by changing `[data-theme]` on `<html>`. All colors, gradients, and surface variables update automatically.
- Use only variables for colors, spacing, and typography to ensure global consistency and easy theme switching.

## Refactoring Steps
- Replace utility-heavy markup/classes with semantic elements and variable-driven styles.
- Remove unnecessary wrappers and classes.
- Use only variables for spacing, color, and typography.
- Validate accessibility and responsiveness.

---

This context enables an AI agent to refactor, style, and improve any component for visual consistency, maintainability, accessibility, and responsiveness using Axiom01.