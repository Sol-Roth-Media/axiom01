# Color Combinations Guide for Axiom01

## Introduction

Axiom01's color system is designed to automatically generate harmonious palettes from a single primary color. However, knowing *how* to combine colors effectively goes beyond RGB values—it's about creating visual hierarchy, contrast, meaning, and aesthetic appeal. This guide teaches you how to combine Axiom01's pre-built color tokens to create beautiful, accessible, and semantically meaningful interfaces.

---

## Part 1: Understanding Axiom01's Color System

### The Core Color Architecture

Axiom01 provides:

- **Primary, Secondary, Tertiary**: Main brand colors and their "on-color" counterparts
- **Container Colors**: Background colors with guaranteed accessible "on-container" text colors
- **Semantic Colors**: Success, warning, error, info (with their own containers)
- **Analogous Colors**: Colors adjacent to primary on the color wheel (1-2)
- **Neutral Colors**: Grayscale for structure and hierarchy (gray-1 through gray-36)
- **Gradients**: Pre-built gradient combinations

### CSS Variables at Your Disposal

```css
/* Base Colors */
--a-color-primary
--a-color-secondary
--a-color-tertiary

/* Text Colors (on-surface) */
--a-color-on-surface
--a-color-on-surface-variant

/* Container Colors (for backgrounds) */
--a-color-primary-container
--a-color-secondary-container
--a-color-tertiary-container
--a-color-analogous-1-container
--a-color-analogous-2-container

/* Text on Containers (guaranteed accessible) */
--a-color-on-primary-container
--a-color-on-secondary-container
--a-color-on-tertiary-container

/* Semantic */
--a-color-success
--a-color-warning
--a-color-error
--a-color-info
/* ...plus their container and on-container variants */

/* Neutral Surface */
--a-color-surface
--a-color-outline

/* Gradients */
--a-gradient-primary
--a-gradient-sunset
--a-gradient-ocean
--a-gradient-forest
```

---

## Part 2: Color Harmony Principles

### 1. Complementary Harmony

**What it is:** Colors opposite on the color wheel create maximum contrast and visual energy.

**When to use:**
- Call-to-action buttons against neutral backgrounds
- Error states paired with success information
- Highlighting important sections

**Axiom01 Example:**
```css
/* Primary button (e.g., blue) against surface */
button.primary {
  background: var(--a-color-primary);
  color: var(--a-color-on-primary-container);
}

/* Complementary error message (opposing color wheel position) */
.alert.error {
  background: var(--a-color-error-container);
  color: var(--a-color-on-error-container);
}
```

### 2. Analogous Harmony

**What it is:** Colors next to each other on the color wheel create cohesion and calm.

**When to use:**
- Related feature sections
- Multi-step forms
- Status progression (stage 1 → stage 2 → stage 3)
- Subtle visual variety without jarring changes

**Axiom01 Example:**
```css
/* Section 1: Primary */
.feature-section:nth-child(1) {
  background: var(--a-color-primary-container);
  color: var(--a-color-on-primary-container);
}

/* Section 2: Analogous 1 (next to primary) */
.feature-section:nth-child(2) {
  background: var(--a-color-analogous-1-container);
  color: var(--a-color-on-analogous-1-container);
}

/* Section 3: Analogous 2 (next to analogous-1) */
.feature-section:nth-child(3) {
  background: var(--a-color-analogous-2-container);
  color: var(--a-color-on-analogous-2-container);
}
```

### 3. Triadic Harmony

**What it is:** Three colors equally spaced on the color wheel (120° apart) create balanced, vibrant compositions.

**When to use:**
- Multi-category dashboards
- Feature showcases
- Complex data visualizations

**Axiom01 Approximation** (using primary + semantic colors):
```css
/* Three distinct categories in equal balance */
.category-primary {
  background: var(--a-color-primary-container);
  color: var(--a-color-on-primary-container);
}

.category-secondary {
  background: var(--a-color-secondary-container);
  color: var(--a-color-on-secondary-container);
}

.category-tertiary {
  background: var(--a-color-tertiary-container);
  color: var(--a-color-on-tertiary-container);
}
```

### 4. Monochromatic Harmony

**What it is:** Various shades and tints of a single color create sophistication and focus.

**When to use:**
- Product cards
- Focused feature sections
- Premium/luxury branding
- Minimal, elegant interfaces

**Axiom01 Example:**
```css
/* Light to dark variations of primary */
.card.light {
  background: rgba(var(--a-color-primary-h), var(--a-color-primary-s), 95%);
  border: 1px solid var(--a-color-primary-container);
}

.card.medium {
  background: var(--a-color-primary-container);
}

.card.dark {
  background: var(--a-color-primary);
  color: white;
}
```

### 5. Neutral Harmony (Grayscale)

**What it is:** Pure neutrals (grays) with strategic accent colors for sophistication.

**When to use:**
- Corporate/professional sites
- Minimalist designs
- Technical interfaces
- Accessibility-critical applications

**Axiom01 Example:**
```css
.card {
  background: var(--a-color-surface);
  border: 1px solid var(--a-color-outline);
  color: var(--a-color-on-surface);
}

/* Subtle hierarchy using only grays */
.card h3 {
  color: var(--a-color-on-surface);        /* Darkest text */
}

.card p {
  color: var(--a-color-on-surface-variant); /* Lighter text */
}

/* Single accent for importance */
.card a {
  color: var(--a-color-primary);
}
```

---

## Part 3: Practical Color Recipes

### Recipe 1: Professional Dashboard

**Goal:** Create multiple sections with visual distinction but cohesion.

```css
.dashboard {
  background: var(--a-color-surface);
}

.section-primary {
  background: var(--a-color-primary-container);
  color: var(--a-color-on-primary-container);
}

.section-secondary {
  background: var(--a-color-secondary-container);
  color: var(--a-color-on-secondary-container);
}

.section-stats {
  background: var(--a-color-surface);
  border: 1px solid var(--a-color-outline);
}

.stat-value {
  color: var(--a-color-primary);
  font-weight: var(--a-font-weight-bold);
}

.stat-label {
  color: var(--a-color-on-surface-variant);
}
```

### Recipe 2: E-commerce Product Gallery

**Goal:** Showcase products with visual interest and status indicators.

```css
.product-card {
  background: var(--a-color-surface);
  border: 1px solid var(--a-color-outline);
  border-radius: var(--a-border-radius-medium);
}

.product-price {
  color: var(--a-color-primary);
  font-weight: var(--a-font-weight-bold);
}

.product-old-price {
  color: var(--a-color-on-surface-variant);
  text-decoration: line-through;
}

.badge.sale {
  background: var(--a-color-error-container);
  color: var(--a-color-on-error-container);
}

.badge.popular {
  background: var(--a-color-warning-container);
  color: var(--a-color-on-warning-container);
}

.badge.new {
  background: var(--a-color-success-container);
  color: var(--a-color-on-success-container);
}
```

### Recipe 3: Social/Community Platform

**Goal:** Create sections for different types of content with clear visual hierarchy.

```css
.post {
  background: var(--a-color-surface);
  border: 1px solid var(--a-color-outline);
}

.post-header {
  border-bottom: 1px solid var(--a-color-outline);
}

.post-author {
  color: var(--a-color-primary);
  font-weight: var(--a-font-weight-bold);
}

.post-content {
  color: var(--a-color-on-surface);
}

.post-actions button {
  border: 1px solid var(--a-color-outline);
  color: var(--a-color-on-surface-variant);
  background: transparent;
}

.post-actions button:hover {
  background: var(--a-color-primary-container);
  color: var(--a-color-on-primary-container);
}

.like-count.active {
  color: var(--a-color-error);
}
```

### Recipe 4: Form with Status Indicators

**Goal:** Provide clear feedback status (default, valid, warning, error).

```css
.form-group {
  border: 1px solid var(--a-color-outline);
  background: var(--a-color-surface);
}

/* Default state */
.form-group input {
  border: 1px solid var(--a-color-outline);
}

/* Valid state */
.form-group.valid input {
  border: 1px solid var(--a-color-success);
  background: var(--a-color-success-container);
}

.form-group.valid label {
  color: var(--a-color-success);
}

/* Error state */
.form-group.error input {
  border: 1px solid var(--a-color-error);
  background: var(--a-color-error-container);
}

.form-group.error label {
  color: var(--a-color-error);
}

.form-group.error small {
  color: var(--a-color-error-container);
}
```

### Recipe 5: Data Visualization / Charts

**Goal:** Multiple data series with distinct, harmonious colors.

```css
.chart-series-primary {
  fill: var(--a-color-primary);
}

.chart-series-secondary {
  fill: var(--a-color-secondary);
}

.chart-series-tertiary {
  fill: var(--a-color-tertiary);
}

.chart-series-success {
  fill: var(--a-color-success);
}

.chart-series-warning {
  fill: var(--a-color-warning);
}

.chart-series-error {
  fill: var(--a-color-error);
}

.chart-legend {
  color: var(--a-color-on-surface);
}

.chart-label {
  color: var(--a-color-on-surface-variant);
  font-size: var(--a-font-size-small);
}
```

---

## Part 4: Accessibility & Color Contrast

### The Golden Rule

**WCAG 2.1 AA requires:**
- Normal text: 4.5:1 contrast ratio
- Large text (18px+): 3:1 contrast ratio
- Visual components: 3:1 contrast ratio

### Why Axiom01's Container System Guarantees Accessibility

```css
/* GUARANTEED ACCESSIBLE */
.alert.success {
  background: var(--a-color-success-container);
  color: var(--a-color-on-success-container);  /* Calculated to meet WCAG AA */
}

/* AXIOM01 PROMISE: */
/* --a-color-on-success-container is ALWAYS readable against --a-color-success-container */
```

### What NOT to Do

```css
/* ❌ DON'T: Guess contrast ratios */
.card {
  background: var(--a-color-primary);
  color: var(--a-color-on-surface);  /* Wrong! May not have enough contrast */
}

/* ✅ DO: Use matching on-container pairs */
.card {
  background: var(--a-color-primary-container);
  color: var(--a-color-on-primary-container);  /* Guaranteed accessible */
}
```

### Theme-Aware Design

```css
/* Light theme */
[data-theme="light"] .card {
  background: var(--a-color-surface);
  color: var(--a-color-on-surface);
}

/* Dark theme */
[data-theme="dark"] .card {
  background: var(--a-color-surface);  /* CSS variables change, contrast maintained */
  color: var(--a-color-on-surface);
}

/* Axiom01 automatically maintains contrast across themes */
```

---

## Part 5: Advanced Color Techniques

### 1. Pseudo-Color Overlay (Hover States)

```css
.button {
  background: var(--a-color-primary);
  color: white;
  transition: opacity 0.2s ease;
}

.button:hover {
  opacity: 0.85;  /* Subtle darkening without changing color variable */
}
```

### 2. Gradient Combinations

```css
.hero {
  background: linear-gradient(
    135deg,
    var(--a-color-primary),
    var(--a-color-secondary)
  );
}

/* Or use pre-built gradients */
.section {
  background: var(--a-gradient-ocean);
}
```

### 3. Semantic Color + Opacity for Layering

```css
.overlay {
  background: rgba(0, 0, 0, 0.5);  /* Semantic overlay */
}

.card-stack {
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
}
```

### 4. Color Palette Switching (Theming)

```html
<select id="theme-select">
  <option value="light">Light</option>
  <option value="dark">Dark</option>
  <option value="desert-sunset">Desert Sunset</option>
</select>
```

```javascript
document.getElementById('theme-select').addEventListener('change', (e) => {
  document.documentElement.setAttribute('data-theme', e.target.value);
});
```

---

## Part 6: Mistakes to Avoid

### ❌ Mistake 1: Too Many Colors

```css
/* DON'T: Every component gets a different color */
.card-primary { background: var(--a-color-primary); }
.card-secondary { background: var(--a-color-secondary); }
.card-tertiary { background: var(--a-color-tertiary); }
.card-success { background: var(--a-color-success); }
.card-warning { background: var(--a-color-warning); }
/* ...50 more variations */
```

**Better:** Use 3-4 distinct colors. Reuse them strategically.

### ❌ Mistake 2: Ignoring Contrast in Text Over Color

```css
/* DON'T: Pair any text with any background */
.banner {
  background: var(--a-color-primary);  
  color: var(--a-color-on-surface);    /* Wrong! May not contrast well */
}

/* DO: Use matching pairs */
.banner {
  background: var(--a-color-primary-container);
  color: var(--a-color-on-primary-container);  /* Guaranteed contrast */
}
```

### ❌ Mistake 3: Using Color Alone for Meaning

```css
/* DON'T: Rely only on color to convey status */
.status {
  background: var(--a-color-success);  /* Only way to communicate "success"? */
}

/* DO: Use color + icon + text */
.status {
  background: var(--a-color-success-container);
  color: var(--a-color-on-success-container);
}

.status::before {
  content: "✓";  /* Visual icon */
}
```

### ❌ Mistake 4: Hardcoding Colors

```css
/* DON'T */
.button {
  background: #007BFF;
  color: #FFFFFF;
}

/* DO */
.button {
  background: var(--a-color-primary);
  color: var(--a-color-on-primary-container);
}
```

---

## Part 7: Quick Reference Table

| Use Case | Background Color | Text Color | When to Use |
|----------|------------------|-----------|------------|
| Primary Action | `--a-color-primary-container` | `--a-color-on-primary-container` | Main CTA, featured content |
| Secondary Action | `--a-color-secondary-container` | `--a-color-on-secondary-container` | Alternative CTAs |
| Default Surface | `--a-color-surface` | `--a-color-on-surface` | Cards, panels, default sections |
| Success Feedback | `--a-color-success-container` | `--a-color-on-success-container` | Success messages, positive states |
| Warning Feedback | `--a-color-warning-container` | `--a-color-on-warning-container` | Warnings, caution messages |
| Error Feedback | `--a-color-error-container` | `--a-color-on-error-container` | Errors, invalid states |
| Secondary Text | `--a-color-on-surface-variant` | N/A | Help text, labels, metadata |
| Outline/Border | `--a-color-outline` | N/A | Borders, dividers, edges |

---

## Conclusion

Axiom01's color system is designed to make beautiful, accessible combinations effortless. By understanding the harmony principles, using container-plus-on-container pairs, and following the recipes provided, you can create cohesive, professional interfaces that work across light and dark themes without reinventing the color wheel.

**Remember:** Good color isn't about having many colors—it's about using the right colors with purpose and contrast.
