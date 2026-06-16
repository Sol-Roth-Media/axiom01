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
   * This method would typically be called when a component is removed from the DOM
   * or when its functionality is no longer needed.
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
   * This could be useful for full page reloads or SPA navigation where
   * old components need to be cleaned up.
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

/* ==========================================
   ENHANCED COMPONENTS: Queue, Segmented Control, Chip Input, List Animated, Backlit
   ========================================== */

/**
 * Queue Component - Drag & Drop Reorderable Lists
 * Handles dragging, dropping, reordering, and form field sync
 */
class QueueComponent {
  constructor(element) {
    this.element = element;
    this.items = Array.from(element.querySelectorAll('li'));
    this.formField = element.getAttribute('data-form-field');
    this.init();
  }

  init() {
    this.items.forEach((item, index) => {
      item.setAttribute('draggable', 'true');
      item.dataset.index = index;
      
      // Drag events
      item.addEventListener('dragstart', (e) => this.onDragStart(e));
      item.addEventListener('dragover', (e) => this.onDragOver(e));
      item.addEventListener('drop', (e) => this.onDrop(e));
      item.addEventListener('dragend', (e) => this.onDragEnd(e));
      item.addEventListener('dragenter', (e) => this.onDragEnter(e));
      item.addEventListener('dragleave', (e) => this.onDragLeave(e));
    });
  }

  onDragStart(e) {
    this.draggedItem = e.target.closest('li');
    this.draggedItem.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  }

  onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  onDragEnter(e) {
    const item = e.target.closest('li');
    if (item && item !== this.draggedItem) {
      item.classList.add('drag-over');
    }
  }

  onDragLeave(e) {
    const item = e.target.closest('li');
    if (item) {
      item.classList.remove('drag-over');
    }
  }

  onDrop(e) {
    e.preventDefault();
    const dropTarget = e.target.closest('li');
    
    if (dropTarget && dropTarget !== this.draggedItem) {
      const allItems = Array.from(this.element.querySelectorAll('li'));
      const draggedIndex = allItems.indexOf(this.draggedItem);
      const targetIndex = allItems.indexOf(dropTarget);
      
      if (draggedIndex < targetIndex) {
        dropTarget.parentNode.insertBefore(this.draggedItem, dropTarget.nextSibling);
      } else {
        dropTarget.parentNode.insertBefore(this.draggedItem, dropTarget);
      }
      
      this.updateFormField();
    }
  }

  onDragEnd(e) {
    this.draggedItem.classList.remove('dragging');
    this.element.querySelectorAll('li').forEach(item => {
      item.classList.remove('drag-over');
    });
  }

  updateFormField() {
    if (this.formField) {
      const values = Array.from(this.element.querySelectorAll('li'))
        .map(li => li.getAttribute('data-value') || li.textContent.trim())
        .join(',');
      
      const hiddenField = document.querySelector(`input[name="${this.formField}"]`);
      if (hiddenField) {
        hiddenField.value = values;
        hiddenField.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  }

  destroy() {
    this.items.forEach(item => {
      item.removeAttribute('draggable');
      item.classList.remove('dragging', 'drag-over');
    });
  }
}

/**
 * Segmented Control - Exclusive Selection Button Group
 */
class SegmentedControlComponent {
  constructor(element) {
    this.element = element;
    this.buttons = Array.from(element.querySelectorAll('button'));
    this.init();
  }

  init() {
    this.buttons.forEach(btn => {
      btn.addEventListener('click', (e) => this.onClick(e));
      btn.addEventListener('keydown', (e) => this.onKeyDown(e));
    });
  }

  onClick(e) {
    const clicked = e.target.closest('button');
    this.setActive(clicked);
    this.element.dispatchEvent(new CustomEvent('segmented-change', {
      detail: { value: clicked.textContent.trim(), button: clicked }
    }));
  }

  onKeyDown(e) {
    const index = this.buttons.indexOf(e.target);
    let nextIndex = index;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextIndex = (index + 1) % this.buttons.length;
      e.preventDefault();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      nextIndex = (index - 1 + this.buttons.length) % this.buttons.length;
      e.preventDefault();
    }

    if (nextIndex !== index) {
      this.buttons[nextIndex].focus();
      this.setActive(this.buttons[nextIndex]);
    }
  }

  setActive(button) {
    this.buttons.forEach(btn => btn.setAttribute('aria-pressed', 'false'));
    button.setAttribute('aria-pressed', 'true');
  }

  destroy() {
    this.buttons.forEach(btn => {
      btn.removeAttribute('aria-pressed');
    });
  }
}

/**
 * Chip Input - Multi-value Tag Input
 */
class ChipInputComponent {
  constructor(element) {
    this.element = element;
    this.field = element.querySelector('.chip-input-field');
    this.formFieldName = element.getAttribute('data-chip-input');
    this.separator = element.getAttribute('data-separator') || ',';
    this.init();
  }

  init() {
    if (this.field) {
      this.field.addEventListener('keydown', (e) => this.onKeyDown(e));
      this.field.addEventListener('blur', () => this.maybeAddChip());
    }

    this.element.querySelectorAll('.chip button').forEach(btn => {
      btn.addEventListener('click', (e) => this.removeChip(e));
    });
  }

  onKeyDown(e) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      this.maybeAddChip();
    }
  }

  maybeAddChip() {
    const value = this.field.value.trim();
    if (value) {
      this.addChip(value);
      this.field.value = '';
    }
  }

  addChip(value) {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.innerHTML = `${value} <button aria-label="Remove ${value}">×</button>`;
    
    chip.querySelector('button').addEventListener('click', (e) => this.removeChip(e));
    this.element.insertBefore(chip, this.field);
    
    this.updateFormField();
  }

  removeChip(e) {
    e.target.closest('.chip').remove();
    this.updateFormField();
    this.field.focus();
  }

  updateFormField() {
    if (this.formFieldName) {
      const values = Array.from(this.element.querySelectorAll('.chip'))
        .map(chip => chip.textContent.replace('×', '').trim())
        .join(this.separator);
      
      const hiddenField = document.querySelector(`input[name="${this.formFieldName}"]`);
      if (hiddenField) {
        hiddenField.value = values;
        hiddenField.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  }

  destroy() {
    if (this.field) {
      this.field.removeEventListener('keydown', this.onKeyDown);
      this.field.removeEventListener('blur', this.maybeAddChip);
    }
  }
}

/**
 * Backlit Component - Radial Glow Effect with Mouse Following
 */
class BacklitComponent {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    // Enable mouse-following glow on hover (optional enhancement)
    this.element.addEventListener('mousemove', (e) => this.onMouseMove(e));
    this.element.addEventListener('mouseenter', () => this.element.classList.add('backlit-active'));
    this.element.addEventListener('mouseleave', () => this.element.classList.remove('backlit-active'));
  }

  onMouseMove(e) {
    if (!this.element.classList.contains('backlit-active')) return;

    const rect = this.element.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    this.element.style.setProperty('--light-x', Math.min(100, Math.max(0, x)) + '%');
    this.element.style.setProperty('--light-y', Math.min(100, Math.max(0, y)) + '%');
  }

  destroy() {
    this.element.classList.remove('backlit-active');
  }
}

/**
 * Auto-initialize all enhanced components
 */
document.addEventListener('DOMContentLoaded', () => {
  // Queue components
  document.querySelectorAll('.queue').forEach(el => {
    if (!window.Axiom.initializedComponents.has(el)) {
      const instance = new QueueComponent(el);
      window.Axiom.initializedComponents.set(el, { name: 'Queue', instance });
    }
  });

  // Segmented Control components
  document.querySelectorAll('.segmented-control').forEach(el => {
    if (!window.Axiom.initializedComponents.has(el)) {
      const instance = new SegmentedControlComponent(el);
      window.Axiom.initializedComponents.set(el, { name: 'SegmentedControl', instance });
    }
  });

  // Chip Input components
  document.querySelectorAll('.chip-input').forEach(el => {
    if (!window.Axiom.initializedComponents.has(el)) {
      const instance = new ChipInputComponent(el);
      window.Axiom.initializedComponents.set(el, { name: 'ChipInput', instance });
    }
  });

  // Backlit components with mouse following
  document.querySelectorAll('.backlit').forEach(el => {
    if (!window.Axiom.initializedComponents.has(el)) {
      const instance = new BacklitComponent(el);
      window.Axiom.initializedComponents.set(el, { name: 'Backlit', instance });
    }
  });
});

// Support dynamic initialization
window.Axiom.initQueue = (element) => {
  const instance = new QueueComponent(element);
  window.Axiom.initializedComponents.set(element, { name: 'Queue', instance });
  return instance;
};

window.Axiom.initSegmentedControl = (element) => {
  const instance = new SegmentedControlComponent(element);
  window.Axiom.initializedComponents.set(element, { name: 'SegmentedControl', instance });
  return instance;
};

window.Axiom.initChipInput = (element) => {
  const instance = new ChipInputComponent(element);
  window.Axiom.initializedComponents.set(element, { name: 'ChipInput', instance });
  return instance;
};

window.Axiom.initBacklit = (element) => {
  const instance = new BacklitComponent(element);
  window.Axiom.initializedComponents.set(element, { name: 'Backlit', instance });
  return instance;
};

/**
 * HERO COMPONENT ENHANCEMENTS
 * Mobile-optimized hero with optional swipe support
 */

class HeroSwipeComponent {
  constructor(element) {
    this.element = element;
    this.startX = 0;
    this.currentX = 0;
    this.isDragging = false;
    this.swipeThreshold = 50;
    this.init();
  }

  init() {
    // Add touch event listeners
    this.element.addEventListener('touchstart', (e) => this.onTouchStart(e), false);
    this.element.addEventListener('touchmove', (e) => this.onTouchMove(e), false);
    this.element.addEventListener('touchend', (e) => this.onTouchEnd(e), false);

    // Add mouse event listeners for desktop testing
    this.element.addEventListener('mousedown', (e) => this.onMouseDown(e), false);
    this.element.addEventListener('mousemove', (e) => this.onMouseMove(e), false);
    this.element.addEventListener('mouseup', (e) => this.onMouseUp(e), false);
    this.element.addEventListener('mouseleave', (e) => this.onMouseLeave(e), false);
  }

  onTouchStart(e) {
    this.startX = e.touches[0].clientX;
    this.isDragging = true;
  }

  onTouchMove(e) {
    if (!this.isDragging) return;
    this.currentX = e.touches[0].clientX;
  }

  onTouchEnd(e) {
    if (!this.isDragging) return;
    this.isDragging = false;

    const diff = this.startX - this.currentX;

    if (Math.abs(diff) > this.swipeThreshold) {
      this.handleSwipe(diff > 0 ? 'right' : 'left');
    }
  }

  onMouseDown(e) {
    if (e.button !== 0) return; // Only left click
    this.startX = e.clientX;
    this.isDragging = true;
  }

  onMouseMove(e) {
    if (!this.isDragging) return;
    this.currentX = e.clientX;
  }

  onMouseUp(e) {
    if (!this.isDragging) return;
    this.isDragging = false;

    const diff = this.startX - this.currentX;

    if (Math.abs(diff) > this.swipeThreshold) {
      this.handleSwipe(diff > 0 ? 'right' : 'left');
    }
  }

  onMouseLeave(e) {
    this.isDragging = false;
  }

  handleSwipe(direction) {
    // Fire custom event
    this.element.dispatchEvent(new CustomEvent('hero-swipe', {
      detail: { direction },
      bubbles: true,
      cancelable: true
    }));

    console.log(`Hero swiped: ${direction}`);
  }

  destroy() {
    this.element.removeEventListener('touchstart', this.onTouchStart);
    this.element.removeEventListener('touchmove', this.onTouchMove);
    this.element.removeEventListener('touchend', this.onTouchEnd);
  }
}

// Auto-init swipeable hero sections on mobile
document.addEventListener('DOMContentLoaded', () => {
  const heroElements = document.querySelectorAll('section.hero[data-swipeable]');
  heroElements.forEach(el => {
    if (!window.Axiom.initializedComponents.has(el)) {
      const instance = new HeroSwipeComponent(el);
      window.Axiom.initializedComponents.set(el, { name: 'HeroSwipe', instance });
    }
  });
});

// Manual init function
window.Axiom.initHeroSwipe = (element) => {
  const instance = new HeroSwipeComponent(element);
  window.Axiom.initializedComponents.set(element, { name: 'HeroSwipe', instance });
  return instance;
};

