
# Axiom01 Testing Strategy

A robust testing strategy is crucial for maintaining the quality, reliability, and accessibility of the Axiom01 UI framework. This document outlines recommended approaches for testing various aspects of the framework.

## Default maintenance lane (current repo standard)

For day-to-day maintenance and release gating, use:

```bash
npm test
```

This command runs:

1. `scripts/sync_drupal_starter_assets.py --check`
2. `scripts/pre_release_audit.py`
3. `scripts/axiom_philosophy_audit.py --enforce`
4. `scripts/drupal_twig_semantic_audit.py`
5. `scripts/runtime_loader_syntax_gate.py`
6. `scripts/runtime_loader_failure_smoke.py`
7. `scripts/critical_interaction_smoke.py`
8. `scripts/gesture_regression_smoke.py`
9. `scripts/accessibility_smoke.py`

## 1. Unit Testing (JavaScript Components)

Unit tests focus on individual JavaScript functions, classes, or modules in isolation.

*   **Tools:** Jest (or similar JavaScript testing framework).
*   **Focus:**
    *   **Component Initialization:** Verify that components correctly initialize when `Axiom.loadComponent` is called.
    *   **Event Handling:** Test that event listeners are correctly attached and respond as expected to user interactions (e.g., clicks, key presses).
    *   **State Management:** If components maintain internal state, ensure it's updated correctly.
    *   **Lifecycle Methods:** Verify `init()` and `destroy()` methods perform their intended setup and cleanup tasks without memory leaks.
    *   **Utility Functions:** Test any standalone utility functions for correctness.

**Example (Pseudo-code for Jest):**

```javascript
// __tests__/accordion.test.js
import Accordion from '../js/components/accordion.js';

describe('Accordion Component', () => {
    let accordionElement;
    let accordionInstance;

    beforeEach(() => {
        document.body.innerHTML = `
            <div class="accordion" data-component="accordion">
                <button class="accordion-header">Header 1</button>
                <div class="accordion-content">Content 1</div>
            </div>
        `;
        accordionElement = document.querySelector('.accordion');
        accordionInstance = new Accordion(accordionElement);
        accordionInstance.init();
    });

    afterEach(() => {
        accordionInstance.destroy();
        document.body.innerHTML = '';
    });

    test('should initialize correctly', () => {
        expect(accordionElement.getAttribute('aria-expanded')).toBe('false');
        expect(accordionElement.querySelector('.accordion-content').classList.contains('is-hidden')).toBe(true);
    });

    test('should toggle content visibility on header click', () => {
        accordionElement.querySelector('.accordion-header').click();
        expect(accordionElement.getAttribute('aria-expanded')).toBe('true');
        expect(accordionElement.querySelector('.accordion-content').classList.contains('is-hidden')).toBe(false);
    });

    // ... more tests for keyboard interaction, multiple accordions, etc.
});
```

## 2. Integration Testing (Component Interactions)

Integration tests verify that different parts of the framework (e.g., multiple components, or a component and `axiom.js`) work together as expected.

*   **Tools:** Jest with `@testing-library/dom` or similar.
*   **Focus:**
    *   **`axiom.js` and Components:** Ensure `axiom.js` correctly discovers and initializes components based on `data-component` attributes.
    *   **Cross-Component Communication:** If components interact (e.g., a search input filtering results displayed by another component), test these interactions.
    *   **DOM Manipulation:** Verify that components correctly add, remove, or modify DOM elements in a way that doesn't break other parts of the page.

## 3. Visual Regression Testing (CSS)

Visual regression testing helps catch unintended visual changes to components or layouts.

*   **Tools:** Playwright, Cypress, or Storybook with a visual testing addon (e.g., Chromatic).
*   **Focus:**
    *   **Component Appearance:** Take screenshots of each component in various states (e.g., default, hover, active, disabled) and compare them against baseline images.
    *   **Responsive Layouts:** Test components and layouts across different viewport sizes.
    *   **Theming:** Verify that themes are applied correctly and consistently without introducing visual regressions.
    *   **Browser Compatibility:** Run visual tests across different browsers.

## 4. Accessibility Testing

Ensuring WCAG compliance is paramount for Axiom01.

*   **Automated Tools:**
    *   **Lighthouse/Pa11y/axe-core:** Integrate these tools into your CI/CD pipeline to catch common accessibility violations (e.g., missing `alt` text, insufficient contrast, incorrect ARIA usage).
    *   **Focus:** Run these tools against all component documentation pages and key `index.html` sections.
*   **Manual Testing:**
    *   **Keyboard Navigation:** Manually test all interactive elements can be accessed and operated using only the keyboard.
    *   **Screen Reader Testing:** Use screen readers (e.g., NVDA, VoiceOver, JAWS) to navigate and interact with components to ensure content is conveyed correctly.
    *   **Color Contrast Checkers:** Use browser extensions or dedicated tools to verify contrast ratios, especially for custom themes.

## 5. Performance Testing

Monitor the performance impact of the framework.

*   **Tools:** Lighthouse, WebPageTest, browser developer tools (Performance tab).
*   **Focus:**
    *   **CSS File Size:** Ensure `purgecss` and `cssnano` are effectively reducing the production CSS bundle size.
    *   **JavaScript Bundle Size:** Monitor the size of `axiom.js` and individual component scripts.
    *   **Load Times:** Measure page load times, especially for `index.html` and component documentation pages.
    *   **Runtime Performance:** Check for long tasks, layout shifts, and other performance bottlenecks during user interaction.

## 6. Browser Compatibility Testing

Verify functionality and appearance across target browsers.

*   **Tools:** BrowserStack, Sauce Labs, or local testing on different browser/OS combinations.
*   **Focus:**
    *   **Core Functionality:** Ensure all JavaScript components work as expected.
    *   **Layout and Styling:** Check for rendering inconsistencies or broken layouts.
    *   **CSS Feature Support:** Verify that CSS variables, Flexbox, and Grid behave consistently.

## Best Practices

*   **Test-Driven Development (TDD):** Consider writing tests before implementing new features or components.
*   **Continuous Integration (CI):** Integrate all automated tests into a CI pipeline (e.g., GitHub Actions, GitLab CI) to run tests on every push or pull request.
*   **Clear Test Descriptions:** Write descriptive test names that clearly explain what each test is verifying.
*   **Maintain Test Data:** Use consistent and representative test data.
*   **Regular Audits:** Periodically conduct manual accessibility and performance audits.
