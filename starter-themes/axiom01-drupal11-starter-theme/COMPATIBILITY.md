# Compatibility Contract

## Supported matrix

- Drupal core: `^11`
- PHP: follow Drupal 11 minimum requirements
- Axiom01 framework: `>=1.0 <2.0` (until next contract revision)

## Contract rules

1. Starter theme integration follows the strict Drupal profile: semantic-first, no BEM, no new custom dashed classes, minimal class budget.
2. Drupal native output classes are allowed when required for core/contrib compatibility hooks.
3. Runtime integration contract targets packaged runtime assets (`dist/*` or vendor-managed equivalent), not raw source files.
4. AI-facing blocks stay provider-agnostic in Twig/JS and rely on companion module adapters for provider services.
5. Any Axiom01 breaking change requires a corresponding starter-theme migration note.

## Drupal AI governance requirements

- Role-based permissions for AI blocks/actions.
- Prompt/input sanitization and output filtering.
- Rate limiting and provider timeout fallback.
- Audit logging for AI actions.
- Clear UX states for unavailable service and filtered output.
