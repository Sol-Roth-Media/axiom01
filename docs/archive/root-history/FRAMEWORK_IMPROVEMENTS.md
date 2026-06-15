# Axiom01 Framework Improvements

This plan is intentionally limited to changes that preserve Axiom01's semantic-first rules:
- one descriptive root class per component
- descendant styling over extra utility/BEM classes
- no `doc-*` scaffolding classes in docs HTML
- no inline event handlers in examples

## Completed improvements

- [x] Add semantic compliance gate to pre-release auditing.
  - Implemented in `scripts/pre_release_audit.py`.
  - Blocks `doc-*`, BEM (`__`), modifier (`--`) classes, and inline `onclick` handlers in docs HTML.
- [x] Remove inline handler pattern from dynamic list documentation sample.
  - Updated in `docs/dynamic-content.html`.
  - Example now binds a single delegated click listener and calls `DynamicListHelper.removeItem()`.
- [x] Keep framework quality checks executable from the existing audit flow.
  - The semantic check is now part of the standard pre-release script path.

## Why these were prioritized

These close the most common regression paths that break Axiom01 philosophy:
1. accidental class-pattern drift in docs pages,
2. examples teaching non-compliant event handling,
3. missing enforcement in release checks.

