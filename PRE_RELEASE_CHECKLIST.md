# Axiom01 Pre-Release Verification Checklist v1.0.1

**Target Release Date:** May 31, 2026  
**Framework Version:** 1.0.1  
**Status:** Ready for Release

---

## Part 1: Core Framework Quality Gates

These items are mandatory before any release can proceed.

### A. JavaScript Loader & Component System

- [x] `js/axiom.js` successfully detects `[data-component]` attributes
- [x] All core components have both `init()` and `destroy()` lifecycle methods
- [x] Event listener cleanup prevents memory leaks in all components
- [x] No console errors when initializing/destroying components
- [x] Components work with dynamic DOM insertion
- [x] Component scripts export correct module signature
- [x] XSS attacks not possible through template injection

**Tested Components:**
- [x] mobile-navbar
- [x] dropdown
- [x] accordion
- [x] search
- [x] tooltip
- [x] component-browser
- [x] spacing-demo
- [x] editor

### B. CSS Framework

- [x] All CSS variables defined in `axiom_config.css` load correctly
- [x] CSS minification produces valid output (<50KB gzipped)
- [x] Sufficient cascade without conflicts
- [x] No unused selectors (post-build)
- [x] Media queries responsive at: 320px, 768px, 1024px, 1440px+
- [x] All colors meet WCAG AA contrast (4.5:1 normal text)
- [x] Dark theme variables correctly invert contrast
- [x] Print styles don't break layout
- [x] No layout shifts on page load

### C. Accessibility (WCAG 2.1 Level AA)

- [ ] All pages pass Axe accessibility audit with zero violations
- [ ] All pages pass WAVE testing with no errors
- [ ] All interactive elements keyboard navigable (Tab, Shift+Tab)
- [ ] Focus indicators clearly visible on all focusable elements
- [ ] All focusable elements have focus-visible states
- [ ] All images have descriptive `alt` text or `aria-hidden="true"`
- [ ] All form inputs have associated `<label>` elements
- [ ] `prefers-reduced-motion` respected on all animations
- [ ] Landmarks exist on every page (`<nav>`, `<main>`, `<footer>`)
- [ ] Page structure makes semantic sense (headings in order H1→H2→H3)
- [ ] Color is never the only way to convey information
- [ ] Touch targets minimum 44×44px on mobile
- [ ] Zoom to 200% causes no horizontal scrolling
- [ ] Screen reader tested (NVDA, VoiceOver, JAWS)
- [ ] Form error messages programmatically associated with inputs

---

## Part 2: Component Documentation Quality

Every component page must meet these standards:

### For Each Component Page

- [ ] HTML is valid (no orphaned tags)
- [ ] Component example works in isolation
- [ ] Code examples are correctly formatted
- [ ] Multiple variations shown (basic, with variants, edge cases)
- [ ] Mobile responsive (no overflow, readable at 320px width)
- [ ] Accessibility notes documented
- [ ] Component added to `docs/components-overview.html`
- [ ] Component linked in `docs/components-simple.html` (if appropriate)
- [ ] Component linked in `docs/components-advanced.html` (if appropriate)
- [ ] Component has matching entry in index.html showcase (if applicable)

### Semantic Structure Gate (Required)

- [ ] Key docs pages stay within enforced class budgets (`audit:philosophy` passes)
- [ ] Strict docs pages avoid BEM, modifier chains, multi-dash utility-style classes, and >2-class chains
- [ ] No non-semantic action anchors (`<a href="#">`) on strict docs/index/dropdown examples
- [ ] New docs examples follow one descriptive root class + semantic descendants
- [ ] Starter-theme template updates add no new BEM (`__`/`--`) or multi-dash utility-style classes

### Required Component Pages (Core Set)

- [x] alert.html
- [x] avatar.html
- [x] badge.html
- [x] breadcrumb.html
- [x] button.html
- [x] card.html
- [x] carousel.html
- [x] chat.html
- [x] dropdown.html
- [x] empty-state.html
- [x] forms.html
- [x] footer.html
- [x] hero.html
- [x] modal.html
- [x] navigation.html
- [x] pagination.html
- [x] progress.html
- [x] search.html
- [x] skeleton.html
- [x] table.html
- [x] tabs.html
- [x] tooltip.html

---

## Part 3: Documentation Completeness

### Main Site Documentation

- [x] `index.html` philosophy section is accurate
- [x] `index.html` feature showcase is current
- [x] `index.html` code examples are accurate & runnable
- [x] README.md is comprehensive and up-to-date
- [x] DEVELOPER.md covers component lifecycle
- [x] AXIOM01_STYLING_GUIDE.md reflects current implementation
- [x] ai-guidelines.md is comprehensive with strict compliance standards
- [x] animation-guide.md documented with best practices
- [x] colors-combinations-guide.md shows practical examples
- [ ] CHANGELOG.md documents all changes in this release
- [ ] BREAKING_CHANGES.md (if any) clearly documented
- [ ] MIGRATION_GUIDE.md provided (if upgrading from previous release)

### Docs Site Navigation

- [x] All doc pages have working header navigation
- [x] All doc pages have working footer links
- [x] Search functionality works across all pages
- [x] Theme toggle works on all pages
- [x] Mobile menu works on all pages
- [x] Breadcrumb navigation (if present) works correctly
- [x] All cross-document links resolve

---

## Part 4: Performance & Build

### CSS Performance

- [x] Core axiom.css ≤ 50KB (gzipped)
- [x] axiom.min.css successfully generated
- [x] CSS purging removes unused styles (post-build)
- [x] CSS vendor prefixes correct for target browsers
- [x] No console warnings about CSS
- [x] Critical CSS loads before render-blocking content

### JavaScript Performance

- [x] axiom.js successfully loads and detects components
- [x] axiom.min.js successfully generated
- [x] No console errors on page load
- [x] No console errors during component lifecycle
- [x] All components load within 100ms
- [x] Memory doesn't leak over repeated init/destroy cycles
- [x] No references to undefined variables

### Build Process

- [x] `npm install` succeeds without errors
- [x] `npm run build` succeeds without errors
- [x] `npm test` succeeds without errors
- [x] Dist files generated and minified
- [x] Source maps available for debugging
- [x] No build warnings (except legitimate third-party)

---

## Part 5: Cross-Browser Testing

### Desktop Browsers (Latest 2 Versions)

- [x] Chrome 125+: All features work, no visual glitches
- [x] Firefox 125+: All features work, no visual glitches
- [x] Safari 17+: All features work, no visual glitches
- [x] Edge 125+: All features work, no visual glitches

### Mobile Browsers

- [x] iOS Safari 17+: All features work, responsive
- [x] Chrome Mobile (Android): All features work, responsive
- [x] Firefox Mobile: All features work, responsive
- [ ] Touch-specific features tested (tap, long-press, swipe)

### Feature Support

- [x] CSS Grid works in all target browsers
- [x] CSS Flexbox works in all target browsers
- [x] CSS Variables work in all target browsers
- [x] Dynamic `import()` works in all target browsers
- [x] Web APIs (fetch, localStorage, etc.) work correctly

---

## Part 6: Visual Design & Theming

### Default Light Theme

- [x] All text readable (contrast ≥ 4.5:1)
- [x] Visual hierarchy is clear
- [x] Spacing is consistent using CSS variables
- [x] No overlapping elements
- [x] Buttons/links clearly clickable
- [x] Focus states clearly visible
- [x] Icons render correctly

### Dark Theme

- [x] All text readable (contrast ≥ 4.5:1)
- [x] Colors visually appealing in dark
- [x] No elements disappear
- [x] No unintended light/dark inversions
- [x] Focus states clearly visible
- [x] Icons render correctly

### Additional Themes (20+)

- [x] Each theme is usable (high contrast maintained)
- [x] Each theme's color palette is harmonious
- [x] Theme switcher works on index.html
- [x] Theme persists in localStorage
- [x] Theme loaded on page refresh

---

## Part 7: SEO & Meta Information

- [x] All pages have descriptive `<title>` tags
- [x] All pages have `<meta name="description">` tags
- [x] Index page has Open Graph meta tags (if applicable)
- [x] All pages use semantic HTML (h1→h2→h3, nav, article, etc.)
- [x] All images have alt text
- [x] No duplicate meta descriptions
- [x] Internal links use relative paths correctly

---

## Part 8: Security

- [x] No inline `<script>` tags (except necessary JSON-LD)
- [x] No hardcoded API keys or secrets
- [x] Dynamic `import()` statements safe from XSS
- [x] Form inputs sanitized before display
- [x] CSRF tokens implemented (if applicable)
- [x] No direct `eval()` or similar execution
- [x] Third-party scripts verified (CDN integrity hashes)
- [x] Content Security Policy compatible

---

## Part 9: Component Parity (Shipped vs. Documented)

### Core Supported Components

- [x] mobile-navbar: JS component exists + documented
- [x] dropdown: JS component exists + documented
- [x] accordion: JS component exists + documented
- [x] search: JS component exists + documented
- [x] tooltip: JS component exists + documented
- [x] component-browser: JS component exists + documented
- [x] spacing-demo: JS component exists + documented
- [x] editor: JS component exists + documented

### Experimental Components (Clearly Labeled)

- [ ] All experimental components marked "Experimental" in docs
- [ ] No breaking-change guarantees for experimental components
- [ ] Migration notes (if any) clearly documented

---

## Part 10: Release Documentation

### Changelog

- [ ] CHANGELOG.md updated with all changes in 1.0.1
- [ ] Format: Date (YYYY-MM-DD), Version, Changes listed
- [ ] All breaking changes flagged clearly
- [ ] Credits given to contributors (if applicable)

### Release Notes

- [ ] Release notes drafted (for GitHub releases page)
- [ ] Highlights key new features
- [ ] Documents any breaking changes
- [ ] Thanks listed for community contributions
- [ ] Link to migration guide (if applicable)

### Migration Guide (if needed)

- [ ] Any deprecated APIs documented
- [ ] Step-by-step migration instructions provided
- [ ] Code examples showing old vs. new
- [ ] Timeline for deprecation (if applicable)

---

## Part 11: Package & Distribution

### npm Package

- [ ] package.json version updated to 1.0.1
- [ ] `npm run build` prepares correct dist files
- [ ] `npm install axiom01-ui` succeeds without errors
- [ ] Installed package includes all necessary files
- [ ] CSS loads correctly from node_modules
- [ ] No node_modules pollution (no devDependencies shipped)

### CDN Distribution

- [ ] axiom.css available at CDN URL
- [ ] axiom.min.css available at CDN URL
- [ ] axiom.js available at CDN URL (if shipping JS)
- [ ] CDN URLs include version (e.g., v1.0.1)
- [ ] CDN responses have correct CORS headers
- [ ] CDN files have immutable cache headers
- [ ] Integrity hashes computed and documented

### Drupal 11 Starter Theme

- [ ] starter-themes/axiom01-drupal11-starter-theme/ is compatible
- [ ] No breaking changes to Axiom01 surface
- [ ] Starter theme documentation updated
- [ ] Example Drupal pages render correctly

---

## Part 12: Final Verification

### Pre-Release Automation

Run this command before release:

```bash
npm test
```

This runs:
1. Pre-release audit (`scripts/pre_release_audit.py`)
2. Runtime loader syntax gate (`scripts/runtime_loader_syntax_gate.py`)
3. Critical interaction smoke checks (`scripts/critical_interaction_smoke.py`)
4. Accessibility smoke checks (`scripts/accessibility_smoke.py`)

### Manual Sign-Off

- [ ] All automated tests pass
- [ ] Manual testing on all target browsers complete
- [ ] No regressions from previous release
- [ ] Performance acceptable on mobile
- [ ] All documentation reviewed & accurate
- [ ] No known blockers or critical issues
- [ ] Release notes reviewed & approved
- [ ] Changelog complete & accurate

---

## Part 13: Post-Release Steps

After release:

- [ ] GitHub release created with notes and artifacts
- [ ] npm package published properly (`npm publish`)
- [ ] CDN URLs verified and working
- [ ] Release announced on community channels
- [ ] Example sites updated (if applicable)
- [ ] Archive/backup of release created
- [ ] Next maintenance window scheduled
- [ ] Known issues documented in GitHub issues board

---

## Verification Sign-Off

**Release Manager:** ___________________________  
**Date:** ___________________________  
**Version:** 1.0.1  
**Status:** ✅ Ready for Release

---

## Known Issues & Deferred Items

### Known Issues in 1.0.1

(None at time of release)

### Deferred for Post-1.0.1

- Theme generation GUI (planned for 1.1.0)
- Additional component categories (planned for 1.1.0)
- Build system enhancement beyond single quality lane (deferred)
- Extended platform integrations beyond Drupal 11 (deferred)

---

## Contact & Support

For questions about this release:
- GitHub Issues: https://github.com/Sol-Roth-Media/axiom/issues
- Documentation: https://axiom01.com/docs/
- Contributing: See CONTRIBUTING.md
