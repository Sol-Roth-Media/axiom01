# Axiom01 Build Process (Native CSS)

This document outlines a recommended build process for Axiom01 projects using native CSS, leveraging npm scripts and PostCSS for efficiency, modularity, and optimization. This approach avoids traditional preprocessors like Sass, aligning with Axiom01's philosophy of simplicity and directness, while still providing powerful features.

## Why PostCSS?

PostCSS is a tool for transforming CSS with JavaScript plugins. It allows us to:
- **Modularize CSS**: Break down large CSS files into smaller, manageable modules using `@import`.
- **Optimize CSS**: Minify and compress CSS for production.
- **Purge Unused CSS**: Remove styles that are not present in your HTML, significantly reducing file size.
- **Future-Proof**: Use future CSS features today (e.g., `postcss-preset-env` for polyfills, though not strictly required for Axiom01's current scope).

## Recommended Setup

### 1. Project Initialization

If you haven't already, initialize your project with npm:
```bash
npm init -y
```

### 2. Install Dependencies

Install PostCSS and the necessary plugins:
```bash
npm install --save-dev postcss postcss-cli postcss-import cssnano @fullhuman/postcss-purgecss
```

- `postcss`: The core PostCSS processor.
- `postcss-cli`: Allows running PostCSS from the command line.
- `postcss-import`: Handles `@import` rules in your CSS files, enabling modularity.
- `cssnano`: A powerful minifier for CSS.
- `@fullhuman/postcss-purgecss`: Removes unused CSS based on your HTML files.

### 3. Create a PostCSS Configuration File

Create a file named `postcss.config.js` in your project root:
```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./*.html', './docs/**/*.html', './js/**/*.js'], // Adjust paths to your HTML and JS files
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: {
        standard: [
          // Add any classes or IDs that PurgeCSS should *not* remove,
          // e.g., classes added dynamically by JavaScript or specific framework classes.
          // Example: /^menu-/, /^is-/, /^data-theme/, /^a-/, /^button/, /^card/, /^hero/, /^badge/
          /menu-open/, // For mobile navigation
          /is-active/, // For active states
          /data-theme/, // For theme switching
          /a-/, // All Axiom01 classes
          /button/, /card/, /hero/, /badge/, // Specific component classes
          /code-example/, // For code blocks
          /color-swatch-card/, // For color swatches
          /comparison-table/, // For responsive table
          /dropdown/, /accordion/, /search/, // For JS components
        ],
        deep: [
          // For classes that might be deeply nested or generated
        ]
      }
    }),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
```
**Explanation of `postcss.config.js`:**
- `postcss-import`: This plugin should generally be first. It processes your `@import` rules, effectively concatenating your CSS modules into a single file before other plugins run.
- `@fullhuman/postcss-purgecss`: This plugin scans your specified `content` files (HTML, JS) and removes any CSS selectors that it doesn't find.
  - `content`: **Crucially, adjust these paths** to accurately point to all files that contain your CSS selectors (HTML templates, JavaScript files that dynamically add classes, etc.).
  - `defaultExtractor`: A regex to extract class names. The provided one is robust.
  - `safelist`: **Very important!** Use this to prevent PurgeCSS from removing classes that are:
    - Added dynamically by JavaScript (e.g., `menu-open`, `is-active`).
    - Used by the framework itself but might not appear directly in your HTML (e.g., `data-theme` attributes, or internal component classes).
    - You should expand this `safelist` as you develop to ensure no critical styles are removed.
- `cssnano`: This plugin minifies your CSS, removing whitespace, comments, and optimizing values.

### 4. Add npm Scripts

Add the following scripts to your `package.json` file:
```json
{
  "name": "axiom01",
  "version": "1.0.0",
  "description": "Axiom01 UI Framework",
  "main": "index.js",
  "scripts": {
    "build:css": "postcss css/axiom.css -o dist/axiom.min.css",
    "watch:css": "postcss css/axiom.css -o dist/axiom.min.css --watch",
    "start": "npm run watch:css"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@fullhuman/postcss-purgecss": "^5.0.0",
    "cssnano": "^6.0.1",
    "postcss": "^8.4.31",
    "postcss-cli": "^10.1.0",
    "postcss-import": "^15.1.0"
  }
}
```
**Explanation of npm Scripts:**
- `build:css`: Runs PostCSS once to build your production-ready `axiom.min.css` file. This is what you'd typically run before deploying.
- `watch:css`: Runs PostCSS in watch mode. It will automatically re-build `axiom.min.css` whenever changes are detected in `css/axiom.css` (or any files it imports). This is useful during development.
- `start`: A convenience script to start the watch process.

### 5. Update Your HTML

In your `index.html` (and other HTML files), link to the generated `dist/axiom.min.css` file instead of `css/axiom.css`.
```html
<link rel="stylesheet" href="dist/axiom.min.css">
<link rel="stylesheet" href="css/site.css">
```
**Note**: `css/site.css` is kept separate here because it often contains site-specific overrides or theme definitions that might not benefit from purging if they are very dynamic or small. You could also integrate `site.css` into the PostCSS pipeline if desired.

## How to Use Modularity with `postcss-import`

With `postcss-import`, you can break `css/axiom.css` into smaller files. For example:

**`css/axiom.css` (main entry point):**
```css
@import 'base/reset.css';
@import 'base/variables.css';
@import 'base/typography.css';
@import 'components/button.css';
@import 'components/card.css';
/* etc. */
```

Then, create these individual files (e.g., `css/base/reset.css`, `css/base/variables.css`, `css/components/button.css`) and put your respective CSS rules in them. PostCSS will combine them into `dist/axiom.min.css`.

This setup provides a robust, efficient, and simple build process for managing your native CSS with Axiom01.