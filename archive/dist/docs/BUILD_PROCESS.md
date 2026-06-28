# Axiom01 - Build Process & CSS Strategy

## Overview

Axiom01 uses a modular CSS architecture that separates framework core from documentation. This guide explains how CSS files are organized and which files to load in different contexts.

---

## CSS Files Explained

### Framework Core Files (Essential)

#### `axiom.css` (183 KB)
- **Purpose**: Full framework CSS in development format
- **When to use**: Development/debugging
- **Format**: Unminified (readable, easier to debug)
- **Contents**:
  - Design tokens (colors, spacing, typography)
  - Component styles (buttons, cards, modals, etc.)
  - Animations and transitions
  - Responsive utilities
- **Usage**:
  ```html
  <!-- Development -->
  <link rel="stylesheet" href="css/axiom.css">
  ```

#### `axiom.min.css` (161 KB, 12% smaller)
- **Purpose**: Production-ready framework CSS
- **When to use**: Production deployments, public sites
- **Format**: Minified (compact, optimized)
- **Contents**: Same as axiom.css, just compressed
- **Usage**:
  ```html
  <!-- Production (Recommended) -->
  <link rel="stylesheet" href="css/axiom.min.css?v=2.2.2">
  ```

#### `axicons.css` (5 KB)
- **Purpose**: Axicon icon library styles
- **When to use**: Always, if using icons
- **Format**: Optimized CSS for icon rendering
- **Usage**:
  ```html
  <!-- Always load axicons.css with axiom -->
  <link rel="stylesheet" href="css/axiom.min.css">
  <link rel="stylesheet" href="css/axicons.css">
  ```

---

### Documentation-Only Files (NOT for production)

#### `docs.css` (28 KB)
- **Purpose**: Styles for documentation examples only
- **When to use**: ONLY on documentation pages (docs/components/*.html)
- **Format**: Contains demo-specific styling
- **Contents**:
  - Demo layouts and showcases
  - Typography examples
  - Color palette displays
  - Component preview styling
- **Important**: Do NOT load this on production sites
- **Usage**:
  ```html
  <!-- ONLY on documentation pages -->
  <link rel="stylesheet" href="../../css/axiom.min.css">
  <link rel="stylesheet" href="../../css/axicons.css">
  <link rel="stylesheet" href="../../css/docs.css">
  ```

---

## CSS Loading Strategy by Context

### For Production Websites
```html
<head>
  <!-- Framework core only -->
  <link rel="stylesheet" href="css/axiom.min.css?v=2.2.2">
  <link rel="stylesheet" href="css/axicons.css">
  
  <!-- Your own custom styles -->
  <link rel="stylesheet" href="css/custom.css">
</head>
```

**Key Points**:
- ✅ Use `axiom.min.css` (minified, smaller)
- ✅ Load `axicons.css` for icons
- ❌ Do NOT load `docs.css`
- Include version query string for cache busting

### For Development/Debugging
```html
<head>
  <!-- Framework core (unminified) -->
  <link rel="stylesheet" href="css/axiom.css">
  <link rel="stylesheet" href="css/axicons.css">
  
  <!-- Your own custom styles -->
  <link rel="stylesheet" href="css/custom.css">
</head>
```

**Key Points**:
- ✅ Use `axiom.css` (unminified, readable)
- ✅ Load `axicons.css` for icons
- ❌ Do NOT load `docs.css`
- Easier to debug CSS issues

### For Documentation Pages
```html
<head>
  <!-- Framework core -->
  <link rel="stylesheet" href="../../css/axiom.min.css">
  <link rel="stylesheet" href="../../css/axicons.css">
  
  <!-- Documentation demo styles (for showcases) -->
  <link rel="stylesheet" href="../../css/docs.css">
</head>
```

**Key Points**:
- ✅ Use `axiom.min.css` (or axiom.css in development)
- ✅ Load `axicons.css` for icons
- ✅ Load `docs.css` ONLY for documentation
- Relative paths depend on page location

---

## CSS Structure Inside axiom.css

### Source Files Combined Into axiom.css
The production CSS is built from source files in the `css/` directory:

```
css/
├── _variables.css      → Design tokens (colors, spacing, etc.)
├── _components.css     → Component styles (buttons, cards, etc.)
├── _animations.css     → Animation effects
└── _utilities.css      → Optional utility classes
```

When building for production:
1. All source files are combined
2. CSS is minified (removes comments, compresses)
3. Output: `axiom.min.css`

### Important Variables Available

```css
/* Colors */
--a-color-primary
--a-color-secondary
--a-color-success
--a-color-warning
--a-color-error
--a-color-info

/* Spacing */
--a-space-xs    (4px)
--a-space-s     (8px)
--a-space-m     (16px)
--a-space-l     (24px)
--a-space-xl    (32px)
--a-space-xxl   (48px)

/* Typography */
--a-font-size-h1
--a-font-size-h2
--a-font-size-base
--a-font-family-sans
--a-font-family-mono

/* Borders & Shadows */
--a-border-radius-base
--a-shadow-md
--a-shadow-lg

/* Transitions */
--a-transition-base
--a-transition-speed-fast
```

---

## Best Practices

### Do's ✅
- ✅ Load `axiom.min.css` on production sites
- ✅ Load `axiom.css` during development
- ✅ Always load `axicons.css` if using icons
- ✅ Load `docs.css` ONLY on documentation pages
- ✅ Use CSS variables from Axiom for consistency
- ✅ Include version query string on production (`?v=2.2.2`)

### Don'ts ❌
- ❌ Do NOT load `docs.css` on production sites
- ❌ Do NOT load both `axiom.css` AND `axiom.min.css`
- ❌ Do NOT modify Axiom files directly (create overrides instead)
- ❌ Do NOT remove `axicons.css` if using icons
- ❌ Do NOT load `docs.css` on index.html (framework homepage)

---

## File Sizes & Compression

### Uncompressed Sizes
- `axiom.css`: 183 KB
- `axiom.min.css`: 161 KB (13% smaller than source)
- `axicons.css`: 5 KB
- `docs.css`: 28 KB

### With gzip Compression (typical server)
- `axiom.min.css`: ~40-50 KB
- `axicons.css`: ~2 KB
- `docs.css`: ~8 KB

*Most browsers and servers support gzip automatically*

---

## Customization

### Override Axiom Styles
Do NOT modify Axiom files directly. Instead, create your own CSS file:

```html
<!-- In your project -->
<link rel="stylesheet" href="css/axiom.min.css">
<link rel="stylesheet" href="css/custom.css"> <!-- Your overrides here -->
```

```css
/* css/custom.css */
:root {
  /* Override tokens */
  --a-color-primary: #ff0000;  /* Your custom color */
}

/* Override components */
button.primary {
  border-radius: 0;  /* Square buttons instead of rounded */
}
```

---

## Troubleshooting

### Problem: Styles not applying
**Solution**: Verify CSS loading order:
1. Check if `axiom.min.css` (or `axiom.css`) is loaded
2. Check if `docs.css` is accidentally loaded on production
3. Verify stylesheet `<link>` tags are in `<head>`
4. Check browser DevTools for 404 errors

### Problem: Icons not showing
**Solution**: 
1. Verify `axicons.css` is loaded
2. Verify `axicons-base.js` is loaded
3. Check that icon names are correct (case-sensitive)

### Problem: Styles look different in dev vs production
**Solution**:
- Use `axiom.css` in development (identical to `axiom.min.css`, just uncompressed)
- Do NOT load `docs.css` outside documentation pages

---

## Version Management

### Updating Axiom01
When updating to a new version:

```html
<!-- Update the version number -->
<!-- Before -->
<link rel="stylesheet" href="css/axiom.min.css?v=2.2.2">

<!-- After -->
<link rel="stylesheet" href="css/axiom.min.css?v=2.3.0">
```

The query string `?v=X.X.X` clears browser cache when version changes.

---

## Summary

| Context | CSS Files | Format |
|---------|-----------|--------|
| **Production** | axiom.min.css + axicons.css | Minified |
| **Development** | axiom.css + axicons.css | Unminified |
| **Documentation** | axiom.min.css + axicons.css + docs.css | Minified + Docs |

**Key Rule**: `docs.css` is ONLY for `/docs/components/*.html` pages.

---

*For more information, see the Axiom01 documentation at `/docs/overview-quickstart.html`*
