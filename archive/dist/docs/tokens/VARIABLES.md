# CSS Design Token System

## Overview

Axiom01 now provides a comprehensive CSS variable system for consistent design implementation across all projects. These design tokens establish a single source of truth for colors, spacing, typography, animations, and more.

**File Location**: `css/_variables.css` (258 lines)

## Token Categories

### Color Tokens

#### Primary Colors
- `--a-color-primary` - Main brand color
- `--a-color-on-primary` - Text/content color on primary backgrounds
- `--a-color-primary-container` - Light/tinted primary background
- `--a-color-on-primary-container` - Text color on primary container

#### Secondary Colors  
- `--a-color-secondary` - Secondary brand color
- `--a-color-on-secondary` - Text color on secondary backgrounds
- `--a-color-secondary-container` - Light/tinted secondary background
- `--a-color-on-secondary-container` - Text color on secondary container

#### Tertiary Colors
- `--a-color-tertiary` - Tertiary accent color
- `--a-color-on-tertiary` - Text color on tertiary backgrounds
- `--a-color-tertiary-container` - Light/tinted tertiary background
- `--a-color-on-tertiary-container` - Text color on tertiary container

#### Surface & Text Colors
- `--a-color-surface` - Main background color
- `--a-color-on-surface` - Primary text color on surface
- `--a-color-surface-variant` - Secondary background (cards, panels)
- `--a-color-on-surface-variant` - Secondary text color
- `--a-color-outline` - Border/divider color

#### Semantic Colors
- `--a-color-success` - Success state (#16a34a)
- `--a-color-on-success` - Text on success backgrounds
- `--a-color-success-container` - Light success background
- `--a-color-on-success-container` - Text on success container

- `--a-color-warning` - Warning state (#ea580c)
- `--a-color-on-warning` - Text on warning backgrounds
- `--a-color-warning-container` - Light warning background
- `--a-color-on-warning-container` - Text on warning container

- `--a-color-error` - Error state (#dc2626)
- `--a-color-on-error` - Text on error backgrounds
- `--a-color-error-container` - Light error background
- `--a-color-on-error-container` - Text on error container

- `--a-color-info` - Info state (#2563eb)
- `--a-color-on-info` - Text on info backgrounds
- `--a-color-info-container` - Light info background
- `--a-color-on-info-container` - Text on info container

#### Grayscale Palette
- `--a-color-gray-1` - Lightest (almost white)
- `--a-color-gray-5` through `--a-color-gray-30` - Graduated grays
- `--a-color-gray-36` - Darkest (almost black)

#### Analogous Colors
- `--a-color-analogous-1` - First analogous color
- `--a-color-analogous-2` - Second analogous color
- `--a-color-on-analogous-1` / `--a-color-on-analogous-2` - Text colors

### Spacing Tokens

Responsive to the spacing scale. Base unit: `--a-space-unit: 0.875rem (14px)`

- `--a-space-xs`: 4px (0.25 × unit)
- `--a-space-s`: 8px (0.5 × unit)
- `--a-space-m`: 14px (1 × unit)
- `--a-space-l`: 21px (1.5 × unit)
- `--a-space-xl`: 35px (2.5 × unit)
- `--a-space-xxl`: 56px (4 × unit)

**Usage**:
```css
.component {
  padding: var(--a-space-m);
  margin-bottom: var(--a-space-l);
  gap: var(--a-space-s);
}
```

### Border & Shadow Tokens

#### Border Radius
- `--a-border-radius-small`: 3px
- `--a-border-radius-base`: 5px
- `--a-border-radius-medium`: 0.3rem
- `--a-border-radius-large`: 0.5rem

#### Shadows (Depth System)
- `--a-shadow-medium`: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.07)
- `--a-shadow-large`: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1)

### Typography Tokens

#### Font Families
- `--a-font-family-sans`: System sans-serif stack
- `--a-font-family-mono`: Monospace for code

#### Font Sizes
- `--a-font-size-base`: 1rem (16px)
- `--a-font-size-small`: 0.875rem (14px)
- `--a-font-size-h1` through `--a-font-size-h6`: Heading sizes

#### Font Weights
- `--a-font-weight-normal`: 400
- `--a-font-weight-medium`: 500
- `--a-font-weight-bold`: 700

#### Line Heights
- `--a-line-height-base`: 1.7

### Transition & Animation Tokens

#### Timing
- `--a-transition-speed-fast`: 0.2s
- `--a-transition-speed-normal`: 0.3s
- `--a-transition-speed-slow`: 0.5s
- `--a-transition-timing`: ease-in-out

### Gradient Tokens

- `--a-gradient-primary`: Primary gradient (135deg)
- `--a-gradient-sunset`: Warm sunset gradient
- `--a-gradient-ocean`: Cool ocean gradient
- `--a-gradient-forest`: Nature-inspired gradient

### Breakpoints

Responsive design breakpoints:

- `--a-breakpoint-xs`: 480px (portrait phones)
- `--a-breakpoint-sm`: 576px (landscape phones)
- `--a-breakpoint-md`: 768px (tablets)
- `--a-breakpoint-lg`: 992px (laptops)
- `--a-breakpoint-xl`: 1200px (desktops)
- `--a-breakpoint-xxl`: 1400px (large desktops)

**Usage**:
```css
@media (min-width: var(--a-breakpoint-md)) {
  .element { /* tablet and up */ }
}
```

### Layout Tokens

- `--a-layout-max-width`: 1200px - Maximum content width
- `--a-heading-scale`: 1.15 - Modular scale for headings
- `--a-grid-gutter`: 16px - Grid spacing

## Usage Examples

### Colors

```css
.button {
  background-color: var(--a-color-primary);
  color: var(--a-color-on-primary);
}

.card {
  background-color: var(--a-color-surface);
  border: 1px solid var(--a-color-outline);
}

.success-message {
  background-color: var(--a-color-success-container);
  color: var(--a-color-on-success-container);
  border-left: 4px solid var(--a-color-success);
}
```

### Spacing

```css
.component {
  padding: var(--a-space-l);
  margin-bottom: var(--a-space-m);
  border-radius: var(--a-border-radius-large);
  gap: var(--a-space-s);
}
```

### Typography

```css
.heading {
  font-family: var(--a-font-family-sans);
  font-size: var(--a-font-size-h2);
  font-weight: var(--a-font-weight-bold);
  line-height: var(--a-line-height-base);
}

.code {
  font-family: var(--a-font-family-mono);
  font-size: 0.9rem;
}
```

### Shadows & Transitions

```css
.card {
  box-shadow: var(--a-shadow-medium);
  transition: all var(--a-transition-speed-normal) var(--a-transition-timing);
}

.card:hover {
  box-shadow: var(--a-shadow-large);
}
```

## Dark Mode Support

All tokens automatically adapt when `[data-theme="dark"]` is set on the `<html>` element:

```html
<!-- Light mode (default) -->
<html>...</html>

<!-- Dark mode -->
<html data-theme="dark">...</html>
```

**Example**: The system automatically provides appropriate colors for light and dark themes:

```css
:root {
  --a-color-primary: #007bff;  /* Light mode blue */
  --a-color-surface: #ffffff;  /* Light mode white */
}

[data-theme="dark"] {
  --a-color-primary: #90caf9;  /* Dark mode light blue */
  --a-color-surface: #212121;  /* Dark mode dark gray */
}
```

## Responsive Spacing

Control overall spacing scale globally:

```html
<!-- Standard spacing (default) -->
<html>...</html>

<!-- Compact spacing -->
<html data-spacing-scale="compact">...</html>

<!-- Spacious layout -->
<html data-spacing-scale="spacious">...</html>
```

## Best Practices

✅ **DO**:
- Use variables instead of hardcoded values
- Establish patterns through consistent token usage
- Create custom properties for component-specific values
- Use semantic names (e.g., `--a-color-error` not `--a-color-red`)

❌ **DON'T**:
- Mix hardcoded colors with variables
- Create variables for single-use values
- Ignore the existing token system
- Use color names instead of semantic tokens

## Backward Compatibility

✅ All tokens are **additive** — no existing variables were changed  
✅ Existing Axiom01 themes remain unaffected  
✅ Opt-in usage — new tokens are optional  
✅ Full fallback support for older browsers

## Token Reference Format

Each token follows this naming convention:

```
--a-[category]-[purpose]
--a-color-primary          ← a = axiom, category = color, purpose = primary
--a-space-m                ← a = axiom, category = space, purpose = medium
--a-border-radius-large    ← a = axiom, category = border-radius, purpose = large
```

## Implementation Tips

1. **For new components**: Always reach for tokens first
2. **For existing code**: Gradually replace hardcoded values with variables
3. **For theming**: Adjust variables in `_variables.css` rather than component files
4. **For documentation**: Link component examples to token definitions

## Related Files

- **Implementation**: `css/_variables.css`
- **Integration**: `css/axiom.css` (imports variables first)
- **Framework Config**: `css/axiom_config.css`
- **Main Stylesheet**: `css/axiom.min.css` (compiled)

## See Also

- [AXIOM01 Styling Guide](../AXIOM01_STYLING_GUIDE.md) - Framework overview
- [Building with Axiom01](../BUILD_PROCESS.md) - Build and compilation
- [Component Reference](../index.html) - Live component gallery

---

**Version**: 2.0.0  
**Updated**: 2025  
**Status**: Production Ready ✅
