# Card Component & Core Layout Patterns — Complete Guide

## Card Component (`.card`)

The card is one of the most critical components. It must be perfect.

### Core Structure

```html
<article class="card">
  <!-- Optional header -->
  <header>
    <h3>Title</h3>
  </header>

  <!-- Content area (automatic flex: 1) -->
  <div>
    <p>Content goes here</p>
  </div>

  <!-- Optional footer with action buttons -->
  <footer>
    <a href="#" class="button primary">Action 1</a>
    <a href="#" class="button secondary">Action 2</a>
  </footer>
</article>
```

### Card CSS Rules (Core)

```css
.card {
  position: relative;
  display: flex;              /* Flex container */
  flex-direction: column;     /* Stack vertically */
  min-width: 0;              /* Prevent overflow */
  word-wrap: break-word;     /* Text wraps */
  overflow-wrap: break-word;
  word-break: break-word;
  background: var(--a-color-surface);
  border: 1px solid var(--a-color-outline);
  border-radius: var(--a-border-radius-large);
  box-shadow: var(--a-shadow-medium);
  padding: var(--a-space-l); /* 24px all around */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
```

### Card Footer (Auto-Positions Buttons)

```css
.card > footer {
  margin-top: auto;           /* Push to bottom */
  padding: var(--a-space-l);  /* Full padding */
  border-top: 1px solid var(--ax-border);
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: var(--a-space-m);      /* Space between rows */
  align-items: stretch;       /* Buttons full width */
}

.card > footer .button {
  flex: 1;          /* Equal width */
  min-width: 120px; /* Minimum size */
}
```

### Grid Inside Card (Prevents Button Overlap)

```css
.card > .grid {
  padding-bottom: var(--a-space-m);  /* Buffer before footer */
}
```

### Perfect Card Usage

**With Footer & Buttons:**
```html
<article class="card">
  <h3>Feature</h3>
  <p>Description</p>
  <footer>
    <a href="#" class="button primary">Learn More</a>
  </footer>
</article>
```

**With Grid of Items:**
```html
<article class="card">
  <h3>Items</h3>
  <div class="grid tight">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </div>
  <footer>
    <a href="#" class="button secondary">View All</a>
  </footer>
</article>
```

**Multiple Buttons in Footer:**
```html
<article class="card">
  <h3>Actions</h3>
  <p>Choose an action</p>
  <footer>
    <div>
      <a href="#" class="button primary">Primary</a>
      <a href="#" class="button secondary">Secondary</a>
    </div>
  </footer>
</article>
```

---

## Grid System (`.grid`)

Three behavioral variants, one core concept: **auto-responsive mobile-first grids.**

### Base Grid (Default - Balanced)

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--a-space-l);  /* 24px */
}
```

**Responsive Behavior:**
- Mobile (< 480px): 1 column
- Tablet (480-960px): 2-3 columns
- Desktop (960px+): 3-4 columns

**Use When:** General layouts, card grids, component showcases

### Tight Grid (Dense - Many Items)

```css
.grid.tight {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--a-space-m);  /* 16px */
}
```

**Responsive Behavior:**
- Mobile: 1 column
- Tablet: 3-4 columns
- Desktop: 5-6 columns

**Use When:** Icon galleries, badges, thumbnails, many small items

### Spacious Grid (Roomy - Few Items)

```css
.grid.spacious {
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--a-space-xl);  /* 32px */
}
```

**Responsive Behavior:**
- Mobile: 1 column
- Tablet: 1-2 columns
- Desktop: 2-3 columns

**Use When:** Large cards, products, featured items, hero content

### Grid Usage Examples

```html
<!-- Balanced: default card grid -->
<div class="grid">
  <article class="card">...</article>
  <article class="card">...</article>
  <article class="card">...</article>
</div>

<!-- Tight: icon gallery -->
<div class="grid tight">
  <div class="icon-item">Icon 1</div>
  <div class="icon-item">Icon 2</div>
  <div class="icon-item">Icon 3</div>
</div>

<!-- Spacious: featured products -->
<div class="grid spacious">
  <article class="card large">Product 1</article>
  <article class="card large">Product 2</article>
</div>
```

---

## Actions (`.actions`)

Generic button group component for any context.

### Usage

```html
<!-- In sections -->
<div class="actions">
  <a href="#" class="button primary">Primary</a>
  <a href="#" class="button secondary">Secondary</a>
</div>

<!-- Or in card footer -->
<article class="card">
  <p>Content</p>
  <footer>
    <a href="#" class="button primary">Action</a>
  </footer>
</article>
```

### CSS

```css
.actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--a-space-m);  /* 16px desktop, 8px mobile */
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .actions {
    gap: var(--a-space-s);  /* 8px on mobile */
  }
}
```

---

## Button Spacing Rules

**Inside Card Footer:** Full width, equal size, gap between rows
```html
<footer>
  <a href="#" class="button">Single button full width</a>
</footer>
```

**Multiple Buttons:** Stack in row with gap
```html
<footer>
  <div>
    <a href="#" class="button primary">Cancel</a>
    <a href="#" class="button secondary">Submit</a>
  </div>
</footer>
```

**Outside Card:** Centered, responsive gap
```html
<div class="actions">
  <a href="#" class="button primary">Action 1</a>
  <a href="#" class="button secondary">Action 2</a>
</div>
```

---

## Navigation Dropdown (Full-Width Pattern)

The dropdown menu should be full-width with NO rounded corners.

### CSS

```css
header.main.menu-open .links {
  position: absolute;
  top: 100%;
  left: 0;                    /* Full left edge */
  right: 0;                   /* Full right edge */
  width: 100%;                /* Full width */
  background: var(--a-color-surface);
  padding: var(--a-space-l);  /* Padding, not margins */
  border-bottom: 1px solid var(--a-color-outline);
  box-shadow: var(--a-shadow-md);
  border-radius: 0;           /* NO rounded corners */
  display: flex;
  flex-direction: column;
  gap: var(--a-space-m);      /* Space between items */
}
```

**Why full-width?** The dropdown is part of the navigation, should extend naturally from edge to edge. Padding provides the breathing room, not margins.

**Why no border-radius?** The dropdown is a natural extension of the nav bar, not a separate floating element.

---

## Perfect Layout Pattern

**Section with Grid and Actions:**
```html
<section>
  <div class="container">
    <header>
      <h2>Section Title</h2>
      <p>Description</p>
    </header>

    <!-- Grid of items -->
    <div class="grid">
      <article class="card">...</article>
      <article class="card">...</article>
    </div>

    <!-- Actions below grid -->
    <div class="actions">
      <a href="#" class="button primary">View All</a>
      <a href="#" class="button secondary">Learn More</a>
    </div>
  </div>
</section>
```

---

## Core Component Audit Checklist

**Card Component:**
- ✅ Flex container with column layout
- ✅ Text wraps (overflow-wrap, word-break)
- ✅ Footer uses margin-top: auto
- ✅ Footer has proper padding (not margin)
- ✅ Buttons in footer are flexible
- ✅ Grid inside card has bottom padding
- ✅ Hover state works (transform, shadow)
- ✅ All spacing uses tokens

**Grid System:**
- ✅ Base .grid: 320px minmax
- ✅ .grid.tight: 200px minmax
- ✅ .grid.spacious: 400px minmax
- ✅ All use auto-fit
- ✅ Gaps responsive to context
- ✅ No custom grid classes anywhere
- ✅ Card inside grid has padding

**Actions Component:**
- ✅ Flex layout, centered
- ✅ Responsive gap (24px → 8px)
- ✅ Works in any context
- ✅ Buttons remain semantic

**Navigation:**
- ✅ Dropdown is full-width
- ✅ NO border-radius
- ✅ Uses padding, not margins
- ✅ Proper gap between items
- ✅ Maintains nav styling

---

## Summary

These core components are CRITICAL infrastructure:
- `.card` — Flexible, context-aware, button-aware
- `.grid` (3 variants) — Auto-responsive, behavioral
- `.actions` — Generic button groups, reusable
- `footer` in cards — Auto-positions buttons to bottom
- `nav dropdown` — Full-width, semantic, no rounded corners

All use tokens. All are responsive. All are semantic. All work together perfectly.
