# AXIOM01 v3 - Architectural Strategy & Technical Decisions

## Executive Summary

v3 represents a complete philosophical reimagining of AXIOM01:
- **From**: Multi-page website with scattered CSS files
- **To**: Single-page unified portal with consolidated CSS framework
- **Why**: Eliminate context switching, showcase integrated philosophy, ship lighter bundle

This document explains the "why" behind each major architectural decision in v3.

---

## 🎯 Core Decision: The Unified SPA Portal

### Problem: v2 Fragmentation
v2 distributed AXIOM01's message across:
- `index.html` (landing page)
- `docs/components/*.html` (79 separate component pages)
- Multiple CSS files (axiom.css, _components.css, etc.)
- Separate documentation spread across different files

**User Experience Issue**: Developer must navigate between pages, losing context, confused about where to go next.

### Solution: Single HTML SPA
v3 contains ONE `index.html` file with:
- Hero section (landing)
- Docs hub (all 77 components in ONE file, sidebar navigation)
- Book reader (all 17 chapters in ONE file, chapter navigation)
- Live configurator (adjust tokens real-time)

**Benefits**:
1. **Instant navigation** (no page reloads, pure route swaps)
2. **Context preservation** (sidebar stays visible across views)
3. **Smaller bundle** (one CSS file, shared JS)
4. **Unified philosophy** (all content accessible from one location)
5. **Better for SEO** (single entry point, proper semantic structure)

---

## 🏗️ CSS Architecture: The @layer Revolution

### Why @layer?
Traditional CSS specificity wars force developers to use `!important` or write increasingly specific selectors to override framework styles.

**v3 Solution**: Use native CSS Cascade Layers (@layer) to establish guaranteed override precedence **without specificity**:

```css
@layer axiom.reset, axiom.tokens, axiom.base, axiom.layout, axiom.components, axiom.utilities;
```

This creates a **layer stack**. Any CSS OUTSIDE this stack automatically wins against layers INSIDE it.

### Layer Hierarchy Explained

| Layer | Purpose | Examples |
|-------|---------|----------|
| `axiom.reset` | Normalize browser defaults | *, *::before, *::after resets |
| `axiom.tokens` | Design variables (OKLCH, spacing, typography) | :root { --a-primary: ... } |
| `axiom.base` | HTML element defaults | a, p, h1-h6, input, button |
| `axiom.layout` | Structural patterns | .container, .grid, .navbar, hub-layout |
| `axiom.components` | Semantic UI components (Batches A-J) | .card, .button, .form, .table |
| `axiom.utilities` | Responsive, dark mode, print, a11y | @media queries, accessibility fixes |

**Application-level CSS** (outside @layer) automatically overrides framework.

### Example: Customizing a Card

```css
/* Framework defines default card */
@layer axiom.components {
  .card {
    background: var(--a-surface-raised);
    border: 1px solid var(--a-border);
    padding: var(--a-space-md);
  }
}

/* User app CSS (outside @layer) - always wins */
.card.premium {
  background: var(--a-primary);
  color: white;
  border: 2px solid var(--a-primary);
}
```

**No `!important` needed. CSS engine guarantees the override.**

---

## 🎨 Design Token System: OKLCH Color Space

### Why OKLCH Over HSL/RGB?

**Problem with HSL/RGB**:
- HSL lightness is non-uniform
- Yellow at 50% lightness ≠ Blue at 50% lightness visually
- Makes automatic dark mode practically impossible
- Fails WCAG color contrast checks

**OKLCH Solution**:
- Perceptually uniform lightness
- Same lightness value = same visual brightness across all hues
- Automatic dark mode by swapping lightness values
- Guaranteed WCAG AA compliance with mathematical lightness ratios

### Token Architecture

```css
@layer axiom.tokens {
  :root {
    /* Hue anchors - only thing that changes per brand */
    --a-hue-primary: 250; /* User customizable */
    --a-hue-accent: calc(var(--a-hue-primary) + 180); /* Auto-calculated */
    
    /* Color derivations - mathematically entangled */
    --a-primary: oklch(60% 0.16 var(--a-hue-primary));
    --a-primary-hover: color-mix(in oklch, var(--a-primary) 85%, black);
    --a-primary-subtle: color-mix(in oklch, var(--a-primary) 10%, transparent);
    
    /* Spacing - relative fluid scaling */
    --a-space-unit: clamp(1.125rem, 0.9rem + 1vw, 1.5rem);
    --a-space-xs: calc(var(--a-space-unit) * 0.25);
    --a-space-md: var(--a-space-unit);
    --a-space-lg: calc(var(--a-space-unit) * 1.5);
    
    /* Typography - modular scale */
    --a-text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
    --a-ratio: 1.414; /* Augmented 4th scale */
    --a-text-lg: calc(var(--a-text-base) * var(--a-ratio));
    --a-text-xl: calc(var(--a-text-lg) * var(--a-ratio));
  }
  
  /* Dark mode - just swap lightness values */
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      --a-surface-base: oklch(15% 0.01 var(--a-hue-surface));
      --a-primary: oklch(65% 0.15 var(--a-hue-primary)); /* Same saturation, different light */
    }
  }
}
```

**Mathematical Beauty**: Change ONE hue value, entire design recalculates. Perfect dark mode. WCAG compliance guaranteed.

---

## 🔄 Responsive Without Media Queries: Container Queries

### Problem: Viewport Media Queries Are Brittle

```css
/* v2 approach */
@media (min-width: 768px) {
  .card { grid-template-columns: 2fr 1fr; }
}
```

**Issue**: If I place a card in a narrow 400px sidebar on a 1440px screen, the media query still fires (wrong!).

### Solution: Container Queries

```css
/* v3 approach */
.card {
  container-type: inline-size;
  display: grid;
  grid-template-columns: 1fr;
}

@container (min-width: 500px) {
  .card { grid-template-columns: 2fr 1fr; }
}
```

**Result**: Card queries its own parent container width, not the viewport. Works perfectly in narrow sidebars AND wide content areas.

---

## 🎯 Form Validation: Zero Custom JavaScript

### Problem: v2 Required JS for Every Form

```javascript
// v2 way - JS validation
const input = document.querySelector('input');
input.addEventListener('input', () => {
  if (!input.checkValidity()) {
    input.classList.add('is-invalid');
    submitBtn.disabled = true;
  }
});
```

### Solution: :has() Relational Selector

```css
/* v3 way - Pure CSS validation */
form:has(input:invalid:not(:placeholder-shown)) {
  border-color: var(--a-error);
}

button[type="submit"]:has(~ input:invalid:not(:placeholder-shown)) {
  opacity: 0.5;
  pointer-events: none;
}
```

**How it works**:
- Browser's native form validation (`:invalid`) runs automatically
- `:has()` selector checks if form has any invalid inputs
- Form styling updates instantly in CSS
- **No JS event listeners. No state management. No frameworks.**

---

## 📖 Content Architecture: Embedded vs. External

### Decision: Fully Embed All Content

v3 embeds 100% of content directly in the HTML:

```html
<!-- In src/index.html -->
<script>
  const DB_DOCS = {
    'docs-intro': {
      title: '...',
      content: `<h1>...</h1><p>...</p>...`
    },
    'docs-tokens': { ... }
  };
  
  const DB_BOOK = {
    'ch-1': {
      title: '1. The Hoarding Problem',
      content: `<p class="lead">...</p><p>...</p>...`
    },
    'ch-2': { ... }
  };
</script>
```

**Benefits**:
1. **Zero fetches** - All content loads instantly with page
2. **Offline capable** - Works without network
3. **SEO friendly** - Content in HTML DOM
4. **Simpler deployment** - One file, no API backend
5. **Smaller footprint** - Gzip compresses duplicate HTML extremely well

**Trade-offs**:
- Single HTML file is larger (~500KB uncompressed)
- Not ideal for massive content libraries
- Updates require re-uploading entire file

**For v3**: Content is manageable (~17 chapters + 77 component docs), so embedding is optimal.

---

## 🎪 Interaction Model: Event Delegation vs. State Management

### v3 Interaction Philosophy

**Principle**: Minimize state mutations. React to user input directly in CSS where possible.

### Theme Toggle (CSS-based)

```html
<!-- No state management needed -->
<button onclick="Config.toggleTheme()">☀️ Dark/Light</button>

<script>
  const Config = {
    toggleTheme: () => {
      const root = document.documentElement;
      const current = root.getAttribute('data-theme');
      root.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
    }
  };
</script>

<style>
  :root[data-theme="dark"] {
    --a-surface-base: oklch(15% 0.01 var(--a-hue-surface));
    --a-text-main: oklch(92% 0.01 var(--a-hue-surface));
  }
</style>
```

**Result**: Single attribute toggle triggers entire design system recalculation. No state objects. No re-renders.

### Form Validation (Native + CSS)

```html
<!-- HTML handles validation state -->
<input type="email" required>

<style>
  /* CSS observes the state */
  input:invalid {
    border-color: var(--a-error);
  }
  
  input:valid {
    border-color: var(--a-success);
  }
</style>
```

**Result**: Browser's native validation + CSS selectors = zero custom validation JS.

---

## 🚀 Performance Target: Under 15KB Total

### Size Budget

| Asset | Target | Notes |
|-------|--------|-------|
| axiom.css | < 10 KB (gzipped) | Consolidated framework CSS |
| axiom.js | < 5 KB (gzipped) | Routing, config, helpers |
| index.html | < 500 KB (uncompressed) | One unified SPA |
| **Total** | **~15 KB** | After gzip |

### Optimization Strategies

1. **CSS Minification**: Remove whitespace, comments, unused selectors
2. **Symbol Reuse**: Consolidate repeated patterns into mixins (CSS custom properties)
3. **Lazy Icons**: Icons render only when visible (Intersection Observer)
4. **Code Splitting**: Minimal JS - only essential for routing/config
5. **Compression**: Rely on gzip for repeated content (HTML, CSS)

---

## ♿ Accessibility Strategy: Built-In, Not Bolted-On

### Principle: Semantic HTML First

```html
<!-- ✅ Correct - Semantic markup -->
<nav class="navbar">
  <a href="/" class="navbar-brand">Logo</a>
  <ul>
    <li><a href="/docs" aria-current="page">Docs</a></li>
  </ul>
</nav>

<!-- ❌ Wrong - Generic divs -->
<div class="navbar">
  <div class="logo">Logo</div>
  <div class="links">
    <div><div>Docs</div></div>
  </div>
</div>
```

### v3 Accessibility Foundations

1. **Semantic HTML**: `<nav>`, `<main>`, `<article>`, `<form>`, `<button>`, `<label>`
2. **Native Form Validation**: Use `required`, `type="email"`, `pattern`, `:invalid`
3. **ARIA When Needed**: `aria-current="page"`, `aria-label`, `aria-expanded`
4. **Focus Management**: `:focus-visible` rings always visible
5. **Color Contrast**: OKLCH ensures WCAG AAA ratios (7:1+)
6. **Keyboard Navigation**: Tab, Enter, Escape work natively
7. **Reduced Motion**: Respect `prefers-reduced-motion` media query
8. **Screen Reader**: Proper heading hierarchy, alt text, semantic landmarks

---

## 📦 Build & Deployment Model

### Development Mode

```bash
npm run dev  # http-server on port 8080
# Edit src/css/axiom.css or src/index.html
# Refresh browser (live changes)
```

### Production Build

```bash
npm run build  # Minify CSS/JS, copy to dist/
# Output: dist/ folder ready for deployment
```

### Deployment Targets

1. **Static CDN** (Netlify, Vercel, GitHub Pages)
   - Single HTML file
   - CSS/JS assets
   - Perfect for SPA

2. **Self-hosted** (Apache, Nginx)
   - Copy dist/ folder to web root
   - No special configuration needed
   - Works with gzip compression

3. **Docker** (if needed)
   ```dockerfile
   FROM nginx:alpine
   COPY dist/ /usr/share/nginx/html/
   ```

---

## 🔄 Maintenance & Extensibility

### Adding New Components

1. **Define CSS** in `src/css/axiom.css` under appropriate Batch
2. **Add to HTML** in component showcase section
3. **Document in Docs Hub** (add to DB_DOCS object)
4. **Test** on all breakpoints + dark mode

### Updating Book Chapters

1. **Edit content** in `src/index.html` DB_BOOK object
2. **Update TOC** sidebar automatically regenerates
3. **Rebuild** and deploy

### Changing Design Tokens

1. **Update** --a-hue-primary, --a-space-unit in @layer axiom.tokens
2. **All components recalculate** automatically (mathematical entanglement)
3. **Test** across entire site (no page-by-page testing needed)

---

## 🎓 Developer Experience

### DX in v3 vs v2

| Aspect | v2 | v3 |
|--------|----|----|
| **Navigation** | Multi-page | Single SPA |
| **File Size** | 13.3 KB CSS | < 10 KB CSS |
| **Development** | Edit 79 files | Edit 1 file |
| **Theme Switching** | Multiple CSS files | One attribute toggle |
| **Form Validation** | JS event listeners | CSS :has() selectors |
| **Icon System** | Manual sprite management | Auto-rendering |
| **Testing** | Navigate to each page | Route in sidebar |
| **Deployment** | Multiple files to sync | One dist/ folder |

### Developer Learning Curve

v3 is EASIER to learn because:
1. **Single file** to understand
2. **Clear layer structure** (tokens → base → components → utilities)
3. **Standard CSS** (no proprietary syntax or preprocessors)
4. **Minimal JS** (three small objects: Navigation, Config, Content)
5. **Semantic HTML** (standard tags, standard patterns)

---

## 🌟 The Semantic Rebellion: Core Vision

v3 embodies the core AXIOM01 philosophy:

### Manifestation in v3

| Philosophy | Implementation |
|-----------|-----------------|
| **One class per component** | .card, .button, .form - nothing more |
| **Semantic HTML first** | `<article class="card">`, not `<div class="card">` |
| **Token-driven design** | 100% of values from CSS variables |
| **No utility classes** | Never `.flex .gap-4 .p-8 .border` |
| **Mobile-first** | Styles for mobile, `@media (min-width)` for larger screens |
| **Automatic dark mode** | Token system handles it, developer doesn't think about it |
| **Framework responsibility** | Spacing, colors, animations handled at framework level |
| **Developer responsibility** | Structure semantic HTML, let framework handle styling |

---

## Conclusion

v3 represents the fullest expression of the AXIOM01 philosophy:
- **Unified experience** (single SPA portal)
- **Unified code** (single CSS file with @layers)
- **Unified thinking** (tokens, not scattered values)
- **Unified shipping** (one dist/ folder)

**The result**: A framework that's simpler to use, easier to maintain, and profoundly more elegant than v2.

---

**Document Version**: 1.0  
**Framework**: AXIOM01 v3  
**Status**: Technical Strategy Guide  
**Ready for**: Phase 1 Implementation
