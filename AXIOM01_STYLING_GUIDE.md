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

## 5. Theming & Customization
- Use the built-in CSS variables in `axiom_vars.css` and `colors_vars.css` to customize colors, spacing, and typography.
- Switch themes by setting `data-theme` on the `<html>` element or using the theme switcher component.
- Example:
```html
<html data-theme="dark">
```
- Override variables in your own CSS to match your brand:
```css
:root {
  --a-color-primary: hsl(340, 75%, 50%);
  --a-space-base: 18px;
}
```

## 6. Component Styling
- Style all components (e.g., `.alert`, `.datepicker`, `.progress-bar`) using semantic selectors and variables.
- Example for alerts:
```css
.alert {
  background: var(--a-color-alert-bg);
  color: var(--a-color-on-alert);
  border-radius: var(--a-border-radius-base);
}
```
- For datepicker enhancements, use `.axiom-datepicker` and ensure accessible focus states.

## 7. Accessibility in Styling
- Always provide visible focus states for interactive elements:
```css
button:focus, .axiom-datepicker:focus {
  outline: 2px solid var(--a-color-primary);
}
```
- Use ARIA attributes and roles in your markup for alerts, dialogs, and navigation.
- Ensure color contrast meets WCAG standards (see style-guide.html for details).

## 8. Reference & Resources
- See [style-guide.html](style-guide.html) for full documentation of variables, components, and usage.
- For live examples, visit [examples/components.html](examples/components.html).
- For accessibility guidelines, refer to the [Axiom01 Accessibility Section](style-guide.html#accessibility).

---

**Resources:**
- See `index.html` for markup examples.
- Review `REFAC_STYLE_GUIDE.md` for philosophy and best practices.
- Check `axiom.css` for updated selectors, spacing, and color variables.

By following these steps, your site will look great, be easy to maintain, and fully embrace the Axiom01 philosophy.
