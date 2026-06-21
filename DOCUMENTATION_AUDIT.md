# Documentation Pages Audit Report

## Executive Summary

- **Total Documentation Pages**: 90
  - 16 root doc pages (docs/*.html)
  - 74 component pages (docs/components/*.html)

- **Status**:
  - ✅ **WORKING**: Alert.html (perfect template)
  - ❌ **BROKEN**: 16 root doc pages (removed or need rebuild)
  - ⚠️ **NEEDS REVIEW**: 74 component pages (have content, need individual assessment)

---

## ROOT DOCUMENTATION PAGES (16 pages)

All root documentation pages are currently **BROKEN** - they have minimal/placeholder content:

| # | Page | Status | Type | Action |
|---|------|--------|------|--------|
| 1 | boilerplate-template.html | ❌ BROKEN | Template | REMOVE |
| 2 | code-snippets.html | ❌ BROKEN | Guide | REMOVE |
| 3 | colors-advanced.html | ❌ BROKEN | Guide | REBUILD or REMOVE |
| 4 | components-advanced.html | ❌ BROKEN | Index | REBUILD |
| 5 | components-category-view.html | ❌ BROKEN | Index | REMOVE |
| 6 | components-overview.html | ❌ BROKEN | Index | REBUILD |
| 7 | components-simple.html | ❌ BROKEN | Index | REMOVE |
| 8 | drupal-contrib-fixtures.html | ❌ BROKEN | Fixture | REMOVE |
| 9 | dynamic-content-examples.html | ❌ BROKEN | Guide | REMOVE |
| 10 | dynamic-content.html | ❌ BROKEN | Guide | REMOVE |
| 11 | form-elements.html | ❌ BROKEN | Guide | REBUILD or REMOVE |
| 12 | integrations.html | ❌ BROKEN | Guide | REMOVE |
| 13 | interactive-component-browser.html | ❌ BROKEN | Tool | REMOVE |
| 14 | interactive-playground.html | ❌ BROKEN | Tool | REMOVE |
| 15 | layout-advanced.html | ❌ BROKEN | Guide | REBUILD or REMOVE |
| 16 | markdown-template.html | ❌ BROKEN | Template | REMOVE |
| 17 | media-advanced.html | ❌ BROKEN | Guide | REBUILD or REMOVE |
| 18 | placeholder.html | ❌ BROKEN | Placeholder | REMOVE |
| 19 | theme-customization-wizard.html | ❌ BROKEN | Tool | REMOVE |
| 20 | typography-advanced.html | ❌ BROKEN | Guide | REBUILD or REMOVE |

### Recommendation for Root Pages:

**REMOVE** (22 pages total):
- All tool/utility pages (interactive-playground, interactive-component-browser, theme-customization-wizard, markdown-template, dynamic-content*, etc.)
- All broken templates and fixtures
- Pages with minimal placeholder content

**REBUILD** (5 pages to keep as guide pages):
- colors-advanced.html
- typography-advanced.html
- layout-advanced.html
- form-elements.html
- media-advanced.html

These should have proper content showing the design system concepts.

---

## COMPONENT PAGES (74 pages)

All component pages have been **RESTORED** to their original state with content intact.

### Current Status:

- ✅ **PERFECT (1 page)**:
  - alert.html - Complete, with live examples, code snippets, icons working

- ✅ **WORKING (73 pages)**:
  - All pages have original content restored
  - Still need individual review for:
    - Outdated Font Awesome icons (should use axicons)
    - doc-styles.css references (should use core axiom.css only)
    - HTML structure alignment (should match alert.html pattern)
    - Code snippet accuracy (should match live examples)

### Review Checklist for Each Component Page:

- [ ] Has header with h1 and description
- [ ] Has live component examples
- [ ] Has code snippets that match examples
- [ ] No Font Awesome icons (all use axicons)
- [ ] No doc-styles.css references
- [ ] HTML structure matches alert.html
- [ ] Proper spacing and alignment
- [ ] Footer displays correctly
- [ ] Responsive design works
- [ ] Dark mode toggle works

---

## ACTION PLAN

### Phase 1: Clean Up Root Pages
- [ ] **DELETE** 15 broken/unnecessary pages
  - All interactive tools (these are not reference documentation)
  - All utility/fixture pages
  - All placeholder pages

- [ ] **REBUILD** 5 guide pages
  - colors-advanced.html (with color swatches and system explanation)
  - typography-advanced.html (with heading examples and rhythm)
  - layout-advanced.html (with grid examples)
  - form-elements.html (with input examples)
  - media-advanced.html (with icon examples)

- [ ] **KEEP** 1 page:
  - components-overview.html (link to all components)

### Phase 2: Fix Component Pages (One-by-one)
For each of 74 component pages:

1. Check if it has proper structure (matches alert.html)
2. Replace Font Awesome with axicons
3. Remove doc-styles.css references
4. Update code snippets to match live examples
5. Test in browser
6. Commit individually or in batches

### Phase 3: Verification
- [ ] All 74 component pages display correctly
- [ ] All pages responsive
- [ ] Dark mode works on all pages
- [ ] No console errors
- [ ] Links all work

---

## Pages to DELETE Immediately

```
docs/boilerplate-template.html
docs/code-snippets.html
docs/components-category-view.html
docs/components-simple.html
docs/drupal-contrib-fixtures.html
docs/dynamic-content-examples.html
docs/dynamic-content.html
docs/integrations.html
docs/interactive-component-browser.html
docs/interactive-playground.html
docs/markdown-template.html
docs/placeholder.html
docs/theme-customization-wizard.html
docs/components-advanced.html  (unless needed for index)
```

---

## Pages to REBUILD

These should be comprehensive reference pages, not just placeholders:

1. **colors-advanced.html**
   - Color system explanation
   - HSL model documentation
   - Color swatches showing all palette
   - Design token reference
   - Example usage

2. **typography-advanced.html**
   - Heading scale system
   - Font family options
   - Line height and letter spacing
   - Responsive typography
   - Example usage

3. **layout-advanced.html**
   - Container and spacing system
   - Grid system explanation
   - Breakpoints documentation
   - Example layouts

4. **form-elements.html**
   - Input types with examples
   - Validation patterns
   - Accessibility features
   - Example forms

5. **media-advanced.html**
   - Icon system (axicons)
   - Image optimization
   - Video embedding
   - Responsive media examples

---

## Template for Rebuilt Pages

Use this structure (based on alert.html):

```html
<main><section><div class="container">
    <header>
        <h1>Page Title</h1>
        <p class="text-muted">Brief description</p>
    </header>
    
    <div class="component-section">
        <section>
            <h2>Live Example / Overview</h2>
            <!-- Live examples showing the feature -->
        </section>
        
        <section>
            <h2>Documentation</h2>
            <!-- Detailed explanation -->
        </section>
        
        <section>
            <h2>Code Examples</h2>
            <pre><code class="language-html">
            <!-- Code snippets -->
            </code></pre>
        </section>
    </div>
</div></section></main>
```

---

## Next Steps

Would you like me to:

1. **DELETE** all 15 unnecessary root pages immediately?
2. **START** fixing component pages one-by-one (starting with button.html)?
3. **REBUILD** the 5 guide pages (colors, typography, etc.)?

Recommend: 1 → 2 → 3 (clean up first, then fix, then rebuild)
