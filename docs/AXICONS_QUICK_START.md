# Axicons Quick Start

## The 30-Second Overview

Axiom01 includes **3,969 icons** across 5 variants and 33 categories.

**File Sizes:**
- **axicons-base.js** (89KB) → Start here for 450 essentials
- **axicons-core.js** (818KB) → Load the main 2,142-icon core set
- **axicons-premium.js** (192KB) → Load on demand for 789 premium icons
- **axicons-loader.js** (7.1KB) → Handles smart loading

## Basic Usage

```html
<!-- 1. Load the core -->
<script src="js/axicons-core.js"></script>

<!-- 2. Use icons in HTML -->
<span class="axicon render" data-name="Moon"></span>
<span class="axicon render" data-name="Menu"></span>
<span class="axicon render" data-name="GitHub"></span>
```

The `renderAxicons()` function (already in index.html) automatically finds and renders icons.

## Use Premium Icons

```html
<script src="js/axicons-loader.js"></script>
<script src="js/axicons-core.js"></script>

<script>
  // When you need premium icons:
  await window.AxiconsLoader.loadPremium();
  
  // Then use them:
  // <span class="axicon render" data-name="Zap-Premium"></span>
</script>
```

## Find Icons

```javascript
// Search by name
const results = window.AxiconsLoader.search('star');

// Get single icon
const icon = window.AxiconsLoader.getIcon('Moon');

// See all loaded icons
const stats = window.AxiconsLoader.getStats();
console.log(stats.total, 'icons loaded');
```

## Icon Naming Convention

```
Standard:    Moon, Menu, Search, GitHub
Thin:        MoonThin, MenuThin, SearchThin
Inverted:    MoonInverted, MenuInverted
Premium:     Zap-Premium, Star-Premium, Heart-Premium
```

## Categories

Use category-specific names to find related icons:

```javascript
// Search within a category
const brands = window.AxiconsLoader.search('', 'brands');
const dev = window.AxiconsLoader.search('', 'development');
```

**Popular categories:** general, ui, emoticon, development, iot, brands, objects, media

## Performance Tips

✓ Use **base** by default (450 icons) or **core** for the 2,142-icon main set  
✓ Load **premium** only when needed (789 icons)  
✓ Load by **category** if you need a specific set  
✓ Icons are **cached** once loaded  

## Need More?

→ Full docs: [AXICONS_MODULAR_SYSTEM.md](./AXICONS_MODULAR_SYSTEM.md)  
→ Icon browser: [/docs/axicons.html](/docs/axicons.html)  
→ API reference: Check `js/axicons-loader.js`

---

**Current Stats:**
- Total: 3,969 icons
- Base: 450
- Core: 2,142
- Premium: 789
- Styles: 5 (Base, Thin, Inverted, Color, Premium)
- Categories: 33
