// js/axiom.js
var Axiom = class {
  constructor() {
    this.components = {};
    document.addEventListener("DOMContentLoaded", () => this.init());
  }

  async loadComponent(componentName) {
    if (this.components[componentName]) {
      return this.components[componentName];
    }
    // Assuming components are in a 'components' subfolder or similar,
    // and their filenames match the componentName.
    // This path might need adjustment based on actual component file structure.
    const componentPath = `./components/${componentName}.js`; 
    try {
      const module = await import(componentPath);
      if (module.default && typeof module.default.init === "function") {
        this.components[componentName] = module.default;
        return module.default;
      } else {
        console.error(`Axiom: Component ${componentName} does not have a default export with an init method.`);
        return null;
      }
    } catch (error) {
      console.error(`Axiom: Failed to load component ${componentName}.`, error);
      return null;
    }
  }

  async init() {
    console.log("Axiom: Initializing...");
    
    const componentElements = document.querySelectorAll("[data-component]");
    const loadPromises = [];
    
    // First, load all unique components
    const uniqueComponents = new Set();
    componentElements.forEach(element => {
        const componentName = element.dataset.component;
        if (componentName && !uniqueComponents.has(componentName)) {
            uniqueComponents.add(componentName);
            loadPromises.push(this.loadComponent(componentName));
        }
    });

    await Promise.all(loadPromises);

    // Then, initialize each component instance
    componentElements.forEach((element) => {
        const componentName = element.dataset.component;
        if (componentName && this.components[componentName]) {
            try {
                this.components[componentName].init(element);
                console.log(`Axiom: Initialized component: ${componentName} on`, element);
            } catch (error) {
                console.error(`Axiom: Error initializing component ${componentName} on element:`, element, error);
            }
        }
    });
    
    console.log("Axiom: Initialization complete.");
  }
};

window.Axiom = new Axiom();
