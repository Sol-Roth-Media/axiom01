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

5. **CSS cleanup pass**
   - Remove selectors that exist only to support avoidable helper classes.
   - Prefer element/context selectors for the demo site when they can stay stable.

## What has been started
- This audit has been captured here.
- Completed in this pass:
  - Simplified `index.html` by removing helper link classes, fixing invalid nested `main` tags, and replacing copy-button hooks with `data-copy-snippet`.
  - Normalized the shared docs header hooks so the search/theme/menu buttons match the page scripts again.
  - Cleaned a few content issues in the docs, including the theme wizard preview labels, the malformed `components-overview.html` wrapper, the `components-simple.html` / `components-advanced.html` card lists, and the footer markdown links.
  - Removed inline spacing/font styles from the boilerplate template and typography guide, replacing them with docs-scoped CSS rules and fallbacks.
- Still pending:
  - A deeper content/style audit of the remaining docs pages for unnecessary wrapper classes, inline styles, and legacy demo scaffolding.
  - A broader CSS pass to remove selectors that only exist for temporary helpers or one-off samples.

