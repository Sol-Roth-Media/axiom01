# Axiom01 Release Verification Checklist
*Master verification document - Check this before every release*

## ✅ Core Philosophy Compliance

### Semantic HTML First
- [ ] All components use proper semantic HTML elements (`<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`)
- [ ] No unnecessary `<div>` wrappers where semantic elements exist
- [ ] Headings follow proper hierarchy (h1 → h2 → h3, etc.)
- [ ] Interactive elements use appropriate tags (`<button>`, `<a>`, `<input>`)

### Class Usage Rules (CRITICAL)
- [ ] **NO BEM CLASSES**: Zero instances of `__` or `--` in class names
- [ ] **MINIMAL CLASSES**: Maximum one class per component root element
- [ ] **NO UTILITY STACKING**: No multiple utility classes on elements
- [ ] **DESCENDANT STYLING**: Child elements styled via CSS descendant selectors
- [ ] **SEMANTIC VARIANTS**: Only single, descriptive variant classes (e.g., `primary`, `secondary`, `large`)

### CSS Implementation
- [ ] All spacing uses `--a-space-*` variables (no hardcoded px/rem)
- [ ] All colors use `--a-color-*` variables
- [ ] All typography uses `--a-font-*` variables
- [ ] Components follow `.component descendant` selector pattern
- [ ] No inline styles in HTML (except dynamic demo purposes)

## ✅ Accessibility (WCAG 2.1 AA)

### Keyboard Navigation
- [ ] All interactive elements are focusable
- [ ] Tab order is logical and predictable
- [ ] Focus indicators are clearly visible
- [ ] No keyboard traps exist
- [ ] Skip links provided where necessary

### Screen Reader Support
- [ ] All images have appropriate alt text
- [ ] Form inputs have proper labels
- [ ] ARIA attributes used correctly for complex widgets
- [ ] Live regions implemented for dynamic content
- [ ] Landmark roles properly assigned

### Color & Contrast
- [ ] All text meets 4.5:1 contrast ratio minimum
- [ ] Large text meets 3:1 contrast ratio minimum
- [ ] Color is not the only means of conveying information
- [ ] High contrast mode support tested

## ✅ Technical Quality

### Performance
- [ ] Core CSS under 15KB gzipped
- [ ] No unused CSS rules
- [ ] Critical CSS inlined where appropriate
- [ ] Images optimized (WebP where supported)
- [ ] JavaScript modules load efficiently

### Security
- [ ] All external links have `rel="noopener"` when appropriate
- [ ] No inline scripts (CSP compliant)
- [ ] Form inputs properly validated
- [ ] XSS prevention measures in place

### Browser Support
- [ ] Works in Chrome 90+
- [ ] Works in Firefox 88+
- [ ] Works in Safari 14+
- [ ] Works in Edge 90+
- [ ] Graceful degradation for older browsers

## ✅ Content & Links

### Documentation
- [ ] All internal links work correctly
- [ ] All external links are valid and appropriate
- [ ] Code examples are syntactically correct
- [ ] Screenshots are up-to-date
- [ ] Version numbers are consistent

### Component Library
- [ ] All component pages load without errors
- [ ] Component previews work in iframe
- [ ] Search functionality operates correctly
- [ ] Category filters function properly
- [ ] Fullscreen view opens correctly

### Search Functionality
- [ ] Main site search works with autocomplete
- [ ] Documentation search returns relevant results
- [ ] Search indices are up-to-date
- [ ] Search UI is accessible

## ✅ Code Quality Checks

### HTML Validation
```bash
# Run HTML validation
npm run validate-html
```
- [ ] All HTML files pass W3C validation
- [ ] No deprecated attributes used
- [ ] Proper DOCTYPE declarations

### CSS Validation
```bash
# Run CSS validation  
npm run validate-css
```
- [ ] All CSS files pass W3C validation
- [ ] No vendor prefix issues
- [ ] Grid/Flexbox syntax correct

### JavaScript Quality
```bash
# Run JS linting
npm run lint-js
```
- [ ] All JS files pass ESLint
- [ ] No console.log statements in production
- [ ] Proper error handling implemented

## ✅ Component Verification

For each component, verify:
- [ ] Single root class only (e.g., `.card`, `.button`, `.modal`)
- [ ] Child elements styled with descendant selectors (e.g., `.card header`, `.card p`)
- [ ] Variants use single modifier classes (e.g., `.card.elevated`, `.button.primary`)
- [ ] No BEM syntax anywhere (`card__header`, `button--large`)
- [ ] Proper semantic HTML structure
- [ ] Accessibility attributes present
- [ ] Keyboard navigation works
- [ ] Responsive behavior correct

## 🚨 Red Flags to Reject

### Immediate Rejection Criteria
- Any BEM class names (`component__element--modifier`)
- Multiple utility classes on single element
- Non-semantic HTML where semantic elements exist
- Accessibility violations (missing alt text, improper ARIA)
- Broken internal links
- CSS with hardcoded pixel values instead of design tokens
- Components that require multiple classes to function

### Quality Issues
- Inconsistent spacing not using `--a-space-*` variables
- Colors not using `--a-color-*` variables
- Poor contrast ratios
- Missing focus states
- Non-responsive components
- JavaScript errors in console

## 📋 Pre-Release Checklist

1. [ ] Run full verification checklist above
2. [ ] Test all components in isolation
3. [ ] Test complete page layouts
4. [ ] Verify search functionality works
5. [ ] Check all documentation links
6. [ ] Validate HTML/CSS/JS
7. [ ] Test accessibility with screen reader
8. [ ] Test keyboard navigation
9. [ ] Performance audit (Lighthouse)
10. [ ] Cross-browser testing

## 🎯 Release Criteria

**ALL items above must be checked ✅ before release approval.**

**Verification Date**: ___________  
**Verified By**: ___________  
**Version**: ___________  
**Release Ready**: [ ] YES / [ ] NO

---

*This document must be updated whenever new components or features are added to the framework.*
