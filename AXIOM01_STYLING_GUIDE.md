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
  background: var(--a-color-surface);
  color: var(--a-color-on-surface);
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

## 8. Grid System: Semantic & Custom Layouts

Axiom01 supports flexible grid layouts using CSS Grid and semantic HTML. You can build grids without classes (pure semantic) or with custom row/column classes for more control.

### Semantic (Classless) Grid Example
Use semantic elements and grid properties directly:
```html
<section style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--a-grid-gutter);">
  <article>Column 1</article>
  <article>Column 2</article>
  <article>Column 3</article>
</section>
```
- Use `var(--a-grid-gutter)` for consistent spacing.
- Style child elements with variables for padding, background, etc.

### Custom Row-Based Grid Example
For more control, use row/column classes:
```html
<div class="a-row" style="display: grid; grid-template-columns: 2fr 1fr; gap: var(--a-grid-gutter);">
  <div class="a-col">Main Content</div>
  <div class="a-col">Sidebar</div>
</div>
```
- Adjust `grid-template-columns` for layout needs.
- Use semantic markup inside columns.

### Responsive Grid Example
Make grids adapt to screen size:
```html
<div class="responsive-grid" style="display: grid; grid-template-columns: 1fr; gap: var(--a-grid-gutter);">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
<style>
  @media (min-width: 600px) {
    .responsive-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
```
- Use CSS variables and media queries for responsive layouts.

**Best Practices:**
- Prefer semantic HTML for accessibility and maintainability.
- Use CSS variables for all spacing, colors, and typography.
- Test grid layouts in multiple themes and screen sizes.

See `grid-examples.html` for live demos.

## 9. Navbar Component
The Axiom01 Navbar is a responsive, accessible navigation component that follows the Axiom01 philosophy of semantic HTML, minimal classes, and consistent styling using CSS variables.

### HTML Structure
```html
<!-- Skip to main content link for accessibility -->
<a href="#main-content" class="skip-to-content">Skip to main content</a>

<nav class="navbar small sticky" id="advanced-navbar">
  <!-- Logo -->
  <a href="#" class="logo" aria-label="Axiom Framework Home v0.1">
    <div class="logo-text">
      <span>[Ax</span>
      <span><span style="color: var(--a-color-primary, #00c005); display: inline;">01</span>]</span>
      <span></span>
    </div>
    <small class="version">v0.1</small>
  </a>

  <!-- Theme Switcher (Optional) -->
  <div class="theme-switcher-container">
    <label for="theme-select" class="visually-hidden">Select Theme:</label>
    <select id="theme-select" name="theme"></select>
  </div>

  <!-- Mobile Menu Toggle -->
  <button class="menu-toggle" aria-label="Toggle Navigation" aria-expanded="false" aria-controls="nav-links-main">
    <i class="fa-solid fa-bars" aria-hidden="true"></i>
  </button>

  <!-- Navigation Links -->
  <ul class="nav-links" id="nav-links-main">
    <li><a href="#about">About</a></li>
    <li><a href="#usage">Get started</a></li>
    <li><a href="#typography">Docs</a></li>

    <!-- Dropdown menu example -->
    <li class="dropdown">
      <a href="#components" aria-haspopup="true" aria-expanded="false">Components <i class="fa-solid fa-chevron-down"></i></a>
      <ul class="dropdown-menu" role="menu">
        <li><a href="#buttons" role="menuitem">Buttons</a></li>
        <li><a href="#cards" role="menuitem">Cards</a></li>
        <li><a href="#alerts" role="menuitem">Alerts</a></li>
        <li><a href="#forms" role="menuitem">Forms</a></li>
      </ul>
    </li>

    <li><a href="components.html">Demo</a></li>
    <li><a href="forms-advanced.html">Forms</a></li>
    <li><a href="https://github.com/Sol-Roth-Media/axiom01" target="_blank" rel="noopener noreferrer">GitHub</a></li>
  </ul>

  <!-- Search functionality (Optional) -->
  <div class="search-container">
    <input type="text" placeholder="Search..." aria-label="Search">
    <button type="button" aria-label="Submit search">
      <i class="fa-solid fa-search"></i>
    </button>
  </div>

  <!-- Theme Toggle Button (Optional) -->
  <button class="theme-toggle" title="Toggle Dark/Light Mode" aria-label="Toggle Dark Light Mode">
    &#9728;
  </button>
</nav>
```

### Usage Notes
- Include `navbar.css` in your HTML head after the main Axiom01 CSS files
- Include `navbar.js` before the closing body tag
- Use the `.small` class for a more compact navbar
- Use the `.sticky` class to make the navbar stick to the top of the viewport
- Add the `.active` class to the current page's link
- Ensure the `aria-controls` attribute on the menu toggle matches the `id` of the nav links
- The navbar is responsive by default and will show a hamburger menu on screens smaller than 900px
- Include Font Awesome for the hamburger icon and dropdown indicators

### Advanced Features
- **Dropdown Menus**: Use the `.dropdown` class on a list item to create a dropdown menu
- **Search Functionality**: Include the `.search-container` div for a search input
- **Sticky Navigation**: Add the `.sticky` class to make the navbar stick to the top of the viewport
- **Scroll-Aware Behavior**: Add the `.scroll-aware` class to change the navbar appearance on scroll
- **Compact Mode**: Add the `.compact` class for a more compact navbar
- **Skip to Content**: Add a "Skip to main content" link with class `.skip-to-content` before the navbar

### Accessibility Features
- ARIA attributes for screen readers (aria-label, aria-expanded, aria-controls, aria-haspopup)
- Keyboard navigation support for all interactive elements
- Focus states for interactive elements
- Semantic HTML structure
- Visually hidden labels for screen readers
- Skip to content link for keyboard users
- ARIA live regions for menu state announcements

### ARIA Live Region Implementation
For improved accessibility, the navbar includes an ARIA live region to announce menu state changes:

```javascript
// Create ARIA live region
const liveRegion = document.createElement('div');
liveRegion.setAttribute('aria-live', 'polite');
liveRegion.setAttribute('class', 'visually-hidden');
document.body.appendChild(liveRegion);

// Announce menu state changes
menuToggle.addEventListener('click', function() {
  setTimeout(() => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    liveRegion.textContent = isExpanded ? 'Navigation menu expanded' : 'Navigation menu collapsed';
  }, 100);
});
```

For more detailed documentation and examples, see [navbar-docs.html](navbar-docs.html) and [navbar-advanced.html](navbar-advanced.html).

## 10. Reference & Resources
- See [style-guide.html](style-guide.html) for full documentation of variables, components, and usage.
- For live examples, visit [examples/components.html](examples/components.html).
- For accessibility guidelines, refer to the [Axiom01 Accessibility Section](style-guide.html#accessibility).

---

**Resources:**
- See `index.html` for markup examples.
- Review `REFAC_STYLE_GUIDE.md` for philosophy and best practices.
- Check `axiom.css` for updated selectors, spacing, and color variables.

By following these steps, your site will look great, be easy to maintain, and fully embrace the Axiom01 philosophy.
