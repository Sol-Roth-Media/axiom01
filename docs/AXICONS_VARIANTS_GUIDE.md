# Axicons Modular Variants - Ultra-Lightweight Architecture

## Quick Overview

**The New Way: Pick Your Variant**

Instead of loading everything, start with just what you need and mix-and-match:

```html
<!-- Minimal start: 89KB, 450 base icons -->
<script src="js/axicons-base.js"></script>

<!-- Or use thin variant instead: 170KB, 760 icons -->
<script src="js/axicons-thin-variants.js"></script>

<!-- Or load multiple: 299KB, 1,208 icons -->
<script src="js/axicons-base.js"></script>
<script src="js/axicons-thin-variants.js"></script>
```

## File Sizes & Icon Counts

| File | Size | Icons | Style |
|------|------|-------|-------|
| **axicons-base.js** | 89KB | 450 | Standard (base icons only) |
| **axicons-thin-variants.js** | 170KB | 760 | Ultra-thin (0.5px strokes) |
| **axicons-inverted-variants.js** | 243KB | 758 | Light on dark backgrounds |
| **axicons-color-variants.js** | 440KB | 1,351 | Gradients and colors |
| **axicons-premium-variants.js** | 185KB | 622 | Exclusive premium effects |
| **Full Library** | 1.0MB | 3,969 | All variants combined |

## Usage Scenarios

### Scenario 1: Minimal Blog (89KB)
Start with base icons, add more if needed:

```html
<script src="js/axicons-loader.js"></script>
<script src="js/axicons-base.js"></script>

<span class="axicon render" data-name="Moon"></span>
<span class="axicon render" data-name="Menu"></span>
```

### Scenario 2: Dark Mode Support (332KB)
Base + Inverted for light and dark themes:

```html
<script src="js/axicons-loader.js"></script>
<script src="js/axicons-base.js"></script>
<script src="js/axicons-inverted-variants.js"></script>

<!-- Light mode -->
<span class="axicon render" data-name="Moon"></span>

<!-- Dark mode -->
<span class="axicon render" data-name="MoonInverted"></span>
```

### Scenario 3: Icon-Heavy App (440KB)
Colorful, polished interface:

```html
<script src="js/axicons-loader.js"></script>
<script src="js/axicons-base.js"></script>
<script src="js/axicons-color-variants.js"></script>

<span class="axicon render" data-name="Alert-Octagon-Color"></span>
<span class="axicon render" data-name="Lightbulb-Color"></span>
```

### Scenario 4: Replace Variant (170KB)
Use ONLY thin icons throughout the site:

```html
<script src="js/axicons-loader.js"></script>
<script src="js/axicons-thin-variants.js"></script>

<!-- All icons will be thin style -->
<span class="axicon render" data-name="MoonThin"></span>
<span class="axicon render" data-name="MenuThin"></span>
```

### Scenario 5: Lazy-Load Variants On Demand
Start minimal, load premium only when user needs them:

```html
<script src="js/axicons-loader.js"></script>
<script src="js/axicons-base.js"></script>

<script>
  // Load premium when user visits premium features
  document.getElementById('premium-btn').addEventListener('click', async () => {
    await window.AxiconsLoader.loadPremium();
    renderPremiumIcons();
  });
</script>
```

## API Reference

### Loading Methods

#### `loadBase()`
Loads 450 base icons (ultra-minimal)
```javascript
await window.AxiconsLoader.loadBase();
```

#### `loadThin()`
Adds 760 thin variants
```javascript
await window.AxiconsLoader.loadThin();
```

#### `loadInverted()`
Adds 758 inverted variants
```javascript
await window.AxiconsLoader.loadInverted();
```

#### `loadColor()`
Adds 1,351 color/gradient variants
```javascript
await window.AxiconsLoader.loadColor();
```

#### `loadPremium()`
Adds 622 premium variants
```javascript
await window.AxiconsLoader.loadPremium();
```

#### `loadAll()`
Loads entire library (all 3,969 icons)
```javascript
await window.AxiconsLoader.loadAll();
```

#### `replaceWith(variant)`
Replace current icons with a specific variant only
```javascript
// Switch from base to thin
await window.AxiconsLoader.replaceWith('thin');

// Options: 'base', 'thin', 'inverted', 'color', 'premium'
```

### Utility Methods

#### `getIcon(name)`
Find a single icon by name
```javascript
const icon = window.AxiconsLoader.getIcon('Moon');
// Returns: { id, name, category, svgContent }
```

#### `search(query, category?)`
Search for icons
```javascript
const results = window.AxiconsLoader.search('alert');
const brandIcons = window.AxiconsLoader.search('', 'brands');
```

#### `getStats()`
Get information about loaded icons
```javascript
const stats = window.AxiconsLoader.getStats();
// Returns: { total, categories, loaded, byVariant }
```

## Icon Naming Convention

### Base Icons (Standard Style)
```
Moon
Menu
Search
GitHub
```

### Thin Variants
```
MoonThin
MenuThin
SearchThin
```

### Inverted Variants
```
MoonInverted
MenuInverted
SearchInverted
```

### Color/Gradient Variants
```
Alert-Octagon-Color
Lightbulb-Color
Zap-Color
```

### Premium Variants
```
Zap-Premium
Star-Premium
Heart-Premium
```

## Recommended Configurations

### Config A: Minimal (89KB)
**For:** Blogs, documentation, simple sites
```html
<script src="js/axicons-base.js"></script>
```
**Icons:** 450 base icons
**Use when:** File size is critical, simple design

---

### Config B: Standard + Thin (259KB)
**For:** Most web apps
```html
<script src="js/axicons-base.js"></script>
<script src="js/axicons-thin-variants.js"></script>
```
**Icons:** 1,210 icons
**Use when:** You want lightweight + style options

---

### Config C: Standard + Inverted (332KB)
**For:** Dark mode support
```html
<script src="js/axicons-base.js"></script>
<script src="js/axicons-inverted-variants.js"></script>
```
**Icons:** 1,208 icons
**Use when:** Supporting light and dark themes

---

### Config D: Full Library (1.0MB)
**For:** Feature-rich applications
```html
<script src="js/axicons-loader.js"></script>
<script>
  window.AxiconsLoader.loadAll();
</script>
```
**Icons:** 3,969 icons
**Use when:** You need all options available

---

### Config E: Lazy-Loaded (89KB + on-demand)
**For:** Performance-conscious with optional features
```html
<!-- Load base initially -->
<script src="js/axicons-base.js"></script>

<!-- Load premium only when needed -->
<script>
  if (userHasAccessToPremium) {
    await window.AxiconsLoader.loadPremium();
  }
</script>
```
**Icons:** 450 initially + up to 622 premium later
**Use when:** Premium features are optional

---

## Performance Comparisons

### Initial Page Load
| Config | Size | Icons | Load Time |
|--------|------|-------|-----------|
| Minimal | 89KB | 450 | ~50ms |
| Base + Thin | 259KB | 1,210 | ~120ms |
| Base + Inverted | 332KB | 1,208 | ~140ms |
| Full Library | 1.0MB | 3,969 | ~350ms |

### Render Performance (5 Icons)
All configs render icons instantly (~5-10ms) after load

### Optimal Strategy
1. Load **base only** initially (89KB)
2. If users access premium features → load that variant
3. Only load **full library** if design requires it

## Switching Between Variants

### Switch from Base to Thin at Runtime
```javascript
// User preference: switch to thin icons
await window.AxiconsLoader.loadThin();
```

### Replace with Thin Variant Only
```javascript
// Load thin, replace all loaded icons
await window.AxiconsLoader.replaceWith('thin');
```

### Mix Variants
```javascript
// Load base
await window.AxiconsLoader.loadBase();

// Later: add thin variants without replacing
await window.AxiconsLoader.loadThin();

// Now both are available
// <span class="axicon render" data-name="Moon"></span> // base
// <span class="axicon render" data-name="MoonThin"></span> // thin
```

## Categories in Each Variant

All variants include these 33 categories:
- General (most abundant)
- UI
- Emoticon
- Development
- IoT
- Brands
- Objects
- Media
- Food
- Finance
- Entertainment
- Communication
- AI
- Business
- + 19 more

## Recommended for Axiom01 Sites

### Default Setup
```html
<!-- Lightweight by default -->
<script src="js/axicons-loader.js"></script>
<script src="js/axicons-base.js"></script>

<!-- Offer option to load more -->
<button onclick="loadMoreVariants()">Load Premium Icons</button>

<script>
  async function loadMoreVariants() {
    await window.AxiconsLoader.loadPremium();
    // Re-render if needed
  }
</script>
```

## Backward Compatibility

The original `axicons.js` (1.0MB) is still available for:
- Legacy code
- Full feature requirements
- Simple projects that don't care about size

But **recommended:** Use the new modular approach for better performance.

## Migration from Old System

### Old Way
```html
<script src="js/axicons.js"></script> <!-- 1.0MB -->
```

### New Way (Minimal)
```html
<script src="js/axicons-loader.js"></script>
<script src="js/axicons-base.js"></script> <!-- 89KB -->
```

**HTML markup stays the same** - just swap the script tags!

---

## Summary

| Need | Start With | Extra | Total |
|------|-----------|-------|-------|
| Minimal | axicons-base | - | 89KB |
| Standard | base | thin | 259KB |
| Dark mode | base | inverted | 332KB |
| Colorful | base | color | 529KB |
| Premium | base | premium | 274KB |
| Everything | base | all | 1.0MB |

**Pro Tip:** Start with base (89KB), lazy-load variants as needed!
