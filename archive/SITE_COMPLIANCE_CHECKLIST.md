# Axiom01 v2.1.2 — Complete Site Compliance Checklist

## Strict Rules for 100% Compliance

### Rule 1: Spacing = Always Tokens
- ✅ All padding uses `var(--a-space-*)`
- ✅ All margins use `var(--a-space-*)`
- ✅ All gaps use `var(--a-space-*)`
- ❌ NO hardcoded values (16px, 24px, etc.)

### Rule 2: Grids = Semantic Only
- ✅ Use `.grid` for balanced (320px minmax)
- ✅ Use `.grid.tight` for dense (200px minmax)
- ✅ Use `.grid.spacious` for roomy (400px minmax)
- ❌ NO custom grid classes
- ❌ NO `-cols-*` utility patterns

### Rule 3: Layouts = Mobile-First
- ✅ Default: mobile layout
- ✅ @media (min-width: 768px): tablet adjustments
- ✅ @media (min-width: 1024px): desktop adjustments
- ❌ NO mobile overrides with `max-width` on mobile-first defaults

### Rule 4: Components = Context-Aware
- ✅ `.hero .card` adapts to hero context
- ✅ `.hero .stat` adapts to hero context
- ✅ `.card .grid` has proper padding
- ✅ `.card-footer` uses `margin-top: auto`
- ❌ NO special one-off styling

### Rule 5: Classes = Semantic Only
- ✅ Meaningful names: `.grid`, `.card`, `.button`
- ✅ Behavioral variants: `.tight`, `.spacious`
- ✅ Context variants: `.ghost`, `.preview`
- ❌ NO dashed BEM patterns (`.card--variant`)
- ❌ NO utility classes (`.p-4`, `.gap-lg`)
- ❌ NO multiple modifiers (`.card.primary.large.elevated`)

---

## Site Audit Checklist

### Global Spacing
- [ ] All `<main>` padding uses tokens
- [ ] All `section` padding uses tokens  
- [ ] All section gaps use tokens
- [ ] Container padding responsive (24px → 16px → 8px)
- [ ] No hardcoded pixel values anywhere

### Hero Section
- [ ] Hero padding uses `var(--a-space-3xl)` or equivalent
- [ ] Hero title margin-bottom uses token
- [ ] Hero description margin-bottom uses token
- [ ] Hero actions gap uses `var(--a-space-m)`
- [ ] Hero grid uses responsive spacing
- [ ] Mobile hero padding responsive

### Sections (General)
- [ ] Each section has `padding: var(--a-space-2xl) 0`
- [ ] Mobile sections have `padding: var(--a-space-xl) 0`
- [ ] Section headers have proper gaps (32px to content)
- [ ] Alternating backgrounds applied

### Cards
- [ ] All cards use `.card` base class
- [ ] Card padding: `var(--a-space-l)`
- [ ] Card inside grid has `padding-bottom: var(--a-space-m)`
- [ ] Card footer has `margin-top: auto`
- [ ] Card footer has `padding-top: var(--a-space-m)`
- [ ] Card text wraps (overflow-wrap, word-break)

### Grids
- [ ] All grids use `.grid` or variant
- [ ] Default grid: `minmax(320px, 1fr)` + `gap: var(--a-space-l)`
- [ ] Tight grid: `minmax(200px, 1fr)` + `gap: var(--a-space-m)`
- [ ] Spacious grid: `minmax(400px, 1fr)` + `gap: var(--a-space-xl)`
- [ ] Grid responsive gaps: desktop → mobile (24px → 16px)

### Buttons & CTAs
- [ ] All buttons have consistent padding
- [ ] Button groups use `.cta-actions`
- [ ] CTA actions have `margin-top: var(--a-space-2xl)`
- [ ] CTA buttons have `gap: var(--a-space-s)`
- [ ] Mobile CTA actions have `margin-top: var(--a-space-xl)`

### Typography
- [ ] Headings have margin-bottom tokens
- [ ] Paragraphs have margin-bottom tokens
- [ ] Last paragraph/element has `margin-bottom: 0`
- [ ] Lists have proper gap tokens

### Navigation
- [ ] Header padding uses tokens
- [ ] Nav links gap uses tokens
- [ ] Mobile dropdown has safe margins (`left/right: var(--a-space-m)`)
- [ ] Mobile dropdown has gap between items
- [ ] Mobile dropdown has border-radius

### Color Section
- [ ] Swatches grid uses `.grid`
- [ ] Swatch gaps responsive
- [ ] Swatch cards use proper token padding

### Icon Section
- [ ] Icon variants in `.grid.tight`
- [ ] Icon cards use `.card.ghost`
- [ ] Icon grid has proper spacing

### Components Section
- [ ] All preview cards use `.card.preview`
- [ ] Preview area has proper background
- [ ] Content area has proper padding

### Footer
- [ ] Footer padding uses tokens
- [ ] Footer sections have gaps
- [ ] Footer links have proper spacing

---

## Common Issues & Fixes

### Issue: Buttons touching bottom of cards
**Fix**: Add `padding-bottom: var(--a-space-m)` to `.card > .grid`

### Issue: Text overflowing in cards
**Fix**: Add to `.card`:
```css
overflow-wrap: break-word;
word-break: break-word;
```

### Issue: Dropdown menu touching edge
**Fix**: Change from `left: 0; right: 0;` to:
```css
left: var(--a-space-m);
right: var(--a-space-m);
```

### Issue: No gap between section and buttons
**Fix**: Add `.cta-actions { margin-top: var(--a-space-2xl); }`

### Issue: Uneven spacing on mobile
**Fix**: Add responsive media queries:
```css
@media (max-width: 768px) {
  /* Adjust spacing for mobile */
}
```

---

## Strict Spacing Reference

### Component Internal Spacing
```
Icon + Text in button:     var(--a-space-xs)  (4px)
Form field spacing:        var(--a-space-s)   (8px)
Component padding:         var(--a-space-m)   (16px)
Grid gaps (default):       var(--a-space-l)   (24px)
Section margins:           var(--a-space-xl)  (32px)
Section separators:        var(--a-space-2xl) (48px)
Hero padding:              var(--a-space-3xl) (64px+)
```

### Responsive Scaling
```
Desktop → Tablet → Mobile
24px  →  16px   →  8px      (container padding)
48px  →  32px   →  24px     (section padding)
24px  →  16px   →  12px     (grid gap)
32px  →  24px   →  16px     (CTA margin-top)
```

---

## Final Verification

Before v2.1.2 release:

- [ ] All spacing uses tokens (grep for hardcoded pixels)
- [ ] All grids use `.grid` variants (no custom grid classes)
- [ ] All sections responsive (mobile-first)
- [ ] All buttons/CTAs properly spaced
- [ ] No overflow issues (text wraps properly)
- [ ] Cards have footer spacing
- [ ] Dropdowns have safe margins
- [ ] Build succeeds (13.3 KB CSS, 1.0 KB JS)
- [ ] No visual regression on mobile/tablet/desktop

---

## Implementation Strategy

When fixing an issue:

1. **Identify the problem** — spacing? layout? responsiveness?
2. **Find the component** — which CSS class?
3. **Apply token-based fix** — use `var(--a-space-*)`
4. **Add responsive rules** — mobile-first media queries
5. **Test all breakpoints** — mobile, tablet, desktop
6. **Document the fix** — why, not just what
7. **Verify build** — no bundle size bloat

---

## Production Checklist

**Before Release:**
- ✅ All spacing = tokens
- ✅ All grids = semantic
- ✅ All layouts = responsive
- ✅ All components = context-aware
- ✅ All classes = meaningful
- ✅ Build passes
- ✅ No visual issues
- ✅ No accessibility issues
- ✅ Mobile-first tested
- ✅ Philosophy compliant

**Ready for v2.1.2:** ✅
