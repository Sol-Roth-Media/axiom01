# Compatibility Contract

## Supported matrix

- Drupal core: `^11`
- PHP: follow Drupal 11 minimum requirements
- Axiom01 framework: `>=1.0 <2.0` (until next contract revision)

## Contract rules

1. The starter theme consumes stable Axiom01 surface only (runtime loader, tokens, supported components).
2. Experimental Axiom01 components are opt-in and excluded from compatibility guarantees.
3. Any Axiom01 breaking change requires a corresponding starter-theme migration note.

## Intentional exceptions to naming conventions

### BEM-like selectors in axiom.css for Drupal CMS classes

The framework's `axiom.css` includes selectors such as `.pager__items`, `.pager__item--first`,
`.pager__item--previous`, `.messages--status`, etc. These use double-underscore and double-dash
notation that resembles BEM, but are **not** violations of the no-BEM rule. They exist solely to
match class names that Drupal core and contrib modules emit — class names the theme cannot control
or remove. The no-BEM rule applies to markup the developer writes; it does not prevent the CSS from
targeting external CMS output.

### Dashed layout utility classes in theme.css

`theme.css` defines `.ax-layout`, `.ax-utility`, `.ax-footer-grid`, and `.ax-top-bar`. These are
intentional Drupal-specific structural wrappers. They use dashed prefixed names to avoid collisions
with Layout Builder, Paragraphs, and other contrib modules that frequently claim single-word class
names (e.g. `container`, `wrapper`, `region`). They do not carry framework component semantics.
