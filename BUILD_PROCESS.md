
# Axiom01 Build Process

Axiom01 utilizes a modern, PostCSS-based build pipeline for its CSS. This ensures a highly optimized, production-ready stylesheet that is both efficient and easy to maintain. The core tools in this pipeline are `postcss-import`, `cssnano`, and `purgecss`.

## Overview

The build process transforms our modular, human-readable CSS source files into a single, minified, and tree-shaken CSS bundle.

1.  **`postcss-import`**: Manages CSS `@import` rules, inlining them to create a single CSS file from multiple source files. This allows for better organization and modularity in development.
2.  **`cssnano`**: A powerful PostCSS plugin that minifies CSS. It performs various optimizations, including removing whitespace, comments, and duplicate rules, as well as optimizing font weights and z-index values.
3.  **`purgecss`**: Scans your HTML (and optionally JavaScript) files to identify and remove unused CSS. This dramatically reduces the final stylesheet size, ensuring only the CSS actually required by your project is shipped to production.

## Setup

To set up the build process, you'll need Node.js and npm (or yarn) installed.

1.  **Install Dependencies**:
    ```bash
    npm install --save-dev postcss postcss-cli postcss-import cssnano @fullhuman/postcss-purgecss
    ```

2.  **Configure PostCSS**:
    Create a `postcss.config.js` file in your project root:

    ```javascript
    // postcss.config.js
    const purgecss = require('@fullhuman/postcss-purgecss')({
        // Specify the paths to all of the template files in your project
        content: [
            './index.html',
            './docs/**/*.html', // Include all HTML files in docs
            './js/**/*.js',     // Include JS files if they dynamically add/remove classes
            // Add any other files that contain class names
        ],

        // Include any special characters you're using in this regular expression
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    });

    module.exports = {
        plugins: [
            require('postcss-import'),
            // Only apply PurgeCSS and cssnano in production builds
            ...(process.env.NODE_ENV === 'production'
                ? [purgecss, require('cssnano')({
                    preset: 'default',
                })]
                : [])
        ]
    };
    ```

3.  **Add Build Script to `package.json`**:
    Add the following scripts to your `package.json` file:

    ```json
    {
      "scripts": {
        "build:css": "NODE_ENV=production postcss css/axiom.css -o dist/axiom.min.css",
        "watch:css": "postcss css/axiom.css -o dist/axiom.css --watch"
      }
    }
    ```

## Usage

### Development

During development, you can use the `watch:css` script to automatically recompile your CSS whenever changes are made, without minification or purging.

```bash
npm run watch:css
```

### Production Build

For your production deployment, use the `build:css` script. This will apply `postcss-import`, `purgecss`, and `cssnano` to generate an optimized `axiom.min.css` file.

```bash
npm run build:css
```

The output `dist/axiom.min.css` will be a highly optimized stylesheet, containing only the CSS rules actually used in your project's HTML and JavaScript files.

## Key Benefits

*   **Performance**: Significantly reduced CSS file sizes due to minification and unused CSS removal.
*   **Maintainability**: Modular CSS development with `@import` rules keeps your stylesheets organized.
*   **Efficiency**: Automated optimization frees developers to focus on writing clean, semantic CSS.
*   **Scalability**: The pipeline scales well for larger projects, ensuring CSS remains lean as the codebase grows.
