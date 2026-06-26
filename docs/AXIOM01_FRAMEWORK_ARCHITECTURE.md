# Axiom01 Framework Architecture & Component Development Guide

## Core Architecture Principles

### 1. The Semantic-First Philosophy

Axiom01 is built on one fundamental principle:

> **Write meaningful HTML where class names describe WHAT the element IS, not what it looks like.**

```html
<!-- ✅ AXIOM01: Semantic class names -->
<form class="form">
  <label for="email">Email</label>
  <input id="email" type="email" required>
  <button class="primary">Submit</button>
</form>

<!-- ❌ Anti-pattern: Visual/utility class names -->
<form class="flex flex-col gap-4 p-4">
  <label class="font-bold text-sm">Email</label>
  <input class="px-3 py-2 border rounded">
  <button class="px-4 py-2 bg-blue-500 text-white">Submit</button>
</form>
```

### 2. One Semantic Class Per Component

Each component receives ONE class that encapsulates all styling, spacing, interactions, and state:

```css
.card {
  display: flex;
  flex-direction: column;
  gap: var(--a-space-m);
  padding: var(--a-space-m);
  background: var(--a-color-surface);
  border: 1px solid var(--a-color-outline);
  border-radius: var(--a-border-radius-medium);
  transition: all var(--a-transition-base);
}

.card:hover {
  box-shadow: var(--a-shadow-md);
  border-color: var(--a-color-primary);
}

.card header {
  padding-bottom: var(--a-space-s);
  border-bottom: 1px solid var(--a-color-outline);
}

.card main {
  flex: 1;
}

.card footer {
  display: flex;
  gap: var(--a-space-m);
  margin-top: var(--a-space-s);
}
```

**Benefits:**
- Single class provides complete behavior
- No fragmented dependencies
- Changes propagate consistently
- Smaller HTML markup
- Easier maintenance

### 3. Design Tokens as Single Source of Truth

All values flow from 149 design tokens. Never hardcode:

```css
/* ✅ Token-based */
:root {
  --a-space-unit: 1rem;
  --a-space-xs: calc(var(--a-space-unit) * 0.25);
  --a-space-s: calc(var(--a-space-unit) * 0.5);
  --a-space-m: var(--a-space-unit);
  --a-space-l: calc(var(--a-space-unit) * 1.5);
  --a-space-xl: calc(var(--a-space-unit) * 2);
  --a-space-2xl: calc(var(--a-space-unit) * 3);
  --a-space-3xl: calc(var(--a-space-unit) * 4);
  --a-space-4xl: calc(var(--a-space-unit) * 6);
}

/* ✅ Token usage */
.button {
  padding: var(--a-space-s) var(--a-space-m);
  margin: var(--a-space-xs);
  border-radius: var(--a-border-radius-medium);
}

/* ❌ Hardcoded values */
.button {
  padding: 8px 16px;
  margin: 4px;
  border-radius: 8px;
}
```

---

## Component Structure

### Directory Organization

```
css/
├── axiom.css                    # Master framework file
├── axiom.min.css               # Minified for production
├── _components.css             # Legacy (consolidated into axiom.css)

docs/
├── components/
│   ├── button.html
│   ├── card.html
│   ├── form.html
│   └── ... (77 component documentation pages)
├── AXIOM01_STYLING_GUIDE.md
├── AXIOM01_PERFORMANCE_GUIDE.md
└── colors-advanced.html

js/
├── axiom.js                    # Core framework JavaScript
├── axicons-loader.js           # Icon system
└── render-icons.js             # Icon renderer
```

### Component Anatomy

```html
<!-- HTML: Semantic structure -->
<article class="card">
  <header>
    <h3>Title</h3>
  </header>
  <main>
    <p>Content here.</p>
  </main>
  <footer>
    <button class="primary">Action</button>
  </footer>
</article>
```

```css
/* CSS: Encapsulated styling */
.card {
  /* Base layout */
  display: flex;
  flex-direction: column;
  
  /* Spacing (all from tokens) */
  gap: var(--a-space-m);
  padding: var(--a-space-m);
  
  /* Appearance (all from tokens) */
  background: var(--a-color-surface);
  border: 1px solid var(--a-color-outline);
  border-radius: var(--a-border-radius-medium);
  
  /* Interaction */
  transition: all var(--a-transition-base);
}

/* State variations */
.card:hover {
  box-shadow: var(--a-shadow-md);
}

.card.filled {
  background: var(--a-color-primary-container);
}

.card.elevated {
  box-shadow: var(--a-shadow-lg);
}

/* Child elements */
.card header {
  /* Styles inherited from parent context */
}
```

---

## Design Token System

### Token Categories

| Category | Count | Purpose |
|----------|-------|---------|
| Color | 45 | Semantic + palette colors with "on" variants |
| Spacing | 12 | Proportional spacing system (0.25rem - 6rem) |
| Typography | 15 | Font sizes, weights, line heights, families |
| Borders | 8 | Border radius and width values |
| Shadows | 8 | Depth levels for elevation |
| Animations | 12 | Transitions, durations, easing functions |
| Layout | 10 | Breakpoints, max-widths, containers |
| Sizing | 14 | Common component sizes |
| **Total** | **149** | **Complete design system** |

### Token Naming Convention

```
--a-[category]-[semantic]-[modifier]

Examples:
--a-color-primary              # Primary action color
--a-color-on-primary           # Text/content on primary
--a-color-primary-container    # Background with primary tint
--a-color-on-primary-container # Text on primary background

--a-space-m                    # Medium spacing (1rem)
--a-space-l                    # Large spacing (1.5rem)

--a-font-size-base             # Body text
--a-font-size-lg               # Slightly larger
--a-font-weight-semibold       # 600 weight

--a-border-radius-small        # 4px
--a-border-radius-medium       # 8px
--a-border-radius-large        # 16px

--a-shadow-sm                  # Subtle elevation
--a-shadow-md                  # Medium elevation
--a-shadow-lg                  # Heavy elevation

--a-transition-base            # 200ms default
--a-transition-fast            # 100ms quick
--a-transition-slow            # 300ms deliberate
```

---

## Building New Components

### Step-by-Step Component Creation

#### 1. Define Semantic Scope

What IS the component? (not what it looks like)

```
- Is it a card? → class="card"
- Is it a button? → class="button"
- Is it a form? → class="form"
- Is it a table? → class="table"
```

#### 2. Create Encapsulated CSS

One class provides complete behavior:

```css
.card {
  /* Layout */
  display: flex;
  flex-direction: column;
  
  /* Spacing */
  gap: var(--a-space-m);
  padding: var(--a-space-m);
  
  /* Appearance */
  background: var(--a-color-surface);
  border: 1px solid var(--a-color-outline);
  border-radius: var(--a-border-radius-medium);
  
  /* Interaction */
  transition: all var(--a-transition-base);
}

/* Variants */
.card.primary {
  background: var(--a-color-primary-container);
  border-color: var(--a-color-primary);
}

.card.elevated {
  box-shadow: var(--a-shadow-lg);
}

/* States */
.card:hover {
  box-shadow: var(--a-shadow-md);
}

.card:focus-visible {
  outline: 2px solid var(--a-color-primary);
  outline-offset: 2px;
}

/* Accessibility */
.card[data-disabled="true"] {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}
```

#### 3. Child Element Styling

Style child elements contextually:

```css
.card header {
  border-bottom: 1px solid var(--a-color-outline);
  padding-bottom: var(--a-space-m);
  margin-bottom: var(--a-space-m);
}

.card header h3 {
  margin: 0;
  font-size: var(--a-font-size-lg);
  font-weight: var(--a-font-weight-bold);
}

.card main {
  flex: 1;
}

.card footer {
  display: flex;
  gap: var(--a-space-m);
  margin-top: auto;
  border-top: 1px solid var(--a-color-outline);
  padding-top: var(--a-space-m);
}
```

#### 4. Responsive Behavior

Mobile-first approach:

```css
/* Mobile (default) */
.card {
  grid-template-columns: 1fr;
}

/* Tablet */
@media (min-width: 768px) {
  .card {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .card {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

#### 5. Dark Mode Support

Use semantic color tokens (automatic theming):

```css
.card {
  background: var(--a-color-surface);     /* Auto light/dark */
  color: var(--a-color-on-surface);       /* Auto light/dark */
  border-color: var(--a-color-outline);   /* Auto light/dark */
}

/* No need for explicit dark mode CSS - tokens handle it! */
```

#### 6. Accessibility

Always include:

```css
/* Focus states */
.card button:focus-visible {
  outline: 2px solid var(--a-color-primary);
  outline-offset: 2px;
}

/* Disabled state */
.card[disabled],
.card[aria-disabled="true"] {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}

/* High contrast mode */
@media (prefers-contrast: more) {
  .card {
    border-width: 2px;
    box-shadow: none;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
}
```

---

## Testing Components

### Component Documentation Template

Every component should have:

1. **Component Overview**
   - What it is
   - When to use it
   - Semantic meaning

2. **HTML Example**
   - Minimal working example
   - One semantic class
   - Proper ARIA attributes

3. **Variants**
   - Primary, secondary, tertiary
   - Different states
   - Size variations

4. **Interactive Examples**
   - Live previews
   - Copy-to-clipboard code
   - Working interactions

5. **Accessibility**
   - Keyboard navigation
   - Screen reader support
   - Focus indicators

### Testing Checklist

- [ ] Component works on all browsers (Chrome, Safari, Firefox, Edge)
- [ ] Responsive on mobile (320px), tablet (768px), desktop (1440px+)
- [ ] Dark mode theme works correctly
- [ ] Keyboard navigation fully functional
- [ ] Screen reader announces content properly
- [ ] Focus indicators visible
- [ ] Touch-friendly on mobile (48px+ tap targets)
- [ ] Performance acceptable (< 100ms render time)
- [ ] Animation smooth (60fps)
- [ ] Color contrast passes WCAG AA (4.5:1 text)

---

## Common Patterns

### Pattern 1: Variant Pattern

```css
.button {
  /* Base styles */
  padding: var(--a-space-s) var(--a-space-m);
  background: var(--a-color-surface);
  color: var(--a-color-on-surface);
  border: 1px solid var(--a-color-outline);
}

/* Variants change appearance, not structure */
.button.primary {
  background: var(--a-color-primary);
  color: var(--a-color-on-primary);
  border-color: var(--a-color-primary);
}

.button.secondary {
  background: var(--a-color-secondary);
  color: var(--a-color-on-secondary);
  border-color: var(--a-color-secondary);
}

.button.outline {
  background: transparent;
  color: var(--a-color-primary);
  border-color: var(--a-color-primary);
}
```

### Pattern 2: State Pattern

```css
.button {
  /* Normal state */
  transition: all var(--a-transition-base);
}

.button:hover {
  /* Hover state */
  box-shadow: var(--a-shadow-md);
  transform: translateY(-2px);
}

.button:active {
  /* Active state */
  transform: translateY(0);
  box-shadow: none;
}

.button:focus-visible {
  /* Focus state */
  outline: 2px solid var(--a-color-primary);
  outline-offset: 2px;
}

.button:disabled,
.button[aria-disabled="true"] {
  /* Disabled state */
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}
```

### Pattern 3: Responsive Pattern

```css
/* Mobile-first */
.container {
  grid-template-columns: 1fr;
  gap: var(--a-space-m);
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--a-space-l);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--a-space-l);
  }
}

/* Large Desktop */
@media (min-width: 1440px) {
  .container {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## Maintenance & Updates

### Adding New Tokens

1. Define in `:root` section
2. Create semantic color "on" variant if color
3. Update all component references
4. Test all affected components
5. Document in colors guide

### Modifying Components

1. Keep backward compatibility
2. Use data attributes for new variants
3. Test responsive and accessibility
4. Update documentation pages
5. Rebuild and test build output

### Performance Considerations

- Keep component CSS < 50 lines (encourage nesting under one class)
- Use CSS Grid/Flexbox over absolute positioning
- GPU-accelerate animations (transform, opacity only)
- Avoid color property animations (use rgba with background)

---

## Resources & References

- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Accessibility (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/)
- [CSS Containment](https://developer.mozilla.org/en-US/docs/Web/CSS/contain)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

---

**Framework Version**: 2.0.0  
**Last Updated**: Session 14  
**Philosophy**: One semantic class. Complete behavior. Total consistency.
