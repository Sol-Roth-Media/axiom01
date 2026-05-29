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
- [ ] Icon-set and character-set settings apply expected HTML data attributes for theming/integration hooks.
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
- [ ] Ajax progress indicators/throbbers and fullscreen progress overlays render with Axiom01 spinner treatment.
- [ ] Core and Views pager variants (`pager__*`, first/last/prev/next, mini pager, ellipsis) render consistently.
- [ ] Views exposed form filters (including dropdown/select controls) render with Axiom01 spacing and focus states.
- [ ] File upload widgets (`input[type=file]`, `managed-file`, `form-managed-file`) and upload progress/status rows render correctly.
- [ ] Field widgets/formatters from Drupal core and commonly used contributed modules inherit base spacing through `field--widget-*`/`field--formatter-*` wrappers.
- [ ] Form and search templates remain semantic/minimal and still allow additional classes via preprocess/theme functions.
- [ ] Axiom01 CSS/JS assets load correctly in Drupal 11.
- [ ] Asset strategy toggle (`auto` / `local` / `package`) resolves to expected files with fallback behavior.
- [ ] dbase install path docs correctly describe where to place/enable this theme in a dbase-based Drupal project.
- [ ] dbase docs and Axiom01 docs both reflect current integration responsibilities and compatibility boundaries.
