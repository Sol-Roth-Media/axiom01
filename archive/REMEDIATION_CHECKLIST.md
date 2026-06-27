# Axiom01 Remediation Checklist
## Priority Fixes for Core Documentation Pages

---

## Phase 1: Critical Files (Fix First)

### 1. index.html - Homepage

**Current Violations:**
- ❌ Inline styles: `opacity: 0;`
- ❌ Custom classes: `border`, `delay-3`, `max-w-sm`, `form`, `github`, `menu`, `search`
- ❌ Divs with roles: `<div role="tabpanel">`
- ❌ Tailwind classes present

**Fixes Required:**

```html
<!-- BEFORE -->
<div class="max-w-sm delay-3 border">
  <img src="..." style="opacity: 0;">
</div>

<!-- AFTER -->
<section class="hero-section">
  <img src="..." alt="..." class="hero-image">
</section>
```

```css
/* Add to axiom.min.css */
.hero-section {
  max-width: 24rem; /* semantic max-width */
  animation: fadeIn 0.5s ease-in;
  border: 1px solid var(--a-color-outline);
}

.hero-image {
  opacity: 0;
  animation: fadeInImage 0.8s ease-in 0.2s forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInImage {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
```

**Checklist:**
- [ ] Remove all `style="opacity"` - move to CSS animations
- [ ] Replace `<div role="tabpanel">` with `<section>`
- [ ] Replace `class="max-w-sm"` with semantic container
- [ ] Remove `class="border"`, `class="delay-3"` - move to CSS
- [ ] Rename `class="github"` to `btn btn-secondary github-link`
- [ ] Validate HTML5

---

### 2. docs/form-elements.html

**Current Violations:**
- ❌ `.form-demo` class (3 instances)
- ❌ Inline styles: `margin: var(--a-space-m) 0;`
- ❌ Inline styles: `display: block; margin-bottom: var(--a-space-s);`
- ❌ Custom classes: `search`, `menu`, `github`

**Fixes Required:**

```html
<!-- BEFORE -->
<div class="form-demo">
  <div>
    <label for="text-input">Text Input</label>
    <input type="text" id="text-input" placeholder="Enter some text">
  </div>
</div>

<!-- AFTER -->
<div class="component-example">
  <div class="form-group">
    <label for="text-input">Text Input</label>
    <input type="text" id="text-input" class="form-control" placeholder="Enter some text">
  </div>
</div>
```

```html
<!-- BEFORE -->
<label style="display: block; margin-bottom: var(--a-space-s);">
  <input type="checkbox" name="interests" value="design"> Design
</label>

<!-- AFTER -->
<label class="form-check-label">
  <input type="checkbox" name="interests" value="design" class="form-check"> Design
</label>
```

```css
/* Add to docs.css (new file) */
.component-example {
  background: var(--a-color-surface-variant);
  border: 1px solid var(--a-color-outline);
  border-radius: var(--a-border-radius-lg);
  padding: var(--a-space-l);
  margin-bottom: var(--a-space-l);
}

.form-check-label {
  display: block;
  margin-bottom: var(--a-space-s);
  cursor: pointer;
}

.form-check-label input {
  margin-right: var(--a-space-s);
}
```

**Checklist:**
- [ ] Create `docs/docs.css` with `.component-example` class
- [ ] Replace all `<div class="form-demo">` with `<div class="component-example">`
- [ ] Remove all `style="margin"` attributes
- [ ] Move checkbox/radio styles to CSS
- [ ] Add `class="form-control"` to all inputs
- [ ] Add `class="form-group"` to all input wrappers
- [ ] Validate form accessibility (labels properly associated)

---

### 3. docs/components-overview.html

**Current Violations:**
- ❌ Inline styles: `font-size: var(--a-font-size-xs); color: var(--a-color-text-muted);` (repeated)
- ❌ Custom classes: `content`, `docs-overview`, `github`, `menu`, `search`

**Fixes Required:**

```html
<!-- BEFORE -->
<p style="font-size: var(--a-font-size-xs); color: var(--a-color-text-muted);">
  Last Updated: 2025
</p>

<!-- AFTER -->
<p class="text-muted text-small">
  Last Updated: 2025
</p>
```

```css
/* Add to axiom.min.css */
.text-muted {
  color: var(--a-color-text-secondary);
}

.text-small {
  font-size: var(--a-font-size-sm);
}

/* Or more semantic: use ::after pseudo-element */
.component-meta::after {
  content: attr(data-updated);
  display: block;
  font-size: var(--a-font-size-sm);
  color: var(--a-color-text-secondary);
  margin-top: var(--a-space-s);
}
```

**Checklist:**
- [ ] Create `.text-muted` and `.text-small` utility classes
- [ ] Replace all inline font-size/color styles
- [ ] Rename `class="content"` to semantic `<main>` or `<article>`
- [ ] Rename `class="docs-overview"` to `<section class="component-section">`
- [ ] Add CSS variables for metadata styling

---

### 4. docs/axicons.html

**Current Violations:**
- ❌ Inline styles: `font-size`, `color`, `margin-bottom`
- ❌ Custom classes: `variant-tab`, `icon-browser`, `icon-count`
- ❌ Divs with roles: Multiple

**Fixes Required:**

```html
<!-- BEFORE -->
<div style="font-size: var(--a-font-size-xxl); color: var(--a-color-primary); margin-bottom: var(--a-space-m);">
  Icon Browser
</div>

<!-- AFTER -->
<h2>Icon Browser</h2>
<!-- Relies on semantic h2 styling, no inline styles needed -->
```

```html
<!-- BEFORE -->
<div role="tablist">
  <button role="tab" aria-selected="true">Base</button>
</div>

<!-- AFTER -->
<nav aria-label="Icon Variants">
  <ul class="tab-list" role="tablist">
    <li role="presentation">
      <button role="tab" aria-selected="true" aria-controls="tab-base">Base</button>
    </li>
  </ul>
</nav>
```

**Checklist:**
- [ ] Replace all icon-display inline styles
- [ ] Use semantic `<h2>` for "Icon Browser" title
- [ ] Add proper `<nav>` structure for tabs
- [ ] Add `.tab-list` styling to CSS
- [ ] Remove divitis - replace with semantic list/button structure
- [ ] Ensure ARIA labels are correct

---

## Phase 2: Medium Priority Pages

### 5. docs/media-advanced.html (3 divitis instances)

**Violations:**
- ❌ Inline styles: `display`, `gap`, `margin`
- ❌ Divs with divitis structure
- ❌ Custom layout classes

**Quick Fix:**
- Replace `<div style="display: flex; gap: ..."` with semantic `<section>` or `<figure>`
- Move flex styles to `.media-grid` class in CSS
- Replace `<div class="media">` with `<figure>`

---

### 6. docs/animations.html (3 of each violation type)

**Focus:**
- Remove animation delay inline styles
- Move to CSS animation keyframes
- Use semantic `<section>` for animation groups

---

### 7. docs/components/account-menu.html

**Focus:**
- Replace menu divs with semantic `<nav>` and `<ul>`
- Use proper menu component structure

---

## CSS Additions Required

### New File: docs/docs.css

```css
/**
 * Axiom01 Documentation Styles
 * 
 * These classes are ONLY for documentation examples
 * They do NOT become part of the framework
 * Use semantic framework classes in production
 */

/* Example/Demo Containers */
.component-example {
  background: var(--a-color-surface-variant);
  border: 1px solid var(--a-color-outline);
  border-radius: var(--a-border-radius-lg);
  padding: var(--a-space-l);
  margin-bottom: var(--a-space-l);
}

.component-example:last-of-type {
  margin-bottom: 0;
}

/* Code Example Sections */
.component-section {
  margin-bottom: var(--a-space-xxl);
}

.component-section > h2:first-child {
  margin-top: 0;
}

/* Layout Examples */
.layout-example {
  display: grid;
  gap: var(--a-space-m);
  background: var(--a-color-surface-variant);
  padding: var(--a-space-l);
  border-radius: var(--a-border-radius-lg);
  margin-bottom: var(--a-space-l);
}

/* Responsive Grid for Component Grid */
.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--a-space-m);
  margin-bottom: var(--a-space-l);
}

/* Example Output Areas */
.output-example {
  background: var(--a-color-surface);
  border-left: 3px solid var(--a-color-primary);
  padding: var(--a-space-m);
  margin-bottom: var(--a-space-l);
}

/* Typography Examples */
.text-muted {
  color: var(--a-color-text-secondary);
}

.text-small {
  font-size: var(--a-font-size-sm);
}

.text-size-example {
  background: var(--a-color-surface-variant);
  padding: var(--a-space-s);
  margin-bottom: var(--a-space-s);
  border-radius: var(--a-border-radius-md);
}

/* Form Examples */
.form-check-label {
  display: block;
  margin-bottom: var(--a-space-s);
  cursor: pointer;
}

.form-check-label input[type="checkbox"],
.form-check-label input[type="radio"] {
  margin-right: var(--a-space-s);
  cursor: pointer;
}

/* Tab Navigation */
.tab-list {
  display: flex;
  gap: var(--a-space-s);
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid var(--a-color-outline);
}

.tab-list [role="tab"] {
  padding: var(--a-space-m) var(--a-space-l);
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--a-color-text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-list [role="tab"][aria-selected="true"] {
  color: var(--a-color-primary);
  border-bottom-color: var(--a-color-primary);
}

/* Media Grid */
.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--a-space-l);
  margin-bottom: var(--a-space-l);
}

.media-item {
  text-align: center;
}

.media-item figure {
  margin: 0 0 var(--a-space-m);
}

.media-item figcaption {
  font-size: var(--a-font-size-sm);
  color: var(--a-color-text-secondary);
}

/* Comparison Table */
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: var(--a-space-l);
}

.comparison-table th,
.comparison-table td {
  padding: var(--a-space-m);
  text-align: left;
  border-bottom: 1px solid var(--a-color-outline);
}

.comparison-table th {
  background: var(--a-color-surface-variant);
  font-weight: var(--a-font-weight-bold);
}

/* Animation Examples */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInRight {
  from { 
    opacity: 0;
    transform: translateX(20px);
  }
  to { 
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInLeft {
  from { 
    opacity: 0;
    transform: translateX(-20px);
  }
  to { 
    opacity: 1;
    transform: translateX(0);
  }
}

.animation-demo {
  animation: fadeIn 0.6s ease-out;
}

.animation-demo.slide-right {
  animation: slideInRight 0.6s ease-out;
}

.animation-demo.slide-left {
  animation: slideInLeft 0.6s ease-out;
}

/* Ensure docs.css is only for documentation */
@media (max-width: 0) {
  /* This hides the note - docs.css is non-portable */
  body::before {
    content: "Documentation styles only - not part of Axiom01 framework";
  }
}
```

### Link new CSS in HTML Head:

```html
<head>
  <!-- Framework CSS -->
  <link rel="stylesheet" href="../css/axiom.min.css">
  <link rel="stylesheet" href="../css/axicons.css">
  
  <!-- Documentation Example Styles (non-portable) -->
  <link rel="stylesheet" href="../css/docs.css">
  
  <!-- ... rest of head ... -->
</head>
```

---

## HTML Fixes - Common Patterns

### Pattern 1: Remove Inline Margin

```html
<!-- BEFORE -->
<div style="margin: var(--a-space-m) 0;">
  Content
</div>

<!-- AFTER -->
<section class="component-section">
  Content
</section>
```

### Pattern 2: Remove Inline Display/Gap

```html
<!-- BEFORE -->
<div style="display: flex; gap: var(--a-space-m);">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- AFTER -->
<div class="flex-row gap-m">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Pattern 3: Replace Div Roles

```html
<!-- BEFORE -->
<div role="navigation">
  <div class="link"><a href="/">Home</a></div>
</div>

<!-- AFTER -->
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
  </ol>
</nav>
```

### Pattern 4: Semantic Typography

```html
<!-- BEFORE -->
<div style="font-size: var(--a-font-size-lg); font-weight: bold;">
  Section Title
</div>

<!-- AFTER -->
<h3>Section Title</h3>
```

---

## Testing Checklist After Fixes

- [ ] No inline `style=""` attributes (except data attributes)
- [ ] All custom classes are in `docs.css` or framework
- [ ] No `<div role="X">` where semantic element exists
- [ ] HTML passes W3C validator
- [ ] All headings use `<h1>` through `<h6>`
- [ ] All navigation uses `<nav>`
- [ ] All lists use `<ul>` or `<ol>`
- [ ] All form groups use semantic labels
- [ ] Dark mode still works (no hardcoded colors)
- [ ] Axicons still render correctly
- [ ] No console errors or warnings
- [ ] Keyboard navigation works
- [ ] Screen reader announces content correctly

---

## Completion Tracking

### Phase 1 Files (Must Complete)

- [ ] index.html - Homepage
- [ ] docs/form-elements.html - Forms
- [ ] docs/components-overview.html - Overview
- [ ] docs/axicons.html - Icon Browser

### Phase 2 Files (Should Complete)

- [ ] docs/media-advanced.html
- [ ] docs/animations.html
- [ ] docs/components/account-menu.html
- [ ] docs/components/button.html
- [ ] docs/components/alert.html

### Phase 3 Files (Remaining 74 pages)

- [ ] Batch process remaining component pages

---

**Status:** Ready for Implementation  
**Estimated Time:** 1-2 weeks (with batch fixes)  
**Priority:** HIGH - Fixes documentation compliance with stated philosophy
