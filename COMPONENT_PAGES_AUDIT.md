# Component Documentation Pages - Comprehensive Audit

## Executive Summary

**74 component documentation pages found**

### Critical Issues Found:

1. **Sidebar Navigation (7 pages)**
   - accordion.html
   - advanced-table.html
   - breadcrumb.html
   - data-list.html
   - navigation.html
   - pagination.html
   - sidebar.html
   - **Issue**: Sidebar inconsistent with other pages; should be removed

2. **Font Awesome Icons (58 pages)**
   - **Issue**: Still using Font Awesome (fa-, fas, fab) instead of Axicons
   - **Impact**: Inconsistent with new Axicons system
   - Should replace: fa-search → Search, fa-moon → Moon, fa-bars → Menu, fa-github → Brand-Github, etc.

3. **Missing Axicons Integration (73 pages)**
   - **Issue**: Missing axicons.js script and rendering function
   - **Impact**: Axicon elements won't render on pages
   - Solution: Add axicons.js and renderAxicons() function

4. **Missing/Broken CSS Links (58 pages)**
   - **Issue**: Linking to non-existent doc-styles.css
   - **Solution**: Remove broken link

---

## Detailed Issues by Category

### A. Sidebar Pages (7)
Pages that have sidebars that need removal:
- accordion.html
- advanced-table.html
- breadcrumb.html
- data-list.html
- navigation.html
- pagination.html
- sidebar.html

**Fix**: Remove entire `<aside class="sidebar">` section and update main element class

### B. Font Awesome Icon Usage (58 pages)

Common replacements needed:
- `<i class="fas fa-search">` → `<span class="axicon render" data-name="Search"></span>`
- `<i class="fas fa-moon">` → `<span class="axicon render" data-name="Moon"></span>`
- `<i class="fas fa-bars">` → `<span class="axicon render" data-name="Menu"></span>`
- `<i class="fab fa-github">` → `<span class="axicon render" data-name="Brand-Github"></span>`
- `<i class="fas fa-sun">` → `<span class="axicon render" data-name="Sun"></span>`

### C. Missing Axicons Scripts (73 pages)

**Missing Script**: axicons.js
**Missing Function**: renderAxicons() function
**Impact**: Axicon elements on page won't render

Required additions to each page:
```html
<script src="../../js/axicons.js"></script>
<script>
    function renderAxicons() {
        if (typeof axicons !== 'undefined') {
            document.querySelectorAll('.axicon.render').forEach(el => {
                const name = el.getAttribute('data-name');
                const icon = axicons.find(i => i.name.toLowerCase() === name.toLowerCase());
                if (icon) {
                    el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">${icon.svgContent}</svg>`;
                }
            });
        }
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderAxicons);
    } else {
        renderAxicons();
    }
</script>
```

---

## Standardization Checklist

### Header Section
- ✓ Main header with navigation
- ✓ Brand logo [Ax01]
- ✓ Navigation links (Philosophy, Components, Get Started, Docs)
- ✓ Action buttons: Search, GitHub, Theme Toggle, Menu
- ✓ All icons using Axicons (not Font Awesome)

### Main Content
- ✓ Hero section with title and description
- ✓ Main content area with semantic sections
- ✓ Code examples with proper formatting
- ✓ Live component examples

### Footer
- ✓ Main footer with branding
- ✓ Documentation links
- ✓ Community links
- ✓ Additional links
- ✓ Copyright year

### CSS Files
- ✓ axiom.css (required)
- ✓ NO doc-styles.css (doesn't exist - remove)
- ✓ Component-specific CSS if needed (doc-preview.css, etc.)

### JavaScript
- ✓ axicons.js (NEW - add to all pages)
- ✓ renderAxicons() function (NEW - add to all pages)
- ✓ index-page-manager.js (required for functionality)

### Sidebar
- ✓ NO sidebars (remove from 7 pages)
- ✓ All pages should have consistent layout

---

## Implementation Plan

### Phase 1: Remove Sidebars (7 pages)
Remove `<aside class="sidebar">` and update main element

### Phase 2: Replace Font Awesome with Axicons (58 pages)
1. Search for all Font Awesome icon patterns
2. Replace with Axicons equivalents
3. Verify icon names exist in axicons.js

### Phase 3: Add Axicons Support (73 pages)
1. Add axicons.js script tag
2. Add renderAxicons() function
3. Test icon rendering

### Phase 4: Verify Consistency (All 74 pages)
1. Check header structure
2. Verify footer structure
3. Ensure no broken CSS links
4. Test responsive design

---

## Affected Pages Summary

| Category | Count | Status |
|----------|-------|--------|
| Has Sidebar | 7 | NEEDS FIX |
| Uses Font Awesome | 58 | NEEDS FIX |
| Missing Axicons | 73 | NEEDS FIX |
| Total Pages | 74 | - |

---

## Success Criteria

✓ All sidebars removed
✓ All Font Awesome icons replaced with Axicons
✓ All pages have axicons.js loaded
✓ All pages have renderAxicons() function
✓ All pages have consistent header/footer
✓ No broken CSS links
✓ All icons render properly
✓ Consistent visual appearance across all pages

---

## Estimated Impact

- **Time to Fix**: Moderate (automated fixes possible)
- **Risk Level**: Low (non-breaking changes)
- **User Impact**: Positive (consistent, modern UI)
- **Performance**: Neutral to Positive (fewer external dependencies)

