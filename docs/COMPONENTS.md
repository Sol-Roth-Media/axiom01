# Component Reference Guide

## Overview

Axiom01 provides a complete system of semantic components including buttons, cards, badges, tags, alerts, and more. All components follow the framework's philosophy of semantic HTML with minimal class-based intervention.

**File Location**: `css/_components.css` (13,075 bytes, expanded in Session 3)

## Button Component System

### Base Button

The most fundamental interactive element. Applies to `<button>`, `<input type="submit">`, `<input type="button">`, `<input type="reset">`, and any element with `.button` class.

```html
<button>Primary Button</button>
<input type="submit" value="Submit">
<a href="#" class="button">Link Button</a>
```

**Default Styles**:
- Background: Primary color (blue)
- Color: White text
- Padding: Space-s (0.5rem) × space-m (1rem)
- Height: Minimum 2rem (touch-target safe)
- Hover: Darker shade + subtle lift + shadow
- Focus: Visible outline for keyboard users

### Size Variants

Three button sizes for different contexts:

```html
<!-- Small button (sm) -->
<button class="button--sm">Small</button>

<!-- Default button (no class) -->
<button>Default</button>

<!-- Large button (lg) -->
<button class="button--lg">Large</button>

<!-- Extra large button (xl) -->
<button class="button--xl">Extra Large</button>
```

**Size Details**:
- `--sm`: 0.875rem font, 1.75rem height
- Default: 1rem font, 2rem height
- `--lg`: 1.125rem font, 3rem height
- `--xl`: 1.25rem font, 3.5rem height

### Type Variants

Different button types for different actions:

```html
<!-- Primary (default) -->
<button>Primary Action</button>

<!-- Secondary -->
<button class="button--secondary">Cancel</button>

<!-- Danger/Destructive -->
<button class="button--danger">Delete</button>

<!-- Success -->
<button class="button--success">Confirm</button>

<!-- Warning -->
<button class="button--warning">Attention</button>

<!-- Ghost (transparent with border) -->
<button class="button--ghost">Ghost</button>

<!-- Outline (variant of ghost) -->
<button class="button--outline">Outline</button>
```

### Special Button States

```html
<!-- Icon-only button -->
<button class="button--icon" aria-label="Close">✕</button>

<!-- Loading state -->
<button class="button--loading" disabled>Loading...</button>

<!-- Disabled state -->
<button disabled>Disabled</button>

<!-- Focus state (automatic on keyboard navigation) -->
<button>Keyboard Focus Here</button>
```

### Button Groups

Group buttons together for related actions:

```html
<div class="button-group">
  <button>First</button>
  <button>Second</button>
  <button>Third</button>
</div>
```

**Styles**:
- Merged borders (no gaps)
- Connected appearance
- Individual buttons lose rounded corners

## Link Component System

### Base Link

Default link styling with smooth transitions.

```html
<a href="/page">Default Link</a>
```

**Default Styles**:
- Color: Primary blue
- No underline (except on hover)
- Visited links: Darker shade of primary
- Focus: Visible outline

### Link Variants

```html
<!-- Primary link (bold) -->
<a href="/page" class="link--primary">Primary Link</a>

<!-- Secondary link (muted) -->
<a href="/page" class="link--secondary">Secondary Link</a>

<!-- Muted link -->
<a href="/page" class="link--muted">Muted Link</a>

<!-- Underlined link -->
<a href="/page" class="link--underline">Underlined Link</a>

<!-- Call-to-action link (button-like) -->
<a href="/signup" class="link--cta">Sign Up Now</a>

<!-- External link (auto-adds arrow) -->
<a href="https://external.com" target="_blank">External Site</a>
```

## Card Component System

### Base Card

Container for grouped content with border and optional shadow.

```html
<div class="card">
  <header>
    <h2>Card Title</h2>
  </header>
  <div>Card content goes here</div>
  <footer>
    <button class="button--secondary">Cancel</button>
    <button>Save</button>
  </footer>
</div>
```

**Structure**:
- `header` - Title section with border-bottom
- Content divs - Padded sections
- `footer` - Action buttons with flex layout

### Card Variants

```html
<!-- Elevated card (shadow) -->
<div class="card card--elevated">...</div>

<!-- Outlined card (border) -->
<div class="card card--outlined">...</div>

<!-- Filled card (background color) -->
<div class="card card--filled">...</div>

<!-- Interactive card (hover effect) -->
<div class="card card--interactive">...</div>

<!-- Hover-lift card (animations on hover) -->
<div class="card card--hover-lift">...</div>
```

### Card Structure Example

```html
<div class="card card--elevated">
  <header>
    <h2>Product Details</h2>
  </header>
  
  <div>
    <p>Main content section with all the product information.</p>
    <p>Images, descriptions, specs can go here.</p>
  </div>
  
  <div>
    <p>Additional section for related info or features.</p>
  </div>
  
  <footer>
    <button class="button--secondary">Learn More</button>
    <button class="button--success">Add to Cart</button>
  </footer>
</div>
```

### Card Grid

Responsive grid of cards:

```html
<div class="card-grid">
  <div class="card">...</div>
  <div class="card">...</div>
  <div class="card">...</div>
</div>
```

**Responsive Breakpoints**:
- Desktop: 280px columns (3+ cards per row)
- Tablet: 200px columns (2-3 cards per row)
- Mobile: 1 column (full width)

## Badge Component System

### Base Badge

Small label for status or category indication.

```html
<span class="badge">Primary</span>
<span class="badge badge--success">Active</span>
<span class="badge badge--error">Inactive</span>
```

**Default Badge**:
- Uppercase, pill-shaped
- Primary blue background with light tint
- Compact padding
- Font-weight: 600 (semibold)

### Badge Variants (Colors)

```html
<!-- Primary (default) -->
<span class="badge badge--primary">New</span>

<!-- Secondary -->
<span class="badge badge--secondary">Beta</span>

<!-- Success (green) -->
<span class="badge badge--success">Active</span>

<!-- Warning (orange) -->
<span class="badge badge--warning">Pending</span>

<!-- Error (red) -->
<span class="badge badge--error">Critical</span>

<!-- Info (blue) -->
<span class="badge badge--info">Info</span>
```

### Badge Sizes

```html
<!-- Small badge -->
<span class="badge badge--sm">Tiny</span>

<!-- Default badge -->
<span class="badge">Normal</span>

<!-- Large badge -->
<span class="badge badge--lg">Big</span>
```

## Tag Component System

### Base Tag

Flexible tags with optional dismissible button.

```html
<span class="tag">Technology</span>
<span class="tag">Design</span>
```

### Dismissible Tag

```html
<span class="tag tag--dismissible">
  Selected Option
  <button aria-label="Remove">×</button>
</span>
```

**Styles**:
- Pill-shaped with rounded corners
- Inline-flex for alignment
- Gap between text and close button
- Close button is semi-transparent until hover

## Alert Component System

### Base Alert

Prominent notification/message container.

```html
<div class="alert alert--info">
  <div>This is an informational message.</div>
</div>
```

### Alert Types (Colors)

```html
<!-- Info alert (blue) -->
<div class="alert alert--info">
  <h3>Information</h3>
  <p>This is helpful information.</p>
</div>

<!-- Success alert (green) -->
<div class="alert alert--success">
  <h3>Success</h3>
  <p>Your action completed successfully.</p>
</div>

<!-- Warning alert (orange) -->
<div class="alert alert--warning">
  <h3>Warning</h3>
  <p>Please review this carefully.</p>
</div>

<!-- Error alert (red) -->
<div class="alert alert--error">
  <h3>Error</h3>
  <p>Something went wrong. Please try again.</p>
</div>
```

### Dismissible Alert

```html
<div class="alert alert--success alert--dismissible">
  <div>
    <h3>Success</h3>
    <p>Your changes have been saved.</p>
  </div>
  <button aria-label="Dismiss">×</button>
</div>
```

### Alert Sizes

```html
<!-- Small alert -->
<div class="alert alert--success alert--sm">
  Changes saved
</div>

<!-- Default alert -->
<div class="alert alert--warning">
  <h3>Warning</h3>
  <p>Please review this carefully.</p>
</div>

<!-- Large alert -->
<div class="alert alert--error alert--lg">
  <h3>Critical Error</h3>
  <p>This is a serious issue that requires attention.</p>
</div>
```

## Component Combinations

### Card with Button Group

```html
<div class="card">
  <header>
    <h2>Settings</h2>
  </header>
  <div class="button-group">
    <button>Save</button>
    <button class="button--secondary">Cancel</button>
    <button class="button--danger">Reset</button>
  </div>
</div>
```

### Card with Alert

```html
<div class="card">
  <div class="alert alert--warning">
    <h3>Important</h3>
    <p>This change is permanent.</p>
  </div>
  <div>...</div>
</div>
```

### Card with Badges

```html
<div class="card">
  <header>
    <h2>
      Article Title
      <span class="badge badge--success">Featured</span>
    </h2>
  </header>
  <div>Article content...</div>
</div>
```

## Responsive Behavior

### Mobile Adaptations

- Buttons: Remain full-width or flexible as needed
- Cards: Stack to single column on mobile
- Alert: Adjusts padding and font size on small screens
- Badge: Maintains size across breakpoints

### Keyboard Navigation

All components fully support keyboard navigation:
- ✅ Tab key to focus
- ✅ Enter/Space to activate
- ✅ Escape to close/dismiss (where applicable)
- ✅ Visible focus indicators on all interactive elements

## Accessibility

### WCAG 2.1 Level AA Compliance

✅ All components meet WCAG 2.1 AA standards:
- Sufficient color contrast (4.5:1 for text)
- Focus indicators visible and prominent
- Semantic HTML structure
- ARIA attributes where needed
- Keyboard accessible

### Color Contrast

All color variants ensure sufficient contrast:
- Text on background: 4.5:1 or better
- Button text: 4.5:1 or better
- Badge text: 4.5:1 or better
- Alert text: 4.5:1 or better

### Motion & Animation

- Alert dismissal uses transition animations
- Respects `prefers-reduced-motion`
- No flashing or rapid animations
- Focus animations are smooth and subtle

## Dark Mode Support

All components automatically adapt to dark mode via CSS variables:

```css
:root {
  --a-color-primary: #2563eb;  /* Light mode */
  --ax-surface: #ffffff;
  --ax-text: #111827;
}

@media (prefers-color-scheme: dark) {
  :root {
    --a-color-primary: #60a5fa;  /* Dark mode */
    --ax-surface: #1f2937;
    --ax-text: #f3f4f6;
  }
}
```

## Browser Support

All components are fully supported in:
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Android Browser 90+

## Usage Philosophy

### ✅ DO:
- Use semantic HTML (`<button>`, `<a>`, `<h2>`, `<div>`)
- Apply single root class (`.button`, `.card`, `.alert`)
- Use child element selectors in CSS
- Combine components naturally
- Ensure keyboard accessibility

### ❌ DON'T:
- Use non-semantic divs for interactive elements
- Stack multiple root classes
- Create nested BEM-like structures
- Use class names that couple to DOM structure
- Ignore keyboard navigation requirements

## Related Files

- **Implementation**: `css/_components.css`
- **Variables**: `css/_variables.css` (design tokens)
- **Animations**: `css/_animations.css`
- **Utilities**: `css/_utilities.css`
- **Styling Guide**: `AXIOM01_STYLING_GUIDE.md`
- **Token Reference**: `docs/tokens/VARIABLES.md`

---

**Version**: 2.0.0  
**Updated**: 2025  
**Status**: Production Ready ✅
