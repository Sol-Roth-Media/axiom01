# First Major Release Audit

## Current state
- The framework is broadly aligned with the semantic-first philosophy, but the demo site still mixes in a number of helper classes, malformed HTML fragments, and page-specific hooks that should be simplified before a real release.
- `index.html` is the primary integration surface and currently contains the highest-impact cleanup targets.
- `js/axiom.js` and `js/components/*` already show the intended component-loading pattern, but some page-level markup still depends on presentation-only classes.

## Priority improvements
1. **Fix invalid / brittle markup in `index.html`**
   - Replace invalid nested `main` elements inside cards with neutral containers.
   - Fix broken tags and mismatched markup in the theme explorer and comparison sections.
   - Reduce wrapper classes where semantic elements can carry the structure instead.

2. **Remove unnecessary class hooks from demo interactions**
   - Replace copy-button-specific class hooks with data attributes or structural selectors.
   - Prefer anchors and semantic containers over `card link` style combinations where possible.
   - Keep classes only when they are true component variants, not layout scaffolding.

3. **Normalize shared navigation and page chrome**
   - Fix the docs pages that contain class-name typos such as `search.toggle` and `theme.toggle`.
   - Keep the header/footer behavior aligned across `index.html` and the docs pages.

4. **Tighten component/documentation examples**
   - Audit docs pages for malformed HTML and inconsistent examples.
   - Keep the examples focused on the framework’s real patterns rather than legacy or placeholder markup.
   - Check every individual component page at multiple widths so hero areas, content columns, and example blocks never overlap or feel oversized on large screens.

5. **CSS cleanup pass**
   - Remove selectors that exist only to support avoidable helper classes.
   - Prefer element/context selectors for the demo site when they can stay stable.

## Solo-maintainer scope freeze for major release

- Core supported set and stable surface are now documented in:
  - `/tmp/workspace/Sol-Roth-Media/axiom01/docs/MAJOR_RELEASE_SCOPE.md`
- AI-agent maintenance workflow (triage + DoD + cadence) is now documented in:
  - `/tmp/workspace/Sol-Roth-Media/axiom01/docs/MAINTENANCE_WORKFLOW.md`
- Drupal 11 starter-theme bootstrap scaffold exists in:
  - `/tmp/workspace/Sol-Roth-Media/axiom01/starter-themes/axiom01-drupal11-starter-theme/`

This release should only graduate components and APIs that are feasible to sustain by one developer assisted by AI agents.

## What has been started
- This audit has been captured here.
- Completed in this pass:
  - Simplified `index.html` by removing helper link classes, fixing invalid nested `main` tags, and replacing copy-button hooks with `data-copy-snippet`.
  - Normalized the shared docs header hooks so the search/theme/menu buttons match the page scripts again.
  - Cleaned a few content issues in the docs, including the theme wizard preview labels, the malformed `components-overview.html` wrapper, the `components-simple.html` / `components-advanced.html` card lists, and the footer markdown links.
  - Removed inline spacing/font styles from the boilerplate template and typography guide, replacing them with docs-scoped CSS rules and fallbacks.
  - Removed inline spacing from the index spacing demo and cleaned the search modal labels/accessibility hooks.
  - Replaced inline navigation/footer styles in `docs/form-elements.html` with semantic classes.
  - Added a shared `component-doc` layout pass to every page in `docs/components/` so component pages stack cleanly on wide screens and use a smaller hero treatment.
  - Started fixing the alert component page specifically by preventing the wide-screen overlap and reducing the oversized hero treatment.
  - Normalized all non-empty component pages in `docs/components/` to include `class="axiom-body component-doc"` and load `css/doc-preview.css` for shared responsive behavior.
  - Tightened component-page spacing in `css/doc-preview.css` so hero and footer sections are more compact and no longer carry oversized vertical gaps.
  - Cleaned `docs/form-elements.html` by fixing unresolved legacy token usage, correcting broken component nav links, removing malformed commented sidebar markup, and normalizing checkbox/radio class usage in live and code examples.
  - Fixed the page-manager script path in `docs/colors-advanced.html` so the docs page resolves local JS correctly.
  - Fixed `index.html` component showcase dropdown preview markup to avoid nested interactive elements that were breaking card layout.
  - Fixed index-page spacing/layout regressions: added space above the grid section “Advanced Layout Guide” action row, restored typography section column rules to the actual `.layout`/`.column` structure, and aligned heading spacing with spacing tokens.
  - Updated the “Why Choose Axiom?” comparison section to use a dedicated horizontal-scroll wrapper on narrow screens.
  - Removed inline swatch color styles from `docs/colors-advanced.html` and moved generated-palette token rendering into scoped rules in `css/doc-styles.css`.
  - Removed a large legacy commented sidebar/template block from `docs/colors-advanced.html` to simplify release markup.
- Still pending:
  - A deeper content/style audit of the remaining docs pages for unnecessary wrapper classes, inline styles, and legacy demo scaffolding.
  - A broader CSS pass to remove selectors that only exist for temporary helpers or one-off samples.
  - Cleanup of legacy per-page `<style>` blocks in component pages where demo-only body/layout rules still duplicate framework/doc CSS.
  - Continue cleanup of docs pages that still include large legacy commented sidebar/template blocks and other pre-release scaffolding.
