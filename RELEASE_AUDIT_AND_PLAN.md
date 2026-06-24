# Axiom01 Release Refactoring - Comprehensive Audit & Plan

## Executive Summary

**Current State**: New index.html refactored using native Axiom01 components and classes. Uses clean semantic HTML with minimal CSS classes. Ready for release.

**Scope**: Update entire site (docs, components pages, examples) to match new index.html pattern and use new improved axiom.css with updated variables.

**Goal**: Consistent, cohesive framework release with clean documentation that showcases Axiom01 philosophy.

---

## 1. CURRENT ARCHITECTURE ANALYSIS

### New index.html Pattern ✅
- **Stylesheets**: Only `axiom.css` + `axicons.css` (no index-preview.css, footer-fix.css needed)
- **Structure**: Semantic HTML (header.main, main, footer.main) with `.container` for layout
- **Components**: Native Axiom01 classes (`.button`, `.primary`, `.secondary`, `.outline`, etc.)
- **Scripts**: 
  - Core: axiom.js, axicons.js, sticky-header.js
  - Optional: index-page-manager.js (page-specific), release-loader.js
  - Syntax highlighting: Prism.js (for code snippets)

### CSS Files Status
```
CORE FRAMEWORK (keep, updated):
├── css/axiom.css (156KB) ← MAIN - Contains everything
├── css/_components.css (21KB) ← Included in axiom.css
├── css/_variables.css (12KB) ← Included in axiom.css
├── css/_animations.css (6.1KB) ← Included in axiom.css
├── css/_utilities.css (3.9KB) ← Included in axiom.css
└── css/axicons.css (4KB) ← Icon system

PAGE-SPECIFIC (NEEDS REMOVAL):
├── css/index-preview.css (44KB) ← REMOVE - Functionality now in axiom.css
├── css/footer-fix.css (3.7KB) ← REMOVE - No longer needed
├── css/doc-preview.css (25KB) ← REVIEW - Used by doc pages
├── css/doc-styles.css (31KB) ← REVIEW - Used by doc pages
└── css/site.css (7.1KB) ← REVIEW - Legacy

BACKUPS (DELETE):
├── css/axiom.css.backup ← DELETE
├── css/index-preview.css.backup ← DELETE
└── css/index-preview.css.bak ← DELETE
```

### JS Files Status
```
CORE FRAMEWORK (keep, updated):
├── js/axiom.js (19KB) ← Main functionality
├── js/axicons.js (29KB) ← Icon rendering
└── js/sticky-header.js (1.4KB) ← Header behavior

PAGE-SPECIFIC (REVIEW):
├── js/index-page-manager.js (32KB) ← Specific to index.html
├── js/code-copy.js (5.8KB) ← Used in documentation
├── js/release-loader.js (1.9KB) ← Used in index.html
├── js/hero-animations.js (1.2KB) ← Hero animations
├── js/mobile-menu-handler.js (3.2KB) ← Mobile menu
└── js/components/ (27 files) ← Component JS modules

BACKUPS (DELETE):
└── js/axiom.min.js ← DELETE (rebuilt by build tool)
```

### Documentation Files
```
TOTAL: 74 component pages in docs/components/
STATUS: All need updating to match new index.html pattern

Key Pages to Update:
├── docs/components-overview.html ← Already updated
├── docs/components/*.html (74 files) ← NEED UPDATE
└── Other doc pages (advanced-layout, markdown-template, etc.)
```

---

## 2. FILES TO DELETE

### Immediate Deletions (Safe)
```
❌ DELETE BACKUPS:
- css/axiom.css.backup
- css/index-preview.css.backup  
- css/index-preview.css.bak
- index.html.bak

❌ DELETE PAGE-SPECIFIC HACKS:
- css/footer-fix.css (no longer needed with new axiom.css)
- css/site.css (legacy, functionality in axiom.css)

❌ DELETE MINIFIED VERSIONS (rebuilt by build tool):
- js/axiom.min.js
- css/axiom.min.css (in dist/ folder)
- index.js (empty/unused)
```

### Review Before Deleting
```
⚠️  REVIEW AND CONSOLIDATE:
- css/doc-preview.css (25KB) - Check if needed for doc pages
- css/doc-styles.css (31KB) - Check if needed for doc pages
- js/hero-animations.js - Check if needed for index.html
- js/mobile-menu-handler.js - Likely redundant with axiom.js

Consider: Move all doc/component styles into single doc-styles.css
```

---

## 3. FILES TO KEEP AND UPDATE

### Framework Core (Update with new versions)
```
✅ css/axiom.css ← Already updated by agent
✅ css/_components.css ← Already updated
✅ css/_variables.css ← Already updated  
✅ css/_animations.css ← Likely updated
✅ css/_utilities.css ← Likely updated
✅ css/axicons.css ← Keep as-is

✅ js/axiom.js ← Already updated
✅ js/axicons.js ← Keep as-is
✅ js/sticky-header.js ← Keep as-is
```

### Documentation (Need Updating)
```
📝 UPDATE PATTERN TO MATCH NEW INDEX.HTML:
- docs/components-overview.html (already done)
- docs/components/*.html (74 files)
  ├── Use only axiom.css + axicons.css
  ├── Remove doc-preview.css references
  ├── Use native Axiom01 component classes
  ├── Use semantic HTML structure
  └── Include proper stylesheets

📝 UPDATE SUPPORTING FILES:
- js/index-page-manager.js ← May need updates
- js/code-copy.js ← Review for use
- js/release-loader.js ← Review for use
```

---

## 4. STRATEGIC APPROACH

### Phase 1: Cleanup (30 minutes)
```
1. Delete backup files
2. Delete footer-fix.css, site.css
3. Delete axiom.min.js, remove old minified files
4. Verify axiom.css builds correctly
```

### Phase 2: Framework Release (15 minutes)
```
1. Build new release:
   npm run build
2. Verify dist/ folder has:
   - axiom.min.css
   - axiom.min.js
   - Source maps
3. Tag release:
   git tag -a v2.0.0 -m "Major refactor with native components"
```

### Phase 3: Update Documentation (1-2 hours)
```
1. Create template doc page from new index.html pattern
2. Update 74 component pages:
   - Strip doc-preview.css dependency
   - Use only axiom.css + axicons.css
   - Update header/footer to match
   - Update component examples
3. Consolidate CSS:
   - Move all doc page styles to single doc-styles.css
   - Remove doc-preview.css
   - Verify no !important flags
4. Test all pages at mobile/tablet/desktop
```

### Phase 4: Sync to dbase (15 minutes)
```
1. Copy updated files to dbase/
2. Update dbase pages with new patterns
3. Test Drupal theme renders correctly
4. Commit changes
```

---

## 5. NEW INDEX.HTML PATTERNS TO APPLY EVERYWHERE

### Stylesheets Pattern
```html
<link rel="stylesheet" href="css/axiom.css">
<link rel="stylesheet" href="css/axicons.css">
<!-- NO: index-preview.css, footer-fix.css, doc-preview.css -->
```

### Header Pattern
```html
<header class="main" data-component="mobile-navbar">
    <nav role="navigation" aria-label="Main Navigation">
        <a href="/" class="brand">[Ax<span class="primary">01</span>]</a>
        <ul class="links">
            <li><a href="#philosophy">Philosophy</a></li>
            <!-- ... -->
        </ul>
        <div class="actions">
            <button class="search toggle" aria-label="Open Search">
                <span class="axicon render" data-name="Search"></span>
            </button>
            <!-- Search, GitHub, Theme, Menu buttons -->
        </div>
    </nav>
</header>
```

### Container Pattern
```html
<section class="hero">
    <div class="container">
        <!-- Content with max-width from axiom.css -->
    </div>
</section>
```

### Button Pattern (Native Classes)
```html
<a href="#" class="button primary lg">Primary</a>
<a href="#" class="button secondary lg">Secondary</a>
<a href="#" class="button outline lg">Outline</a>
<!-- NO: custom styling, no !important flags -->
```

### Footer Pattern
```html
<footer class="ax-footer">
    <div class="ax-footer-content">
        <section class="ax-footer-brand">
            <!-- Brand section -->
        </section>
        <nav class="ax-footer-links">
            <section class="ax-footer-column">
                <!-- Link column -->
            </section>
        </nav>
    </div>
    <div class="ax-footer-bottom">
        <!-- Copyright -->
    </div>
</footer>
```

### No Inline CSS
```html
<!-- ❌ NO: -->
<style>
  .my-custom-styling { ... }
</style>

<!-- ✅ YES: Use framework classes and axiom.css only -->
<section class="hero">
```

---

## 6. CHECKLIST FOR EACH COMPONENT PAGE UPDATE

- [ ] Remove `doc-preview.css` link
- [ ] Update header to match new pattern
- [ ] Update footer to use `ax-footer` component
- [ ] Replace inline styles with axiom.css classes
- [ ] Use only semantic HTML
- [ ] Use native button classes (`.button.primary`, etc.)
- [ ] Add `role="navigation"` to nav elements
- [ ] Add `aria-label` to interactive elements
- [ ] Test dark mode toggle
- [ ] Test mobile menu
- [ ] Verify links work (../../index.html, etc.)
- [ ] No console errors
- [ ] Check responsive (mobile, tablet, desktop)

---

## 7. EXPECTED OUTCOMES

### Before Refactoring
```
CSS Files: 1,352 KB (multiple overlapping files)
JS Files: 304 KB (mixed concerns)
Pages: Inconsistent patterns
Build Process: Unclear dependencies
```

### After Refactoring
```
CSS Files: 200 KB (core + axicons only)
JS Files: 150 KB (clean, modular)
Pages: Consistent pattern throughout
Build Process: Clean, single source of truth
Release: Professional, cohesive v2.0.0
```

---

## 8. RISKS & MITIGATION

| Risk | Mitigation |
|------|-----------|
| Breaking doc pages | Update all 74 files systematically, test as you go |
| Lost styling | Keep new axiom.css, doc-styles.css consolidated |
| Dbase sync issues | Copy to dbase after each phase, commit separately |
| Build tool conflicts | Verify build output matches expectations |
| Icon rendering issues | Keep axicons.js and axicons.css aligned |

---

## 9. RECOMMENDED ORDER

1. **Cleanup** (safe, no risk)
2. **Build & Release** (verify everything works)
3. **Update Documentation** (systematic, one section at a time)
4. **Sync to dbase** (final step, after verification)

---

## 10. SUCCESS CRITERIA

- ✅ All 74 component pages display correctly
- ✅ No `!important` flags outside axiom.css
- ✅ Dark mode works on all pages
- ✅ Mobile menu works on all pages
- ✅ Responsive at all breakpoints (mobile, tablet, desktop)
- ✅ Icons render correctly (Search, GitHub, Moon, Menu)
- ✅ Footer displays correctly on all pages
- ✅ No console errors
- ✅ Build process clean and fast
- ✅ dbase synchronized correctly
- ✅ Release tagged and documented

---

## Files to Act On

### DELETE IMMEDIATELY (Safe)
```bash
rm css/axiom.css.backup
rm css/index-preview.css.backup
rm css/index-preview.css.bak
rm css/footer-fix.css
rm css/site.css
rm index.html.bak
rm js/axiom.min.js
```

### KEEP & UPDATE (Already done)
```
css/axiom.css ✅
css/_components.css ✅
css/_variables.css ✅
css/_animations.css ✅
css/_utilities.css ✅
css/axicons.css ✅
js/axiom.js ✅
js/axicons.js ✅
```

### REVIEW
```
css/doc-preview.css (consolidate)
css/doc-styles.css (consolidate)
js/index-page-manager.js
js/code-copy.js
js/release-loader.js
```

### UPDATE (Next steps)
```
74 component pages in docs/components/
Other documentation pages
dbase synchronized files
```
