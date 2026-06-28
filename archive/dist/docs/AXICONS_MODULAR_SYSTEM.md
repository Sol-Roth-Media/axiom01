# Axicons Modular System

## Overview

Axiom01 features a comprehensive icon system with **2,900+ icons** organized into a modular, lazy-loadable architecture for optimal performance.

**Total Icons: 2,931**
- Standard Icons: 2,142
- Premium Icons: 789

**Icon Styles:**
- Standard (filled outline)
- Thin (0.5px ultra-thin strokes)
- Inverted (light on dark backgrounds)
- Premium (advanced gradients and effects)

## Architecture

### File Structure

```
js/
├── axicons.js              # Full icon library (monolithic, 1.0MB) - for backward compatibility
├── axicons-core.js         # Core icons only (818KB) - loads by default
├── axicons-premium.js      # Premium icons (192KB) - lazy-loaded
└── axicons-loader.js       # Modular loader API (4.8KB) - handles everything
```

### Performance Impact

| Configuration | Size | Load Time | Use Case |
|---|---|---|---|
| Monolithic | 1.0MB | Slow first-paint | Legacy / single-page apps |
| Core Only | 818KB | 18% faster | Default, recommended |
| Core + Loader | 823KB | 18% faster | Production with lazy-loading |
| Core + Premium | 1.0MB | Same as monolithic | Full feature set loaded |

## Usage

### Default Setup (Recommended)

Simply load the core icons like normal:

```html
<script src="js/axicons-loader.js"></script>
<script src="js/axicons-core.js"></script>

<span class="axicon render" data-name="Moon"></span>
```

The loader automatically initializes with core icons on page load.

### Load Premium Icons On Demand

```html
<script src="js/axicons-loader.js"></script>
<script src="js/axicons-core.js"></script>

<script>
  // Load premium icons when needed (e.g., on button click)
  document.getElementById('premium-btn').addEventListener('click', async () => {
    await window.AxiconsLoader.loadPremium();
    renderPremiumIcon();
  });
  
  function renderPremiumIcon() {
    const icon = window.AxiconsLoader.getIcon('Zap-Premium');
    console.log('Premium icon loaded:', icon);
  }
</script>
```

### Load All Icons

```javascript
// Load core + premium icons
await window.AxiconsLoader.loadAll();
```

### Load by Category

```javascript
// Load only brand icons
await window.AxiconsLoader.loadCategory('brands');

// Available categories:
// general, ui, emoticon, development, iot, brands, objects, media, food,
// finance, entertainment, communication, ai, business, sports, shapes,
// people, occupations, government, arts, abstract, weather, health,
// social, app, security, network, energy, system, medical, and more
```

## AxiconsLoader API

### Methods

#### `getIcon(name)`
Get a single icon by name (case-insensitive).

```javascript
const icon = window.AxiconsLoader.getIcon('Moon');
if (icon) {
  console.log(icon.name, icon.svgContent);
}
```

#### `search(query, category?)`
Search icons by name and optionally by category.

```javascript
// Search all icons
const results = window.AxiconsLoader.search('star');

// Search within a category
const brandResults = window.AxiconsLoader.search('github', 'brands');
```

#### `getStats()`
Get information about loaded icons.

```javascript
const stats = window.AxiconsLoader.getStats();
console.log(stats);
// {
//   total: 2931,
//   categories: { general: 738, ui: 657, ... },
//   loaded: { core: true, premium: false, categories: {} },
//   byStyle: { standard: 1356, thin: 786, inverted: 0, premium: 789 }
// }
```

#### `loadCore()` / `loadPremium()` / `loadAll()`
Async functions to load icon sets.

```javascript
// Load core (happens automatically)
await window.AxiconsLoader.loadCore();

// Load premium on demand
await window.AxiconsLoader.loadPremium();

// Load everything
await window.AxiconsLoader.loadAll();
```

## Rendering Icons

### HTML Method (Simple)

```html
<span class="axicon render" data-name="Moon"></span>
```

The `renderAxicons()` function will automatically find and render the icon.

### JavaScript Method (Advanced)

```javascript
const icon = window.AxiconsLoader.getIcon('Zap-Premium');
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('viewBox', '0 0 24 24');
svg.innerHTML = icon.svgContent;
document.body.appendChild(svg);
```

## Premium Icons

Premium icons are marked with a suffix `-Premium` in their name:

```javascript
// Load and find a premium icon
await window.AxiconsLoader.loadPremium();
const icon = window.AxiconsLoader.getIcon('Zap-Premium');

// Render it
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('viewBox', '0 0 24 24');
svg.innerHTML = icon.svgContent;
```

Premium icons include:
- Gradient fills
- Drop shadows
- Dynamic color effects
- Advanced styling options
- Special visual treatments

## Categories

All 2,931 icons are organized into 33 categories:

### Top Categories by Count
- **General** (738) - Common, everyday icons
- **UI** (657) - Interface and control icons
- **Emoticon** (243) - Emoji and expression icons
- **Development** (178) - Programming and tech icons
- **IoT** (151) - Internet of Things icons
- **Brands** (141) - Company and brand logos

### Other Categories
Objects, Media, Food, Finance, Entertainment, Communication, AI, Business, Sports, Shapes, People, Occupations, Government, Arts, Abstract, Weather, Health, Social, App, Brand, Share, Security, Network, Energy, System, Medical

## Performance Best Practices

### 1. Use Core Icons by Default
```html
<!-- Good - loads 818KB, 18% faster -->
<script src="js/axicons-core.js"></script>

<!-- Avoid - loads 1.0MB -->
<script src="js/axicons.js"></script>
```

### 2. Lazy-Load Premium Icons
```javascript
// Delay premium loading until needed
const premiumButton = document.getElementById('premium-feature');
if (premiumButton) {
  premiumButton.addEventListener('click', () => {
    window.AxiconsLoader.loadPremium();
  });
}
```

### 3. Load Categories Selectively
```javascript
// Only load brand icons on a page that displays them
if (document.querySelector('[data-category="brands"]')) {
  window.AxiconsLoader.loadCategory('brands');
}
```

### 4. Cache the Loaded Icons
```javascript
// Icons stay in memory once loaded
// Subsequent calls return from cache instantly
await window.AxiconsLoader.loadPremium();
await window.AxiconsLoader.loadPremium(); // Uses cache
```

## Migration from Monolithic

If you're currently using the monolithic `axicons.js`:

### Before
```html
<script src="js/axicons.js"></script>  <!-- 1.0MB -->
```

### After
```html
<!-- Option A: Use loader for smart loading (recommended) -->
<script src="js/axicons-loader.js"></script>
<script src="js/axicons-core.js"></script>  <!-- 818KB initial -->

<!-- Option B: Keep monolithic for simplicity -->
<script src="js/axicons.js"></script>  <!-- Still works! -->
```

No changes needed to your HTML markup - the API remains the same!

## Stats on Current Setup

**Default Page Load (with loader + core):**
- Initial size: 823KB (18% reduction from 1.0MB)
- First paint: Faster
- Icons available: 2,142 standard + thin variants
- Premium icons: Loaded on demand (192KB)

**Full Library (when everything loads):**
- Total icons: 2,931
- Standard: 2,142
- Premium: 789
- Styles: Standard, Thin, Inverted, Premium

---

**Questions?** Check the icon browser at `/docs/axicons.html` to explore all icons, or view source at `/js/axicons-loader.js` for implementation details.
