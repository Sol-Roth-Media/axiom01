# Axiom01 Drupal 11 Starter Theme Scaffold

This directory is a bootstrap-ready scaffold for the planned `axiom01-drupal11-starter-theme` repository.

## Goal

Provide a production-oriented Drupal 11 starter theme that uses Axiom01 tokens, base styles, and component patterns while staying maintainable for a solo developer + AI agents.

## Included scaffold

- Drupal 11 theme metadata and libraries
- Core layout templates (`page`, `node`, `views`, status messages)
- Main/footer/utility menu templates
- Axiom01 component partials for Twig composition
- Compatibility and upgrade policy docs
- Cross-repo validation checklist

## How to extract into dedicated repository

1. Create a new repository named `axiom01-drupal11-starter-theme`.
2. Copy the contents of this folder into that repository root.
3. Set default branch and CI as needed.
4. Keep version compatibility with Axiom01 according to `COMPATIBILITY.md`.

## Local Drupal usage

Place this theme under your Drupal installation:

```text
web/themes/custom/axiom01_drupal11
```

Then enable it in Appearance settings.

## Axiom01 asset strategy switch

Theme settings now expose an **Asset strategy** selector:

- **Auto** (default): prefers `vendor/axiom01/dist/*` when present and falls back to local `dist/*`.
- **Local dist assets**: always uses `dist/css/axiom.min.css` + `dist/js/axiom.min.js`.
- **Package-managed copy**: targets `vendor/axiom01/dist/*` and safely falls back to local `dist/*` if vendor files are missing.

When changing strategy, clear Drupal caches and re-run `VALIDATION.md` to confirm CSS/JS loading.
