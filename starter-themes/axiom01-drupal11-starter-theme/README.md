# Axiom01 Drupal 11 Starter Theme

This directory is a ready-to-install Drupal 11 custom theme with bundled Axiom01 assets and sane defaults.

## Goal

Provide a production-oriented Drupal 11 starter theme that uses Axiom01 tokens, base styles, and component patterns while staying maintainable for a solo developer + AI agents.

## Included

- Drupal 11 theme metadata and libraries
- Core layout templates (`page`, `node`, `views`, status messages)
- Main/footer/utility menu templates
- Axiom01 component partials for Twig composition
- Compatibility and upgrade policy docs
- Bundled `dist/css/axiom.min.css` and `dist/js/axiom.min.js` for out-of-the-box usage
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

Then enable it in Appearance settings and clear caches.

## Good defaults (out of the box)

- Defaults to the **light** theme to match Axiom01 `index.html`.
- Includes bundled local Axiom01 assets so no package install is required for first run.
- Declares and renders standard Drupal page regions (highlighted, breadcrumb, help, content, sidebars, footer).
- Front page fallback and status/system messages render correctly through normal Drupal blocks.

If expected front-page text does not appear:

1. Confirm **Page content** and **Status messages** blocks are placed.
2. Ensure they are visible for your current theme and region assignments.
3. Clear caches (`drush cr` or admin UI).

## Axiom01 asset strategy switch

Theme settings now expose an **Asset strategy** selector:

- **Auto** (default): prefers `vendor/axiom01/dist/*` when present and falls back to local `dist/*`.
- **Local dist assets**: always uses `dist/css/axiom.min.css` + `dist/js/axiom.min.js`.
- **Package-managed copy**: targets `vendor/axiom01/dist/*` and safely falls back to local `dist/*` if vendor files are missing.

When changing strategy, clear Drupal caches and re-run `VALIDATION.md` to confirm CSS/JS loading.
