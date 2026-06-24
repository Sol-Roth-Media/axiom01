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
