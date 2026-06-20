# PHASE 1: QUICK WINS - IMPLEMENTATION PLAN

## Goal: Highest Impact, Lowest Effort Improvements (Week 1)

### 1. Copy Buttons on Code Blocks ✅ IN PROGRESS
**Status**: Foundation exists, needs expansion
**Impact**: ⭐⭐⭐⭐⭐ High
**Effort**: 🟢 Low

**Plan**:
- Create universal `copyCode()` utility function
- Add copy buttons to all `<pre><code>` blocks
- Add copy buttons to all `.code-snippet` elements
- Add visual feedback (toast notification)
- Add keyboard shortcut (Ctrl+C on focused code)
- Test on all page types

**Files to modify**:
- `js/index-page-manager.js` - Add generic copy function
- `js/axiom.js` - Add code-block initialization
- `css/axiom.css` - Add copy button styling
- All HTML files with code blocks

**Quality checks**:
- ✓ Semantic HTML (use <button> not <a>)
- ✓ Accessibility (proper aria labels)
- ✓ Dark mode support
- ✓ Mobile friendly
- ✓ Philosophy: Keep simple, minimal markup

---

### 2. Component Anatomy Diagrams
**Status**: Design phase
**Impact**: ⭐⭐⭐⭐⭐ High
**Effort**: 🟢 Low

**Plan**:
- Create SVG template for component anatomy
- Show component structure with labels
- Indicate required vs optional parts
- Show ARIA attributes
- Create for key components first (Button, Card, Modal, Form)

**Quality checks**:
- ✓ SVG semantic and accessible
- ✓ Uses Axiom colors
- ✓ Responsive sizing
- ✓ High contrast in light/dark modes

---

### 3. "When to Use" Cards
**Status**: Template phase
**Impact**: ⭐⭐⭐⭐⭐ High
**Effort**: 🟢 Low

**Plan**:
- Create standardized card template
- Three sections: ✓ Use, ✗ Don't, ? Consider
- Add to component pages systematically
- Use consistent styling

**Quality checks**:
- ✓ Uses design tokens
- ✓ Semantic HTML
- ✓ Accessible to screen readers
- ✓ Philosophy: Clear guidance without bloat

---

### 4. Related Components Section
**Status**: Template phase
**Impact**: ⭐⭐⭐⭐ Medium
**Effort**: 🟢 Low

**Plan**:
- Create mapping of related components
- Add section to end of each component page
- Link to similar/complementary components
- Show thumbnail preview

**Quality checks**:
- ✓ Good cross-linking
- ✓ Semantically structured
- ✓ Responsive grid layout

---

### 5. Hero Statistics Animations
**Status**: Design phase
**Impact**: ⭐⭐⭐⭐ Medium
**Effort**: 🟢 Low

**Plan**:
- Add count-up animation to stats
- Trigger on page load or scroll into view
- Use CSS animations (respects prefers-reduced-motion)
- Smooth easing function

**Quality checks**:
- ✓ Respects motion preferences
- ✓ Uses design token animations
- ✓ Accessible (no info lost without animation)
- ✓ Performance optimized

---

### 6. Better Focus Indicators
**Status**: CSS enhancement
**Impact**: ⭐⭐⭐⭐⭐ High (Accessibility)
**Effort**: 🟢 Low

**Plan**:
- Enhance `:focus-visible` styling
- Add focus ring design token
- Apply to all interactive elements
- Ensure WCAG AAA compliance

**Quality checks**:
- ✓ WCAG AAA focus indicators
- ✓ High contrast
- ✓ Visible on all backgrounds
- ✓ Dark mode compatible

