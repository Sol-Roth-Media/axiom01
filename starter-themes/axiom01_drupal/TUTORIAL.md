# Building with Axiom01 and Drupal 11
## A Developer's Walkthrough

This guide explains how to fully integrate the **Axiom01 Semantic UI Framework** into a Drupal 11 environment, maintaining clean HTML and peak performance while leveraging Drupal's powerful content management capabilities.

---

### Step 1: Installation & Scaffolding

We use a custom installation profile (`axiom01_showcase`) to quickly set up Drupal with the necessary contrib modules and the Axiom01 theme.

```bash
# In your Drupal root directory
drush site:install axiom01_showcase \
  --site-name="Axiom01 Showcase" \
  --account-name=admin \
  --account-pass=admin \
  -y
```

This profile installs essential modules like **Paragraphs**, **Webform**, **Pathauto**, and **Admin Toolbar**.

### Step 2: The Axiom01 Drupal Theme

The core of the integration is the `axiom01_drupal` theme. It utilizes an **explicit denylist** to strip away Drupal's purely visual/presentational class soup (like `node--type-article` or `field--name-body`) while carefully preserving all functional classes (like `js-form-wrapper`, `use-ajax`, and any classes added by contrib modules).

To enable the theme:
```bash
drush theme:enable axiom01_drupal
drush config-set system.theme default axiom01_drupal -y
```

> [!TIP]
> The theme ensures that native Drupal elements (like the login form or Views) output semantic HTML. We map Drupal's submit buttons to Axiom01's `.button.primary` classes automatically via `hook_preprocess_input()`.

![Axiom01 Backend Mockup](/Users/solroth/.gemini/antigravity/brain/618b83eb-fcbb-4729-b99a-8469320701a4/drupal_axiom_backend_1783150943446.jpg)

### Step 3: Using the Axiom01 Companion Module

The `axiom01_companion` module provides helpful Drush commands. For instance, to quickly sync the latest compiled assets from the Axiom01 framework to your Drupal theme's `dist/` folder:

```bash
drush en axiom01_companion -y
drush ax-sync /path/to/axiom01/source
```

### Step 4: Recreating the Homepage

Instead of manual HTML, we use Drupal's **Paragraphs** module to build the homepage components modularly. 

For the **Fonts Showcase** section, we use a custom Paragraph type containing the custom fonts (NeoGothic, Marginalia, etc.) that we integrated into the theme.

![Axiom01 Frontend Mockup](/Users/solroth/.gemini/antigravity/brain/618b83eb-fcbb-4729-b99a-8469320701a4/drupal_axiom_frontend_1783150951916.jpg)

To build a similar page:
1. Navigate to **Structure > Content types > Page > Manage display**.
2. Add a Paragraph field (e.g., "Page Builder").
3. Create Paragraph types for `Hero`, `Feature Grid`, and `Font Showcase`.
4. In the `Font Showcase` paragraph template (`paragraph--font-showcase.html.twig`), use the Axiom01 grid and typography utility classes (e.g., `<h3 class="font-neogothic">`).

### Step 5: Handling Custom Fonts (Axifonts)

Axiom01 now ships with 9 custom TTF fonts (free for non-commercial use). The `axiom01_drupal` theme includes `axifonts.css` by default. 

To use them in your Twig templates, simply apply the classes:
```html
<h2 class="font-neogothic">Powerful Headings</h2>
<p class="font-daydreamer">Friendly, readable text.</p>
```

For commercial licensing of these fonts, please contact solroth@solroth.com or visit solroth.com.

---
**Next Steps**: Explore the `templates/` directory in the `axiom01_drupal` theme to see how we overrode Drupal's default templates (`node.html.twig`, `form-element.html.twig`, etc.) to enforce semantic HTML without `div` soup.
