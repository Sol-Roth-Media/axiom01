# Axiom CSS Testing Checklist

## Pre-Deployment Validation (REQUIRED for every change)

### 1. Main Site Testing
- [ ] **Index.html loads properly** at http://localhost:8000
- [ ] **Hero section** displays correctly with proper background and spacing
- [ ] **Philosophy section cards** show proper spacing, icons, and hover effects
- [ ] **Component browser** displays and functions correctly
- [ ] **Navigation** works and is properly styled
- [ ] **Footer** displays with correct layout
- [ ] **Theme toggle** functions properly
- [ ] **Mobile responsiveness** works on narrow screens

### 2. Documentation Site Testing
- [ ] **Docs index** loads at http://localhost:8000/docs/
- [ ] **Individual component pages** load properly (test at least 3)
- [ ] **Code examples** display with proper syntax highlighting
- [ ] **Interactive examples** function correctly
- [ ] **Navigation** between docs pages works
- [ ] **Docs-specific styling** doesn't conflict with main site

### 3. Component Pages Testing
- [ ] **All 17+ component pages** load without errors
- [ ] **Interactive elements** function properly
- [ ] **Code previews** display correctly
- [ ] **Responsive design** works across screen sizes

### 4. CSS Validation
- [ ] **No CSS errors** in axiom.css
- [ ] **No CSS errors** in docs.css
- [ ] **CSS variables** are properly defined and accessible
- [ ] **Browser compatibility** tested (Chrome, Firefox, Safari)

### 5. JavaScript Functionality
- [ ] **No console errors** on any page
- [ ] **Interactive components** work as expected
- [ ] **Theme switching** functions across all pages
- [ ] **Component browser** navigation works

### 6. Performance Check
- [ ] **Page load times** are reasonable (<2s)
- [ ] **CSS file sizes** are optimized
- [ ] **No render-blocking** issues

### 7. Philosophy & Semantic Compliance
- [ ] **Codebase adheres to `AI_IMPLEMENTATION_GUIDE.md` rules** (e.g., no inline styles, correct card semantics, minimal classes, no BEM)

## Error Response Protocol
If ANY test fails:
1. **STOP immediately**
2. **Fix the specific issue**
3. **Re-run ALL tests**
4. **Document the fix**
5. **Only then mark task complete**

## Never Skip These Steps
- Always test main site first
- Always test docs site second
- Always validate CSS syntax
- Always check console for errors
- Always test responsive design

## Codebase Standards
- [ ] **Codebase adheres to `AI_IMPLEMENTATION_GUIDE.md` rules** (e.g., no inline styles, correct card semantics).
