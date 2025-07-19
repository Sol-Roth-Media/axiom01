# Axiom01 Styling Guide - Updated July 2025
*Comprehensive guide reflecting current implementation patterns*

This guide helps developers create beautiful, maintainable components using the Axiom01 UI framework's semantic-first philosophy with modern accessibility standards.

## 1. Semantic HTML Structure

### Core Principle
Structure markup with semantic elements, avoiding unnecessary `<div>` wrappers. Only use containers for layout or accessibility needs.

**Standard Component Pattern:**
```html
<article class="component-name">
  <header>
    <h3>Component Title</h3>
    <span class="badge" aria-label="Status indicator">New</span>
  </header>
  <section>
    <p>Main content goes here with proper semantic structure.</p>
  </section>
  <footer>
    <button class="primary">Primary Action</button>
    <button class="secondary">Secondary Action</button>
  </footer>
</article>
```

## 2. Minimal, Meaningful Classes

### Class Naming Strategy
- **Single class** for main component (`.card`, `.modal`, `.button`)
- **Variant classes** combined for modifications (`.button.primary`, `.card.elevated`)
- **Semantic variants**: `.primary`, `.secondary`, `.danger`, `.large`, `.compact`
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
All components must use CSS variables for consistency and theming:

**Spacing Variables:**
```css
.component {
  padding: var(--a-padding-medium);
  margin: var(--a-margin-base);
  gap: var(--a-space-small);
}
```

**Color Variables:**
```css
.component {
  background: var(--a-color-surface);
  color: var(--a-color-on-surface);
  border-color: var(--a-color-outline);
}

.component.primary {
  background: var(--a-color-primary);
  color: var(--a-color-on-primary);
}
```

**Typography Variables:**
```css
.component header {
  font-size: var(--a-font-size-h3);
  font-weight: var(--a-font-weight-medium);
}
```

## 4. Element Selector Strategy

### CSS Selector Patterns
Target semantic elements within component contexts:

```css
.card {
  /* Base component styles */
  background: var(--a-color-surface);
  border-radius: var(--a-border-radius-base);
  box-shadow: var(--a-shadow-base);
}

.card header {
  padding: var(--a-padding-medium);
  border-bottom: var(--a-border-width-base) solid var(--a-color-outline);
}

.card section {
  padding: var(--a-padding-medium);
}

.card footer {
  padding: var(--a-padding-medium);
  display: flex;
  gap: var(--a-space-small);
  justify-content: flex-end;
}

.card.elevated {
  box-shadow: var(--a-shadow-large);
}
```

## 5. Accessibility Implementation (WCAG 2.1 AA)

### Required Accessibility Features

**ARIA Attributes:**
```html
<div class="modal" role="dialog" aria-modal="true" 
     aria-labelledby="modal-title" aria-hidden="true">
  <div class="modal-content">
    <header>
      <h3 id="modal-title">Modal Title</h3>
      <button aria-label="Close modal" data-modal-close>&times;</button>
    </header>
  </div>
</div>
```

**Keyboard Navigation:**
```css
button:focus-visible {
  outline: var(--a-border-width-focus) solid var(--a-color-focus);
  outline-offset: var(--a-space-tiny);
}
```

**Icon Accessibility:**
```html
<!-- Decorative icons -->
<span class="icon" aria-hidden="true">★</span>

<!-- Functional icons need labels -->
<button aria-label="Delete item">
  <span class="icon" aria-hidden="true">×</span>
</button>
```

## 6. Component Registration System

### JavaScript Integration
Components use the Axiom registration system:

```javascript
AxiomComponents.register('componentName', function() {
  // Component initialization
  const components = document.querySelectorAll('.component-name');
  
  components.forEach(component => {
    // Setup event listeners
    // Handle accessibility features
    // Manage component state
  });
});
```

## 7. Form Accessibility Standards

### Required Form Patterns
```html
<div class="form-group">
  <label for="field-name">Field Label <span aria-label="required">*</span></label>
  <input id="field-name" name="field" required 
         aria-describedby="field-error field-help">
  <div id="field-help" class="help-text">Helpful context for user</div>
  <div id="field-error" class="error-message" role="alert" aria-live="polite"></div>
</div>
```

## 8. Theme Compatibility Requirements

### Multi-Theme Support
All components must work across themes:
- Light theme (default)
- Dark theme  
- High contrast themes
- Specialty themes (forest, ocean, sunset)

**Testing Requirement:**
```css
/* Component must work with theme switching */
html[data-theme="dark"] .component {
  /* Automatic through CSS variables */
}
```

## 9. Performance Considerations

### Efficient CSS Patterns
```css
/* ✅ Good: Minimal selectors, CSS variables */
.component {
  background: var(--a-color-surface);
}

.component header {
  padding: var(--a-padding-medium);
}

/* ❌ Avoid: Deep nesting, hardcoded values */
.component .header .title .text {
  padding: 16px;
}
```

## 10. Documentation Standards

### Required Component Documentation
Each component must include:
1. **Basic usage example** with copy-paste code
2. **Accessibility features** explanation  
3. **CSS implementation** showing variable usage
4. **Best practices** section
5. **Keyboard navigation** instructions

## Implementation Checklist

For each component, verify:
- [ ] Uses semantic HTML structure
- [ ] Single meaningful class names
- [ ] CSS variables for all styling
- [ ] Element selectors within components  
- [ ] WCAG 2.1 AA accessibility compliance
- [ ] Keyboard navigation support
- [ ] Screen reader compatibility
- [ ] Theme compatibility across all themes
- [ ] Component registration with framework
- [ ] Comprehensive documentation

---

**Updated:** July 19, 2025 - Reflects current Axiom01 implementation patterns and accessibility standards.
