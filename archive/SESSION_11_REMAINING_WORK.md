# Session 11 - Remaining Work & Next Steps

## Completed in This Session
✅ Fixed index.html Variants Guide link - now points to axicons.html
✅ Replaced checkmark icon examples with Zap icons for better visual variety
✅ Added mobile h1 hero scaling (increased by one token size on mobile)

## Still TODO (Remaining 4 tasks)

### Task 1: Fix Components Overview Page
**File**: `/Users/solroth/Sites/axiom01/docs/components-overview.html`
**Issue**: "Component Browser" link is broken or points to non-existent page
**Action**: Remove or replace with valid link
**Time**: 15 minutes

### Task 2: Refactor file-display-download Component
**File**: `/Users/solroth/Sites/axiom01/docs/components/file-display-download.html`
**Issues**:
- Uses BEM-style CSS classes (file-item, file-icon, file-name, file-meta, etc.)
- Uses emoji instead of Axicons
- Does NOT follow Axiom01 semantic philosophy
**Action Required**:
1. Replace emoji with Axicons (📄→File-Text, 🖼️→Image, 🎬→Play, 📦→Package)
2. Replace BEM classes with semantic/single-class approach
3. Use Axiom01 design tokens instead of custom CSS
4. Remove inline styles (color, background, etc.) and use CSS classes
**Time**: 2 hours
**Complexity**: Medium - requires architectural refactoring

### Task 3: Audit All Components for BEM Naming
**Scope**: All 73 component pages
**Find**: Components using BEM-style naming (double-dash, double-underscore patterns)
**Pattern Examples to Find**:
- `.file-item__name`
- `.component--modifier`
- `.element__sub-element`
**Action**: Batch refactor to Axiom01 semantic approach
**Time**: 3-4 hours
**Priority**: Medium - affects consistency

### Task 4: Create Icon Documentation
**File**: Create `/Users/solroth/Sites/axiom01/docs/ICON_GUIDE.md`
**Content Should Include**:
1. **Icon Sources**
   - Axicons: 3,941 SVG icons (you provide them)
   - 5 variants: Base, Thin, Inverted, Color, Premium
   - Loaded via `axicons-base.js`, `axicons-thin-variants.js`, etc.

2. **Usage Examples**
   ```html
   <!-- Using Axicons in Axiom01 -->
   <span class="axicon render" data-name="Check"></span>
   <span class="axicon render" data-name="CheckThin"></span>
   <span class="axicon render" data-name="Download"></span>
   ```

3. **When NOT to Use Emoji**
   - ❌ Don't use emoji in production components
   - ✅ Use Axicons instead
   - ✅ All icons come from our icon library

4. **Icon Mapping Reference**
   - File types: File-Text, Image, Play, Package, Music, etc.
   - Actions: Download, Upload, Delete, Edit, Copy, etc.
   - Status: Check-Circle, Alert-Circle, Info-Circle, etc.
   - UI: Menu, Search, Settings, Home, etc.

**Time**: 1-2 hours

## Why This Matters

### File-Display Component
- Currently mixes BEM + inline styles + emoji
- Should be semantic + Axicons + CSS classes
- Breaks framework philosophy

### Icon Consistency
- Emoji are inconsistent across browsers and OS
- Axicons are consistent and scalable
- All components should use Axicons, not emoji

### Component Auditing
- BEM naming violates "one class per component" philosophy
- Creates unnecessary CSS bloat
- Reduces maintainability

## Estimated Time to Complete All Tasks
- Task 1 (Components Overview): 15 minutes
- Task 2 (file-display refactor): 2 hours
- Task 3 (Audit all components): 3-4 hours
- Task 4 (Icon documentation): 1-2 hours
- **Total**: 6.5-8.5 hours

## After Completion
- Framework will be 100% consistent with Axiom01 philosophy
- All components will use semantic HTML + CSS classes only
- Zero emoji usage
- Complete icon documentation
- Production-ready codebase

## Quality Checklist Before Shipping
- [ ] All components use semantic HTML only
- [ ] No BEM-style class naming
- [ ] No inline styles (except necessary demo content)
- [ ] All icons are Axicons, not emoji
- [ ] Documentation is complete
- [ ] Mobile menu works on all pages
- [ ] No console errors on any page
- [ ] Dark mode works throughout
- [ ] Responsive at 375px, 768px, 1440px

---

**Session Status**: 75% Complete (3/4 tasks done)
**Next Priority**: Fix components-overview.html, then refactor file-display component
