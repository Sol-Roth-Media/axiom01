# AXIOM01 CLEANUP EXECUTION PLAN
*Updated July 21, 2025 - IMMEDIATE ACTION REQUIRED*

## 🚨 CRITICAL COMPLIANCE VIOLATIONS IDENTIFIED

Based on comprehensive audit of the workspace structure, the following critical issues require immediate action:

### **PHASE 1: ELIMINATE SHOWCASE DIRECTORY (IMMEDIATE)**

**Problem:** The `/showcase/` directory contains 40+ HTML files that:
- Duplicate `/docs/components/` documentation 
- Contain widespread BEM class violations (`__` and `--` patterns)
- Use prohibited class stacking (multiple classes per element)
- Violate Axiom01's semantic-first philosophy

**Solution:** Complete elimination of `/showcase/` directory

**Files to be removed:**
```
showcase/accordion.html          → DUPLICATE (docs/components/accordion.md exists)
showcase/alert.html             → DUPLICATE (docs/components/alert.html exists)  
showcase/avatar.html            → DUPLICATE (docs/components/avatar.md exists)
showcase/badge.html             → DUPLICATE (docs/components/badge.html exists)
showcase/breadcrumb.html        → DUPLICATE (docs/components/breadcrumb.html exists)
showcase/button.html            → DUPLICATE (docs/components/button.html exists)
showcase/card.html              → DUPLICATE (docs/components/card.html exists)
showcase/carousel.html          → DUPLICATE (docs/components/carousel.html exists)
showcase/chat.html              → DUPLICATE (docs/components/chat.html exists)
showcase/commerce.html          → DUPLICATE (docs/components/commerce.html exists)
showcase/datepicker.html        → DUPLICATE (docs/components/datepicker.md exists)
showcase/drawer.html            → DUPLICATE (docs/components/drawer.md exists)
showcase/dropdown.html          → DUPLICATE (docs/components/dropdown.html exists)
showcase/empty-state.html       → DUPLICATE (docs/components/empty-state.md exists)
showcase/file-upload.html       → DUPLICATE (docs/components/file-upload.md exists)
showcase/footer.html            → DUPLICATE (docs/components/footer.md exists)
showcase/forms.html             → DUPLICATE (docs/components/forms.md exists)
showcase/hero.html              → DUPLICATE (docs/components/hero.md exists)
showcase/infinite-scroll.html   → DUPLICATE (docs/components/infinite-scroll.md exists)
showcase/media.html             → DUPLICATE (docs/components/media.md exists)
showcase/modal.html             → DUPLICATE (docs/components/modal.html exists)
showcase/multi-step-form.html   → DUPLICATE (docs/components/multi-step-form.md exists)
showcase/navbar.html            → DUPLICATE (docs/components/navbar.md exists)
showcase/navigation.html        → DUPLICATE (docs/components/navigation.md exists)
showcase/notification.html      → DUPLICATE (docs/components/notification.md exists)
showcase/pagination.html        → DUPLICATE (docs/components/pagination.md exists)
showcase/paywall.html           → DUPLICATE (docs/components/paywall.md exists)
showcase/progress.html          → DUPLICATE (docs/components/progress.md exists)
showcase/search.html            → DUPLICATE (docs/components/search.md exists)
showcase/sidebar.html           → DUPLICATE (docs/components/sidebar.md exists)
showcase/skeleton.html          → DUPLICATE (docs/components/skeleton.md exists)
showcase/slider.html            → DUPLICATE (docs/components/slider.md exists)
showcase/stepper.html           → DUPLICATE (docs/components/stepper.md exists)
showcase/tab-bar.html           → DUPLICATE (docs/components/tab-bar.md exists)
showcase/table.html             → DUPLICATE (docs/components/table.html exists)
showcase/tabs.html              → DUPLICATE (docs/components/tabs.html exists)
showcase/tag.html               → DUPLICATE (docs/components/tag.md exists)
showcase/timeline.html          → DUPLICATE (docs/components/timeline.md exists)
showcase/toggle.html            → DUPLICATE (docs/components/toggle.md exists)
showcase/tooltip.html           → DUPLICATE (docs/components/tooltip.md exists)
```

### **PHASE 2: FIX COMPONENT COMPLIANCE VIOLATIONS**

**Problem:** Components throughout framework contain BEM and class stacking violations

**Critical violations found:**
```html
<!-- ❌ BEM VIOLATIONS -->
<div class="card__header--large">          → PROHIBITED
<button class="btn__action--primary">      → PROHIBITED  
<nav class="navbar__menu--mobile">         → PROHIBITED

<!-- ❌ CLASS STACKING VIOLATIONS -->  
<button class="button primary large">      → PROHIBITED (3 classes)
<div class="card elevated shadow">         → PROHIBITED (3 classes)
<nav class="navbar sticky dark">          → PROHIBITED (3 classes)

<!-- ✅ COMPLIANT AXIOM01 STRUCTURE -->
<div class="card">                         → CORRECT (single class)
  <header>                                 → CORRECT (semantic descendant)
    <h3>Card Title</h3>                   → CORRECT (semantic HTML)
  </header>
</div>
```

### **PHASE 3: UPDATE INDEX.HTML COMPONENT REFERENCES**

**Problem:** Current `index.html` references showcase files that will be deleted

**Files needing updates:**
- `index.html` - Update component browser to use docs/components
- `docs/index.html` - Ensure proper component navigation
- Any other files referencing showcase directory

### **PHASE 4: CSS FRAMEWORK COMPLIANCE AUDIT**

**Files requiring compliance review:**
```
css/axiom.css              → Check for BEM selectors
css/critical-fixes.css     → Audit all selectors
css/base/*                 → Review base styles
css/tokens/*               → Verify variable usage
```

## 🎯 EXECUTION SEQUENCE

### Step 1: Backup and Audit (COMPLETED)
- ✅ Full documentation created (24/24 components)
- ✅ Compliance violations identified
- ✅ FILE_STRUCTURE.md created

### Step 2: Eliminate Showcase Directory
```bash
# Remove entire showcase directory
rm -rf showcase/

# Update any references pointing to showcase files
grep -r "showcase/" . --exclude-dir=node_modules
```

### Step 3: Fix Component Compliance
- Remove ALL BEM patterns from existing components
- Eliminate class stacking throughout framework
- Update CSS to support single-class components

### Step 4: Update Framework References
- Update index.html component browser
- Fix broken links after showcase removal
- Test all component navigation

### Step 5: Final Compliance Verification
- Run VERIFICATION.md checklist
- Test accessibility compliance
- Verify semantic HTML structure

## 🚧 RISK MITIGATION

**Before showcase removal:**
1. Audit unique content worth preserving
2. Create backup of any complex examples
3. Test component browser functionality

**After cleanup:**
1. Verify all component links work
2. Test documentation navigation
3. Confirm no broken references

This cleanup is **CRITICAL** for framework release compliance.
