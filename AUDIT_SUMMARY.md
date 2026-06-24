# Axiom01 Framework Audit - Executive Summary

## What Is Axiom01?

A **semantic HTML-first, CSS-variable driven web framework** that prioritizes:

✓ Semantic markup (no divitis)  
✓ Minimal custom classes (no BEM)  
✓ CSS variables for theming  
✓ Accessibility by default (WCAG 2.1 AA)  
✓ Dark mode support  
✓ Pure HTML/CSS/SVG (no dependencies)  

---

## What I Found

The Axiom01 **documentation site contradicts its own philosophy**. While the framework CSS is well-designed, the HTML pages implementing it violate every core principle.

### By The Numbers

| Metric | Finding |
|--------|---------|
| **Pages Audited** | 83 component pages |
| **Violations Found** | 139+ instances |
| **Inline Styles** | 50+ pages using `style=""` |
| **Custom Classes** | 83/83 pages have unknown classes |
| **Divitis Issues** | 15+ pages using non-semantic divs |
| **Div Roles (Anti-Pattern)** | 10+ pages using `<div role="X">` |
| **Tailwind Classes** | Mixed framework confusion (index.html) |

---

## The Problem (In Plain English)

### What Axiom01 Says
> "Use semantic HTML. No custom classes. No BEM. No inline styles."

### What the Site Actually Does

**Example 1: Inline Styles**
```html
<!-- This violates principle 1 -->
<label style="display: block; margin-bottom: var(--a-space-s);">
```

**Example 2: Custom Classes**
```html
<!-- .form-demo is not a framework class -->
<div class="form-demo">
```

**Example 3: Anti-Pattern Roles**
```html
<!-- Should use <nav>, not <div role="navigation"> -->
<div role="navigation">
```

**Example 4: Tailwind Mixing**
```html
<!-- These classes aren't Axiom01 -->
<div class="max-w-sm delay-3 border">
```

---

## Top 5 Violations by Severity

### 1. 🔴 Inline Styles (50+ Pages)

**Current State:**
- Every page has `style=""` attributes
- Margins, padding, colors all inlined
- Breaks CSS variable theme system

**Why It's Wrong:**
- Makes dark mode harder to implement
- Coupling presentation to HTML
- Can't batch-update styling
- Defeats "semantic HTML first" principle

**Fix:**
Move to CSS classes or semantic elements

---

### 2. 🔴 Custom Classes (83/83 Pages)

**Current State:**
- `.form-demo` - not a framework class
- `.github` - should be `btn btn-secondary`
- `.menu`, `.search`, `.content` - undefined
- `.button-group`, `.title` - non-framework

**Why It's Wrong:**
- No developers know what these do
- Documentation says "no custom classes"
- Makes framework harder to learn
- Creates maintenance burden

**Fix:**
Use only framework core classes

---

### 3. 🟠 Divitis (Non-Semantic Markup)

**Current State:**
```html
<!-- ❌ Wrong -->
<div class="nav">
  <div class="brand">...</div>
  <div class="links">
    <div class="link"><a href="/">Home</a></div>
  </div>
</div>

<!-- ✓ Right -->
<nav>
  <a href="/" class="brand">...</a>
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>
```

**Why It's Wrong:**
- Harder for screen readers
- Violates "Semantic HTML First" principle
- Accessibility compromise

---

### 4. 🟠 Div Roles (Accessibility Anti-Pattern)

**Current State:**
```html
<div role="tabpanel">...</div>
```

**Why It's Wrong:**
- `role` is a fallback, not a replacement
- Should use semantic `<section>` instead
- ARIA is for inaccessible elements

**Fix:**
```html
<section id="tab-content">...</section>
```

---

### 5. 🟡 Framework Confusion (index.html)

**Current State:**
- Mixes Tailwind classes (`max-w-sm`, `delay-3`)
- Uses Bootstrap-style utilities (`border`)
- Confuses developers about what's Axiom01

**Why It's Wrong:**
- Developers don't know which classes are framework
- Makes adoption harder
- Breaks portability

---

## Framework Strengths (Keep These)

✅ **Core Components** - `btn`, `card`, `alert`, `form-group`, `form-control` are solid  
✅ **CSS Variables** - Complete color/spacing system via vars  
✅ **Semantic CSS** - Framework doesn't force custom classes  
✅ **Dark Mode Support** - Proper implementation via data-theme  
✅ **Axicons** - Clean SVG icon system (now fixed!)  

---

## What Needs Fixing

### Quick Wins (Can Fix in Days)

1. **Remove all inline `style=""` attributes** (50+ locations)
2. **Create `docs.css`** for documentation-only classes
3. **Fix `<div role="X">` anti-patterns** (10 files)
4. **Rename custom classes** to framework equivalents

### Medium Work (1-2 Weeks)

1. Batch-process all 83 pages
2. Add linting rules (htmlhint config)
3. Create developer guide
4. Set up pre-commit hooks

### Long-term (Ongoing)

1. Enforce compliance with CI/CD
2. Document best practices
3. Consider adding utility classes (optional, not BEM)

---

## The Roadmap

### Phase 1: Stop the Bleeding (3 days)

1. Create `docs/docs.css` file
2. Fix critical 5 pages (index.html, form-elements.html, etc.)
3. Document `.component-example` standard pattern

**Deliverable:** A model of how pages SHOULD look

### Phase 2: Scale the Fix (1 week)

1. Batch-fix remaining 78 pages
2. Add HTML linting rules
3. Update developer guide

**Deliverable:** All 83 pages compliant

### Phase 3: Prevent Regression (Ongoing)

1. Pre-commit linting hooks
2. CI/CD compliance checks
3. Team guidelines documented

**Deliverable:** No future violations

---

## What Success Looks Like

✅ **Zero inline styles** (except for data attributes)  
✅ **All navigation uses `<nav>`**  
✅ **All lists use `<ul>` or `<ol>`**  
✓ **Custom classes only in `docs.css`**  
✓ **No `<div role="X">` where semantic exists**  
✓ **HTML passes W3C validator**  
✓ **Matches stated philosophy in AXIOM01_STYLING_GUIDE.md**  
✓ **WCAG 2.1 AA compliant**  

---

## Key Recommendations

### 1. Accept Documentation Is Not Framework

Create a clear separation:

```
Axiom01 Core Framework (portable)
├── CSS variables
├── Core components (btn, card, alert, form-group)
└── Can be used in any project

Documentation Examples (not portable)
├── Uses .component-example for demos
├── Uses .component-section for layout
└── Should NOT be copied to production
```

### 2. Create Developer Onboarding Guide

"Axiom01 Quick Start" document showing:
- ✓ What classes to use
- ❌ What NOT to do
- Examples of right/wrong patterns

### 3. Add Linting ASAP

One `.htmlhint.json` config prevents future violations

### 4. Build Example Generation Tool (Optional)

Auto-generate documentation pages from component source to ensure consistency

---

## Documents Created

I've prepared three comprehensive documents in your project root:

### 1. **AXIOM01_COMPLIANCE_AUDIT.md** (15KB)
Deep technical analysis of all violations, categorized by type. Includes:
- Detailed violation list
- Root cause analysis
- Before/after code examples
- Recommendations by priority

**Read this if:** You want complete technical details

### 2. **REMEDIATION_CHECKLIST.md** (13KB)
Step-by-step fixing guide with:
- Phase 1/2/3 breakdown
- Page-by-page fixes for priority files
- Complete `docs.css` file ready to copy
- Testing checklist

**Read this if:** You want to know exactly how to fix it

### 3. **AXICONS_LOADING_AUDIT.md** (7KB)
Axicons loading status and verification (bonus from earlier work)

**Read this if:** You want to verify icon fixes are complete

---

## Quick Action Items

### If You Have 30 Minutes
1. Read this summary
2. Review REMEDIATION_CHECKLIST.md (Phase 1 section)
3. Decide approval on approach

### If You Have 1 Day
1. Review compliance audit
2. Create `docs/docs.css` with provided content
3. Fix index.html (most complex page)
4. Test in browser

### If You Have 1 Week
1. Complete Phase 1 critical fixes
2. Set up htmlhint linting
3. Batch-fix remaining pages
4. Test all 83 pages

---

## Framework Philosophy Recap

Axiom01 is built on these principles:

1. **Semantic HTML First** - Every element has meaning
2. **CSS Variables** - Theming via custom properties
3. **No Custom Classes** - Use only core components
4. **No BEM** - Avoid complex class naming
5. **Accessible by Default** - WCAG 2.1 AA compliance
6. **Minimal Dependencies** - Pure HTML/CSS/SVG

**The documentation site currently violates all of these.**

Fixing it makes Axiom01 credible, learnable, and maintainable.

---

## Questions to Answer

Before proceeding, clarify:

1. **Framework Scope**: Are utility classes like `.text-muted` acceptable? (For documentation use only)
2. **Custom Components**: Should documentation files have framework-specific classes or only core?
3. **Priority**: Which pages should we fix first?
4. **Timeline**: Days? Weeks? Months?
5. **Enforcement**: Should we add pre-commit linting?

---

## Next Steps

1. **Review** these findings with team
2. **Decide** which fixes to prioritize
3. **Allocate** time/resources
4. **Implement** using the checklists provided
5. **Test** across browsers/devices
6. **Enforce** with CI/CD

---

## Contact Points

**For Technical Details:** See AXIOM01_COMPLIANCE_AUDIT.md  
**For Implementation:** See REMEDIATION_CHECKLIST.md  
**For Axicons Status:** See AXICONS_LOADING_AUDIT.md  

---

**Audit Completed:** 2025  
**Status:** ⚠️ Non-Compliant (Fixable)  
**Priority:** HIGH  
**Estimated Fix Time:** 1-2 weeks  
**Impact:** Restores framework credibility and usability

---

# Quick Reference: What to Fix

## By Page Count
- **Most Violations**: docs/media-advanced.html, docs/animations.html, docs/axicons.html
- **Most Critical**: index.html (homepage credibility)
- **Most Common Pattern**: Custom classes + inline styles

## By Violation Type
1. **Inline Styles**: 50+ pages - HIGH priority
2. **Custom Classes**: 83/83 pages - HIGH priority
3. **Divitis**: 15 pages - MEDIUM priority
4. **Div Roles**: 10 pages - MEDIUM priority

## By Risk
- **High Risk**: index.html (first impression)
- **High Risk**: docs/form-elements.html (common use case)
- **Medium Risk**: Remaining component pages

---

**I'm ready to help implement any of these fixes.**

What would you like to tackle first?
