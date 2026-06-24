# AXIOM01 Layout & Grid System — Complete Guide

## Table of Contents
1. [Spacing Cascade System](#spacing-cascade-system)
2. [Grid System](#grid-system)
3. [Layout Patterns](#layout-patterns)
4. [Responsive Behavior](#responsive-behavior)
5. [Best Practices](#best-practices)
6. [Real-World Examples](#real-world-examples)

---

## Spacing Cascade System

### The Philosophy

Axiom01 uses a **mathematical cascading space system** where all spacing is derived from a single unit variable. This ensures:
- ✅ Consistent rhythm across entire site
- ✅ Easy responsive scaling (change one variable, everything adjusts)
- ✅ No magic numbers (all values calculated)
- ✅ Perfect harmony at any resolution

### Space Tokens

All spacing is defined via CSS variables based on multiples of `--a-space-unit`:

```css
--a-space-unit: 1rem              /* Base unit (16px) */

/* Derived values (all calculated) */
--a-space-xs:   0.25 × unit (4px)
--a-space-s:    0.5 × unit  (8px)
--a-space-m:    1 × unit    (16px)   /* Same as unit */
--a-space-l:    1.5 × unit  (24px)
--a-space-xl:   2 × unit    (32px)
--a-space-2xl:  3 × unit    (48px)
--a-space-3xl:  4 × unit    (64px)
--a-space-4xl:  6 × unit    (96px)
--a-space-5xl:  8 × unit    (128px)
```

### How It Works

**Everything uses calculated values:**

```html
<!-- Padding -->
<div style="padding: var(--a-space-l);">  <!-- 24px, calculated -->

<!-- Margins -->
<section style="margin-top: var(--a-space-2xl);">  <!-- 48px, calculated -->

<!-- Gaps in flex/grid -->
<div style="gap: var(--a-space-m);">  <!-- 16px, calculated -->

<!-- Never hardcode -->
❌ margin: 20px;        <!-- WRONG - hardcoded -->
✅ margin: var(--a-space-l);  <!-- RIGHT - calculated -->
```

### Responsive Scaling

Change one variable, everything adapts:

```css
/* Default */
:root {
  --a-space-unit: 1rem;  /* 16px */
}

/* Mobile-friendly scaling */
@media (max-width: 480px) {
  :root {
    --a-space-unit: 0.875rem;  /* 14px - slightly tighter */
  }
  /* All space tokens automatically recalculate */
  /* --a-space-l: 1.5 × 0.875rem = 21px */
  /* --a-space-xl: 2 × 0.875rem = 28px */
  /* etc. */
}
```

### Common Space Applications

| Use Case | Token | Value | When |
|----------|-------|-------|------|
| Inline text/icon gap | `--a-space-xs` | 4px | Icons inside buttons |
| Small spacing | `--a-space-s` | 8px | Form field gaps |
| Default padding/margin | `--a-space-m` | 16px | Cards, components |
| Section spacing | `--a-space-l` | 24px | Grid gaps, text spacing |
| Large gaps | `--a-space-xl` | 32px | Section margins, large gaps |
| Section separator | `--a-space-2xl` | 48px | Between major sections |
| Massive gaps | `--a-space-3xl+` | 64px+ | Hero padding, large sections |

---

## Grid System

### Overview

Axiom01's grid system is **semantic, responsive, and requires zero configuration** for most use cases.

### Core Concept

Use one `.grid` class. Browser automatically calculates optimal columns based on `minmax()` minimum width.

```html
<!-- Semantic, no configuration needed -->
<div class="grid">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>

<!-- Responsive automatically -->
<!-- Mobile: 1 col | Tablet: 2-3 cols | Desktop: 4 cols -->
```

### Grid Variants

Three behavioral variants control **density**, not columns:

#### 1. `.grid` (Default - Balanced)
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--a-space-l);
}
```

**When to use**: Card grids, component showcases, general layouts
- **Mobile**: 1 column
- **Tablet**: 2-3 columns
- **Desktop**: 3-4 columns

**Example**:
```html
<section>
  <div class="grid">
    <article class="card">Component 1</article>
    <article class="card">Component 2</article>
    <article class="card">Component 3</article>
    <article class="card">Component 4</article>
  </div>
</section>
```

#### 2. `.grid.tight` (Dense - Many Items)
```css
.grid.tight {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

**When to use**: Icon galleries, badge collections, thumbnails, many small items
- **Mobile**: 1-2 columns
- **Tablet**: 3-4 columns
- **Desktop**: 5-6 columns

**Example**:
```html
<div class="grid tight">
  <div class="badge">Badge 1</div>
  <div class="badge">Badge 2</div>
  <div class="badge">Badge 3</div>
  <!-- More items fit densely -->
</div>
```

#### 3. `.grid.spacious` (Roomy - Few Items)
```css
.grid.spacious {
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}
```

**When to use**: Product cards, hero sections, large preview cards
- **Mobile**: 1 column
- **Tablet**: 1-2 columns
- **Desktop**: 2-3 columns

**Example**:
```html
<section class="hero">
  <div class="grid spacious">
    <div class="stat">73</div>
    <div class="stat">149</div>
    <div class="stat">20+</div>
  </div>
</section>
```

### How Grid Breakpoints Work

**NO media queries needed.** Browser calculates breakpoints automatically:

```
minmax(320px, 1fr)
├─ At 320px: 1 column (fills 100%)
├─ At 640px: 2 columns (each ~320px)
├─ At 960px: 3 columns (each ~320px)
└─ At 1280px: 4 columns (each ~320px)

minmax(200px, 1fr)
├─ At 200px: 1 column
├─ At 400px: 2 columns
├─ At 600px: 3 columns
├─ At 800px: 4 columns
└─ At 1000px: 5 columns
```

Exact breakpoint depends on **available space**, not fixed media query values.

---

## Layout Patterns

### Container System

```html
<div class="container">
  <!-- Content centered, max-width 1200px, responsive padding -->
</div>
```

**CSS**:
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--a-space-l);  /* Responsive padding */
}
```

**Responsive**:
- Mobile: 0 var(--a-space-m) (16px padding)
- Tablet: 0 var(--a-space-l) (24px padding)
- Desktop: 0 var(--a-space-l) (24px padding)

### Section Spacing

```html
<main>
  <section>Content 1</section>
  <section>Content 2</section>
  <section>Content 3</section>
</main>
```

**CSS**:
```css
main > section {
  padding: var(--a-space-2xl) 0;  /* Top/bottom: 48px */
}

/* Alternate background rhythm */
main > section:nth-child(even) {
  background-color: var(--ax-background-secondary);
}
```

### Section Header Pattern

```html
<section>
  <div class="container">
    <header>
      <h2>Section Title</h2>
      <p>Description goes here</p>
    </header>
    <div class="grid">
      <!-- Content -->
    </div>
  </div>
</section>
```

**CSS**:
```css
section > .container > header {
  text-align: center;
  margin-bottom: var(--a-space-xl);  /* 32px gap to content */
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

section > .container > header h2 {
  margin-bottom: var(--a-space-m);  /* 16px gap to description */
}

section > .container > header p {
  margin: 0;  /* No margin on last element */
}
```

### Flex Layout with Spacing

```html
<div class="actions">
  <button class="button">Action 1</button>
  <button class="button">Action 2</button>
  <button class="button">Action 3</button>
</div>
```

**CSS**:
```css
.actions {
  display: flex;
  gap: var(--a-space-m);  /* 16px between items */
  flex-wrap: wrap;        /* Stack on mobile */
  justify-content: center;
}

@media (max-width: 768px) {
  .actions {
    gap: var(--a-space-s);  /* Tighter on mobile */
  }
}
```

---

## Responsive Behavior

### Mobile-First Principle

Start with mobile, enhance for larger screens:

```css
/* DEFAULT: Mobile layout */
.grid {
  grid-template-columns: 1fr;  /* Single column */
  gap: var(--a-space-m);       /* Tight gap */
}

/* ENHANCED: Tablet+ */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--a-space-l);  /* Increase gap */
  }
}

/* ENHANCED: Desktop+ */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--a-space-l);
  }
}
```

### Adaptive Spacing

Spacing increases with screen size:

```css
/* Mobile: tight spacing */
section {
  padding: var(--a-space-l);
}

/* Tablet: moderate spacing */
@media (min-width: 768px) {
  section {
    padding: var(--a-space-2xl);
  }
}

/* Desktop: generous spacing */
@media (min-width: 1024px) {
  section {
    padding: var(--a-space-3xl);
  }
}
```

### Fluid Typography (Optional)

Combine with fluid sizing for complete responsive experience:

```css
h1 {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  /* Minimum: 1.75rem (28px) */
  /* Preferred: 3vw (responsive to viewport) */
  /* Maximum: 2.5rem (40px) */
}
```

---

## Best Practices

### ✅ DO

```html
<!-- Use space tokens -->
<div style="padding: var(--a-space-l);">
<div style="margin-top: var(--a-space-2xl);">
<div style="gap: var(--a-space-m);">

<!-- Use semantic grid -->
<div class="grid">
<div class="grid tight">
<div class="grid spacious">

<!-- Use calculated values -->
<section style="padding: var(--a-space-xl) 0;">

<!-- Group related spacing -->
<div style="gap: var(--a-space-l); padding: var(--a-space-l);">
```

### ❌ DON'T

```html
<!-- Don't hardcode numbers -->
<div style="padding: 24px;">
<div style="margin: 32px;">
<div style="gap: 16px;">

<!-- Don't mix units -->
<div style="padding: var(--a-space-l); margin: 20px;">

<!-- Don't create custom spacing values -->
<div style="gap: 22px;">

<!-- Don't ignore responsive scaling -->
<section style="padding: 96px 0;">  <!-- Huge on mobile! -->
```

### Spacing Decision Tree

**Choose spacing based on:**

1. **What's the context?**
   - Between elements? → Use `gap`
   - Outside component? → Use `padding`
   - Separate from siblings? → Use `margin`

2. **How much space?**
   - Icon + text in button? → `--a-space-xs`
   - Form field gap? → `--a-space-s`
   - Component internal? → `--a-space-m`
   - Breathing room? → `--a-space-l`
   - Section break? → `--a-space-2xl`

3. **Responsive scaling?**
   - Should it stay same on mobile? → Same token
   - Should it be tighter on mobile? → Use media query, different token
   - Should it grow with viewport? → Use clamp() or fluid sizing

---

## Real-World Examples

### Example 1: Hero Section

```html
<section class="hero">
  <div class="container">
    <h1>Axiom01</h1>
    <p>Description</p>
    <div class="actions">
      <button>Action 1</button>
      <button>Action 2</button>
    </div>
    
    <div class="grid">
      <div class="stat">73</div>
      <div class="stat">149</div>
      <div class="stat">20+</div>
      <div class="stat">13.3</div>
    </div>
  </div>
</section>
```

**CSS**:
```css
.hero {
  padding: var(--a-space-3xl) 0;
}

.hero h1 {
  margin-bottom: var(--a-space-m);  /* Gap to description */
}

.hero p {
  margin-bottom: var(--a-space-xl);  /* Gap to actions */
  max-width: 65ch;
  margin-left: auto;
  margin-right: auto;
}

.hero .actions {
  margin-bottom: var(--a-space-2xl);  /* Gap to stats */
}

.hero .grid {
  margin-top: var(--a-space-xl);
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .hero {
    padding: var(--a-space-2xl) 0;  /* Tighter on mobile */
  }
}
```

### Example 2: Card Grid Section

```html
<section>
  <div class="container">
    <header>
      <h2>Cards Section</h2>
      <p>Description</p>
    </header>
    
    <div class="grid">
      <article class="card">
        <h3>Card 1</h3>
        <p>Content</p>
      </article>
      <article class="card">
        <h3>Card 2</h3>
        <p>Content</p>
      </article>
    </div>
  </div>
</section>
```

**CSS**:
```css
section {
  padding: var(--a-space-2xl) 0;
}

section > .container > header {
  margin-bottom: var(--a-space-2xl);  /* Gap to grid */
}

section > .container > header h2 {
  margin-bottom: var(--a-space-m);
}

.grid {
  gap: var(--a-space-l);
}

.card {
  padding: var(--a-space-l);
}

.card h3 {
  margin-bottom: var(--a-space-m);
}

.card p {
  margin: 0;
}
```

### Example 3: Navigation Menu

```html
<header class="main">
  <nav>
    <div class="brand">Logo</div>
    <ul class="links">
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
    </ul>
  </nav>
</header>
```

**CSS**:
```css
header.main {
  padding: var(--a-space-m) var(--a-space-l);
  border-bottom: 1px solid var(--a-color-outline);
}

header.main nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

header.main .links {
  display: flex;
  gap: var(--a-space-l);  /* Space between nav items */
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Mobile dropdown */
@media (max-width: 1024px) {
  header.main.menu-open .links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: var(--a-space-m);  /* Tighter on mobile */
    padding: var(--a-space-l);  /* Responsive padding */
    margin-left: 0;  /* NO negative margin - use padding */
    background: var(--a-color-surface);
    border-bottom: 1px solid var(--a-color-outline);
  }
}
```

**Key Fix**: Remove `left: 0` or use `left: var(--a-space-l)` with container logic, never `left: 0` without accounting for safe area.

---

## Summary

**Axiom01's layout system is built on three pillars:**

1. **Cascading Space** — All spacing from one unit variable
2. **Semantic Grid** — One class, three behavioral variants
3. **Responsive by Default** — Mobile-first, scales up beautifully

**Result:** Beautiful, consistent, responsive layouts with minimal CSS.

**Remember:**
- Always use `var(--a-space-*)` tokens
- Use `.grid` by default, add `.tight`/`.spacious` for density
- Let browser calculate responsive breakpoints
- Apply spacing consistently across sections
