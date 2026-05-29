# Cross-Repo Validation Checklist

Use this checklist whenever Axiom01 or the starter theme changes:

- [ ] Main menu renders with expected semantic navigation markup.
- [ ] Secondary navigation renders via region block or fallback menu output.
- [ ] Footer and utility menus render and remain keyboard accessible.
- [ ] Nested menu levels render with stable list semantics.
- [ ] Active-trail/expanded menu states render expected CSS hooks.
- [ ] Default page load uses `data-theme="light"` and does not auto-switch to dark mode.
- [ ] `system` color mode follows browser preference.
- [ ] Palette/font/spacing/layout settings apply expected visual variables.
- [ ] Page template regions render without layout regressions.
- [ ] Highlighted, breadcrumb, help, and sidebar regions render when blocks are assigned.
- [ ] Drupal core forms (login/search/node edit) render with Axiom01 spacing, labels, and action button grouping.
- [ ] Drupal `details`/accordion form elements render with Axiom01 accordion styling and clear open/closed state affordances.
- [ ] Drupal `fieldset` groups render with Axiom01 legend, border, and error-state treatments.
- [ ] Axiom01 Search (JSON) block filters configured key/value results and links correctly.
- [ ] Drupal Default Search block renders core search form when Search module is enabled and shows fallback notice when disabled.
- [ ] Front-page fallback content/message appears when no front page content exists.
- [ ] Node template renders title/content/meta consistently.
- [ ] Views wrapper template remains stable.
- [ ] Contextual edit links appear on branding block and editable node/view output.
- [ ] Status messages template uses accessible roles and semantics (`error` => alert/assertive).
- [ ] `.form-item--error-message`, `.messages`, `.pager`, and `.tabs` inherit Axiom01 spacing/typography treatments without layout regressions.
- [ ] Axiom01 CSS/JS assets load correctly in Drupal 11.
- [ ] Asset strategy toggle (`auto` / `local` / `package`) resolves to expected files with fallback behavior.
