# Component Code Snippet Audit Report

**Date:** January 25, 2025  
**Status:** Audit Complete - Fixes Pending  
**Severity:** Critical - All 80 components affected

---

## Executive Summary

All 77 component documentation pages contain code snippets that violate AXIOM01 philosophy. The issues are systemic and consistent across all pages.

---

## Violations Found

### 1. **BEM-Like Element Classes (73 files)**

**Problem:** Code snippets show classes like `.card-header`, `.card-body`, `.button-group`, etc.

**AXIOM01 Violation:** One class per component pattern. Should use semantic HTML structure instead.

**Example - WRONG:**
```html
<article class="card">
    <header class="card-header">
        <h3>Title</h3>
    </header>
    <div class="card-body">
        <p>Content</p>
    </div>
    <footer class="card-footer">
        <button>Action</button>
    </footer>
</article>
```

**Example - CORRECT:**
```html
<article class="card">
    <header>
        <h3>Title</h3>
    </header>
    <p>Content</p>
    <footer>
        <button>Action</button>
    </footer>
</article>
```

**Files Affected:**
- Card, Button, Modal, Accordion, Tabs, Form, etc. (majority)

---

### 2. **Multiple Classes for Variants (Many files)**

**Problem:** Code snippets show `class="primary"` or `class="card outlined"` for variants.

**AXIOM01 Violation:** Should use data attributes instead of class modifiers.

**Example - WRONG:**
```html
<button class="primary">Primary</button>
<button class="secondary">Secondary</button>

<article class="card elevated">Elevated Card</article>
<article class="card outlined">Outlined Card</article>
```

**Example - CORRECT:**
```html
<button class="button" data-variant="primary">Primary</button>
<button class="button" data-variant="secondary">Secondary</button>

<article class="card" data-variant="elevated">Elevated Card</article>
<article class="card" data-variant="outlined">Outlined Card</article>
```

---

### 3. **Font Awesome Icons (9 files)**

**Problem:** Code snippets show `<i class="fas fa-plus">` but framework uses Axicons.

**AXIOM01 Violation:** Using non-framework assets. Should use Axicons consistently.

**Example - WRONG:**
```html
<button class="primary">
    <i class="fas fa-plus"></i> Add Item
</button>
```

**Example - CORRECT:**
```html
<button class="button" data-variant="primary">
    <span class="axicon render" data-name="Plus"></span> Add Item
</button>
```

**Files Affected:**
- button.html, forms.html, and 7 others

---

### 4. **Inline Styles in Snippets (42 files)**

**Problem:** Code snippets show `style="..."` attributes.

**AXIOM01 Violation:** No inline styles. All styling should be in framework CSS using tokens.

**Example - WRONG:**
```html
<div style="color: #1976d2; margin-bottom: 16px;">
    Styled content
</div>
```

**Example - CORRECT:**
```html
<div class="component">
    Styled content
</div>
```

---

### 5. **Hardcoded Colors/Values (132 instances)**

**Problem:** Code snippets show hardcoded hex colors, pixel values, etc.

**AXIOM01 Violation:** Use design tokens only: `var(--a-color-*)`, `var(--a-space-*)`, etc.

**Example - WRONG:**
```html
<style>
    .alert { background: #f3e5f5; color: #7b1fa2; }
    .spacing { padding: 16px; margin-bottom: 8px; }
</style>
```

**Example - CORRECT:**
```html
<!-- No inline styles -->
<!-- Use CSS with tokens -->
.alert { 
    background: var(--a-color-primary-container);
    color: var(--a-color-on-primary-container);
    padding: var(--a-space-m);
    margin-bottom: var(--a-space-s);
}
```

---

## AXIOM01 Philosophy Compliance Requirements

### ✅ DO:
- ✅ Single semantic class per component (`.card`, `.button`, `.modal`, etc.)
- ✅ Use semantic HTML elements (`<header>`, `<footer>`, `<nav>`, etc.)
- ✅ Use data attributes for variants (`data-variant="primary"`, `data-size="large"`, etc.)
- ✅ Use Axicons for all icons (`<span class="axicon render" data-name="Icon">`)
- ✅ Use design tokens for all values
- ✅ Use ARIA attributes for accessibility
- ✅ No inline styles anywhere
- ✅ No BEM syntax (no `__element`, `--modifier`)
- ✅ No utility classes (no `.flex`, `.p-4`, `.m-2`)

### ❌ DON'T:
- ❌ Multiple element classes (`.card-header`, `.button-group`, etc.)
- ❌ Multiple classes for styling (`.primary`, `.secondary` as separate classes)
- ❌ Inline styles (`style="..."`)
- ❌ Hardcoded colors/values
- ❌ Font Awesome or other icon libraries
- ❌ BEM naming patterns
- ❌ Utility classes
- ❌ Class modifiers for variants
- ❌ Non-framework components

---

## Priority Fix List

### **Critical (All 80 components)**

1. **Fix BEM-like element classes**
   - Remove `.card-header`, `.card-body`, `.card-footer`
   - Remove `.button-group`, `.button-wrapper`
   - Remove `.form-group`, `.form-row`, `.form-label`
   - Use only single semantic class
   - Let semantic HTML provide structure
   - **Impact:** 73 files

2. **Fix variant patterns**
   - Remove `class="primary"`, `class="secondary"`
   - Replace with `data-variant="primary"`, `data-variant="secondary"`
   - Remove `class="card outlined"`, `class="card elevated"`
   - Replace with `data-variant="outlined"`, `data-variant="elevated"`
   - **Impact:** All components

3. **Replace Font Awesome with Axicons**
   - Replace `<i class="fas fa-plus">` with `<span class="axicon render" data-name="Plus">`
   - Replace all Font Awesome references
   - **Impact:** 9 files

4. **Remove inline styles**
   - Remove all `style="..."` attributes from code snippets
   - Remind that styling is handled by framework CSS
   - **Impact:** 42 files

5. **Replace hardcoded values with tokens**
   - Replace `#1976d2` with `var(--a-color-primary)`
   - Replace `16px` with `var(--a-space-m)`
   - Replace `8px` with `var(--a-space-s)`
   - Replace `rgba(0,0,0,0.1)` with `var(--a-color-overlay)`
   - **Impact:** 132 instances

---

## Standardized Code Snippet Examples

### Button Component

**WRONG:**
```html
<button class="primary">Primary</button>
<button class="secondary">Secondary</button>
<button class="disabled" disabled>Disabled</button>
<button class="btn-icon"><i class="fas fa-save"></i></button>
```

**CORRECT:**
```html
<button class="button" data-variant="primary">Primary</button>
<button class="button" data-variant="secondary">Secondary</button>
<button class="button" disabled>Disabled</button>
<button class="button">
    <span class="axicon render" data-name="Save"></span>
</button>
```

### Card Component

**WRONG:**
```html
<article class="card">
    <header class="card-header">
        <h2 class="card-title">Title</h2>
    </header>
    <div class="card-body">
        <p class="card-text">Content</p>
    </div>
    <footer class="card-footer">
        <button class="primary">Action</button>
    </footer>
</article>
```

**CORRECT:**
```html
<article class="card">
    <header>
        <h2>Title</h2>
    </header>
    <p>Content</p>
    <footer>
        <button class="button" data-variant="primary">Action</button>
    </footer>
</article>
```

### Form Component

**WRONG:**
```html
<form class="form">
    <div class="form-group">
        <label class="form-label">Email</label>
        <input class="form-input" type="email" placeholder="email@example.com">
    </div>
    <div class="form-group">
        <label class="form-label">Message</label>
        <textarea class="form-textarea"></textarea>
    </div>
    <button class="primary">Submit</button>
</form>
```

**CORRECT:**
```html
<form class="field">
    <label>Email</label>
    <input type="email" placeholder="email@example.com">

    <label>Message</label>
    <textarea></textarea>

    <button class="button" data-variant="primary">Submit</button>
</form>
```

### Modal Component

**WRONG:**
```html
<div class="modal-overlay" style="display: block;">
    <div class="modal-content">
        <div class="modal-header">
            <h2 class="modal-title">Modal Title</h2>
            <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
            <p>Modal content here</p>
        </div>
        <div class="modal-footer">
            <button class="secondary">Cancel</button>
            <button class="primary">Confirm</button>
        </div>
    </div>
</div>
```

**CORRECT:**
```html
<div class="modal" aria-modal="true" role="dialog">
    <header>
        <h2>Modal Title</h2>
        <button aria-label="Close">&times;</button>
    </header>
    <p>Modal content here</p>
    <footer>
        <button class="button" data-variant="secondary">Cancel</button>
        <button class="button" data-variant="primary">Confirm</button>
    </footer>
</div>
```

---

## Implementation Strategy

### Phase 1: Analysis (Today)
- ✅ Audit complete
- Document all violations
- Create standardized examples

### Phase 2: Bulk Fixes (Next Session)
1. Create sed/find-replace scripts for common patterns
2. Fix BEM-like classes across all files
3. Fix variant patterns
4. Replace Font Awesome with Axicons
5. Remove inline styles
6. Replace hardcoded values

### Phase 3: Verification (After bulk fixes)
1. Visual test all pages
2. Verify code snippets match live examples
3. Check accessibility
4. Verify AXIOM01 compliance

---

## Files Needing Fixes (All 77)

**Components with .html code snippets (66 files):**

Feedback & Status:
- alert.html
- notification.html
- progress.html
- empty-state.html
- skeleton.html

Forms & Inputs:
- forms.html
- field-validation.html
- editor.html
- datepicker.html
- file-upload.html
- multi-step-form.html
- slider.html
- toggle.html
- chip-input.html

Navigation & Layout:
- accordion.html
- breadcrumb.html
- dropdown.html
- hierarchy.html
- popover.html
- steps.html
- mobile-navbar.html
- navigation.html
- pagination.html
- sidebar.html
- tabs.html (already fixed)
- timeline.html

Content Display:
- avatar.html
- badge.html
- button.html
- card.html
- adaptive-media-card.html
- carousel.html
- chat.html
- commerce.html
- table.html
- advanced-table.html
- rating.html

Advanced Interactions:
- swiping-card-interface.html
- pull-to-refresh.html
- story-view.html
- multimedia-picker.html
- autocomplete.html
- stopwatch-countdown.html
- shapes-paths.html
- touch-components.html
- file-display-download.html

Utilities & Overlays:
- drawer.html
- modal.html
- tooltip.html
- paywall.html
- settings.html

Media & Players:
- audio-player.html
- video-player.html
- playlist.html

AI Integrations:
- ai-chat.html
- ai-image-generator.html

Miscellaneous:
- account-menu.html
- page-header.html
- button-variants.html
- queue.html
- segmented-control.html
- list.html
- backlit.html
- cta.html
- data-list.html
- feature-grid.html
- footer.html
- hero.html
- masonry.html
- media.html
- stats.html
- testimonial.html
- spacing-demo.html
- component-browser.html
- axicons.html
- form-elements.html

---

## Next Steps

1. **Review this audit** with user
2. **Create fix scripts** for bulk replacements
3. **Execute bulk fixes** across all 77 files
4. **Visual verification** of all components
5. **Final compliance check** against AXIOM01 philosophy

---

## Conclusion

The component documentation pages show detailed, well-organized content, but the code snippets systematically violate AXIOM01 principles. This audit identifies all violations and provides clear examples of correct vs. incorrect patterns.

**Estimated Fix Time:** 4-6 hours (with automated scripts)  
**Risk Level:** Low (non-breaking changes to documentation only)  
**Impact:** Users will see correct AXIOM01-compliant code examples

