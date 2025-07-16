# Axiom01 Components Audit TODO List

This document tracks the progress of auditing and fixing all components in the ./components directory to follow the Axiom01 style guide and philosophy.

## Style Guide Requirements
- Use semantic HTML elements
- Use minimal, meaningful classes (one main class per component)
- For variants, combine classes (e.g., `.alert.success`)
- Style with element selectors (e.g., `.card header`, `.card section`)
- Avoid unnecessary wrappers
- Ensure button elements don't require classes
- Replace BEML with simple compound classes
- Update CSS files to use semantic variables and target elements directly

## Components to Audit

### Basic Components
- [x] button.html
  - Fixed: Changed `.btn` class to `.button` class
  - CSS: Already using `.button` class in axiom.css

- [x] alert.html
  - Reviewed: Already follows style guide principles with minimal classes and semantic structure
  - CSS: Updated `.closeBtn` to `button.close` in alerts.css

- [x] card.html
  - Fixed: Changed to use semantic article element with header, section, footer structure
  - Changed button class from .btn to .button
  - Removed inline styles

- [x] tag.html
  - Fixed: Changed `axiom-tag` to `tag`, removed BEML-style classes (`axiom-tag--primary` to `tag primary`)
  - Fixed: Removed `axiom-tag-remove` class from button element
  - CSS: Created CSS in components.css using semantic variables and targeting elements directly

### Navigation Components
- [x] navbar.html
  - Fixed: Changed `.axiom-navbar-demo` to `.navbar`, removed `.dropdown-toggle` and `.dropdown-menu` classes
  - Updated JavaScript to target elements directly (`.navbar .dropdown > a` instead of `.dropdown-toggle`)
  - Changed menu toggle to use `hidden` attribute instead of `.show` class

- [x] navigation.html
  - Fixed: Changed `.axiom-btn` to `.button` in pagination section
  - Fixed: Removed `.dropdown-trigger` and `.dropdown-list` classes from dropdown menu
  - Fixed: Updated JavaScript to target elements directly (`.dropdown button` instead of `.dropdown-trigger`)
  - Fixed: Updated CSS variables to use correct names (`--a-shadow-sm` instead of `--a-shadow-small`, `--a-color-surface-variant` instead of `--a-color-surface-container`)
  - Fixed: Updated code examples to match the actual implementation

- [ ] sidebar.html
  - Need to audit

- [ ] tab-bar.html
  - Need to audit

- [ ] tabs.html
  - Need to audit

### Interactive Components
- [x] modal.html
  - Reviewed: The `.modal-content` div is necessary for functionality
  - The component already follows style guide principles with semantic elements (header, section, footer)
  - Uses CSS variables for styling as recommended
  - CSS: Updated `.closeBtn` to `button.close` in components.css

- [x] dropdown.html
  - Fixed: Changed to use a single main class (.dropdown) instead of multiple classes
  - Updated button to use .button class
  - Simplified class structure and updated code examples
  - CSS: Updated to target elements directly (button, ul, li, a) instead of using additional classes (.dropdown-trigger, .dropdown-list)

- [x] accordion.html
  - Fixed: Removed unnecessary classes (`accordion-item`, `accordion-trigger`, `accordion-panel`) and kept only the main class `accordion`
  - Fixed: Updated JavaScript to target elements directly
  - CSS: Created CSS in components.css using semantic variables and targeting elements directly

- [ ] carousel.html
  - Need to audit

- [ ] drawer.html
  - Need to audit

### Form Components
- [ ] forms.html
  - Need to audit

- [ ] datepicker.html
  - Need to audit

### Progress Components
- [ ] progress-bar.html
  - Need to audit

- [ ] progress-throbber.html
  - Need to audit

- [ ] stepper.html
  - Need to audit

### Content Components
- [x] table.html
  - Fixed: Changed `.a-table`, `.a-table-zebra`, `.a-table-scroll` classes to `.table`, `.table.zebra`, `.table-scroll`
  - Updated CSS to use standard Axiom01 variables
  - Updated JavaScript to use new class names
  - CSS: Updated to use semantic variables (--a-color-surface, --a-color-on-surface) instead of table-specific variables (--a-table-bg, --a-table-color)

- [ ] hero.html
  - Need to audit

- [ ] media.html
  - Need to audit

### Specialized Components
- [ ] infinite-scroll.html
  - Need to audit

- [ ] jump-menu.html
  - Need to audit

- [ ] notification.html
  - Need to audit

## Progress Tracking
- Total components: 25
- Audited: 10 (button.html, modal.html, table.html, alert.html, card.html, dropdown.html, tag.html, accordion.html, navbar.html, navigation.html)
- Fixed: 9 (button.html, modal.html, table.html, card.html, dropdown.html, tag.html, accordion.html, navbar.html, navigation.html)
- Already compliant: 1 (alert.html)
- Remaining: 15
