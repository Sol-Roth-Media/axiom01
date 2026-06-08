# Cross-Repo Validation Checklist

Use this checklist whenever Axiom01 or the starter theme changes:

- [ ] Semantic profile rules hold (no BEM, no new custom dashed classes, minimal class budget).
- [ ] Main/secondary/footer/utility menus render semantic nested list output and remain keyboard accessible.
- [ ] Page landmarks (`header`, `nav`, `main`, `aside`, `footer`, `section`) render without wrapper-class dependency.
- [ ] Node/views/status/form templates preserve accessibility semantics.
- [ ] Status messages keep `role`/`aria-live` behavior (`error` => `alert`/`assertive`).
- [ ] Drupal core classes (`.messages`, `.tabs`, `.pager`, `.form-item--error-message`) still style correctly.
- [ ] Default page load uses expected `data-theme` attributes and `system` mode follows browser preference.
- [ ] Palette/font/spacing/layout settings apply expected token-driven output.
- [ ] Axiom01 Search block filters and renders configured results.
- [ ] Drupal Default Search block behavior remains unchanged.
- [ ] CTA block renders title/body/actions and variant attribute.
- [ ] Carousel block supports controls, indicators, keyboard navigation, and autoplay timing.
- [ ] AI chat block shows intro/privacy text, message log updates, and graceful unavailable-state UX.
- [ ] AI image block shows status transitions and result region updates with fallback messages.
- [ ] AI block behaviors continue to work when backend endpoint is unavailable (graceful fallback).
- [ ] Axiom01 CSS/JS assets load correctly in Drupal 11 from bundled `dist/*` runtime files.
- [ ] Starter-theme `dist/css/axiom.min.css` and `dist/js/axiom.min.js` stay byte-for-byte equal to root `css/axiom.min.css` and `js/axiom.min.js`.

## Core form output checks (required)

- [ ] User login form renders semantic labels/help/errors and visible focus states.
- [ ] Search form renders with expected control spacing and keyboard navigation.
- [ ] Node edit form renders `details`/`fieldset` structure with Axiom01 wrappers and semantic error output.
- [ ] Theme settings form saves mode/palette/font/spacing/width options and reflected output updates.

## Accessibility contrast and forced-colors checks (required)

- [ ] Verify keyboard focus visibility for form controls in light mode.
- [ ] Verify keyboard focus visibility for form controls in dark mode.
- [ ] Verify hover + focus contrast in high-contrast/forced-colors mode.
- [ ] Verify status/error message readability and role/aria-live behavior under forced-colors mode.
