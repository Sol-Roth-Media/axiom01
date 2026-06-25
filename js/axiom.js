// js/axiom.js
var Axiom = class {
  constructor() {
    this.components = {};
    // Store references to initialized component instances for potential destruction
    this.initializedComponents = new Map();
    document.addEventListener("DOMContentLoaded", () => this.init());
  }

  /**
   * Register a component definition manually.
   * Supports either:
   * - class constructor
   * - object with init(element)
   * @param {string} componentName
   * @param {Function|Object} componentDefinition
   * @returns {boolean}
   */
  registerComponent(componentName, componentDefinition) {
    if (!componentName || typeof componentName !== "string") {
      console.error("Axiom: registerComponent requires a valid component name.");
      return false;
    }

    const isClass =
      typeof componentDefinition === "function" &&
      /^\s*class\s/.test(componentDefinition.toString());
    const isInitObject =
      typeof componentDefinition === "object" &&
      componentDefinition !== null &&
      typeof componentDefinition.init === "function";

    if (!isClass && !isInitObject) {
      console.error(
        `Axiom: Invalid component definition for ${componentName}. Expected class or object with init(element).`
      );
      return false;
    }

    this.components[componentName] = componentDefinition;
    return true;
  }

  /**
   * Get a registered component definition by name.
   * @param {string} componentName
   * @returns {Function|Object|null}
   */
  getComponent(componentName) {
    return this.components[componentName] || null;
  }

  /**
   * List all currently loaded/registered component names.
   * @returns {string[]}
   */
  listComponents() {
    return Object.keys(this.components);
  }

  async loadComponent(componentName) {
    if (this.components[componentName]) {
      return this.components[componentName];
    }

    const componentPath = `./components/${componentName}.js`;
    try {
      const module = await import(componentPath);
      if (module.default) {
        // Check if it's a class constructor.
        if (
          typeof module.default === "function" &&
          /^\s*class\s/.test(module.default.toString())
        ) {
          this.components[componentName] = module.default;
          return module.default;
        }
        // Check if it's an object with an init method (old style).
        if (
          typeof module.default === "object" &&
          typeof module.default.init === "function"
        ) {
          this.components[componentName] = module.default;
          return module.default;
        }
      }
      console.error(
        `Axiom: Component ${componentName} does not have a valid default export (class or object with init method).`
      );
      return null;
    } catch (error) {
      console.error(`Axiom: Failed to load component ${componentName}.`, error);
      return null;
    }
  }

  async init() {
    console.log("Axiom: Initializing...");

    const componentElements = document.querySelectorAll("[data-component]");
    const loadPromises = [];

    // First, load all unique components.
    const uniqueComponents = new Set();
    componentElements.forEach((element) => {
      const componentName = element.dataset.component;
      if (componentName && !uniqueComponents.has(componentName)) {
        uniqueComponents.add(componentName);
        loadPromises.push(this.loadComponent(componentName));
      }
    });

    await Promise.all(loadPromises);

    // Then, initialize each component instance.
    componentElements.forEach((element) => {
      const componentName = element.dataset.component;
      const ComponentDefinition = this.components[componentName];

      if (componentName && ComponentDefinition) {
        try {
          let componentInstance = null;
          // If it's a class constructor, instantiate it.
          if (
            typeof ComponentDefinition === "function" &&
            /^\s*class\s/.test(ComponentDefinition.toString())
          ) {
            componentInstance = new ComponentDefinition(element);
          }
          // If it's an object with an init method, call init.
          else if (
            typeof ComponentDefinition === "object" &&
            typeof ComponentDefinition.init === "function"
          ) {
            componentInstance = ComponentDefinition.init(element);
          }

          if (componentInstance && typeof componentInstance.destroy === "function") {
            this.initializedComponents.set(element, {
              name: componentName,
              instance: componentInstance,
            });
          }
          console.log(`Axiom: Initialized component: ${componentName} on`, element);
        } catch (error) {
          console.error(
            `Axiom: Error initializing component ${componentName} on element:`,
            element,
            error
          );
        }
      }
    });

    console.log("Axiom: Initialization complete.");
  }

  /**
   * Destroys a single component instance associated with a given DOM element.
   * Components are expected to implement a `destroy()` method for cleanup.
   * @param {HTMLElement} element The DOM element the component was initialized on.
   */
  destroyComponent(element) {
    if (this.initializedComponents.has(element)) {
      const { name, instance } = this.initializedComponents.get(element);
      if (instance && typeof instance.destroy === "function") {
        try {
          instance.destroy();
          console.log(`Axiom: Destroyed component: ${name} on`, element);
        } catch (error) {
          console.error(
            `Axiom: Error destroying component ${name} on element:`,
            element,
            error
          );
        }
      }
      this.initializedComponents.delete(element);
    }
  }

  /**
   * Destroys all currently initialized component instances.
   */
  destroyAllComponents() {
    this.initializedComponents.forEach((_value, element) => {
      this.destroyComponent(element);
    });
    this.initializedComponents.clear();
    console.log("Axiom: All components destroyed.");
  }
};

window.Axiom = new Axiom();

/**
 * AXIOM CORE UTILITIES - Backported from production builds
 * Provides global helper methods for components and DOM manipulation
 */

/**
 * Smoothly dismisses an element with fade and scale transition
 * @param {HTMLElement} element - The element to dismiss
 */
window.Axiom.dismiss = function (element) {
  if (!element) return;
  element.style.transition = 'opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)';
  element.style.opacity = '0';
  element.style.transform = 'scale(0.95)';
  element.addEventListener('transitionend', function () {
    element.remove();
  }, { once: true });
};

/**
 * Sets the active step in a .steps component
 * @param {HTMLElement} stepsContainer - The .steps element
 * @param {number} targetIndex - Target step index (0-based)
 */
window.Axiom.setActiveStep = function (stepsContainer, targetIndex) {
  const steps = stepsContainer.querySelectorAll('span');
  if (targetIndex < 0 || targetIndex >= steps.length) return;

  steps.forEach((step, idx) => {
    if (idx === targetIndex) {
      step.setAttribute('data-active', 'true');
      step.removeAttribute('data-completed');
    } else if (idx < targetIndex) {
      step.removeAttribute('data-active');
      step.setAttribute('data-completed', 'true');
    } else {
      step.removeAttribute('data-active');
      step.removeAttribute('data-completed');
    }
  });

  const event = new CustomEvent('axiomStepChange', {
    detail: { activeIndex: targetIndex, activeStep: steps[targetIndex] },
    bubbles: true
  });
  stepsContainer.dispatchEvent(event);
};

/**
 * Initializes keyboard navigation for hierarchy components
 * @param {HTMLElement} hierarchyContainer - The .hierarchy element
 */
window.Axiom.initHierarchyAccessibility = function (hierarchyContainer) {
  const items = hierarchyContainer.querySelectorAll('a, summary, .hierarchy-item');
  
  items.forEach((item, index) => {
    item.setAttribute('tabindex', '0');
    
    item.addEventListener('keydown', function (e) {
      let target = null;
      
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          target = items[index + 1] || items[0];
          break;
        case 'ArrowUp':
          e.preventDefault();
          target = items[index - 1] || items[items.length - 1];
          break;
        case 'ArrowRight':
          if (item.tagName === 'SUMMARY') {
            const details = item.parentNode;
            if (details && !details.open) {
              e.preventDefault();
              details.open = true;
            }
          }
          break;
        case 'ArrowLeft':
          if (item.tagName === 'SUMMARY') {
            const details = item.parentNode;
            if (details && details.open) {
              e.preventDefault();
              details.open = false;
            }
          }
          break;
      }
      
      if (target) {
        target.focus();
      }
    });
  });
};

/**
 * Global Event Delegation - Bind once on DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', function () {

  // Alert dismissals
  document.addEventListener('click', function (e) {
    const closeBtn = e.target.closest('.alert [data-dismiss="alert"], .alert .close');
    if (closeBtn) {
      e.preventDefault();
      const alert = closeBtn.closest('.alert');
      window.Axiom.dismiss(alert);
    }
  });

  // Step tracker interactions
  document.addEventListener('click', function (e) {
    const stepNode = e.target.closest('.steps span');
    if (stepNode) {
      const parent = stepNode.closest('.steps');
      if (parent) {
        const steps = Array.from(parent.querySelectorAll('span'));
        const index = steps.indexOf(stepNode);
        window.Axiom.setActiveStep(parent, index);
      }
    }
  });

  // Tab switches
  document.addEventListener('click', function (e) {
    const tabLink = e.target.closest('.tabs nav a');
    if (tabLink) {
      e.preventDefault();
      const parent = tabLink.closest('.tabs');
      if (!parent) return;

      parent.querySelectorAll('nav a').forEach(a => a.removeAttribute('data-active'));
      parent.querySelectorAll('section').forEach(s => s.style.display = 'none');

      tabLink.setAttribute('data-active', 'true');
      const targetId = tabLink.getAttribute('href').replace('#', '');
      const targetSection = parent.querySelector('#' + targetId);
      if (targetSection) {
        targetSection.style.display = 'block';
      }
    }
  });

  // Input focus management
  document.addEventListener('focusin', function (e) {
    const fieldWrapper = e.target.closest('.field, .pager li');
    if (fieldWrapper) {
      fieldWrapper.setAttribute('data-focused', 'true');
    }
  });

  document.addEventListener('focusout', function (e) {
    const fieldWrapper = e.target.closest('.field, .pager li');
    if (fieldWrapper) {
      fieldWrapper.removeAttribute('data-focused');
    }
  });

  // Defocus popovers
  window.addEventListener('click', function () {
    document.querySelectorAll('.popover[aria-expanded="true"]').forEach(function (popover) {
      popover.setAttribute('aria-expanded', 'false');
    });
    document.querySelectorAll('details.dropbutton-details[open]').forEach(function (dropbutton) {
      dropbutton.removeAttribute('open');
    });
  });

  // Escape key to close overlays
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('details[open]').forEach(function (details) {
        details.removeAttribute('open');
      });
      document.querySelectorAll('dialog[open]').forEach(function (dialog) {
        dialog.removeAttribute('open');
        if (typeof dialog.close === 'function') {
          dialog.close();
        }
      });
    }
  });

});

/**
 * THEME TOGGLE IMPLEMENTATION
 * Handles light/dark mode switching and persistence
 * Note: On index.html, index-page-manager.js handles theme initialization
 */
(function() {
  'use strict';

  const THEME_KEY = 'theme'; // Changed to match index-page-manager
  const DARK_THEME = 'dark';
  const LIGHT_THEME = 'light';

  // Initialize theme on page load (skip if already initialized)
  function initTheme() {
    // Check if theme is already initialized (check data-theme attribute)
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme) {
      // Already initialized, don't override
      return;
    }

    // Check localStorage
    let savedTheme = localStorage.getItem(THEME_KEY);
    
    // Check system preference
    if (!savedTheme) {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      savedTheme = prefersDark ? DARK_THEME : LIGHT_THEME;
    }
    
    setTheme(savedTheme);
  }

  // Set theme
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    
    // Update theme toggle button icon
    updateThemeIcon(theme);
  }

  // Get current theme
  function getTheme() {
    return document.documentElement.getAttribute('data-theme') || LIGHT_THEME;
  }

  // Toggle theme
  function toggleTheme() {
    const current = getTheme();
    const next = current === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    setTheme(next);
  }

  // Update theme toggle button icon
  function updateThemeIcon(theme) {
    const themeButtons = document.querySelectorAll('button.theme');
    themeButtons.forEach(btn => {
      const icon = btn.querySelector('.axicon');
      if (icon) {
        const iconName = theme === DARK_THEME ? 'Sun' : 'Moon';
        icon.setAttribute('data-name', iconName);
        if (typeof renderAxicons !== 'undefined') {
          setTimeout(renderAxicons, 0);
        }
      }
    });
  }

  // Add event listeners
  document.addEventListener('DOMContentLoaded', function() {
    initTheme();

    // Theme toggle button listeners are handled by index-page-manager.js on all pages
  });

  // Expose to global for testing
  window.AXIOM_THEME = {
    setTheme,
    getTheme,
    toggleTheme,
    init: initTheme
  };

})();
