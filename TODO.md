# Axiom01 UI Framework - TODO List

This document outlines pending tasks, improvements, and future features for the Axiom01 UI Framework.

## Critical Fixes

- [x] Fix file naming inconsistency (axion_config.css → axiom_config.css)
- [x] Fix theme switcher positioning on mobile displays
- [x] Add alert styles for success, error, and info messages
- [x] Repair gradient displays and swatches in theme section
- [x] Fix navbar mobile menu toggle behavior and styling
- [x] Fix semantic color variables so color swatches display correctly in index.html
- [x] Add missing semantic color swatches to index.html (success, error, warning, info, surface, background, outline)
- [x] Audit colors_vars.css for semantic color variables
- [x] Document color variable usage inline and in docs
- [x] Validate theme switching and accessibility for all color swatches
- [x] Ensure all components render correctly across themes

## CSS Improvements

- [x] Refactor and optimize CSS files:
    - [x] Eliminate redundant rules
    - [x] Improve selector specificity
    - [x] Organize files more logically
    - [x] Reduce CSS file size
- [x] Add proper CSS variable documentation inline
- [x] Fix inconsistent naming patterns in CSS variables
- [x] Create proper CSS reset that doesn't conflict with framework styles
- [x] Improve cross-browser compatibility for flexbox and grid layouts
- [x] Refactor and optimize CSS files for selector specificity and file size

## Component Enhancements

- [ ] Add missing components mentioned in documentation:
    - [ ] Tabs implementation
    - [ ] Accordions implementation
    - [ ] Dropdowns implementation
- [ ] Add Components and examples to the index.html page
    - [ ] Cards
    - [ ] Gradient Swatches
    - [ ] Semantic Colors (buttons etc)
- [ ] Enhance accessibility of all components:
    - [ ] Improve focus states
    - [ ] Add appropriate ARIA attributes
    - [ ] Ensure keyboard navigation works properly
- [ ] Add animations for interactive components
- [ ] Fix inconsistencies between component examples and documentation

## Documentation

- [ ] Create comprehensive API documentation for each component
- [ ] Add code examples for all components and variants
- [ ] Document all CSS variables and their usage
- [ ] Create usage guidelines for theming system
- [ ] Add migration guide for users coming from other frameworks
- [ ] Create component playground page

## Documentation Updates
- [ ] Sync readme.md, AXIOM01_STYLING_GUIDE.md, and AUDIT_PROGRESS.md with latest features and refactors
- [ ] Add direct links to style guide and component demos in all docs
- [ ] Update documentation after each major feature or refactor

## Theming System

- [ ] Complete and test all theme implementations:
    - [ ] Light theme
    - [ ] Dark theme
    - [ ] Forest theme
    - [ ] Ocean theme
    - [ ] Sunset theme
- [ ] Add proper visualizations for all color variables
- [ ] Create gradient displays and swatches with proper labeling
- [ ] Implement visual representations of spacing, typography, and shape variables
- [ ] Add theme customization wizard
- [ ] Ensure all themes meet WCAG contrast requirements

## Build System

- [ ] Improve build script:
    - [ ] Add proper CSS validation
    - [ ] Add proper JS validation
    - [ ] Implement proper minification
    - [ ] Add source maps for development
- [ ] Set up automated testing
- [ ] Configure proper versioning system
- [ ] Implement proper package publishing workflow
- [ ] Add CI/CD pipeline for testing and deployment

## Performance

- [ ] Optimize CSS delivery:
    - [ ] Critical CSS path
    - [ ] CSS splitting for different components
- [ ] Reduce JavaScript footprint
- [ ] Optimize asset loading
- [ ] Implement lazy-loading for non-critical components
- [ ] Add performance benchmarks and tracking

## Testing

- [ ] Test on all major browsers:
    - [ ] Chrome
    - [ ] Firefox
    - [ ] Safari
    - [ ] Edge
- [ ] Test on mobile devices:
    - [ ] iOS (Safari)
    - [ ] Android (Chrome)
- [ ] Test with assistive technologies:
    - [ ] Screen readers
    - [ ] Keyboard navigation
- [ ] Conduct accessibility audits (WCAG 2.1 AA compliance)
- [ ] Add automated testing for components
- [ ] Test across different resolutions and device orientations

## New Features

- [ ] Create a dark mode toggle (separate from theme selector)
- [ ] Add RTL (right-to-left) language support
- [ ] Implement color mode based on user preferences (prefers-color-scheme)
- [ ] Create printable styles for all components
- [ ] Add internationalization support
- [ ] Create component variants for different design philosophies (Material, iOS, etc.)

## Developer Experience

- [ ] Add VS Code snippets for common components
- [ ] Create better documentation for contributors
- [ ] Add design files (Sketch, Figma) for designers
- [ ] Implement storybook or similar component preview system
- [ ] Add GitHub issue and PR templates

## Community

- [ ] Create showcase page for projects using Axiom01
- [ ] Set up community forums
- [ ] Create contribution guides
- [ ] Establish governance model for project decisions
- [ ] Create roadmap for future versions

## Release Planning

- [ ] v0.2: Fix critical issues, complete basic documentation
- [ ] v0.3: Add missing components, improve accessibility
- [ ] v0.4: Enhance theming system, add RTL support
- [ ] v0.5: Performance optimization, testing improvements
- [ ] v1.0: Production-ready release with complete documentation

## References

- Keep track of industry standards and trends:
    - [ ] Follow Material Design updates
    - [ ] Monitor CSS spec changes
    - [ ] Track accessibility guidelines updates
    - [ ] Follow browser compatibility changes

## Component Coverage
- [x] Alerts (success, error, info)
- [x] Datepicker
- [x] Buttons
- [x] Navigation
- [x] Cards
- [ ] Tabs
- [ ] Accordions
- [ ] Dropdowns
- [ ] Progress indicators
- [x] Create dedicated grid-examples.html page to demonstrate semantic and custom grid layouts
- [x] Add comprehensive grid system documentation and examples to AXIOM01_STYLING_GUIDE.md
- [x] Increase max-width and enhance grid-examples.html with additional advanced grid patterns and clear documentation for each example
- [ ] Audit and improve semantic color swatches and documentation in index.html
- [ ] Continue improving the aesthetic and clarity of the index.html color and gradient sections
- [ ] Add inline tooltips and documentation for color swatches in index.html
- [ ] Ensure all color swatches respond correctly to theme changes
- [ ] Improve layout and accessibility of color and gradient sections in index.html

- [ ] Review all relevant JS files for feature toggle compliance (e.g., --a-use-css-reset, --a-enable-animations, --a-enable-transitions, --a-enable-fonts)
