# Refactoring and Simplifying CSS & Component Markup in Axiom01

Axiom01 is a UI framework that prioritizes semantic HTML, minimal class usage, and clean, maintainable markup. This guide explains how to refactor your CSS and HTML components to align with the Axiom01 style philosophy, as seen in `index.html`.

## Principles

1. **Semantic-First Styling**
   - Prefer semantic HTML elements (`header`, `section`, `footer`, `article`, etc.) over generic `div` containers.
   - Use element selectors in CSS (e.g., `.card header`) to style component sections, reducing the need for extra classes.

2. **Minimal & Meaningful Classes**
   - Use classes only for unique values or variants (e.g., `.primary`, `.secondary`, `.card`).
   - Avoid long, hyphenated class names (e.g., use `.card` and `.card header` instead of `.card-header`).
   - Use camelCase for unique value classes (e.g., `.primaryContainer`).
   - For multiple variants, combine classes: `.firstClass.secondClass`.

3. **Component Structure**
   - Structure components using semantic elements and logical order:
     ```html
     <article class="card">
       <header>Card Title</header>
       <img src="..." alt="...">
       <section>Card content goes here.</section>
       <footer>Card actions</footer>
     </article>
     ```
   - The CSS will style these sections automatically based on their element type and parent class.

4. **CSS Refactoring**
   - Replace selectors like `.card-header` with `.card header`.
   - Remove unnecessary wrapper classes.
   - Use CSS variables and concise selectors.
   - Example:
     ```css
     .card header {
       font-size: var(--aFontSizeH4);
       font-weight: var(--aFontWeightBold);
       /* ... */
     }
     .card section {
       /* ... */
     }
     .card footer {
       /* ... */
     }
     ```

5. **Utility Classes**
   - Use utility classes for layout and color only when necessary (e.g., `.center`, `.primary`).
   - Avoid stacking multiple utility classes unless for variants.

## Refactoring Steps

1. **Audit Existing CSS**
   - Identify long, hyphenated class names and replace them with semantic selectors.
   - Switch unique value classes to camelCase.

2. **Update Component Markup**
   - Remove unnecessary classes from HTML.
   - Use semantic elements for structure.

3. **Test and Validate**
   - Ensure components render correctly with the new structure.
   - Use browser dev tools to verify CSS selectors are applied as expected.

## Simplifying HTML & Component Structure

- **Use semantic elements for all components:** Prefer <article>, <section>, <header>, <footer>, <nav>, <aside>, <main>, <figure>, <ul>, <ol>, <li>, etc. over generic <div> wrappers.
- **Minimize wrapper elements:** Only use containers when necessary for layout or accessibility. Avoid extra <div> wrappers around content sections.
- **Minimal class usage:** Use a single class for the main component (e.g., .card, .alert, .modal) and rely on semantic child elements for structure. Avoid classes like .card-header, .card-body, .card-footer; instead, use <header>, <section>, <footer> inside .card.
- **Component example:**
  ```html
  <article class="card">
    <header>Title</header>
    <img src="..." alt="...">
    <section>Content goes here.</section>
    <footer>Actions</footer>
  </article>
  ```
- **Alert example:**
  ```html
  <div class="alert success" role="alert">Success! Your operation was completed.</div>
  ```
- **Modal example:**
  ```html
  <div class="modal" role="dialog" aria-modal="true">
    <header>Modal Title</header>
    <section>Modal content</section>
    <footer><button data-modal-close>Close</button></footer>
  </div>
  ```
- **Grid/layout example:**
  ```html
  <section>
    <article class="card">...</article>
    <article class="card">...</article>
  </section>
  ```
- **Avoid unnecessary classes:** If a style can be applied by targeting a semantic element inside a parent (e.g., .card header), do not add a class to that element.
- **Accessibility:** Use ARIA roles and attributes where needed, but keep markup clean and readable.

## Example: Card Component

**Before:**
```html
<div class="card card-header">
  <div class="card-header">Title</div>
  <div class="card-content">Content</div>
  <div class="card-footer">Actions</div>
</div>
```

**After:**
```html
<article class="card">
  <header>Title</header>
  <section>Content</section>
  <footer>Actions</footer>
</article>
```

**CSS:**
```css
.card header { /* styles for header */ }
.card section { /* styles for content */ }
.card footer { /* styles for footer */ }
```

## Refactor Progress & Live Examples (July 2025)
- All major components (navbar, cards, alerts, buttons, tabs, accordions, dropdowns, modal, datepicker) now follow these principles.
- Recent refactors have removed legacy classes and wrappers, standardized CSS variable usage, and improved accessibility.
- For live examples and best practices, see [style-guide.html](style-guide.html) and [AXIOM01_STYLING_GUIDE.md].

## Resources
- See `index.html` for markup examples and style guide.
- Review `axiom.css` for updated selectors and variable usage.

---

By following these guidelines, your codebase will be cleaner, easier to maintain, and fully aligned with the Axiom01 philosophy.
