# Axiom01 Drupal 11 Starter Theme

This directory is a ready-to-install Drupal 11 custom theme with bundled Axiom01 assets and sane defaults.

## Goal

Provide a production-oriented Drupal 11 starter theme that uses Axiom01 tokens, base styles, and component patterns while staying maintainable for a solo developer + AI agents.

## Included

- Drupal 11 theme metadata and libraries
- Core layout templates (`page`, `node`, `views`, status messages)
- Form wrappers for `form-element`, `details`, and `fieldset` with Axiom01-friendly anatomy
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
- Declares and renders expanded Drupal page regions for block-heavy layouts and easier placement.
- Supports primary and secondary navigation with fallback menu rendering when region blocks are not configured yet.
- Front page fallback and status/system messages render correctly through normal Drupal blocks.
- Keeps contextual edit affordances available in node/views/branding templates.

If expected front-page text does not appear:

1. Confirm **Page content** and **Status messages** blocks are placed.
2. Ensure they are visible for your current theme and region assignments.
3. Clear caches (`drush cr` or admin UI).

## Theme settings (Appearance → Settings → Axiom01 Drupal 11)

Theme settings now include:

- **Asset strategy**: `auto`, `local`, `package`
- **Color mode**: `light`, `dark`, `system`
- **Color palette**: `default`, `indigo`, `emerald`, `sunset`
- **Body font** and **Heading font** selectors
- **Spacing scale**: compact/comfortable/relaxed
- **Layout width**: narrow/standard/wide
- **Icon set strategy**: none/emoji/fontawesome/material
- **Character set declaration**: utf-8/iso-8859-1/windows-1252

## Search blocks included

The starter theme now ships two placeable blocks:

- **Axiom01 Search (JSON)**: lightweight client-side search with configurable JSON results and configurable key/value mapping.
- **Drupal Default Search**: wrapper around Drupal core Search block form.

For the Axiom01 block, JSON accepts either:

- Object map (`{"Label":"/path"}`)
- Array of objects (`[{"title":"Label","url":"/path"}]`) with configurable label/value keys.

Markup for the Axiom01 search block intentionally stays semantic/minimal and uses render-array attributes/data hooks so teams can add classes via preprocess/theme functions when needed.

Branding options are enabled through core theme features:

- Logo upload
- Site name toggle
- Site slogan/description toggle
- Favicon support

## Axiom01 asset strategy switch

Theme settings now expose an **Asset strategy** selector:

- **Auto** (default): prefers `vendor/axiom01/dist/*` when present and falls back to local `dist/*`.
- **Local dist assets**: always uses `dist/css/axiom.min.css` + `dist/js/axiom.min.js`.
- **Package-managed copy**: targets `vendor/axiom01/dist/*` and safely falls back to local `dist/*` if vendor files are missing.

When changing strategy, clear Drupal caches and re-run `VALIDATION.md` to confirm CSS/JS loading.

### Which asset strategy should I choose?

- **Auto**: best default for most teams; it gives resilient fallback behavior across local/dev/prod.
- **Local**: best when distributing a standalone theme package that must work without Composer vendor assets.
- **Package**: best when your deployment pipeline consistently installs and updates `vendor/axiom01` as the source of truth.
