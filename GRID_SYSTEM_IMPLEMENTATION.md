# Axiom01 Grid System Implementation Guide

## Overview

Axiom01's grid system has been completely redesigned to follow the mobile-first, semantic-first philosophy. The new system replaces the problematic `repeat(auto-fit, minmax())` pattern with predictable, responsive grid layouts that never overflow.

## Core Principles

1. **Mobile-First**: Start with 1 column, enhance at larger breakpoints
2. **Semantic**: Minimal classes, clear intent
3. **Predictable**: Fixed column counts, no magic sizing
4. **Accessible**: WCAG 2.1 AA compliant layouts
5. **Responsive**: Adapts gracefully at all resolutions

## Basic Usage

### Default Responsive Grid

The `.grid` class automatically adapts columns based on viewport:

```html
<div class="grid">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

**Responsive Behavior:**
- Mobile (360-575px): 1 column
- Tablet (576-991px): 2 columns
- Laptop (992-1199px): 3 columns
- Desktop (1200px+): 4 columns

### Semantic Grid Column Classes

Use semantic classes for explicit control:

```html
<!-- 2-column grid -->
<div class="grid grid-cols-2">
  <div>Left</div>
  <div>Right</div>
</div>

<!-- 3-column grid -->
<div class="grid grid-cols-3">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>
```

**Available Classes:**
- `.grid-cols-1`: 1 column
- `.grid-cols-2`: 2 columns
- `.grid-cols-3`: 3 columns
- `.grid-cols-4`: 4 columns
- `.grid-cols-5`: 5 columns

## Advanced Patterns

### Sidebar + Main Layout

```html
<div class="grid grid-sidebar">
  <aside>Sidebar</aside>
  <main>Main Content</main>
</div>
```

**Behavior:**
- Desktop (768px+): 250px sidebar + 1fr main
- Mobile (<768px): Stacks to 1 column

**CSS:**
```css
.grid-sidebar {
  grid-template-columns: 250px 1fr;
  gap: var(--a-space-l);
}

@media (max-width: 768px) {
  .grid-sidebar {
    grid-template-columns: 1fr;
  }
}
```

### Featured Grid Item

```html
<div class="grid grid-cols-4">
  <div class="grid-item-featured">Featured (spans 2)</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

**Behavior:**
- Desktop: Featured item spans 2 columns
- Mobile (<768px): Featured item spans 1 column

**CSS:**
```css
.grid-item-featured {
  grid-column: span 2;
}

@media (max-width: 768px) {
  .grid-item-featured {
    grid-column: span 1;
  }
}
```

### Responsive Reordering

Change visual order without changing HTML:

```html
<div class="grid">
  <aside>Sidebar</aside>
  <main>Main Content</main>
</div>
```

**CSS for Mobile:**
```css
/* Desktop: normal order */
aside { order: 1; }
main { order: 2; }

/* Mobile: featured content first */
@media (max-width: 768px) {
  aside { order: 2; }
  main { order: 1; }
}
```

### Auto-Fit Grid (Legacy Pattern)

For cases where you need automatic column fitting with constraints:

```html
<div class="grid grid-auto">
  <!-- Items automatically wrap -->
</div>
```

**CSS:**
```css
.grid-auto {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
  gap: var(--a-space-l);
}
```

**Note:** Use with caution. For most use cases, `.grid` or semantic column classes are preferred.

## Spacing

Gap values use Axiom spacing variables:

- Mobile/Tablet: `var(--a-space-m)` (16px)
- Desktop: `var(--a-space-l)` (24px)

Override with semantic classes:

```css
.grid-dense { gap: var(--a-space-s); }     /* 8px */
.grid-loose { gap: var(--a-space-xl); }    /* 40px */
```

## Breakpoints

Axiom01 uses standard breakpoints:

| Breakpoint | Width | Usage |
|-----------|-------|-------|
| xs | 480px | Portrait phones |
| sm | 576px | Landscape phones, tablets start |
| md | 768px | Tablets |
| lg | 992px | Laptops |
| xl | 1200px | Desktops |
| xxl | 1400px | Large desktops |

## Why Not repeat(auto-fit, minmax())?

The old pattern had critical issues:

❌ **Unpredictable at high resolutions**
- Browser tries to fit as many columns as possible
- Can create unexpected layouts

❌ **Horizontal overflow**
- At certain viewport widths, content exceeds bounds
- Users see unwanted scrollbars

❌ **Violates mobile-first principle**
- Doesn't start with mobile and enhance up
- Magic sizing makes responsive behavior unclear

❌ **Hard to test**
- Behavior varies based on content width
- Difficult to predict at specific breakpoints

**The New Approach:**
✅ Explicit column counts per breakpoint
✅ Mobile-first: 1 → 2 → 3 → 4 columns
✅ Never overflows
✅ Easy to test and predict
✅ Follows Axiom philosophy

## Accessibility

Grid layouts maintain full accessibility:

1. **Semantic HTML**: Use proper elements (`<section>`, `<article>`, `<main>`, `<aside>`)
2. **Order Property**: CSS `order` changes visual order only, not HTML order
3. **Screen Readers**: Follow HTML source order, not visual layout
4. **Touch Targets**: Items should be at least 44px × 44px
5. **Color Contrast**: Text meets WCAG AA standards

**Best Practice:**
```html
<!-- ✅ GOOD: Semantic structure -->
<section class="grid">
  <article>
    <h3>Title</h3>
    <p>Content</p>
  </article>
</section>

<!-- ❌ BAD: Divs with classes -->
<div class="grid">
  <div class="item">
    <div class="title">Title</div>
  </div>
</div>
```

## Examples

### Image Gallery

```html
<div class="grid">
  <img src="img1.jpg" alt="Image 1">
  <img src="img2.jpg" alt="Image 2">
  <img src="img3.jpg" alt="Image 3">
  <img src="img4.jpg" alt="Image 4">
</div>
```

### Product Cards

```html
<div class="grid grid-cols-4">
  <article class="card">
    <img src="product.jpg" alt="Product">
    <h3>Product Name</h3>
    <p>Description</p>
    <button>Add to Cart</button>
  </article>
  <!-- More cards... -->
</div>
```

### Dashboard Layout

```html
<div class="grid grid-cols-1">
  <header>Header</header>
  <div class="grid grid-cols-3">
    <aside>Sidebar</aside>
    <main style="grid-column: span 2;">Main Content</main>
  </div>
  <footer>Footer</footer>
</div>
```

### Responsive Blog Layout

```html
<div class="grid grid-sidebar">
  <aside>
    <h3>Categories</h3>
    <ul><!-- Links --></ul>
  </aside>
  <main>
    <article>
      <h2>Post Title</h2>
      <p>Post content...</p>
    </article>
  </main>
</div>
```

## Testing Checklist

- [ ] Grid displays correctly at 360px (mobile)
- [ ] Grid displays correctly at 576px (tablet)
- [ ] Grid displays correctly at 768px (tablet large)
- [ ] Grid displays correctly at 992px (laptop)
- [ ] Grid displays correctly at 1024px (desktop)
- [ ] Grid displays correctly at 1200px (desktop large)
- [ ] Grid displays correctly at 1456px (wide)
- [ ] Grid displays correctly at 1920px (ultra-wide)
- [ ] No horizontal scrollbars at any resolution
- [ ] Content never overflows container
- [ ] Touch targets are at least 44px × 44px
- [ ] Semantic HTML is used throughout
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Mobile navbar works at all resolutions
- [ ] No responsive overflow issues

## Migration Guide

### From Old auto-fit Pattern

**Before:**
```css
.grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
```

**After:**
```css
.grid {
  grid-template-columns: 1fr;
}

@media (min-width: 576px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 992px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1200px) {
  .grid { grid-template-columns: repeat(4, 1fr); }
}
```

Or simply use the new default `.grid` which handles all of this automatically.

## Performance Notes

- Grid layout is GPU-accelerated
- No JavaScript required
- Minimal CSS overhead
- Responsive without media query bloat
- All modern browsers supported (IE11+ partial support)

## Support

For issues or questions:
1. Check the [Layout Advanced Guide](docs/layout-advanced.html)
2. Review the [Axiom01 Styling Guide](AXIOM01_STYLING_GUIDE.md)
3. See [Grid System Audit](GRID_SYSTEM_AUDIT.md) for design rationale

## Version History

- **v2.1.0** (Current): Mobile-first grid system implementation
  - Replaced `repeat(auto-fit, minmax())` with explicit breakpoints
  - Added semantic grid column classes (.grid-cols-1 through .grid-cols-5)
  - Added advanced patterns (.grid-sidebar, .grid-item-featured, .grid-auto)
  - Fixed hero padding and paragraph colors
  - Updated documentation with comprehensive examples
