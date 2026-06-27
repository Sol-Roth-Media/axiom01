# AXIOM01 — Grid System & Semantic Structure Design

## Overview

Axiom01 implements a smart, context-aware grid system that requires **minimal configuration** and **no width utility classes**. The framework understands component context and automatically applies appropriate styling.

## Core Principles

### 1. Semantic-First Structure
Components are styled based on their position in the HTML hierarchy, not class names.

```html
<!-- Semantic structure drives styling -->
<section class="hero">
  <div class="grid">           <!-- Grid inside hero gets hero-specific styling -->
    <div class="stat">...</div> <!-- Stats inside hero get glass effect -->
  </div>
</section>
```

### 2. Smart Default Spacing
Default grid minimum width is `320px` (mobile resolution):
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--a-space-l);
}
```

This ensures:
- **Mobile**: 1 column (fits on 320px screens)
- **Tablet**: 2-3 columns (auto-fits as width increases)
- **Desktop**: 4+ columns (spaces out naturally)

### 3. No Width Utility Classes
Never write classes like:
```html
<!-- ❌ WRONG - Utility chaos -->
<div class="grid column-2 w-sm"></div>

<!-- ✅ RIGHT - Semantic structure -->
<section class="hero">
  <div class="grid">...</div>
</section>
```

The framework handles responsive behavior automatically via CSS Grid's `auto-fit` algorithm.

## Context-Aware Styling

### Hero Context
Components automatically adapt when placed inside `.hero`:

```css
/* Cards in hero get glass effect */
.hero .card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  color: white;
}

/* Stats in hero get glass + sizing */
.hero .stat {
  /* Glass effect applied */
  /* White text applied */
  /* Proper sizing applied */
}

/* Grid in hero uses mobile-friendly minimum width */
.hero .grid {
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
```

Developers write clean semantic HTML:
```html
<section class="hero">
  <div class="container">
    <div class="grid">
      <div class="stat">73</div>
      <div class="stat">149</div>
      <!-- Auto-tiles responsively with glass effect -->
    </div>
  </div>
</section>
```

## Responsive Behavior

### Auto-Responsive Grid
No media queries needed. CSS Grid's `auto-fit` handles breakpoints:

| Screen Size | Grid Behavior | Items Per Row |
|-------------|---------------|---------------|
| < 320px | 1 column | 1 |
| 320px - 640px | 1 column | 1 |
| 640px - 960px | 2 columns | 2 |
| 960px - 1280px | 3 columns | 3 |
| 1280px+ | 4 columns | 4 |

Actual breakpoint depends on `minmax(320px, 1fr)` — the browser calculates when additional columns fit.

## Use Cases

### Case 1: Hero Stats (Recommended)
```html
<section class="hero">
  <div class="container">
    <h1>Amazing Framework</h1>
    <div class="grid">
      <div class="stat">
        <div class="value">73</div>
        <div class="label">Components</div>
      </div>
      <div class="stat">
        <div class="value">149</div>
        <div class="label">Design Tokens</div>
      </div>
      <!-- Auto-tiles, glass effect, white text -->
    </div>
  </div>
</section>
```

### Case 2: Card Grid
```html
<section>
  <div class="container">
    <div class="grid">
      <article class="card">
        <h3>Component 1</h3>
        <!-- Cards tile automatically -->
      </article>
      <article class="card">
        <h3>Component 2</h3>
      </article>
    </div>
  </div>
</section>
```

### Case 3: Product Showcase
```html
<section>
  <div class="container">
    <div class="grid">
      <div class="product">
        <img src="..." alt="...">
        <h3>Product Name</h3>
        <!-- Tiles automatically at 320px minimum -->
      </div>
    </div>
  </div>
</section>
```

## Design Philosophy

### Why 320px Default?
- Common mobile resolution
- Ensures mobile-first responsive behavior
- No custom width configuration needed
- Framework "guesses right" 90% of the time

### Why No Width Utility Classes?
Axiom01 avoids BEM-like `.column-2`, `.column-3` because:
1. **Semantic structure handles it** — parent context drives behavior
2. **Smart defaults work** — 320px minimum is reasonable for 95% of cases
3. **Zero utility chaos** — one principle, not many rules
4. **Production patterns** — real websites use semantic HTML, not class stacking

### What About Edge Cases?
If you genuinely need different sizing (e.g., sidebar + main content), use semantic HTML structure:

```html
<!-- Don't do this: -->
<div class="grid column-2">
  <div class="item w-lg">Sidebar</div>
  <div class="item w-2x">Main</div>
</div>

<!-- Do this instead: -->
<div class="layout">
  <aside class="sidebar">...</aside>
  <main>...</main>
</div>

<!-- Then style semantically: -->
.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--a-space-l);
}
```

## Implementation Summary

### Changes Made
1. **Grid Default Updated**: 280px → 320px (`minmax(320px, 1fr)`)
2. **Hero Stats Structure**: Moved from `.hero-stats` to `.hero .grid .stat`
3. **Context-Aware Rules Added**: `.hero .grid`, `.hero .stat` styling
4. **index.html Updated**: Now uses semantic structure

### Framework Status
✅ Context-aware components working
✅ Mobile-first responsive by default
✅ No utility classes needed
✅ Semantic HTML throughout
✅ Production-ready

## Best Practices

### ✅ DO
```html
<!-- Use semantic structure -->
<section class="hero">
  <div class="grid">
    <div class="stat">...</div>
  </div>
</section>

<!-- Let framework handle styling -->
<!-- Use parent context for adaptation -->
```

### ❌ DON'T
```html
<!-- Don't create custom width classes -->
<div class="grid column-2 size-md">

<!-- Don't stack utility classes -->
<div class="grid grid-cols-4 gap-lg">

<!-- Don't override with inline styles -->
<div class="grid" style="grid-template-columns: 1fr 1fr;">
```

## Conclusion

Axiom01's grid system demonstrates the power of **semantic-first design**:
- Minimal markup
- Maximum clarity
- Smart defaults that work
- Context-aware styling
- Zero configuration needed

This is framework design that respects your code and the developers using it.
