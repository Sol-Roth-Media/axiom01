# Axiom01 Drupal 11 Theme

A pure semantic HTML theme for Drupal 11 built on the [Axiom01](https://sol-roth-media.github.io/axiom01/) framework.

## Philosophy

This theme enforces Axiom01's core principles inside Drupal:

- **No utility classes.** No BEM. No inline styles.
- **Semantic HTML5 first.** Drupal's default div soup is aggressively overridden with `<article>`, `<section>`, `<header>`, `<footer>`, `<nav>`, `<figure>`, `<details>`, and `<summary>`.
- **Zero base theme dependency.** Uses `base theme: false` to inherit nothing from Drupal core themes.
- **Admin-ready.** Full toolbar compatibility, themed local tasks (tabs), and admin dashboard cards.

## Installation

1. Copy the `axiom01_drupal` folder into your Drupal installation:
   ```
   cp -r axiom01_drupal /path/to/drupal/web/themes/custom/
   ```

2. Enable the theme:
   ```
   drush then axiom01_drupal
   drush config-set system.theme default axiom01_drupal
   ```

3. Optionally, set as admin theme too:
   ```
   drush config-set system.theme admin axiom01_drupal
   ```

## Directory Structure

```
axiom01_drupal/
├── axiom01_drupal.info.yml       # Theme definition
├── axiom01_drupal.libraries.yml  # Asset libraries
├── axiom01_drupal.theme          # Preprocess hooks
├── theme-settings.php            # Admin settings form
├── config/
│   └── install/                  # Default config
├── css/
│   └── theme.css                 # Drupal-specific overrides
├── dist/                         # Bundled Axiom01 assets
│   ├── css/
│   │   ├── axiom.min.css
│   │   └── axicons.css
│   └── js/
│       ├── axiom.min.js
│       └── axicons-luxe.js
└── templates/
    ├── layout/                   # Page structure
    ├── block/                    # Block templates
    ├── content/                  # Node, field, comment templates
    ├── navigation/               # Menu, breadcrumb, tabs, pager
    ├── form/                     # Form elements
    ├── misc/                     # Status messages
    ├── dataset/                  # Tables
    ├── views/                    # Views module overrides
    ├── paragraphs/               # Paragraphs module overrides
    ├── webform/                  # Webform module overrides
    ├── layout_builder/           # Layout Builder overrides
    ├── media/                    # Media entity templates
    ├── user/                     # User profile/login templates
    ├── admin/                    # Admin page templates
    └── field_group/              # Field Group module overrides
```

## Component Mapping

| Drupal Element        | Axiom01 Component              |
|-----------------------|--------------------------------|
| Status messages       | `<div class="alert success">`  |
| Node teasers          | `<article class="card">`       |
| Tables                | `<div class="table-responsive">` |
| Pager                 | `<nav class="pagination">`     |
| Admin tabs            | `<nav class="tabs">`           |
| Details/Fieldsets     | Native `<details>/<summary>`   |
| Menus                 | Semantic `<nav><ul><li><a>`    |
| Images                | `<figure>/<figcaption>`        |
| Blocks                | `<section>` or `<article>`     |
| Breadcrumbs           | `<nav><ol class="breadcrumb">` |
| Submit buttons        | `<button class="button primary">` |

## Supported Contrib Modules

This theme includes template overrides for:

- **Views** — Unformatted, list, table, grid, exposed filters, mini-pager
- **Paragraphs** — Text, image, card, hero, accordion
- **Webform** — Form wrapper, base elements, confirmation
- **Layout Builder** — One-column, two-column, three-column layouts
- **Field Group** — HTML element, details, tabs
- **Media** — Image, video, remote video, document

## Theme Settings

Navigate to **Appearance → Axiom01 → Settings** to configure:

- **Default Color Theme**: System (auto), Light, or Dark

## Axicons

The full 324-icon Axicons Luxe library is bundled and available. Use in Twig:

```twig
<span class="axicon render" data-name="Rocket-Luxe"></span>
```

See the full icon reference at [sol-roth-media.github.io/axiom01/docs/axicons.html](https://sol-roth-media.github.io/axiom01/docs/axicons.html).

## License

MIT — Same as Axiom01.
