# Compatibility Contract

## Supported matrix

- Drupal core: `^11`
- PHP: follow Drupal 11 minimum requirements
- Axiom01 framework: `>=1.0 <2.0` (until next contract revision)

## Contract rules

1. The starter theme consumes stable Axiom01 surface only (runtime loader, tokens, supported components).
2. Experimental Axiom01 components are opt-in and excluded from compatibility guarantees.
3. Any Axiom01 breaking change requires a corresponding starter-theme migration note.
4. Drupal overrides must be Axiom-first: use an existing Axiom component/pattern before falling back to Drupal hook-based output.
5. Overrides must keep semantic/minimal markup (single root class, no BEM/class-stack expansion) unless a documented Drupal compatibility constraint requires otherwise.
