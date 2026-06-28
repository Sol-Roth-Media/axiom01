# Axiom01 v2.1.2 — Release Readiness Checklist

## 🔴 CRITICAL BLOCKING ISSUES (Fix before release)

### Issue 1: Philosophy Audit Fails
**Status:** ❌ FAIL  
**Command:** `npm run audit:philosophy --enforce`  
**Why it matters:** Documentation site violates framework's core philosophy  
**Effort:** 6-8 hours

- [ ] Remove 205+ inline `style=""` attributes from index.html
- [ ] Move styles to semantic component classes in CSS
- [ ] Eliminate 17+ utility-class patterns (`flex`, `grid-cols-`, `gap-`, etc.)
- [ ] Fix components-overview.html multi-class budget (9 > 8 limit)
- [ ] Fix components-overview.html class token budget (35 > 34 limit)
- [ ] Verify audit passes: `npm run audit:philosophy --enforce`

**Files to refactor:**
- `index.html` (primary offender: 205 inline styles)
- `docs/components-overview.html` (budget violations)
- `docs/animations.html` (highest token density: 272)
- `docs/styling-guide.html` (214 tokens)
- `docs/layout-advanced.html` (135 tokens)

---

### Issue 2: Component Lifecycle Not Enforced
**Status:** ⚠️ INCONSISTENT  
**Command:** `npm run audit:critical-interactions`  
**Why it matters:** Memory leaks, inconsistent developer experience  
**Effort:** 2-3 hours

- [ ] Verify all `js/components/*.js` files expose `destroy()` method
- [ ] Remove 22+ inline `onclick` handlers from docs pages
- [ ] Replace with event delegation + `data-*` attributes
- [ ] Run: `npm run audit:critical-interactions` (must PASS)
- [ ] Verify no memory leaks in component initialization/destruction

**Files to fix:**
- `docs/animations.html` (inline onclick handlers)
- `docs/components/modal.html` (inline onclick handlers)
- `docs/components/notification.html` (inline onclick handlers)
- All `js/components/*.js` (verify `destroy()` exists)

---

### Issue 3: Full Test Suite Fails
**Status:** ⚠️ FAILING  
**Command:** `npm run test`  
**Why it matters:** Release gate, ensures everything works together  
**Effort:** Depends on findings

- [ ] Run: `npm run test`
- [ ] Fix any failures in order:
  - [ ] `audit:pre-release` PASS
  - [ ] `audit:philosophy` PASS
  - [ ] `audit:runtime-loader` PASS
  - [ ] `audit:runtime-loader-failures` PASS
  - [ ] `audit:critical-interactions` PASS
  - [ ] `audit:gestures` PASS
  - [ ] `audit:a11y-smoke` PASS

---

## 🟡 RECOMMENDED FIXES (Should do)

### Issue 4: Missing High-Priority Documentation Pages
**Status:** ⚠️ INCOMPLETE  
**Why it matters:** User navigation, discoverability  
**Effort:** 4-6 hours (or defer to v2.2.0)

- [ ] Decide: Fix now or defer to v2.2.0 roadmap?
  - If **now**: Create stub pages for missing docs
  - If **defer**: Document in release notes + roadmap
- [ ] Create or plan:
  - [ ] `docs/components-simple.html` (beginner components)
  - [ ] `docs/components-advanced.html` (complex components)
  - [ ] `docs/components-category-view.html` (searchable directory)

---

### Issue 5: index.html is Too Large
**Status:** ⚠️ MAINTAINABILITY  
**Why it matters:** 7,418 lines, hard to update, serves as demo  
**Effort:** 4-6 hours (or defer)

- [ ] Decide: Refactor now or defer to v2.2.0?
  - If **now**: Extract footer, hero, sections into reusable patterns
  - If **defer**: Document tech debt
- [ ] If refactoring:
  - [ ] Extract footer CSS (already partially in `css/_components.css`)
  - [ ] Create `.hero-banner` semantic class
  - [ ] Create `.feature-showcase` semantic class
  - [ ] Create `.theme-explorer` semantic class
  - [ ] Move inline styles to `css/index-page.css`
  - [ ] Target: Reduce to ~3,500 lines

---

## ✅ VERIFICATION CHECKLIST

### Before Running Release Commands
- [ ] All CRITICAL issues resolved
- [ ] Full test suite passes: `npm run test`
- [ ] Philosophy audit passes: `npm run audit:philosophy --enforce`
- [ ] No inline `style=""` in docs (or <10 exceptions)
- [ ] No inline onclick handlers in docs (or <5 exceptions)
- [ ] Component destroy() methods verified
- [ ] CSS minification complete: `npm run build:css`
- [ ] JavaScript minification complete: `npm run minify:js`

### Release Steps
```bash
# 1. Verify everything still works
npm run test

# 2. Update version if needed
npm run update-release

# 3. Build distribution
npm run build

# 4. Verify bundle sizes
# CSS: 13.3 KB (gzipped)
# JS: 1.0 KB (gzipped)
ls -lh css/axiom.min.css

# 5. Create git tag
git tag v2.1.2

# 6. Push to GitHub
git push origin main --tags

# 7. Publish to NPM
npm publish

# 8. Create GitHub release with changelog
```

---

## 📊 SUCCESS CRITERIA

### Metrics Before Release
```
Philosophy Audit:        ❌ FAIL → ✅ PASS
Multi-class Budget:      ❌ OVER → ✅ PASS
Inline Styles:           ❌ 205+ → ✅ <10
Inline Onclick:          ❌ 22   → ✅ 0
Component destroy():     ⚠️  inconsistent → ✅ 100%
All Tests:               ❌ FAIL → ✅ PASS
```

### Quality Gates
- ✅ `npm run test` returns exit code 0
- ✅ `npm run audit:philosophy --enforce` returns exit code 0
- ✅ CSS bundle: 13.3 KB (±0.5 KB)
- ✅ JS bundle: 1.0 KB (±0.1 KB)
- ✅ 73 components working
- ✅ 149 design tokens defined
- ✅ WCAG 2.1 AA compliance verified

---

## 🕐 TIME ESTIMATES

| Task | Priority | Hours | Notes |
|------|----------|-------|-------|
| Fix philosophy audit violations | CRITICAL | 6-8 | index.html refactor |
| Remove inline onclick handlers | CRITICAL | 2-3 | docs pages |
| Verify component lifecycle | CRITICAL | 2-3 | destroy() methods |
| Run full test suite | CRITICAL | 0.5 | automated |
| Create missing doc pages | MEDIUM | 4-6 | or defer to v2.2.0 |
| Refactor index.html size | MEDIUM | 4-6 | or defer to v2.2.0 |
| **TOTAL (Critical Only)** | | **10-14** | ~1-2 developer days |
| **TOTAL (All Items)** | | **20-28** | ~3-4 developer days |

**Recommendation:** Ship today with CRITICAL fixes only (10-14 hours). Add MEDIUM items to v2.2.0 roadmap.

---

## 🚀 POST-RELEASE (v2.2.0 Roadmap)

- [ ] Implement theme generator tool
- [ ] Create missing documentation pages
- [ ] Add ESLint rules (prevent inline styles in docs)
- [ ] Add Stylelint rules (enforce CSS variables)
- [ ] Add pre-commit hooks (run philosophy audit)
- [ ] Create framework integration guides (React, Vue, Svelte)
- [ ] Expand component library (if needed)
- [ ] Performance audit and optimization

---

## 📝 Notes

**For Release Manager:**
1. This checklist should be completed **before** v2.1.2 tag is created
2. CRITICAL issues are **blocking** — cannot ship without fixes
3. MEDIUM issues are **recommended** — improves quality but can be deferred
4. Use this as a PR checklist during final review
5. All tests must pass: `npm run test`

**For Team:**
- Share this checklist with any developers working on v2.1.2
- Track progress using GitHub Issues or PR comments
- Update this document if new issues are discovered
- Post-release: Schedule v2.2.0 work from roadmap section

---

**Generated:** 2025 | **Version:** Axiom01 v2.1.2 | **Status:** Ready with Critical Issues
