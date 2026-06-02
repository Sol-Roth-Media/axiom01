# Framework Improvements Phase 2

This phase focuses on enforceable quality controls and philosophy-first documentation behavior.

## Planned and implemented in this pass

- [x] Add dedicated semantic audit command.
  - Added `audit:semantic` in `package.json`.
  - Uses `scripts/pre_release_audit.py` as the enforcement gate.

- [x] Sweep and enforce no-inline-handler guidance.
  - `scripts/pre_release_audit.py` already fails docs HTML containing inline `onclick`.
  - Current docs audit run shows no inline `onclick` in docs HTML.

- [x] Tighten docs-only CSS naming audit.
  - Added docs stylesheet scanning in `scripts/pre_release_audit.py`.
  - Flags `doc-*`, BEM (`__`), and modifier (`--`) selector patterns in docs CSS sources.

- [x] Add migration visibility report for stricter class philosophy.
  - Added `scripts/axiom_philosophy_audit.py` and npm script `audit:philosophy`.
  - Produces repo-wide docs metrics for dashed classes and multi-class attributes.

## Additional improvements completed now

- [x] Keep the default test pipeline aligned with semantic compliance.
  - Updated `test` script in `package.json` to include `audit:semantic`.

- [x] Preserve docs runtime behavior while tightening quality checks.
  - Existing search-toggle and docs behavior checks remain in `scripts/pre_release_audit.py`.

