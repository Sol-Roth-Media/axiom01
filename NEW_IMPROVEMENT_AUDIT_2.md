# New Improvement Audit 2

## Completed in this pass

- Added a pre-release parity audit that checks `docs/components-overview.html` links against `js/components/*` modules.
- Expanded `docs/components-overview.html` with missing module documentation links so overview navigation matches runtime modules.
- Added `docs/runtime-loader-migration-template.md` for breaking-change migration notes.
- Updated `FRAMEWORK_DEEP_IMPROVEMENTS.md` to mark the related P1 items complete.

## Next improvement list (Axiom philosophy aligned)

1. Add lightweight lifecycle contract checks so component docs explicitly cover `init()` and `destroy()` behavior where applicable.
2. Add a maintained compatibility map that labels components as core-supported vs experimental.
3. Reduce redundant wrappers in high-traffic docs pages where semantic sections/lists can replace extra containers.
4. Continue removing class-heavy markup patterns from older docs pages while preserving search, theme, and menu behavior.
5. Add targeted docs audits for oversized class attributes in key non-component docs pages.
