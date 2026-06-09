# Axiom01 Drupal 11 Starter Theme

This directory is a ready-to-install Drupal 11 custom theme with bundled Axiom01 assets and semantic-first integration defaults.

## Goal

Provide a production-oriented Drupal 11 starter theme that uses Axiom01 tokens, accessibility hooks, and semantic markup while staying maintainable for a solo developer + AI agents.

## Strict Drupal profile (canonical)

For this starter theme, treat this as the canonical integration contract even when legacy framework docs still show class-heavy patterns:

- Semantic-first output.
- No BEM.
- No new custom dashed class naming.
- Minimal class budget: one root component class only when unavoidable.
- Prefer element structure + `data-*` runtime hooks over wrapper classes.
- Drupal core classes are allowed when they are native output hooks (`.messages`, `.tabs`, `.pager`, etc.).

## Included

- Drupal 11 theme metadata and libraries
- Core templates:
  - `templates/layout/page.html.twig`
  - `templates/content/node.html.twig`
  - `templates/views/views-view.html.twig`
  - `templates/misc/status-messages.html.twig`
  - `templates/form/form-element.html.twig`
  - `templates/form/details.html.twig`
  - `templates/form/fieldset.html.twig`
  - `templates/navigation/menu--main.html.twig`
  - `templates/navigation/menu--footer.html.twig`
  - `templates/navigation/menu--utility.html.twig`
  - `templates/block/block--system-branding-block.html.twig`
- Axiom component partials (`templates/components`)
- Bundled `dist/css/axiom.min.css` and `dist/js/axiom.min.js`
- Release operations templates:
  - `RELEASE_NOTE_TEMPLATE.md`
  - `CHANGELOG_MIGRATION_TEMPLATE.md`
  - `RELEASE_CHECKLIST.md`
  - `.github/workflows/upstream-main-parity.yml` (for extracted standalone starter-theme repo)
- Compatibility and validation docs

## Custom blocks included

- **Axiom01 Search (JSON)**
- **Drupal Default Search**
- **Axiom CTA**
- **Axiom Carousel**
- **Axiom AI Chat**
- **Axiom AI Image Generator**

## New block contracts

### Axiom CTA

- Config: title, body, primary/secondary label+URL, variant.
- Output: semantic `section.cta` with heading, paragraph, and links.

### Axiom Carousel

- Config: slide items (media, alt, heading, text, link), autoplay/timing, controls toggle.
- Output: semantic region with keyboard navigation and ARIA state hooks.

### Axiom AI Chat

- Config: provider mode, endpoint route, system prompt preset, placeholder, intro text, privacy notice.
- Output: semantic chat panel with accessible message log + form controls.

### Axiom AI Image Generator

- Config: endpoint route, model preset, style presets, output size preset, moderation notice.
- Output: semantic form + status + result region.

## Drupal AI Initiative integration approach

Use a thin adapter layer via a companion module:

- **Theme:** presentation, accessibility semantics, progressive enhancement behavior.
- **Companion module:** Drupal AI provider wiring, validation, moderation, permissions, caching.
- **Config entities:** reusable presets (persona, style, model, token/cost guardrails).

Keep block UI provider-agnostic (`data-*` hooks) so backend providers can change without Twig/JS rewrites.

## Runtime source-of-truth

- Theme always loads bundled `dist/js/axiom.min.js` and `dist/css/axiom.min.css` as its runtime contract.
- These files must stay byte-for-byte aligned with repository-root `js/axiom.min.js` and `css/axiom.min.css`.
- Use `npm run sync:drupal-assets` from repository root whenever framework assets change.
- If source/minified runtime behavior diverges, treat starter-theme docs + compatibility contract as canonical and revalidate before release.

## Local Drupal usage

Place this theme under your Drupal installation:

```text
web/themes/custom/axiom01_drupal11
```

Then enable it in Appearance settings and clear caches.

## Theme settings (Appearance → Settings → Axiom01 Drupal 11)

- Color mode: `light`, `dark`, `system`
- Color palette: `default`, `indigo`, `emerald`, `sunset`
- Body font + Heading font
- Spacing scale: compact/comfortable/relaxed
- Layout width: narrow/standard/wide
- Icon set strategy: none/emoji/fontawesome/material
- Character set declaration: utf-8/iso-8859-1/windows-1252

## Delivery sequence for AI-enabled rollout

1. Land CTA + Carousel blocks first.
2. Land AI chat block against mocked backend contract.
3. Switch chat backend to Drupal AI plugin-backed adapter.
4. Land AI image generator block with the same adapter contract.
5. Add validation fixtures + a11y smoke scenarios across all four blocks.
