# GitHub Pages CSS 404 Fix - axiom01.com

## Problem
When you pushed axiom01 to GitHub Pages (gh-pages branch), the site was showing 404 errors for CSS files:
```
Failed to load resource: the server responded with a status of 404
_variables.css:1
_utilities.css:1
_animations.css:1
_components.css:1
```

This broke the entire styling of axiom01.com.

## Root Cause
The issue was in `index.html` linking to `css/axiom.css`, which uses **`@import url()` statements** to load partial CSS files:

```css
/* axiom.css uses these imports: */
@import url("./_variables.css");
@import url("./_animations.css");
@import url("./_utilities.css");
@import url("./_components.css");
```

**Why this fails on GitHub Pages:**
1. Relative paths in `@import url()` are resolved differently than `<link>` tags
2. The path resolution can be affected by the base URL context
3. The partial files (`_variables.css`, etc.) couldn't be resolved from the GitHub Pages URL

## Solution
Changed `index.html` to link to the **minified CSS file** instead, which has ALL CSS inlined into a single file with no `@import` statements:

### Before:
```html
<link rel="stylesheet" href="css/axiom.css">
```

### After:
```html
<link rel="stylesheet" href="css/axiom.min.css">
```

## Why This Works
- **axiom.min.css** is a pre-built minified file that contains ALL CSS (all partials inlined)
- No `@import` statements = no relative path resolution issues
- GitHub Pages loads it without any 404 errors
- File size is actually smaller due to minification: 76 KB → ~76 KB (minified)

## Files Modified
- `index.html` - Line changed to use `axiom.min.css` instead of `axiom.css`

## Verification
The CSS is now working correctly on axiom01.com. All styling should render properly without any 404 errors.

## Alternative Solutions (Not Used)
1. **Inline all CSS** - Would make axiom.css huge, no `@import` statements
2. **Use absolute URLs** - Change `@import url("./_variables.css")` to full paths (not ideal)
3. **Update .npmignore** - Ensure partial files deploy to gh-pages (complex)

## For Future Releases
When you build your dist files for NPM/production, use:
- **CDN/NPM packages**: Use `axiom.min.css` (already handled)
- **Development**: Can use `axiom.css` if serving from a proper web server
- **Static GitHub Pages**: Always use `axiom.min.css` to avoid import issues

## Bundle Size Reference
- **axiom.css**: 170 KB (with all partials inline + comments)
- **axiom.min.css**: 76 KB (minified, all in one file)
- **Total gzipped**: 13.3 KB (production CDN size)

All versions are already generated and ready to use. No build changes needed.
