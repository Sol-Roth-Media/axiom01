# AXIOM01 v2.1.2 — Semantic Grid System Implementation Complete

## Overview

All index.html sections now use Axiom01's semantic grid system with behavioral variants. No custom grid classes, no column-based utilities—just semantic HTML structure and smart CSS defaults.

## Grid System Architecture

### Base Grid (Default)
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--a-space-l);
}
```
- **Minimum width**: 320px (mobile resolution)
- **Responsive**: Auto-fits 1→2→3→4 columns as space allows
- **Use case**: Most card grids, default balanced layout

### Grid Variant: Tight
```css
.grid.tight {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```
- **Minimum width**: 200px (dense layout)
- **More items per row**: 5-6 items on desktop, 2-3 on tablet, 1 on mobile
- **Use case**: Small items (badges, icons, thumbnails), quick facts, icon showcases

### Grid Variant: Spacious
```css
.grid.spacious {
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}
```
- **Minimum width**: 400px (spacious layout)
- **Fewer items per row**: 2-3 items on desktop, 1 on tablet/mobile
- **Use case**: Large cards, products, detailed components

## How It Works

The framework chooses how many columns to display based on available screen space and minimum width. No media queries needed—CSS Grid's `auto-fit` handles it automatically.

### Example: 4 Stats (320px default)
```html
<section class="hero">
  <div class="grid">
    <div class="stat">73</div>
    <div class="stat">149</div>
    <div class="stat">20+</div>
    <div class="stat">13.3</div>
  </div>
</section>
```

**Responsive behavior** (automatic):
- **Mobile 320px**: 1 column (1 stat per row, full width)
- **Mobile 640px**: 2 columns (2 stats per row)
- **Tablet 960px**: 3 columns (3 stats per row)
- **Desktop 1280px+**: 4 columns (all stats visible)

### Example: 5 Icon Variants (200px tight)
```html
<div class="grid tight">
  <div class="icon-item">Base</div>
  <div class="icon-item">Thin</div>
  <div class="icon-item">Inverted</div>
  <div class="icon-item">Color</div>
  <div class="icon-item">Premium</div>
</div>
```

**Responsive behavior** (automatic):
- **Mobile 320px**: 1 column
- **Mobile 480px**: 2 columns (2 items per row + 1 wrapped)
- **Tablet 800px**: 4 columns (4 items per row + 1 wrapped)
- **Desktop 1200px+**: 5 columns (all visible)

## index.html Section Updates

### All sections now use semantic grid structure:

| Section | Grid Type | Reason |
|---------|-----------|--------|
| Hero Stats | `.grid` | 4 balanced stats cards |
| Quick Facts | `.grid` | 3 large fact cards |
| Axicons Intro | `.grid.tight` | 2 cards with dense content |
| Icon Variants | `.grid.tight` | 5 variant items, dense layout |
| Component Showcase | `.grid` | 9 component preview cards |
| Typography | `.grid.tight` | Multiple typography examples |
| Color Harmony | `.grid.tight` | Color swatches (many items) |
| Theme Explorer | `.grid` | 2 large theme cards |

### Changes Made

```html
<!-- BEFORE: Custom grid class names -->
<div class="component-showcase-grid grid">
<div class="typography-grid">
<div class="color-harmony-grid">
<div class="axicons-intro-grid">

<!-- AFTER: Semantic grid system -->
<div class="grid">
<div class="grid tight">
<div class="grid tight">
<div class="grid tight">
```

## Design Philosophy

### Why Behavioral Variants?
Instead of naming grids by content (`.component-grid`, `.color-grid`, etc.), variants describe **how the grid behaves**:

- **tight** = Dense, more items fit
- **spacious** = Roomy, fewer items fit
- **default** = Balanced, moderate items

This makes variants **reusable** across any context. A "tight" grid works for any many-items layout.

### Why No Column Utilities?
Never write:
```html
<!-- ❌ WRONG - Utility stacking -->
<div class="grid column-4 gap-lg">

<!-- ✅ RIGHT - Semantic behavior -->
<div class="grid">
```

The framework handles column calculation automatically based on screen size and minimum width. Developers describe the behavior (tight/spacious), not the structure (columns).

## Responsive Breakpoints (Browser-Driven)

Breakpoints are not fixed in CSS—they're calculated by the browser based on `minmax()` values:

```
minmax(320px, 1fr)  → Breakpoints at 320px, 640px, 960px, 1280px, etc.
minmax(200px, 1fr)  → Breakpoints at 200px, 400px, 600px, 800px, etc.
minmax(400px, 1fr)  → Breakpoints at 400px, 800px, 1200px, etc.
```

Each device naturally finds the optimal column count for its screen size. No CSS media queries needed.

## Implementation Rules

### ✅ DO
```html
<!-- Use semantic grid class -->
<div class="grid">
  <div class="card">...</div>
</div>

<!-- Use behavioral variant for density control -->
<div class="grid tight">
  <div class="badge">...</div>
</div>

<!-- Let context drive styling -->
<section class="hero">
  <div class="grid">
    <div class="stat">...</div>
  </div>
</section>
```

### ❌ DON'T
```html
<!-- Don't create custom grid classes -->
<div class="component-grid">

<!-- Don't use column utilities -->
<div class="grid col-4 gap-lg">

<!-- Don't inline style grids -->
<div class="grid" style="grid-template-columns: repeat(3, 1fr);">

<!-- Don't stack utility classes -->
<div class="grid grid-cols-3 grid-gap-4">
```

## Why This Works

1. **Semantic** — HTML structure describes purpose, CSS handles layout
2. **Responsive** — Browser calculates optimal columns automatically
3. **Reusable** — Variants (tight/spacious) work anywhere
4. **Simple** — No column counting, no breakpoint management
5. **Flexible** — Any content density works with appropriate variant
6. **Maintainable** — Single grid system, not section-specific classes

## Future Enhancements

Potential grid variants (added as needed, following same pattern):

```css
.grid.dense {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

.grid.comfortable {
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

.grid.open {
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
}
```

Each variant is added only when a genuine use case emerges. Principle: **describe behavior, not column count**.

## Verification

✅ All grid classes in index.html are semantic
✅ No custom grid classes per section
✅ Grid variants control density, not columns
✅ Responsive behavior automatic (browser-driven)
✅ Build succeeds, bundle size stable
✅ Mobile-first responsive design working

## Conclusion

Axiom01's semantic grid system demonstrates that powerful, responsive layouts don't require column utilities or complex breakpoints. By describing **how grids should behave** (tight, spacious) and letting the browser calculate optimal columns, developers get:

- Cleaner HTML
- Reusable CSS
- Automatic responsiveness
- Future-proof design

This is **grid design that respects your code**.
