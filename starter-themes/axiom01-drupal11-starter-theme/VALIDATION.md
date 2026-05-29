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
- [ ] Front-page fallback content/message appears when no front page content exists.
- [ ] Node template renders title/content/meta consistently.
- [ ] Views wrapper template remains stable.
- [ ] Contextual edit links appear on branding block and editable node/view output.
- [ ] Status messages template uses accessible roles and semantics (`error` => alert/assertive).
- [ ] Axiom01 CSS/JS assets load correctly in Drupal 11.
- [ ] Asset strategy toggle (`auto` / `local` / `package`) resolves to expected files with fallback behavior.
