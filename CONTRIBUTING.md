d imp# Contributing to Axiom01

Thanks for helping improve Axiom01.

## Core Principles

- Prefer semantic HTML over extra classes.
- Keep the public API small and stable.
- Avoid utility-class drift.
- Reuse design tokens instead of hardcoded values.
- Premium icons should feel premium: color, depth, detail, or gradient treatment.

## Before Opening a PR

1. Read `DEVELOPER.md`.
2. Check the docs pages affected by your change.
3. Run the available audits from `package.json`.
4. Verify light mode, dark mode, keyboard use, and narrow widths.

## Code Style

- Make the smallest change that solves the problem.
- Preserve existing naming and structure when possible.
- Update docs when behavior or examples change.
- Do not add visual-only classes where semantic structure already solves it.

## Icons

- Base icons should inherit `currentColor` and stay clean/minimal.
- Premium icons should use authored color treatment and extra polish.
- If an icon is monochrome and simple, it probably belongs in Base.

## Docs

- Prefer evergreen copy over brittle exact counts when totals change often.
- Fix broken links as part of the same change.
- Keep examples copy-paste ready.

## Release Readiness

Before release, verify:

- key pages render without console/runtime errors
- docs links resolve
- version/count copy is consistent
- icon rendering works in both base and premium sets
- footer/header branding is consistent across pages

