# Utility Classes Reference

## Overview

Axiom01 provides 100+ optional utility classes for rapid development and prototyping.

**⚠️ Important**: Axiom01 philosophy emphasizes semantic HTML and component-based CSS. Utilities are provided for convenience, but should not replace well-structured semantic markup.

**File Location**: `css/_utilities.css` (354 lines)

## Philosophy: Semantic First, Utilities Second

```html
<!-- ✅ PREFERRED: Semantic HTML + CSS -->
<div class="card elevated">
  <h2>Title</h2>
  <p>Content</p>
</div>

<!-- ⚠️ LESS IDEAL: Utilities everywhere -->
<div class="flex flex-col items-center justify-center gap-m p-l border-1 rounded-lg shadow-md">
  <h2>Title</h2>
  <p>Content</p>
</div>
```

Utilities are best used for:
- Quick prototyping
- Complex layouts (flex, grid)
- Responsive adjustments
- One-off adjustments

## Display Utilities

### Block-Level Display

```html
<div class="block">Block element</div>
<span class="inline">Inline element</span>
<span class="inline-block">Inline-block element</span>
```

Classes: `.block`, `.inline`, `.inline-block`, `.flex`, `.grid`, `.hidden`, `.visible`

## Flexbox Utilities

### Flex Direction

```html
<div class="flex flex-row">Row (default)</div>
<div class="flex flex-col">Column</div>
```

### Alignment

```html
<!-- Justify Content (horizontal axis) -->
<div class="flex justify-start">Left-aligned</div>
<div class="flex justify-center">Centered</div>
<div class="flex justify-between">Space-between</div>
<div class="flex justify-around">Space-around</div>
<div class="flex justify-end">Right-aligned</div>

<!-- Align Items (vertical axis) -->
<div class="flex items-start">Top-aligned</div>
<div class="flex items-center">Centered</div>
<div class="flex items-end">Bottom-aligned</div>
<div class="flex items-stretch">Stretched</div>
```

### Gaps

```html
<div class="flex gap-xs">4px gap</div>
<div class="flex gap-s">8px gap</div>
<div class="flex gap-m">14px gap</div>
<div class="flex gap-l">21px gap</div>
<div class="flex gap-xl">35px gap</div>
```

## Grid Utilities

### Grid Columns

```html
<div class="grid grid-1">1 column</div>
<div class="grid grid-2">2 columns</div>
<div class="grid grid-3">3 columns</div>
<div class="grid grid-auto">Auto-fit columns</div>
```

### Grid Gaps

```html
<div class="grid gap-s">Small gap</div>
<div class="grid gap-m">Medium gap</div>
<div class="grid gap-l">Large gap</div>
```

## Spacing Utilities

### Margin

```html
<!-- All sides -->
<div class="m-xs">4px margin</div>
<div class="m-s">8px margin</div>
<div class="m-m">14px margin</div>
<div class="m-l">21px margin</div>
<div class="m-xl">35px margin</div>

<!-- Individual sides -->
<div class="mt-m">Top margin</div>
<div class="mb-m">Bottom margin</div>
<div class="ml-m">Left margin</div>
<div class="mr-m">Right margin</div>

<!-- Horizontal/Vertical -->
<div class="mx-m">Horizontal margins</div>
<div class="my-l">Vertical margins</div>

<!-- Auto (centering) -->
<div class="mx-auto">Center horizontally</div>
```

### Padding

Same syntax as margin, using `p-*` instead:

```html
<div class="p-m">All sides</div>
<div class="pt-l">Top padding</div>
<div class="px-m">Horizontal padding</div>
<div class="py-s">Vertical padding</div>
```

## Typography Utilities

### Font Weight

```html
<div class="font-normal">Normal weight (400)</div>
<div class="font-medium">Medium weight (500)</div>
<div class="font-semibold">Semibold weight (600)</div>
<div class="font-bold">Bold weight (700)</div>
```

### Text Alignment

```html
<div class="text-left">Left-aligned text</div>
<div class="text-center">Centered text</div>
<div class="text-right">Right-aligned text</div>
<div class="text-justify">Justified text</div>
```

### Text Transform

```html
<div class="uppercase">UPPERCASE TEXT</div>
<div class="lowercase">lowercase text</div>
<div class="capitalize">Capitalize Each Word</div>
```

### Text Truncation

```html
<div class="truncate">Text truncates with ellipsis...</div>
<div class="line-clamp-2">Text clamps to 2 lines...</div>
```

## Color Utilities

### Text Colors

```html
<div class="text-primary">Primary text</div>
<div class="text-secondary">Secondary text</div>
<div class="text-success">Success message</div>
<div class="text-warning">Warning message</div>
<div class="text-error">Error message</div>
<div class="text-muted">Muted/subtle text</div>
```

### Background Colors

```html
<div class="bg-primary">Primary background</div>
<div class="bg-secondary">Secondary background</div>
<div class="bg-success">Success background</div>
<div class="bg-warning">Warning background</div>
<div class="bg-error">Error background</div>
<div class="bg-surface">Default background</div>
```

### Border Colors

```html
<div class="border border-primary">Bordered element</div>
<div class="border border-secondary">Secondary border</div>
<div class="border-1">1px border</div>
<div class="border-2">2px border</div>
```

## Size Utilities

### Width

```html
<div class="w-full">100% width</div>
<div class="w-half">50% width</div>
<div class="w-1/3">33% width</div>
<div class="w-1/4">25% width</div>
<div class="w-auto">Auto width</div>
<div class="max-w-full">Max width 100%</div>
<div class="max-w-reading">Reading width (65ch)</div>
```

### Height

```html
<div class="h-full">100% height</div>
<div class="h-auto">Auto height</div>
<div class="h-screen">100vh height</div>
<div class="min-h-screen">Min 100vh height</div>
```

## Responsive Utilities

### Visibility

```html
<!-- Hide below tablet -->
<div class="hide-sm">Hidden on mobile</div>

<!-- Show only on tablet and up -->
<div class="show-md">Visible on tablets+</div>

<!-- Hide on desktop -->
<div class="hide-lg">Hidden on desktop</div>

<!-- Screen reader only -->
<div class="sr-only">Visible to screen readers only</div>
```

### Responsive Display

```html
<!-- Block on mobile, flex on tablet+ -->
<div class="block md:flex">Responsive layout</div>

<!-- Grid on desktop, stack on mobile -->
<div class="grid md:block">Responsive grid</div>
```

## Position Utilities

### Static/Relative/Absolute/Fixed

```html
<div class="relative">Position: relative</div>
<div class="absolute">Position: absolute</div>
<div class="fixed">Position: fixed</div>
<div class="sticky">Position: sticky</div>
```

### Positioning

```html
<div class="absolute inset-0">Cover entire container</div>
<div class="absolute top-0 left-0">Top-left corner</div>
<div class="absolute bottom-0 right-0">Bottom-right corner</div>
<div class="fixed bottom-xl right-xl">Floating action button</div>
```

## Border & Shadow Utilities

### Border Radius

```html
<div class="rounded-none">No radius</div>
<div class="rounded-sm">Small radius (3px)</div>
<div class="rounded-base">Base radius (5px)</div>
<div class="rounded-md">Medium radius (0.3rem)</div>
<div class="rounded-lg">Large radius (0.5rem)</div>
<div class="rounded-full">Full radius (50%)</div>
```

### Shadows

```html
<div class="shadow-none">No shadow</div>
<div class="shadow-sm">Small shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
```

## Overflow Utilities

```html
<div class="overflow-auto">Auto overflow</div>
<div class="overflow-hidden">Hidden overflow</div>
<div class="overflow-scroll">Always scrollable</div>
<div class="overflow-x-auto">Horizontal scroll</div>
<div class="overflow-y-auto">Vertical scroll</div>
```

## Opacity Utilities

```html
<div class="opacity-0">Transparent (0%)</div>
<div class="opacity-25">25% opacity</div>
<div class="opacity-50">50% opacity</div>
<div class="opacity-75">75% opacity</div>
<div class="opacity-100">Opaque (100%)</div>
```

## Cursor Utilities

```html
<div class="cursor-auto">Auto cursor</div>
<div class="cursor-pointer">Pointer cursor</div>
<div class="cursor-not-allowed">Disabled cursor</div>
<div class="cursor-text">Text cursor</div>
```

## Common Patterns

### Centered Box

```html
<div class="flex items-center justify-center min-h-screen">
  <div class="text-center">Content</div>
</div>
```

### Responsive Grid

```html
<div class="grid grid-1 md:grid-2 lg:grid-3 gap-m">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

### Card with Spacing

```html
<div class="p-l border rounded-lg shadow-md">
  <h3 class="mb-s">Title</h3>
  <p class="text-muted">Description</p>
</div>
```

### Stacked List

```html
<div class="flex flex-col gap-s">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## When NOT to Use Utilities

❌ **Anti-patterns to avoid:**

```html
<!-- Too many utilities - hard to read -->
<div class="flex flex-col items-center justify-center gap-m p-l m-m border rounded-lg shadow-lg text-center">
  Don't do this
</div>

<!-- Multiple spacing utilities -->
<div class="p-m m-m pt-l mt-xl mb-s">
  Too much spacing complexity
</div>

<!-- Replacing semantic markup -->
<div class="font-bold text-lg">Should use <h2> instead</div>
```

✅ **Better approach:**

```css
/* Define semantic component */
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--a-space-m);
  padding: var(--a-space-l);
  margin: var(--a-space-m);
  border: 1px solid var(--a-color-outline);
  border-radius: var(--a-border-radius-lg);
  box-shadow: var(--a-shadow-lg);
  text-align: center;
}
```

```html
<div class="card">Use semantic classes</div>
```

## Responsive Breakpoints

Utilities use the same breakpoints defined in design tokens:

```css
/* Base (mobile-first) */
.text-center { text-align: center; }

/* Tablet and up */
@media (min-width: 768px) {
  .md\:text-left { text-align: left; }
}

/* Desktop and up */
@media (min-width: 992px) {
  .lg\:text-right { text-align: right; }
}
```

## Browser Support

All utilities use standard CSS and are supported in:
- ✅ Chrome/Edge 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ iOS Safari 12+
- ✅ Android Browser 60+

## Related Files

- **Implementation**: `css/_utilities.css`
- **Integration**: `css/axiom.css` (imports utilities)
- **Variables**: `css/_variables.css` (token values)
- **Styling Guide**: `AXIOM01_STYLING_GUIDE.md`
- **Token Reference**: `docs/tokens/VARIABLES.md`

---

**Version**: 2.0.0  
**Updated**: 2025  
**Status**: Production Ready ✅
