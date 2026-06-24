# Axicons Technical Documentation

## Overview

Axicons is a comprehensive, production-ready icon library with 1,608 professional icons (536 unique concepts × 3 styles: Regular, Thin, and Inverted). This document explains the technical implementation, how SVG wrapping works, current approach, and optimized alternatives.

---

## Architecture

### Data Structure

**File:** `js/axicons.js`

```javascript
const axicons = [
    { 
        id: 1, 
        name: "Home", 
        svgContent: '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" stroke-width="2.5" fill="none"/>'
    },
    { 
        id: 2, 
        name: "HomeThin", 
        svgContent: '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" stroke-width="0.5" fill="none"/>'
    },
    { 
        id: 3, 
        name: "HomeInverted", 
        svgContent: '<rect x="0" y="0" width="24" height="24" fill="currentColor" rx="2"/><path d="..." fill="white"/>'
    },
    // ... 1,605 more icons
];
```

**Key insight:** `svgContent` contains only the INNER markup (paths, lines, circles, rects), NOT the `<svg>` wrapper element.

### The Three Styles (Optimized)

1. **Regular** (Bold - 2px strokes)
   - Prominent, solid appearance
   - Use in: Navigation, buttons, CTAs, primary UI
   - CSS sets: `stroke-width="2"`
   - SVG content: No stroke-width attribute (inherited from CSS)

2. **Thin** (Elegant 1px)
   - Delicate, refined outline style
   - Use in: Data tables, admin panels, dense layouts
   - CSS sets: `stroke-width="1"` via `.axicon.thin` class
   - SVG content: No stroke-width attribute (inherited from CSS)
   - Simplified details (some lines removed for legibility)

3. **Inverted** (Solid with contrasting cutout)
   - Solid currentColor background + contrasting symbol
   - Use in: Badges, status indicators, highlights
   - Background rect: `<rect fill="currentColor">`
   - Symbol elements: Use CSS variable `stroke="var(--ax-bg-inverse, #ffffff)"`
   - Supports light/dark theme switching via `--ax-bg-inverse` property

---

## Current SVG Wrapper Generation

### HTML Markup

```html
<span class="axicon render" data-name="Home"></span>
```

**Components:**
- `.axicon` - CSS class for icon styling
- `.render` - Signals "this element needs SVG rendering"
- `data-name` - Icon name to lookup (case-insensitive)

### Rendering Function

**Location:** `index.html`, `docs/axicons.html`, and other pages

```javascript
function renderAxicons() {
    if (typeof axicons !== 'undefined') {
        // 1. Find all markers
        document.querySelectorAll('.axicon.render').forEach(el => {
            // 2. Get the icon name
            const name = el.getAttribute('data-name');
            
            // 3. Find the icon in the array (case-insensitive)
            const icon = axicons.find(i => i.name.toLowerCase() === name.toLowerCase());
            
            if (icon) {
                // 4. CREATE SVG WRAPPER + INJECT CONTENT
                el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${icon.svgContent}</svg>`;
            }
        });
    }
}

// Call on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAxicons);
} else {
    renderAxicons();
}
```

### Generated Output

**Before rendering:**
```html
<span class="axicon render" data-name="Home"></span>
```

**After rendering:**
```html
<span class="axicon render" data-name="Home">
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" 
              stroke-width="2.5" 
              fill="none"/>
    </svg>
</span>
```

### SVG Wrapper Attributes

**Current wrapper:**
```html
<svg 
    viewBox="0 0 24 24"    // Fixed 24×24 coordinate system
    aria-hidden="true"     // Accessibility: purely decorative
>
```

**What's NOT on the SVG wrapper:**
- No `stroke` or `fill` (each child element defines its own)
- No `role` attribute
- No `stroke-linecap` or `stroke-linejoin`
- No `width` or `height` (uses parent `.axicon` CSS for sizing)

---

## How SVG Wrapper Gets Created

### Step-by-Step Process

1. **JavaScript loads** → `axicons.js` is included in page
2. **Page ready** → `renderAxicons()` is called (on DOMContentLoaded or immediately)
3. **Query selector** → Find all `<span class="axicon render">` elements
4. **Icon lookup** → Find matching icon by `data-name` attribute (case-insensitive)
5. **Template literal** → Create SVG wrapper: `` `<svg viewBox="0 0 24 24" aria-hidden="true">${icon.svgContent}</svg>` ``
6. **innerHTML injection** → Replace element's contents with the SVG
7. **Result** → SVG is rendered in the DOM

### Current Approach: Pros & Cons

**Pros:**
- ✅ Simple, minimal code (5 lines core logic)
- ✅ No dependencies
- ✅ Framework agnostic
- ✅ Works everywhere

**Cons:**
- ❌ No SVG namespace (uses HTML parser)
- ❌ innerHTML security risk (if data wasn't trusted)
- ❌ No memoization (re-renders ALL icons every call)
- ❌ No attribute inheritance (each element must specify everything)
- ❌ Performance issues with 1000+ icons
- ❌ Minimal SVG wrapper (can't add defaults)

---

## Issues with Current Approach

### 1. HTML Injection via innerHTML

**Issue:** Using `innerHTML` with template literals
```javascript
el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${icon.svgContent}</svg>`;
```

**Why it works here:** axicons.js is generated/controlled code, not user input

**Problem if fixed:** If external data was used without sanitization, this is an XSS vector

### 2. No Attribute Inheritance

**Current:** Every element specifies stroke-width
```html
<path d="..." stroke-width="2.5" fill="none"/>
<line x1="6" y1="11" x2="18" y2="11" stroke-width="2.5"/>
<circle cx="12" cy="12" r="1.5" fill="none" stroke-width="2.5"/>
```

**Better:** SVG wrapper could provide defaults
```html
<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2.5">
    <path d="..."/>
    <line x1="6" y1="11" x2="18" y2="11"/>
    <circle cx="12" cy="12" r="1.5"/>
</svg>
```

### 3. Full Re-renders on Every Call

**Issue:** `renderAxicons()` processes ALL `.axicon.render` elements

```javascript
// This loops through EVERY icon element, even already-rendered ones
document.querySelectorAll('.axicon.render').forEach(el => {
    // ... render
});
```

**Problems:**
- Performance: O(n) for n icons, every call
- Called multiple times: on load, theme change, DOM updates
- No tracking of already-rendered elements
- With 1000+ icons, becomes noticeable

### 4. Single SVG Wrapper Definition

**Issue:** All icons get same wrapper attributes
```javascript
el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${icon.svgContent}</svg>`;
```

**Can't customize:**
- Different viewBox for different icon types
- Different aria attributes per icon
- No per-icon options

---

## Optimized Approach: Class-Based Renderer

### Complete Implementation

```javascript
/**
 * Optimized Axicon Renderer
 * - Uses proper DOM methods instead of innerHTML
 * - Caches rendered icons
 * - Handles theme changes automatically
 * - Supports dynamic DOM updates
 */
class AxiconRenderer {
    constructor(axiconsArray) {
        this.axicons = axiconsArray;
        this.rendered = new WeakSet();      // Track rendered elements
        this.iconCache = new Map();          // Cache icons by name
        this.domObserver = null;
        this.themeObserver = null;
        
        // Pre-cache all icons by name (lowercase for case-insensitive lookup)
        this.axicons.forEach(icon => {
            this.iconCache.set(icon.name.toLowerCase(), icon);
        });
        
        this.init();
    }

    init() {
        // Initial render on all existing icons
        this.renderAll();
        
        // Handle dynamic DOM updates
        this.setupMutationObserver();
        
        // Handle theme changes
        this.setupThemeObserver();
        
        console.log('AxiconRenderer initialized');
    }

    /**
     * Create a proper SVG element with safe content
     * Includes stroke-linecap and stroke-linejoin for polished rendering
     */
    createSVGElement(icon) {
        // Use proper SVG namespace (not HTML)
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        
        // Set attributes
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('aria-hidden', 'true');
        svg.setAttribute('role', 'img');
        
        // Set stroke properties for polished aesthetic (Feather/Lucide tier)
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');
        
        // Parse content safely (not innerHTML)
        const parser = new DOMParser();
        const docFrag = parser.parseFromString(
            `<svg xmlns="http://www.w3.org/2000/svg">${icon.svgContent}</svg>`,
            'image/svg+xml'
        );
        
        // Import nodes (safer than innerHTML)
        const sourceElements = docFrag.documentElement.children;
        for (let child of sourceElements) {
            svg.appendChild(document.importNode(child, true));
        }
        
        return svg;
    }

    /**
     * Render a single icon element
     */
    render(element) {
        // OPTIMIZATION: Skip if already rendered
        if (this.rendered.has(element)) return false;

        const name = element.getAttribute('data-name');
        if (!name) return false;

        const icon = this.iconCache.get(name.toLowerCase());
        if (!icon) {
            console.warn(`Icon not found: ${name}`);
            return false;
        }

        try {
            // Create SVG using proper DOM methods
            const svg = this.createSVGElement(icon);
            
            // Replace element contents (not innerHTML)
            element.replaceChildren(svg);
            
            // Mark as rendered (won't process again)
            this.rendered.add(element);
            
            return true;
        } catch (e) {
            console.error(`Failed to render icon ${name}:`, e);
            return false;
        }
    }

    /**
     * Render all icons in a container
     */
    renderAll(container = document) {
        const elements = container.querySelectorAll('.axicon.render');
        let count = 0;
        
        elements.forEach(el => {
            if (this.render(el)) count++;
        });
        
        console.log(`Rendered ${count} icons`);
        return count;
    }

    /**
     * Watch for dynamically added icons and render them
     */
    setupMutationObserver() {
        this.domObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) { // Element node
                        // Check if the node itself is an icon
                        if (node.classList?.contains('axicon')) {
                            this.render(node);
                        }
                        
                        // Check descendants for icons
                        const icons = node.querySelectorAll?.('.axicon.render') || [];
                        icons.forEach(icon => this.render(icon));
                    }
                });
            });
        });

        this.domObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    /**
     * Re-render all icons when theme changes
     */
    setupThemeObserver() {
        this.themeObserver = new MutationObserver(() => {
            // Clear rendered cache when theme changes
            this.rendered = new WeakSet();
            
            // Re-render all icons
            this.renderAll();
        });

        this.themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });
    }

    /**
     * Clean up observers (call on page unload)
     */
    destroy() {
        if (this.domObserver) this.domObserver.disconnect();
        if (this.themeObserver) this.themeObserver.disconnect();
        
        this.rendered = new WeakSet();
        this.iconCache.clear();
        
        console.log('AxiconRenderer destroyed');
    }
}

// Global initialization
const axiconRenderer = new AxiconRenderer(axicons);

// Export for manual calls
window.renderAxicons = () => axiconRenderer.renderAll();
window.destroyAxicons = () => axiconRenderer.destroy();
```

### Implementation in HTML

```html
<!-- Load icons first -->
<script src="js/axicons.js"></script>

<!-- Then load optimized renderer -->
<script>
/**
 * Optimized Axicon Renderer (paste the class above)
 */
class AxiconRenderer {
    // ... (full class implementation)
}

// Initialize globally
const axiconRenderer = new AxiconRenderer(axicons);
window.renderAxicons = () => axiconRenderer.renderAll();
</script>

<!-- Use normally -->
<span class="axicon render" data-name="Home"></span>
<span class="axicon render" data-name="Settings"></span>
```

---

## Comparison: Current vs Optimized

| Aspect | Current | Optimized |
|--------|---------|-----------|
| **Method** | innerHTML + template literal | createElementNS + DOMParser |
| **SVG Namespace** | HTML (implied) | Proper SVG namespace |
| **Content Parsing** | String interpolation | DOMParser safe parsing |
| **Content Insertion** | innerHTML | document.importNode |
| **Memoization** | None (always re-render) | WeakSet (skip if done) |
| **Performance** | O(n) every call | O(1) amortized |
| **DOM Control** | Limited | Full control |
| **Theme Changes** | Manual call needed | Automatic detection |
| **Dynamic DOM** | Manual re-call | Auto-detected |
| **Extensibility** | Difficult | Easy to customize |
| **Lines of Code** | ~8 | ~120 (robust) |

---

## Why SVG Wrapper Matters

### Current Wrapper (Minimal)

```html
<svg viewBox="0 0 24 24" aria-hidden="true">
    <path stroke-width="2.5" fill="none" d="..."/>
</svg>
```

### Optimized Wrapper (Could Be)

```html
<svg viewBox="0 0 24 24" 
     aria-hidden="true" 
     role="img"
     stroke="currentColor" 
     fill="none"
     stroke-linecap="round"
     stroke-linejoin="round">
    <path d="..."/>
</svg>
```

### Benefits of Expanded Wrapper

- ✅ Child elements inherit defaults
- ✅ Reduces svgContent string size
- ✅ Enables global stroke-width changes
- ✅ Better theme customization
- ✅ Cleaner, more semantic markup

---

## Usage Examples

### Basic HTML

```html
<!-- Regular icon (bold, prominent) -->
<span class="axicon render" data-name="Home"></span>

<!-- Thin icon (elegant, refined) -->
<span class="axicon render" data-name="HomeThin"></span>

<!-- Inverted icon (modern, solid) -->
<span class="axicon render" data-name="HomeInverted"></span>
```

### In Buttons

```html
<button>
    <span class="axicon render" data-name="Settings"></span>
    Configure
</button>
```

### In Navigation

```html
<nav>
    <a href="#home">
        <span class="axicon render" data-name="Home"></span>
        Home
    </a>
    <a href="#explore">
        <span class="axicon render" data-name="Compass"></span>
        Explore
    </a>
</nav>
```

### With CSS Sizing

```css
/* Size variants using tokens */
.axicon {
    width: var(--a-space-l);
    height: var(--a-space-l);
    stroke: currentColor;
    fill: none;
}

.axicon.sm {
    width: var(--a-space-m);
    height: var(--a-space-m);
}

.axicon.lg {
    width: var(--a-space-xl);
    height: var(--a-space-xl);
}

/* Color variants */
.axicon.primary { stroke: var(--a-color-primary); }
.axicon.success { stroke: var(--a-color-success); }
.axicon.error { stroke: var(--a-color-error); }
```

### In React

```jsx
import { axicons } from './axicons.js';

function Icon({ name, size = 24 }) {
    const icon = axicons.find(i => i.name === name);
    
    return (
        <svg 
            viewBox="0 0 24 24" 
            width={size} 
            height={size}
            dangerouslySetInnerHTML={{ __html: icon?.svgContent }}
        />
    );
}
```

### In Vue

```vue
<template>
    <svg 
        viewBox="0 0 24 24" 
        :width="size" 
        :height="size"
        v-html="iconContent"
    />
</template>

<script>
import { axicons } from '@/assets/axicons.js';

export default {
    props: {
        name: String,
        size: { type: Number, default: 24 }
    },
    computed: {
        iconContent() {
            const icon = axicons.find(i => i.name === this.name);
            return icon?.svgContent || '';
        }
    }
}
</script>
```

---

## Browser Support

- **Chrome/Edge**: All modern versions
- **Firefox**: All modern versions
- **Safari**: 13+
- **Mobile browsers**: All modern iOS Safari, Chrome Android
- **IE11**: Not supported (uses SVG namespace features)

---

## Performance Considerations

### Icon Count
- **< 100 icons**: No performance concerns
- **100-500 icons**: Monitor on first render
- **500+ icons**: Use optimized renderer with memoization
- **1000+ icons**: Essential to use optimized approach

### Rendering Cost
- **Current**: O(n) where n = total icons on page
- **Optimized**: O(1) amortized (memoization)
- **Re-renders**: Current calls `renderAxicons()` manually; Optimized detects automatically

### DOM Updates
- **Current**: No optimization for dynamic DOM
- **Optimized**: MutationObserver auto-renders new icons

---

## Licensing

Axicons is released under the MIT License, allowing commercial and private use, modification, and distribution.

**Attribution:** Optional but appreciated in README or footer:
```html
Icons by <a href="https://github.com/Sol-Roth/axiom01">Axicons</a>
Licensed under <a href="https://opensource.org/licenses/MIT">MIT</a>
```

---

## Questions & Support

For issues, questions, or contributions:
- **GitHub**: https://github.com/Sol-Roth/axiom01
- **Issues**: File a bug report or feature request
- **Discussions**: Community discussions
