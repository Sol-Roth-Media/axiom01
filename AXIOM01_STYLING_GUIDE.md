# Axiom01 Styling Guide - Updated July 2025
*Comprehensive guide reflecting current implementation patterns*

This guide helps developers create beautiful, maintainable components using the Axiom01 UI framework's semantic-first philosophy with modern accessibility standards.

## 1. Semantic HTML Structure

### Core Principle
Structure markup with semantic elements, avoiding unnecessary `<div>` wrappers. Only use containers for layout or accessibility needs.

**Standard Component Pattern:**
```html
<article class="card">
  <header>
    <h3>Card Title</h3>
  </header>
  <section>
    <p>Main content goes here.</p>
  </section>
  <footer>
    <button class="primary">Primary Action</button>
  </footer>
</article>
```

## 2. Minimal, Meaningful Classes

### Class Naming Strategy
- **Single class** for main component (`.card`, `.modal`, `.button`)
- **Variant classes** for modifications (`.button.primary`, `.card.elevated`)
- **Avoid**: Long hyphenated names, utility class stacking, BEM patterns

**Examples:**
```html
<!-- ✅ Good: Semantic and minimal -->
<button class="primary large">Primary Action</button>
<article class="card elevated">...</article>

<!-- ❌ Avoid: Utility stacking -->
<button class="btn btn-primary btn-lg btn-block">...</button>
```

## 3. CSS Variable Architecture

### Required Variable Usage
All components must use CSS variables for consistency and theming.

**Example:**
```css
.card {
  background: var(--a-color-surface);
  color: var(--a-color-on-surface);
  border: 1px solid var(--a-color-outline);
  padding: var(--a-padding-large);
  border-radius: var(--a-border-radius-large);
}
```

## 4. Component Registration System

### JavaScript Integration
Interactive components use the Axiom registration system. This system allows you to easily initialize and manage your components without cluttering your HTML with inline scripts.

**Registration:**
```javascript
// js/components/my-component.js
AxiomComponents.register('my-component', {
  init: function(element) {
    // Add event listeners and setup component logic
    element.querySelector('button').addEventListener('click', () => {
      alert('Component initialized!');
    });
  },
  destroy: function(element) {
    // Remove event listeners and clean up
  }
});
```

**Initialization:**
```javascript
// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  AxiomComponents.init();
});
```

## 5. Accessibility (WCAG 2.1 AA)

### Required Accessibility Features
- **ARIA Attributes:** Use appropriate ARIA roles, states, and properties.
- **Keyboard Navigation:** Ensure all interactive elements are keyboard accessible.
- **Focus Management:** Manage focus appropriately for modals, dropdowns, and other interactive components.

**Example:**
```html
<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h3 id="modal-title">Modal Title</h3>
  <button aria-label="Close modal">&times;</button>
</div>
```

## Implementation Checklist

For each component, verify:
- [ ] Uses semantic HTML structure
- [ ] Uses minimal, meaningful class names
- [ ] Uses CSS variables for all styling
- [ ] Is fully accessible (WCAG 2.1 AA)
- [ ] Is responsive and works on all screen sizes
- [ ] Is themeable and works with all themes
- [ ] Is registered with the Axiom component system (if interactive)
- [ ] Has comprehensive documentation

---

**Updated:** July 20, 2025 - Reflects current Axiom01 implementation patterns and accessibility standards.