
# Axiom01 Developer Guide

This guide provides in-depth information for developers looking to understand, extend, or contribute to the Axiom01 UI framework. It covers core architectural decisions, best practices, and future considerations.

## 1. Component Lifecycle Management

Axiom01 components are designed to be modular and self-contained. Each component is initialized when its `data-component` attribute is detected by `axiom.js`. For more complex components, it's crucial to manage their lifecycle, especially when components are dynamically added, removed, or updated.

### `init()` Method

When `axiom.js` detects a `data-component` attribute, it attempts to call an `init()` method on the corresponding component's JavaScript module. This method is responsible for:

*   Setting up event listeners.
*   Performing initial DOM manipulations.
*   Fetching any necessary data.
*   Initializing third-party libraries (e.g., Fuse.js for search, CKEditor for editor).

### `destroy()` Method

For components that manage their own resources (e.g., event listeners, timers, third-party instances), a `destroy()` method is essential. This method should:

*   Remove all event listeners to prevent memory leaks.
*   Clean up any created DOM elements that are not automatically garbage-collected.
*   Destroy instances of third-party libraries.

**Example Component Structure:**

```javascript
// js/components/my-component.js
export default class MyComponent {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector('button');
        this.handleClick = this.handleClick.bind(this); // Bind 'this' for event listener
    }

    init() {
        console.log('MyComponent initialized:', this.element);
        this.button.addEventListener('click', this.handleClick);
    }

    handleClick() {
        alert('Button clicked in MyComponent!');
    }

    destroy() {
        console.log('MyComponent destroyed:', this.element);
        this.button.removeEventListener('click', this.handleClick);
        // Clean up other resources if any
    }
}
```

## 2. Centralized Event Delegation

To improve performance and simplify event management, Axiom01 encourages centralized event delegation where appropriate, especially for elements that are dynamically added or removed from the DOM.

Instead of attaching event listeners directly to individual elements, attach a single listener to a common ancestor (e.g., `document` or `main`). Then, use event bubbling and check `event.target` to determine if the event originated from the desired element.

**Benefits:**

*   **Performance:** Fewer event listeners mean less memory consumption and faster DOM updates.
*   **Simplicity:** Easier to manage events for dynamically added content.
*   **Maintainability:** Event logic is centralized, making it easier to debug and update.

**Example:**

```javascript
// Instead of:
// document.querySelectorAll('.my-button').forEach(button => {
//     button.addEventListener('click', handleButtonClick);
// });

// Use event delegation:
document.addEventListener('click', (event) => {
    if (event.target.matches('.my-button')) {
        handleButtonClick(event);
    }
});
```

## 3. Accessibility Guidelines

Axiom01 is built with WCAG 2.1 AA compliance as a core principle. When developing new components or extending existing ones, always adhere to the following guidelines:

*   **Semantic HTML:** Use the most appropriate HTML5 elements (`<nav>`, `<main>`, `<button>`, `<input>`, etc.).
*   **ARIA Attributes:** Employ ARIA roles, states, and properties (`role`, `aria-label`, `aria-expanded`, `aria-controls`, etc.) to convey meaning and functionality to assistive technologies.
*   **Keyboard Navigation:** Ensure all interactive elements are reachable and operable via keyboard (Tab, Shift+Tab, Enter, Space, Arrow keys). Manage focus appropriately for modal dialogs, dropdowns, and other complex widgets.
*   **Color Contrast:** Maintain sufficient color contrast ratios (minimum 4.5:1 for normal text) for all text and interactive elements. Axiom01's color system is designed to help with this.
*   **Focus Management:** Clearly indicate focus states for interactive elements. Ensure focus is managed logically, especially when opening/closing overlays or modals.
*   **Descriptive Text:** Provide meaningful `alt` text for images and clear labels for form controls.

## 4. Browser Support

Axiom01 aims for broad browser compatibility, focusing on modern browsers.

*   **Target Browsers:** The latest two versions of Chrome, Firefox, Safari, Edge.
*   **CSS Features:** Leverages modern CSS features like CSS Variables, Flexbox, and Grid. Fallbacks are provided where feasible, but older browsers (e.g., IE11) are not officially supported.
*   **JavaScript:** Written in modern JavaScript (ES6+). Transpilation is recommended for broader compatibility if targeting older environments. The provided `axiom.js` and component scripts assume a modern browser environment.

## 5. Content Security Policy (CSP) Considerations

When using Axiom01's dynamic component loading (via `import()`), you might encounter Content Security Policy (CSP) errors related to `eval()` or `unsafe-eval`. This is because some server configurations or default CSPs might interpret dynamic `import()` statements as similar to `eval()`, which is often restricted for security reasons.

To resolve this, you need to configure your server's Content Security Policy to allow `unsafe-eval` for `script-src`.

**Example CSP Header (Server-side configuration):**

```
Content-Security-Policy: script-src 'self' 'unsafe-inline' 'unsafe-eval';
```

**Note:** While `unsafe-eval` is necessary for dynamic imports in some environments, it should be used with caution as it can potentially increase the attack surface if not managed carefully. Always ensure all scripts loaded are trusted.

## 6. Vision for a Theme Generation Tool

A key future enhancement for Axiom01 is a comprehensive, interactive theme generation tool. This tool would:

*   **GUI for Customization:** Provide a user-friendly interface to adjust primary colors, secondary colors, spacing units, typography scales, border radii, and other global CSS variables.
*   **Live Preview:** Offer a live preview of how changes affect a sample page or component library.
*   **Accessibility Checker:** Integrate real-time WCAG compliance checks for color contrast as themes are customized.
*   **Code Export:** Generate a custom CSS file (or a set of CSS variable declarations) that users can easily integrate into their projects.
*   **Preset Management:** Allow users to save, load, and share custom themes.

This tool would significantly lower the barrier to entry for deep customization, empowering users to create unique, accessible themes without writing extensive CSS from scratch.
