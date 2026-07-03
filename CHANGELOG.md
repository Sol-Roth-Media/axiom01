# Changelog

All notable changes to `axiom01` are documented in this file.

## [3.0.0] - 2026-07-03

### Major Features
- **Axicons Luxe Variant**: Added an enormous collection (324 icons) of ultra-detailed, illustrative UI icons with rich, multi-layered gradients and volumetric 3D effects. This tier sits above Base and Premium, designed for high-impact visual moments.
- **Developer Guide**: Published a comprehensive developer guide detailing integration, architecture, and configuration.
- **Responsive System Upgrades**: Massive improvements to the layout system, constraining hero stats on mobile grids, normalizing gutters, clipping overflows, and enforcing a 360px minimum page width.

### Breaking Changes (Semantic Enforcement)
- **Removal of BEM and Utility Classes**: Strictly enforced the Axiom01 semantic philosophy. All dashed utility classes (like `.text-center`, `.mb-4`) and BEM classes have been completely removed.
- **Pure Semantic HTML**: Components are now styled purely based on their semantic tags (`<article>`, `<section>`, `<header>`, `<footer>`, etc.) inside structured layouts. Inline styles have been banned and migrated to scoped CSS variables or appropriate semantic tags.

### Fixed
- Fixed global layout constraints and container wrappers to properly handle nested semantic grids without breaking viewport widths.
- Fixed typography layouts, AI-chat avatars, and replaced all inline styles across documentation components with CSS variables.
- Normalized docs top-left brand header to consistent `ax[10]m` styling across all pages.
- Standardized native code-block snippet markup in documentation.

## [2.2.3] - 2026-07-02

### Fixed
- Corrected the npm release manifest to ship the canonical `README.md`, root `CHANGELOG.md`, release metadata files, and required Axicons assets.
- Aligned release metadata, fallback version strings, and size claims across the site and package docs.
- Updated release automation to read the canonical root `README.md`.
- Removed stale references to archived overview/test pages from release audit scripts.
- Fixed broken documentation links that still pointed at lowercase or outdated paths.

### Changed
- Refreshed the npm README for the current 68-component release and current icon loading model.
- Synced the release version to `2.2.3`, the next valid patch after the already-published `2.2.2` npm release.
- Archived unused root files, orphaned docs pages, and development-only JavaScript utilities into `archive/repo-cleanup-2026-07-02/`.

### Notes
- No framework API changes.
- No breaking CSS or component contract changes.
- This is a release-readiness and repository hygiene patch.

## [2.1.2] - 2025-01-24

### Changed
- Documentation cleanup and README enhancement work for the 68-component release.
- Repository streamlining and release metadata updates.

### Notes
- Historical planning, audit, and release notes remain preserved under `archive/`.

