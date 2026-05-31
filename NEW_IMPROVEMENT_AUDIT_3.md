# New Improvement Audit 3

## Completed in this pass

- Added `docs/component-compatibility-map.md` with explicit core-supported vs experimental runtime module tiers.
- Linked the compatibility map from `docs/components-overview.html` and search index data in `js/index-page-manager.js`.
- Extended `scripts/pre_release_audit.py` with targeted non-component docs class-budget checks for key pages.
- Extended `scripts/pre_release_audit.py` with compatibility-map coverage checks against `js/components/*.js` (excluding `dynamic-content-helpers`).
- Reduced class density in dynamic todo/card control markup within `docs/dynamic-content-examples.html` by removing redundant `button` classes.
- Simplified `docs/integrations.html` section structure by removing redundant inner container wrappers.
- Updated `FRAMEWORK_DEEP_IMPROVEMENTS.md` to mark the compatibility-map item complete.

## New improvement list (Axiom philosophy aligned)

1. Add lifecycle contract coverage in component docs so each runtime module page states whether `init()` and `destroy()` are required, optional, or not applicable.
2. Add a lightweight runtime-loader diagnostics mode that can be enabled without changing default production payload behavior.
3. Continue semantic cleanup on legacy docs pages with dense class stacks (`dynamic-content-examples.html`, `interactive-component-browser.html`, and older advanced guides).
4. Add an audit rule that reports inline style attributes in docs pages where semantic structure should carry layout responsibility.
5. Add an integration stability note that maps Drupal hook coverage to the new core-supported runtime module tier list.
