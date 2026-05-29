# Compatibility Contract

## Supported matrix

- Drupal core: `^11`
- PHP: follow Drupal 11 minimum requirements
- Axiom01 framework: `>=1.0 <2.0` (until next contract revision)
- dbase baseline: supported as an integration target when dbase is on Drupal 11-compatible releases

## Contract rules

1. The starter theme consumes stable Axiom01 surface only (runtime loader, tokens, supported components).
2. Experimental Axiom01 components are opt-in and excluded from compatibility guarantees.
3. Any Axiom01 breaking change requires a corresponding starter-theme migration note.
4. Docs that affect install/selection flow must be updated in both Axiom01 and dbase repositories.
