# Axiom01 Component Implementation Checklist
*Standard checklist for all Axiom01 components*

## HTML Structure Requirements

### ✅ Semantic Elements
- [ ] Uses appropriate semantic HTML (`<article>`, `<section>`, `<header>`, `<footer>`, `<nav>`, etc.)
- [ ] Avoids unnecessary `<div>` wrappers
- [ ] Uses single meaningful class for main component (e.g., `.card`, `.modal`, `.button`)
- [ ] Variant classes are simple and semantic (`.primary`, `.secondary`, `.danger`, `.large`, `.compact`)

### ✅ Accessibility (WCAG 2.1 AA)
- [ ] Proper ARIA roles where needed (`role="dialog"`, `role="button"`, etc.)
- [ ] ARIA attributes for state (`aria-expanded`, `aria-pressed`, `aria-hidden`)
- [ ] ARIA labels for context (`aria-label`, `aria-labelledby`, `aria-describedby`)
- [ ] Keyboard navigation support (Tab, Shift+Tab, Arrow keys, Space, Enter, Escape)
- [ ] Focus management (focus trapping for modals, focus return)
- [ ] Screen reader compatibility (proper heading structure, live regions)
- [ ] Color contrast meets 4.5:1 ratio minimum
- [ ] Focus indicators visible and clear (`:focus-visible` implementation)

### ✅ Form Elements (if applicable)
- [ ] Proper label associations (`for` attribute, implicit labels)
- [ ] Error message associations (`aria-describedby`)
- [ ] Required field indicators with ARIA labels
- [ ] Validation feedback with `role="alert"` and `aria-live="polite"`

## CSS Implementation Requirements

### ✅ CSS Variables Usage
- [ ] All spacing uses `--a-space-*`, `--a-padding-*`, or `--a-margin-*` variables
- [ ] All colors use semantic color variables (`--a-color-primary`, `--a-color-surface`, etc.)
- [ ] All typography uses `--a-font-size-*` and `--a-font-weight-*` variables
- [ ] Border radius uses `--a-border-radius-*` variables
- [ ] Shadows use `--a-shadow-*` variables
- [ ] No hardcoded values except for edge cases (document why)

### ✅ Selector Strategy
- [ ] Base component uses single class selector (`.component-name`)
- [ ] Internal elements use element selectors within component context (`.card header`, `.card section`)
- [ ] Variant modifiers use combined classes (`.card.elevated`, `.button.large`)
- [ ] Pseudo-classes for states (`:hover`, `:focus`, `:disabled`, `:active`)
- [ ] Responsive design using CSS variables for breakpoints

### ✅ Theme Compatibility
- [ ] Component works across all themes (light, dark, forest, ocean, sunset)
- [ ] No hardcoded colors that break theming
- [ ] High contrast theme support
- [ ] CSS variables properly inherited from theme files

## JavaScript Implementation Requirements

### ✅ Component Registration
- [ ] Component registered with `AxiomComponents.register()` system
- [ ] Initialization function handles setup and event binding
- [ ] Error handling for missing elements or invalid states
- [ ] Feature toggle compliance (respects framework settings)

### ✅ Event Handling
- [ ] Proper event delegation for dynamic content
- [ ] Keyboard event handling for accessibility
- [ ] Mouse/touch event handling
- [ ] Cleanup functions for removing event listeners

### ✅ API Consistency
- [ ] Data attributes for configuration (`data-modal="id"`, `data-accordion-expanded`)
- [ ] Consistent method naming across components
- [ ] Promise-based async operations where applicable
- [ ] Event dispatching for component state changes

## Documentation Requirements

### ✅ Component Page Structure
- [ ] Clear title and description
- [ ] Basic usage example with code
- [ ] Advanced usage examples
- [ ] Accessibility features section
- [ ] CSS implementation section
- [ ] Best practices footer
- [ ] Navigation back to framework

### ✅ Code Examples
- [ ] All examples are copy-paste ready
- [ ] Examples demonstrate proper accessibility
- [ ] Code blocks show both HTML and usage patterns
- [ ] Examples progress from simple to complex

### ✅ Accessibility Documentation
- [ ] Keyboard navigation instructions
- [ ] ARIA attribute explanations
- [ ] Screen reader compatibility notes
- [ ] Focus management description

## Testing Requirements

### ✅ Manual Testing
- [ ] Keyboard-only navigation works completely
- [ ] Screen reader announces all important information
- [ ] Component works across supported browsers
- [ ] Responsive behavior verified
- [ ] Theme switching works correctly

### ✅ Accessibility Testing
- [ ] Automated accessibility scan passes (axe-core)
- [ ] Manual screen reader testing (NVDA, JAWS, VoiceOver)
- [ ] Keyboard navigation testing
- [ ] Color contrast verification
- [ ] Focus indicator visibility

## Component Completion Criteria

### ✅ Ready for Review
- [ ] All checklist items completed
- [ ] Component demo page created
- [ ] Documentation is comprehensive
- [ ] No console errors in demo
- [ ] Passes manual accessibility testing

### ✅ Production Ready
- [ ] Peer review completed
- [ ] Cross-browser testing complete
- [ ] Performance impact assessed
- [ ] Integration with framework verified
- [ ] User testing feedback incorporated

---

## Usage Instructions

1. **For New Components**: Use this checklist from the start to ensure compliance
2. **For Existing Components**: Audit against this checklist and fix gaps
3. **For Reviews**: Use this as a review guide for component PRs
4. **For Documentation**: Reference this checklist in component docs

## Component Status Tracking

Mark component status in TODO files:
- 🔴 **Not Started**: Component doesn't meet basic requirements
- 🟡 **In Progress**: Some requirements met, others pending
- 🟢 **Complete**: All requirements met and tested
- ✅ **Production**: Complete + peer reviewed + user tested
