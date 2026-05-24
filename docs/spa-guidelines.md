# Building Single Page Applications with Axiom01: A Native Approach

Axiom01 is built on a philosophy of semantic HTML, minimal CSS, and progressive enhancement. While it provides a robust foundation for traditional multi-page applications, many modern web experiences benefit from the dynamic nature of Single Page Applications (SPAs). This document explores how to leverage Axiom01's strengths to build performant, maintainable, and accessible SPAs without resorting to large, opinionated JavaScript frameworks like React, Vue, or Angular.

## Core Principles for Axiom01 SPAs

When building an SPA with Axiom01 using native browser capabilities, we adhere to the following principles:

1.  **Progressive Enhancement:** Start with a solid, accessible HTML foundation that works even without JavaScript. Layer on JavaScript for enhanced interactivity and dynamic content loading.
2.  **Semantic HTML:** Continue to prioritize meaningful HTML structure. Axiom01's CSS is designed to style these semantic elements beautifully out-of-the-box.
3.  **Minimal JavaScript:** Only write JavaScript where necessary for dynamic behavior. Avoid unnecessary abstractions or complex libraries if native browser APIs suffice.
4.  **Component-Based Architecture:** Even without a framework, structure your application into logical, reusable components. This improves maintainability and scalability.
5.  **Leverage Browser APIs:** Modern browsers offer powerful APIs (History API, Web Components, Fetch API) that can handle much of what frameworks traditionally provide.

## Proposed Solutions for SPA Functionality

### 1. Client-Side Routing with Native JavaScript (History API)

A core feature of any SPA is client-side routing, allowing URL changes without full page reloads. The browser's `History API` is perfect for this.

**How it works:**

*   **`pushState()`:** Changes the URL in the browser's address bar and adds an entry to the browser's history stack without triggering a full page reload.
*   **`popstate` event:** Fired when the active history entry changes (e.g., when the user clicks back/forward in the browser).
*   **`replaceState()`:** Changes the URL without adding a new history entry (useful for redirects or updating query parameters).

**Implementation Approach:**

1.  **Centralized Router:** Create a `Router` module (e.g., `js/router.js`) that maps URL paths to specific rendering functions or components.
2.  **Event Listening:** The router listens for `popstate` events and intercepts clicks on internal `<a>` tags to prevent default navigation and instead use `pushState()`.
3.  **Content Rendering:** When a route matches, the router calls the associated function, which is responsible for fetching data (if needed) and updating the `main` content area of your `index.html`.

**Example `js/router.js` (Conceptual):**

```javascript
class Router {
    constructor(routes) {
        this.routes = routes;
        window.addEventListener('popstate', this.handleLocation.bind(this));
        document.addEventListener('click', e => {
            const { target } = e;
            if (target.matches('a') && target.origin === window.location.origin && !target.hasAttribute('data-external')) {
                e.preventDefault();
                this.navigate(target.pathname);
            }
        });
        this.handleLocation();
    }

    navigate(path) {
        history.pushState({}, '', path);
        this.handleLocation();
    }

    async handleLocation() {
        const path = window.location.pathname;
        const route = this.routes[path] || this.routes['/404']; // Fallback for 404

        if (route) {
            const appContainer = document.querySelector('main.content'); // Or your main content area
            if (appContainer) {
                // Clear existing content
                appContainer.innerHTML = ''; 
                
                // Load and render view/component
                if (typeof route.render === 'function') {
                    await route.render(appContainer);
                } else if (route.component) {
                    // Assuming route.component is a Web Component tag name or a function that returns HTML
                    appContainer.innerHTML = `<${route.component}></${route.component}>`;
                }
                // Re-initialize Axiom01 components if new HTML is added
                window.axiom.init(); 
            }
        }
    }
}

// In your main app.js
const routes = {
    '/': { render: async (container) => { 
        const response = await fetch('/views/home.html');
        container.innerHTML = await response.text();
    }},
    '/about': { render: async (container) => {
        const response = await fetch('/views/about.html');
        container.innerHTML = await response.text();
    }},
    // ... other routes
};
const router = new Router(routes);
```

### 2. UI Encapsulation and Reusability with Web Components

Web Components provide a native, framework-agnostic way to create reusable, encapsulated UI widgets. They are a perfect fit for Axiom01's component-first philosophy.

**Key Web Component Technologies:**

*   **Custom Elements:** Define new HTML tags (e.g., `<my-button>`, `<user-profile>`).
*   **Shadow DOM:** Provides encapsulation for a component's internal DOM and styles. This means a component's CSS won't leak out, and external CSS won't easily penetrate, offering true component isolation.
*   **HTML Templates (`<template>` and `<slot>`):** Define reusable markup structures that can be cloned and inserted into the Shadow DOM.

**Integration with Axiom01:**

1.  **Custom Elements for Axiom01 Components:** You can wrap existing Axiom01 components (or parts of them) within a Custom Element.
    *   **Example:** An `<axiom-dropdown>` custom element could encapsulate the `[data-component="dropdown"]` structure.
    *   Inside the `connectedCallback` of your custom element, you would render the Axiom01 HTML and then call `window.axiom.init(this)` to initialize any `data-component` elements within its light DOM.
2.  **Shadow DOM for Isolation:** For new, more complex components, use Shadow DOM to prevent style conflicts.
    *   Axiom01's CSS variables (`--a-color-primary`, `--a-space-m`, etc.) can be passed into the Shadow DOM using CSS custom property inheritance or explicitly set on the host element, allowing Web Components to seamlessly adopt the current theme.
    *   This means your Web Components can be styled consistently with the rest of your Axiom01 application without needing to re-implement theming logic.

**Example Web Component (`js/components/my-card.js`):**

```javascript
class MyCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Use Shadow DOM
        
        // Access Axiom01 CSS variables
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--a-color-primary');
        
        this.shadowRoot.innerHTML = `
            <style>
                /* Component-specific styles, can use Axiom01 variables */
                :host {
                    display: block;
                    border: 1px solid var(--a-color-outline, lightgray);
                    border-radius: var(--a-border-radius-medium, 8px);
                    padding: var(--a-space-l, 16px);
                    box-shadow: var(--a-shadow-medium, 0 2px 4px rgba(0,0,0,0.1));
                    background-color: var(--a-color-surface, white);
                    color: var(--a-color-on-surface, black);
                }
                h3 {
                    color: var(--a-color-primary, ${primaryColor}); /* Use variable or fallback */
                    margin-top: 0;
                    margin-bottom: var(--a-space-m, 8px);
                }
                p {
                    font-size: var(--a-font-size-base, 1rem);
                }
                .actions {
                    margin-top: var(--a-space-l, 16px);
                    display: flex;
                    gap: var(--a-space-s, 8px);
                }
            </style>
            <article>
                <h3><slot name="title">Default Title</slot></h3>
                <p><slot name="content">Default content goes here.</slot></p>
                <div class="actions">
                    <slot name="actions"></slot>
                </div>
            </article>
        `;
    }

    connectedCallback() {
        // Any logic when component is added to DOM
    }

    disconnectedCallback() {
        // Clean up event listeners if any
    }
}

customElements.define('my-card', MyCard);

// Usage in HTML:
// <my-card>
//   <span slot="title">My Custom Card</span>
//   <p slot="content">This card uses Web Components and Axiom01 styling.</p>
//   <button slot="actions" class="button primary">Learn More</button>
// </my-card>
```

### 3. Simple State Management

For managing application state, a lightweight, event-driven approach works well:

*   **Global State Object:** A simple JavaScript object to hold the application's state.
*   **Pub/Sub Pattern:** Implement a basic Publish/Subscribe mechanism. Components can "subscribe" to specific state changes and "publish" updates. This decouples components and prevents prop-drilling.
*   **Proxies:** For more advanced state management, a `Proxy` object can be used to automatically detect state changes and trigger updates, similar to how some reactive frameworks work, but with minimal overhead.

**Example `js/state.js` (Conceptual Pub/Sub):**

```javascript
const state = {
    currentRoute: '/',
    user: null,
    // ... other global state
};

const subscribers = {};

function subscribe(event, callback) {
    if (!subscribers[event]) {
        subscribers[event] = [];
    }
    subscribers[event].push(callback);
    return () => { // Unsubscribe function
        subscribers[event] = subscribers[event].filter(cb => cb !== callback);
    };
}

function publish(event, data) {
    if (subscribers[event]) {
        subscribers[event].forEach(callback => callback(data));
    }
}

function setState(newState) {
    Object.assign(state, newState);
    // Notify relevant subscribers
    for (const key in newState) {
        if (Object.prototype.hasOwnProperty.call(newState, key)) {
            publish(`state:${key}Changed`, newState[key]);
        }
    }

    publish('stateChanged', state); // Notify all state changes
}

export { state, subscribe, publish, setState };
```

## Application Organization

A typical SPA structure using these native approaches might look like this:

```
/
├── index.html                  (Main entry point, loads app.js)
├── css/
│   ├── axiom.css               (Axiom01 core styles)
│   ├── theme.css               (Custom theme overrides)
│   └── site.css                (Global site-specific styles)
├── js/
│   ├── app.js                  (Main application logic, router setup, global state init)
│   ├── router.js               (History API wrapper, route definitions)
│   ├── state.js                (Pub/Sub or Proxy-based state management)
│   ├── components/             (Web Components definitions, or Axiom01 component wrappers)
│   │   ├── my-card.js
│   │   └── axiom-dropdown.js
│   ├── views/                  (Logic for rendering specific routes/pages)
│   │   ├── home-view.js
│   │   └── about-view.js
│   └── utils/                  (Helper functions)
├── public/
│   ├── views/                  (HTML partials for dynamic content loading)
│   │   ├── home.html
│   │   └── about.html
│   └── assets/
```

## How this Pairs with Axiom01

Axiom01's strengths are amplified by this native SPA approach:

*   **Semantic-First:** The focus remains on writing clean, semantic HTML. Web Components enhance this by allowing you to define truly semantic custom tags.
*   **Minimal Classes:** Web Components with Shadow DOM reduce the need for extensive class hierarchies, as styles are scoped. For elements in the Light DOM, Axiom01's single-class-per-component approach keeps markup clean.
*   **Accessibility:** Native HTML elements and Web Components (when built correctly) offer strong accessibility foundations. The History API is inherently accessible.
*   **Performance:** By avoiding large framework runtimes and build steps, your SPA can be extremely lightweight and fast.
*   **Maintainability:** A well-organized native codebase with clear component boundaries and explicit state management can be easier to understand and maintain than complex framework setups.

## Does this Require Additions to Axiom01?

The core Axiom01 CSS framework does not require any changes to support this SPA approach. Its CSS variables and semantic styling are perfectly compatible.

For the JavaScript side:

*   **Current `js/axiom.js`:** This script already handles dynamically initializing `data-component` elements. In a native SPA, after new content is loaded into the DOM (e.g., via `fetch` and `innerHTML`), you would simply call `window.axiom.init()` again on the new content's parent element to ensure any Axiom01 components within it are correctly initialized.
*   **New Release/Additions:** A new *release* of Axiom01 isn't strictly necessary to *enable* this. However, providing official **guidelines and best practices** (like this document), along with **example implementations** (e.g., a simple SPA demo within the Axiom01 project), would be a valuable addition. This would demonstrate how to effectively combine Axiom01 with native SPA techniques, potentially including:
    *   A small, optional `axiom-router.js` utility.
    *   Examples of wrapping existing Axiom01 components as Web Components.
    *   A recommended lightweight state management pattern.

This approach allows Axiom01 to remain true to its minimal philosophy while empowering developers to build modern, dynamic web applications with confidence and control.