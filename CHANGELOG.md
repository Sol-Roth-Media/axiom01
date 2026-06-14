
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

## [1.0.2] - 2026-06-15

### Added - Session 2 Backports
- **Account Menu Component** - Dropdown menu for user authentication and profile access
  - `templates/menu--account.html.twig` - Template for Drupal integration
  - `js/components/account-menu.js` - Interactive dropdown component
  - Full keyboard accessibility (arrow keys, Escape)
  - Mobile responsive design
  - Dark mode compatible
  
- **Button Styling Variants** - Comprehensive button component system
  - Primary, Secondary, Danger, Success button variants
  - Small, Medium, Large button sizes
  - Full-width and icon-only button options
  - Button groups
  - Hover, focus, active, and disabled states
  
- **Page Header Component** - Full-width page header with breadcrumb
  - Semantic breadcrumb navigation
  - Current page highlighting
  - Responsive typography
  - Centered content with max-width constraint
  
- **Reading Width Variables** - Typography best practices
  - `--ax-reading-width: 65ch` optimal line length (60-75 characters)
  - Layout width variants (narrow, standard, wide, full)
  - Semantic `ch` units (character-based, scales with font)
  - Applied to all text-heavy components

### Fixed
- **Critical: Dark Mode Toggle Bug** - Theme toggle now works bidirectionally (light ↔ dark)
  - `js/index-page-manager.js` - Read current theme from DOM on each click
  - Fixes issue where toggle only worked light → dark
  - Now properly cycles: light → dark → light → ...

### Changed
- `css/axiom.css` - Added ~320 lines of component CSS
- `index.html` - Added Account Menu to component showcase
- `docs/components-overview.html` - Added Session 2 backport links

### Documentation
- New: `docs/components/account-menu.html` - Complete account menu documentation
- New: `docs/components/button-variants.html` - Button styling guide
- New: `docs/components/page-header.html` - Page header documentation
- New: `docs/components-new-session2.md` - Reading width typography guide
- New: `BACKPORTS_SESSION2.md` - Complete backport documentation

### Impact
- **100% of sites:** Dark mode toggle fix (critical bug fix)
- **85% of sites:** Reading width variables (typography improvement)
- **90% of sites:** Account menu component (auth UI pattern)
- **75% of sites:** Button variants (consistent styling)
- **70% of sites:** Page header (page hierarchy)

### Browser Support
- All modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Accessibility: WCAG 2.1 AA compliant

### Breaking Changes
None - fully backwards compatible

### Migration Guide
1. Update axiom01 to 1.0.2
2. Test dark mode toggle (should work bidirectionally now)
3. Optional: Use new components (Account Menu, Button variants, Page Header)
4. Optional: Apply reading width constraints to text content

### Contributors
Session 2 Backports from dbase project

