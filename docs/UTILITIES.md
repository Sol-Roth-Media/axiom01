# Utility Classes Reference

## Overview

⚠️ **Important**: Axiom01 philosophy emphasizes **semantic HTML and component-based CSS over utilities**. 

Utilities provided are for exceptional cases only (layout edge cases, responsive adjustments, accessibility helpers). Do NOT use utilities as your primary styling approach.

**File Location**: `css/_utilities.css` (minimal ~100 lines)

---

## Philosophy: Components First, Utilities Only When Needed

### ✅ Preferred Pattern: Semantic Components

```html
<!-- Use semantic components with minimal classes -->
<article class="card elevated">
  <header>
    <h2>Title</h2>
  </header>
  <div>
    <p>Content goes here</p>
  </div>
</article>
```

### ❌ Anti-Pattern: Utility-Heavy Layout

```html
<!-- AVOID: Too many utilities, hard to maintain -->
<div class="flex flex-col items-center justify-center gap-m p-l border rounded-lg shadow-md">
  <h2 class="font-bold text-lg">Title</h2>
  <p class="text-muted">Content</p>
</div>
```

### ✅ Correct Approach: Define a Component

```css
/* Instead of utilities, define semantic component */
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--a-space-m);
  padding: var(--a-space-l);
  border: 1px solid var(--ax-border);
  border-radius: var(--a-border-radius-base);
  box-shadow: var(--a-shadow-md);
}
```

```html
<!-- Clean semantic HTML -->
<article class="card">
  <h2>Title</h2>
  <p>Content</p>
</article>
```

---

## When Utilities ARE Appropriate

1. **Screen Reader Only Text** - `.sr-only` for accessibility
2. **Responsive Visibility** - `.hide-mobile`, `.hide-desktop` for layout breakpoints  
3. **Display Override** - `.hidden` for rare show/hide cases
4. **Text Truncation** - `.truncate` for single-line overflow
5. **Positioning Helpers** - `.relative`, `.absolute` for specific layout needs
6. **Float Clearfix** - `.clearfix` for legacy float-based layouts

---

## Available Utilities

### Accessibility

```html
<!-- Hide from sighted users, visible to screen readers -->
<span class="sr-only">Screen reader only text</span>
```

### Display

```html
<!-- Override display property -->
<div class="hidden">Hidden element</div>
<span class="block">Block element</span>
<span class="inline">Inline element</span>
<span class="inline-block">Inline-block element</span>
```

### Responsive Display

```html
<!-- Show/hide at different breakpoints -->
<div class="hide-mobile">Visible on desktop only</div>
<div class="hide-desktop">Visible on mobile only</div>
```

### Positioning

```html
<!-- Position properties -->
<div class="relative">position: relative</div>
<div class="absolute">position: absolute</div>
<div class="fixed">position: fixed</div>
<div class="static">position: static</div>
```

### Spacing Reset

```html
<!-- Remove all margins (reset default margins) -->
<p class="m-0">No margin</p>
```

### Text Truncation

```html
<!-- Single-line truncation with ellipsis -->
<div class="truncate">This text will truncate with ellipsis...</div>
```

### Overflow

```html
<!-- Overflow handling -->
<div class="overflow-auto">Auto overflow</div>
<div class="overflow-hidden">Hidden overflow</div>
<div class="overflow-x-auto">Horizontal scroll</div>
<div class="overflow-y-auto">Vertical scroll</div>
```

### Visibility

```html
<!-- Visual opacity -->
<div class="opacity-50">50% opacity</div>
<div class="opacity-100">Full opacity</div>
```

### Pointer Events

```html
<!-- Disable/enable pointer events -->
<div class="pointer-none">Cannot be clicked</div>
<div class="pointer-auto">Can be clicked</div>
```

### Float Clearfix

```html
<!-- For legacy float-based layouts only -->
<div class="clearfix">
  <div style="float: left;">Left</div>
  <div style="float: right;">Right</div>
</div>
```

### Responsive Iframe

```html
<!-- Maintain video aspect ratio -->
<div class="responsive-iframe">
  <iframe src="https://..."></iframe>
</div>
```

### Size Shortcuts

```html
<!-- Common width/height scenarios -->
<div class="w-full">Width: 100%</div>
<div class="h-auto">Height: auto</div>
```

### Box Sizing

```html
<!-- CSS box model -->
<div class="box-border">box-sizing: border-box</div>
```

---

## What These Utilities Should NOT Be

❌ **Axiom01 does NOT provide:**

- Padding utilities (`p-m`, `p-l`, `pt-s`, etc.) - Use components instead
- Margin utilities (`m-m`, `mb-l`, `mx-auto`, etc.) - Use CSS in components
- Flexbox utilities (`flex`, `items-center`, `gap-m`, etc.) - Use components
- Grid utilities (`grid`, `grid-cols-3`, etc.) - Use components
- Color utilities (`text-primary`, `bg-success`, etc.) - Use semantic class + CSS
- Typography utilities (`font-bold`, `text-lg`, etc.) - Use semantic HTML (`<h1>`, `<strong>`, etc.)
- Border utilities (`border`, `rounded-lg`, etc.) - Use components
- Shadow utilities (`shadow-md`, `shadow-lg`, etc.) - Use components

---

## Why So Few Utilities?

Axiom01 is built on semantic-first principles:

1. **HTML should be meaningful** - Use `<nav>`, `<article>`, `<h2>`, etc., not generic `<div>`
2. **Components handle layout** - Define `.card`, `.button`, `.alert` once, reuse everywhere
3. **CSS variables handle consistency** - All spacing/colors defined in tokens
4. **Maintainability** - Easier to update `.card` once than 50 utility-heavy divs
5. **Accessibility** - Semantic HTML + components naturally accessible

---

## Example: Building Without Utilities

### Without Components (Hard to Maintain ❌)

```html
<div class="flex flex-col gap-m p-l border rounded-lg shadow-md">
  <div class="flex items-center justify-between gap-s mb-m">
    <h3 class="font-bold text-lg">Card Title</h3>
    <button class="font-semibold text-primary">Edit</button>
  </div>
  <p class="text-muted mb-m">Description text</p>
  <div class="flex gap-s">
    <button class="flex items-center gap-xs px-m py-s bg-primary text-white rounded">Save</button>
    <button class="flex items-center gap-xs px-m py-s bg-secondary text-on-secondary rounded">Cancel</button>
  </div>
</div>
```

### With Components (Easy to Maintain ✅)

```html
<article class="card elevated">
  <header>
    <h2>Card Title</h2>
    <button>Edit</button>
  </header>
  <div>
    <p>Description text</p>
  </div>
  <footer>
    <button class="button primary">Save</button>
    <button class="button secondary">Cancel</button>
  </footer>
</article>
```

The component CSS handles all spacing, alignment, and styling.

---

## Browser Support

All utilities use standard CSS supported in:
- ✅ Chrome/Edge 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ iOS Safari 12+
- ✅ Android Browser 60+

---

## Related Files

- **Implementation**: `css/_utilities.css`
- **Components**: `css/_components.css`
- **Design Tokens**: `css/_variables.css`
- **Styling Guide**: `AXIOM01_STYLING_GUIDE.md`
- **Component Reference**: `docs/COMPONENTS.md`

---

**Version**: 2.0.0  
**Updated**: January 20, 2025  
**Status**: Production Ready ✅  
**Philosophy**: Semantic HTML + Components > Utilities
