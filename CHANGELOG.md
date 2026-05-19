
# Changelog

## Version 1.0.0 (Beta) - 2024-05-15

### Added
- Initial framework structure and core CSS (`axiom.css`).
- Comprehensive CSS variable system for colors, spacing, and typography.
- Over 20 predefined themes.
- Core JavaScript for dynamic component loading (`axiom.js`).
- Page-specific JavaScript for `index.html` (`index-page-manager.js`) including:
    - Mobile navigation toggle.
    - Theme toggling with persistence.
    - Interactive spacing demo.
    - Search modal functionality (requires Fuse.js).
    - Code snippet copying.
- `index.html` demonstration page with various sections (Philosophy, Spacing System, Color Palette, Theme Explorer, Components, Get Started, Typography, Accessibility, Badges, Open Source, AI-Ready, Media & Icons, Forms & Inputs, Grid System, Style Guide, Code in Action, Comparison, Example Sites, Release Info).
- `README.md` with project overview, philosophy, getting started guide, and future improvement suggestions.
- `AXIOM01_STYLING_GUIDE.md` outlining framework principles.
- `DEVELOPER.md` with component lifecycle, event delegation, accessibility, and browser support guidelines.
- `BUILD_PROCESS.md` detailing PostCSS-based CSS build pipeline.
- Placeholder documentation files for various components and advanced guides.
- `docs/components-simple.html` for simple component listings.
- `docs/components-advanced.html` for advanced component listings and Component Browser documentation.
- `docs/interactive-component-browser.html` for the standalone interactive component browser.

### Changed
- Corrected Font Awesome CDN link in `index.html` to point to CSS file.
- Fixed grayscale palette display in `index.html` by correcting CSS variable references.
- Restructured component display on `index.html` to link to new dedicated component pages instead of an iframe-based browser.
- Updated `README.md` with accurate npm installation instructions and versioned CDN link.
- Deprecated `docs/components/component-browser.html` and moved its content to `docs/components-advanced.html`.

### Fixed
- Resolved issue with Font Awesome icons not displaying.
- Corrected CSS syntax errors in `css/axiom.css` that caused styling breakage.
- Ensured mobile navbar button visibility and dark mode toggle functionality.

### Removed
- Old iframe-based component browser section from `index.html`.
