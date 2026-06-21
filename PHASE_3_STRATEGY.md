# Phase 3: Documentation Refactoring Strategy

## Overview
- **Total files to update:** 94 HTML pages
  - 20 root documentation pages
  - 74 component pages
- **Goal:** All pages use ONLY core `axiom.css` + `axicons.css` with semantic HTML
- **Pattern:** Match new `index.html` structure (header, main content, footer)
- **Estimated time:** 2-3 hours

## Master Template
Location: `/docs/MASTER_TEMPLATE.html`

Key patterns:
- **Stylesheets:** ONLY axiom.css + axicons.css
- **Header:** Semantic `<header class="main">` with navigation
- **Footer:** New `<footer class="ax-footer">` component
- **Content:** Semantic `<main>` with `<section class="container">`
- **Scripts:** Core only (axiom.js, axicons.js, sticky-header.js, release-loader.js)

## Batched Approach

### Batch 1: Root Documentation Pages (20 files)
High-value pages that set the pattern:
- components-overview.html ✅ (already updated)
- colors-advanced.html
- typography-advanced.html
- layout-advanced.html
- form-elements.html
- interactive-playground.html
- theme-customization-wizard.html
- markdown-template.html
- [16 more...]

**Action:** Recreate these 20 pages using master template
**Time:** ~45 min
**Priority:** HIGH (sets pattern for components)

### Batch 2: Component Pages 1-30
From accordion.html to dropdown.html

**Action:** Recreate 30 component pages
**Time:** ~45 min
**Priority:** MEDIUM

### Batch 3: Component Pages 31-60
From drawer.html to notification.html

**Action:** Recreate 30 component pages
**Time:** ~45 min
**Priority:** MEDIUM

### Batch 4: Component Pages 61-74
From page-header.html to video-player.html

**Action:** Recreate 14 component pages
**Time:** ~15 min
**Priority:** MEDIUM

## Core Axiom Classes Reference

### Typography & Spacing
- `<h1>`, `<h2>`, `<h3>` - Use semantic headings
- `.container` - Max-width wrapper
- Use framework spacing: `var(--a-space-*)`

### Components
- `.button.primary`, `.button.secondary`, `.button.outline`
- `.card` - Card component
- `.badge` - Badge component
- `.alert` - Alert component
- `.button.small`, `.button.medium`, `.button.large`

### Layout
- `<section>` - Semantic sections
- `<main>` - Main content
- `<header>`, `<footer>` - Semantic headers/footers
- `.ax-footer-*` - Footer component classes

### Navigation
- `<header class="main">` - Main header with navigation
- `.brand` - Logo/brand link
- `.links` - Navigation links
- `.actions` - Header action buttons

### Icons
- `<span class="axicon render" data-name="IconName"></span>`

## Page Structure Template

```html
<!-- HEADER -->
<header class="main">
  <nav>
    <a href="../index.html" class="brand">[Ax01]</a>
    <ul class="links"><!-- nav links --></ul>
    <div class="actions"><!-- search, github, theme, menu --></div>
  </nav>
</header>

<!-- MAIN -->
<main>
  <section class="container">
    <header>
      <h1>Page Title</h1>
      <p>Description</p>
    </header>
    
    <!-- YOUR CONTENT -->
    <section>
      <h2>Section Title</h2>
      <!-- use core classes only -->
    </section>
  </section>
</main>

<!-- FOOTER -->
<footer class="ax-footer">
  <!-- ax-footer structure -->
</footer>
```

## DO & DON'T

### ✅ DO
- Use `<h1>`, `<h2>`, `<h3>` semantic headings
- Use `.button`, `.card`, `.badge` core classes
- Use `var(--a-space-*)` for spacing
- Use `var(--a-color-*)` for colors
- Use semantic HTML (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`)
- Use `.container` for content width constraints
- Use `.axicon.render` for icons

### ❌ DON'T
- Use `doc-preview.css` (delete all references)
- Use inline `<style>` tags
- Use !important flags (except in core axiom.css)
- Use page-specific CSS classes
- Use outdated footer.main (use ax-footer)
- Create custom styling - use framework only

## Validation Checklist for Each Page

- [ ] Only axiom.css + axicons.css in `<head>`
- [ ] Uses semantic HTML throughout
- [ ] Header uses `.main` with navigation
- [ ] Footer uses `.ax-footer` component
- [ ] No inline `<style>` tags
- [ ] No `doc-preview.css` references
- [ ] All links use core navigation structure
- [ ] Icons use `.axicon.render` pattern
- [ ] Responsive at mobile/tablet/desktop
- [ ] Dark mode toggle works
- [ ] Mobile menu works
- [ ] No console errors

## Recommended Execution Order

1. **Start with root docs (Batch 1)** - Templates set pattern
2. **Then component pages (Batches 2-4)** - Apply consistent pattern
3. **Final verification** - Test all pages at multiple resolutions
4. **Commit & sync to dbase** - Phase 4

## Success Criteria

✅ All 94 pages updated
✅ Only axiom.css + axicons.css used
✅ Semantic HTML throughout
✅ Consistent header/footer/nav pattern
✅ Responsive at all resolutions
✅ Dark mode works on all pages
✅ Mobile menu works on all pages
✅ No console errors on any page
✅ Professional, cohesive appearance

## Notes

- This is a large but methodical refactoring
- Each page follows the same pattern, so updates get faster
- Use master template as clipboard reference
- Test pages in browser after updating batches
- Commit after each batch
