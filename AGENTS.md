# AGENTS.md

## Project snapshot
- `Axiom01` is a static, semantic-first UI framework and demo site.
- Main entry point: `index.html`; framework CSS: `css/axiom.css`; page-specific CSS: `css/index-preview.css` and `css/site.css`.
- Docs and component examples live in `docs/`; JavaScript lives in `js/`.

## How the app is wired
- `js/axiom.js` scans for `[data-component]`, dynamically imports `js/components/<name>.js`, and initializes each component.
- `js/index-page-manager.js` owns page-only behavior for `index.html`: theme toggle + `localStorage`, mobile nav, spacing slider, search modal, copy-to-clipboard, and the component browser.
yy- Components in `js/components/` typically export either a class with `init()`/`destroy()` or an object with `init(element)` that returns cleanup behavior.

## Conventions to follow
- Prefer semantic HTML with one descriptive root class per component, then style descendants; do **not** use BEM.
  - Example: `<section class="hero">`, `<article class="card elevated">`.
- Keep layout/theme values in CSS variables, especially spacing via `--a-space-unit` and derived tokens.
- Preserve accessibility hooks already used here: `aria-expanded`, `aria-controls`, `aria-hidden`, Escape-to-close, focus restoration, and keyboard navigation.
- Bind event handlers once and remove them in `destroy()` to avoid leaks when components are reinitialized.

## Repository-specific workflow
- There is no real automated test suite yet: `package.json` only has a placeholder `npm test` script.
- Validate changes by opening `index.html` in a browser and exercising the affected docs/component page.
- If a CSS build pipeline is needed, follow `BUILD_PROCESS.md` (PostCSS + `postcss-import` + `cssnano` + `purgecss`), but note that no PostCSS config is currently committed.

## Key integration points
- `index.html` depends on CDN assets for Font Awesome, Google Fonts, and Prism.js styles.
- Search uses Fuse.js in `js/components/search.js` and expects `window.searchData`.
- Keep component names aligned across HTML `data-component` values, `js/components/<name>.js` filenames, and any navigation/search entries in `index-page-manager.js`.

## Files to inspect first when making changes
- Architecture / component loading: `js/axiom.js`
- Page interactions: `js/index-page-manager.js`
- Styling rules and examples: `AXIOM01_STYLING_GUIDE.md`, `css/axiom.css`
- Browser-facing docs: `docs/components-*.html`, `docs/*advanced.html`

