# Axiom01 Quick Styling Guide

This guide helps you (or any developer) create beautiful, maintainable sites and components using the Axiom01 UI framework. It distills the core philosophy and practical steps from the style guide, index.html, and axiom.css.

## 1. Use Semantic HTML
- Structure your markup with semantic elements: `<header>`, `<section>`, `<footer>`, `<article>`, `<nav>`, `<main>`, etc.
- Avoid unnecessary `<div>` wrappers. Only use containers for layout or accessibility.

**Example:**
```html
<article class="card">
  <header>Title</header>
  <img src="..." alt="...">
  <section>Content goes here.</section>
  <footer>Actions</footer>
</article>
```

## 2. Minimal, Meaningful Classes
- Use a single class for the main component (e.g., `.card`, `.alert`, `.modal`).
- For variants, combine classes (e.g., `.alert.success`).
- Use camelCase for unique value classes (e.g., `.primaryContainer`).
- Avoid long, hyphenated class names and stacking utility classes unless needed for variants.

## 3. Style with Element Selectors
- In your CSS, target semantic elements inside components:

```css
.card header { /* styles for header */ }
.card section { /* styles for content */ }
.card footer { /* styles for footer */ }
```
- Use CSS variables for colors, spacing, and typography.

## 4. Spacing, Margin, and Padding
- Use Axiom01's CSS variables for consistent spacing:
  - `var(--a-padding-small)`, `var(--a-padding-medium)`, `var(--a-padding-large)` for padding.
  - `var(--a-margin-small)`, `var(--a-margin-base)`, `var(--a-margin-large)` for margin.
  - These variables cascade in axiom.css, so changing a variable updates spacing everywhere.
- Example for a card:
```css
.card header, .card section, .card footer {
  padding: var(--a-padding-medium);
}
.card footer {
  margin-top: var(--a-margin-base);
}
```
- For layout, use `.container` or semantic `<section>` with padding/margin variables for consistent gutters.

## 5. Colors and Theming
- Use color variables for backgrounds and text:
  - `var(--a-color-primary)`, `var(--a-color-on-primary)`, `var(--a-color-surface)`, etc.
  - Change theme by updating variables in `colors_vars.css` or switching theme classes on `<html>`.
- Example:
```css
.card {
  background-color: var(--a-color-surface);
  color: var(--a-color-on-surface);
}
.button.primary {
  background-color: var(--a-color-primary);
  color: var(--a-color-on-primary);
}
```

## 6. Responsive Layouts
- Use media queries with Axiom01 breakpoints:
  - `@media (min-width: var(--a-breakpoint-md)) { ... }`
- Layout containers and grids adapt with flex and grid, using spacing variables for gaps.
- Example:
```css
@media (min-width: var(--a-breakpoint-md)) {
  .card-group {
    display: flex;
    gap: var(--a-space-large);
  }
}
```
- Use percentage widths, flexbox, and grid for fluid layouts. Avoid fixed pixel values.

## 7. Refactor Existing Code
- Replace hyphenated class selectors (e.g., `.card-header`) with semantic selectors (e.g., `.card header`).
- Remove unnecessary wrapper classes and elements.
- Switch unique value classes to camelCase.

## 8. Test and Validate
- Check your components in the browser to ensure styles apply as expected.
- Use dev tools to inspect selectors and markup.

---

**Resources:**
- See `index.html` for markup examples.
- Review `REFAC_STYLE_GUIDE.md` for philosophy and best practices.
- Check `axiom.css` for updated selectors, spacing, and color variables.

By following these steps, your site will look great, be easy to maintain, and fully embrace the Axiom01 philosophy.
