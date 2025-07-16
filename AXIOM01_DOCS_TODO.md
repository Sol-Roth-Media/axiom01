# Axiom01 Documentation & Demo Site Improvement TODO

This document outlines a step-by-step plan to transform `axiom01-navbar-demo.html` into a comprehensive, professional documentation and demo site for the Axiom01 framework.

## 1. Navigation & Structure
- [x] Add a sidebar or table of contents for quick navigation between sections. (Sidebar added to axiom01-navbar-demo.html)
- [x] Make navigation sticky for easy access on long pages. (Sidebar and navbar are sticky)
- [x] Ensure all navigation elements are accessible and keyboard-friendly. (ARIA roles, tabIndex, and keyboard navigation implemented in axiom01-navbar-demo.html)

## 2. Introduction & Philosophy
- [x] Expand the hero section with a clear description of Axiom01’s philosophy and goals. (Updated hero section in axiom01-navbar-demo.html)
- [x] Add a “Why Axiom01?” section comparing it to other frameworks. (Section added to axiom01-navbar-demo.html)

## 3. Getting Started
- [x] Add detailed installation instructions (CDN, NPM, manual download). (Expanded Quick Start section in axiom01-navbar-demo.html)
- [x] Include a “Hello World” example. (Added to Getting Started section in axiom01-navbar-demo.html)
- [x] Add troubleshooting tips for common setup issues. (Troubleshooting subsection added to Getting Started in axiom01-navbar-demo.html)

## 4. Component Documentation
- [ ] Create individual sections for each core component (Button, Card, Alert, Modal, Navbar, Grid, etc.).
- [ ] Add documentation and usage examples for Tag component.
- [ ] Add documentation and usage examples for Tab Bar component.
- [ ] For each component:
    - [ ] Add usage examples (HTML code + live demo).
    - [ ] List available classes, attributes, and options.
    - [ ] Show accessibility features.
    - [ ] Add customization tips (CSS variables, theming).
- [ ] Add Notification and Datepicker component documentation pages to ./components
- [ ] Link Notification and Datepicker docs in axiom01.html Component Gallery
- [ ] Update AUDIT_PROGRESS.md after each addition
- [ ] Ensure accessibility, semantic markup, and axiom01 styling in all new docs

## 5. Theming & Customization
- [ ] Add a full theming guide with code samples.
- [ ] Show all built-in themes with live previews.
- [ ] Document how to create custom themes.
- [ ] **Ensure all text and UI elements remain readable in every theme, especially dark mode.**
    - [x] Audit all color variables for sufficient contrast in every theme (see AUDIT_PROGRESS.md for details).
    - [x] Use CSS variables for text and background colors, and test with real content in axiom01-navbar-demo.html.
    - [x] Add a theme preview section to let users see all themes in action (see Theming Demo section in axiom01-navbar-demo.html).
    - [x] Consider using tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify accessibility. (Initial manual checks performed, further automated checks recommended.)
    - [x] Add a theme preview section to let users see all themes in action. (Completed in axiom01-navbar-demo.html)

## 6. Advanced Features
- [ ] Add sections for advanced usage (dynamic theming, JS API, custom components).
- [ ] Document integration with frameworks (React, Vue, etc.).

## 7. Accessibility
- [ ] Add a dedicated accessibility section with best practices and Axiom01’s built-in features.
- [ ] Document ARIA attributes and keyboard navigation.
- [ ] Ensure all demos are accessible and meet WCAG standards.

## 8. Examples & Templates
- [ ] Add real-world example layouts (landing page, dashboard, form, etc.).
- [ ] Provide downloadable starter templates.

## 9. FAQ & Troubleshooting
- [ ] Add a frequently asked questions section.
- [ ] Include common issues and solutions.

## 10. Community & Resources
- [ ] Add links to GitHub, guides, changelog, roadmap, and contribution instructions.

## 11. Footer
- [ ] Add a footer with copyright, links, and version.

## 12. Visual & UX Improvements
- [ ] Add “Back to Top” button.
- [ ] Improve spacing, typography, and color contrast.
- [ ] Make sure all demos are responsive and accessible.

## Selective Component Loading in Axiom01

To optimize bundle size and performance, you can load only the components you need:

**JavaScript:**
- Only register the components you use by commenting out or removing unused `AxiomComponents.register(...)` calls in `js/axiom.js`.
- For advanced usage, split each component’s logic into separate JS files and import only the ones you need in your project.

**CSS:**
- Import only the CSS files for the components you use, instead of the entire `components.css`.
- Example:
  ```css
  @import url("alerts.css");
  @import url("navbar.css");
  ```
- Or, create a custom CSS bundle with only the styles you need.

This approach helps keep your implementation lightweight and focused on the features you actually use.

---

### Notes on Theme Readability
- Audit all color variables for sufficient contrast in every theme.
- Use CSS variables for text and background colors, and test with real content.
- Consider using tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify accessibility.
- Add a theme preview section to let users see all themes in action.

---

**Start by fixing theme contrast issues, then add sidebar navigation and expand documentation sections.**
