/**
 * @file axiom.js
 * Audited Axiom01 Core JavaScript Component API.
 * Provides high-performance Vanilla JS enhancements with zero dependencies.
 * Uses event delegation for resilience with dynamic content injection.
 */

(function () {
  'use strict';

  // ==========================================
  // GLOBAL AXIOM API NAMESPACE
  // ==========================================
  window.Axiom = {
  components: {},
  componentRegistry: {},
  componentInstances: new WeakMap(),
  componentPathOverrides: {
    'account-menu': 'account-menu',
    'advanced-table': 'advanced-table',
    accordion: 'accordion',
    'audio-player': 'audio-player',
    autocomplete: 'autocomplete',
    'component-browser': 'component-browser',
    'data-list': 'data-list',
    dropdown: 'dropdown',
    editor: 'editor',
    'file-display-download': 'filedisplay',
    masonry: 'masonry',
    'mobile-navbar': 'mobile-navbar',
    'multimedia-picker': 'multimediapicker',
    playlist: 'playlist',
    'pull-to-refresh': 'pullrefresh',
    rating: 'rating',
    search: 'search',
    'spacing-demo': 'spacing-demo',
    'stopwatch-countdown': 'timer',
    'story-view': 'storyview',
    'swiping-card-interface': 'swipecards',
    tooltip: 'tooltip',
    'touch-components': 'touch',
    'video-player': 'video-player'
  },
    /**
     * Dismisses an alert callout node with a scale and fade-out animation.
     * @param {HTMLElement} element - The alert container to dismiss.
     */
    dismiss: function (element) {
      if (!element) return;
      
      // Emit dismiss event before removal
      const dismissEvent = new CustomEvent('axiom:alert:dismiss', {
        detail: { element },
        bubbles: true,
        cancelable: true
      });
      element.dispatchEvent(dismissEvent);
      
      element.style.transition = 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
      element.style.opacity = '0';
      element.style.transform = 'scale(0.95)';
      element.addEventListener('transitionend', function handler() {
        element.remove();
        element.removeEventListener('transitionend', handler);
      }, { once: true });
    },

    /**
     * Programmatically updates progress indicators across a sibling .steps track.
     * @param {HTMLElement} stepsContainer - The parent .steps wrapper.
     * @param {number} targetIndex - The index (0-based) of the step to set active.
     */
    setActiveStep: function (stepsContainer, targetIndex) {
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

      // Dispatch custom event for form validation or wizard logic
      const event = new CustomEvent('axiom:step:change', {
        detail: { activeIndex: targetIndex, activeStep: steps[targetIndex] },
        bubbles: true
      });
      stepsContainer.dispatchEvent(event);
    },

    /**
     * Binds keyboard arrow controls and focus routing inside hierarchical trees.
     * @param {HTMLElement} hierarchyContainer - The root .hierarchy element.
     */
    initHierarchyAccessibility: function (hierarchyContainer) {
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
                const details = item.closest('details');
                if (details && !details.open) {
                  e.preventDefault();
                  details.open = true;
                }
              }
              break;
            case 'ArrowLeft':
              if (item.tagName === 'SUMMARY') {
                const details = item.closest('details');
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
    },

  /**
   * Registers a component definition or path override for the runtime loader.
   * @param {string} componentName
   * @param {object|string} definitionOrPath
   * @returns {object|string|null}
   */
  registerComponent: function (componentName, definitionOrPath) {
    if (!componentName || !definitionOrPath) return null;

    if (typeof definitionOrPath === 'string') {
    this.componentRegistry[componentName] = definitionOrPath;
    return definitionOrPath;
    }

    this.components[componentName] = definitionOrPath;
    return definitionOrPath;
  },

  /**
   * Loads a component module definition and caches it.
   * @param {string} componentName
   * @param {string} componentPath
   * @returns {Promise<object|null>}
   */
  loadComponent: async function (componentName, componentPath) {
    if (this.components[componentName]) {
    return this.components[componentName];
    }

    try {
    const module = await import(componentPath);
    const definition = module && module.default;

    if (!definition || typeof definition.init !== 'function') {
      console.error(`Axiom: Component ${componentName} does not have a valid default export.`);
      return null;
    }

    this.components[componentName] = definition;
    return definition;
    } catch (error) {
    console.error(`Axiom: Failed to load component ${componentName}.`, error);
    return null;
    }
  },

  resolveComponentPath: function (componentName) {
    const moduleName = this.componentPathOverrides[componentName] || componentName;
    const scriptUrl = document.currentScript && document.currentScript.src
    ? new URL(document.currentScript.src, window.location.href)
    : new URL('js/axiom.js', window.location.href);
    return new URL(`./components/${moduleName}.js`, scriptUrl).href;
  },

  initializeComponent: function (element, componentName, definition) {
    if (!element || !componentName || !definition || typeof definition.init !== 'function') {
    return null;
    }

    if (this.componentInstances.has(element)) {
    return this.componentInstances.get(element);
    }

    const instance = definition.init(element) || null;
    this.componentInstances.set(element, instance);
    return instance;
  },

  /**
   * Destroys a single initialized component instance.
   * @param {HTMLElement} element
   */
  destroyComponent: function (element) {
    if (!element || !this.componentInstances.has(element)) return;
    const instance = this.componentInstances.get(element);
    if (instance && typeof instance.destroy === 'function') {
    instance.destroy();
    }
    this.componentInstances.delete(element);
  },

  /**
   * Destroys all initialized runtime-loader component instances.
   */
  destroyAllComponents: function () {
    document.querySelectorAll('[data-component]').forEach((element) => {
    this.destroyComponent(element);
    });
  },

  /**
   * Loads and initializes runtime-loader components under a root node.
   * Opt-in: call manually if component modules should be activated.
   * @param {ParentNode} root
   * @returns {Promise<void>}
   */
  init: async function (root) {
    const scope = root || document;
    const components = Array.from(scope.querySelectorAll('[data-component]')).filter((element) => {
    const componentName = element.getAttribute('data-component');
    return Boolean(componentName && this.componentPathOverrides[componentName]);
    });

    const loadPromises = [];
    components.forEach((element) => {
    const componentName = element.getAttribute('data-component');
    const componentPath = this.componentRegistry[componentName] || this.resolveComponentPath(componentName);
    loadPromises.push(this.loadComponent(componentName, componentPath));
    });

    await Promise.all(loadPromises);

    components.forEach((element) => {
    const componentName = element.getAttribute('data-component');
    const definition = this.components[componentName];
    if (definition) {
      this.initializeComponent(element, componentName, definition);
    }
    });
  },

    /**
     * Simple state management for component state.
     */
    state: {
      get: function(key) {
        try {
          const value = sessionStorage.getItem(`axiom:${key}`);
          return value ? JSON.parse(value) : null;
        } catch (e) {
          return null;
        }
      },
      set: function(key, value) {
        try {
          sessionStorage.setItem(`axiom:${key}`, JSON.stringify(value));
        } catch (e) {
          console.warn('Axiom state storage failed:', e);
        }
      },
      clear: function(key) {
        try {
          sessionStorage.removeItem(`axiom:${key}`);
        } catch (e) {
          console.warn('Axiom state clear failed:', e);
        }
      }
    },

    /**
     * Debounce utility for performance-sensitive handlers.
     */
    debounce: function(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
  };

  window.Axiom.registerComponent = function registerComponent(componentName, definitionOrPath) {
    return window.Axiom.componentRegistry && window.Axiom.components
    ? (typeof definitionOrPath === 'string'
      ? (window.Axiom.componentRegistry[componentName] = definitionOrPath)
      : (window.Axiom.components[componentName] = definitionOrPath))
    : null;
  };

  window.Axiom.destroyAllComponents = function destroyAllComponents() {
    document.querySelectorAll('[data-component]').forEach((element) => {
    window.Axiom.destroyComponent(element);
    });
  };

  // ==========================================
  // THEME INITIALIZATION (Light/Dark Mode)
  // ==========================================
  function initTheme() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
  }

  // ==========================================
  // EVENT DELEGATION SETUP (DOMContentLoaded)
  // ==========================================
  document.addEventListener('DOMContentLoaded', function () {
    // Initialize theme on page load
    initTheme();

    // ==========================================
    // 1. ALERT DISMISSALS (.alert)
    // ==========================================
    document.addEventListener('click', function (e) {
      const closeBtn = e.target.closest('.alert .close, .alert [data-dismiss="alert"]');
      if (closeBtn) {
        e.preventDefault();
        const alert = closeBtn.closest('.alert');
        if (alert) window.Axiom.dismiss(alert);
      }
    });

    // ==========================================
    // 2. STEPS PROGRESS WIZARD (.steps)
    // ==========================================
    document.addEventListener('click', function (e) {
      const stepNode = e.target.closest('.steps span, .wizard nav span');
      if (stepNode) {
        const parent = stepNode.closest('.steps, .wizard nav');
        if (parent) {
          const steps = Array.from(parent.querySelectorAll('span'));
          const index = steps.indexOf(stepNode);
          const stepsContainer = parent.closest('.steps') || parent.closest('.wizard');
          if (stepsContainer) {
            window.Axiom.setActiveStep(stepsContainer, index);
          }
        }
      }
    });

    // ==========================================
    // 3. TAB SWITCHING (.tabs)
    // ==========================================
    document.addEventListener('click', function (e) {
      const tabLink = e.target.closest('.tabs nav a, .tabs nav button');
      if (tabLink) {
        e.preventDefault();
        const parent = tabLink.closest('.tabs');
        if (!parent) return;

        parent.querySelectorAll('nav a, nav button').forEach(a => a.removeAttribute('data-active'));
        parent.querySelectorAll('main > section').forEach(s => s.removeAttribute('data-active'));

        tabLink.setAttribute('data-active', 'true');
        const targetId = tabLink.getAttribute('href')?.replace('#', '') || tabLink.getAttribute('data-target');
        const targetSection = parent.querySelector(`#${targetId}`);
        if (targetSection) {
          targetSection.setAttribute('data-active', 'true');
        }
      }
    });

    // ==========================================
    // 4. INPUT FOCUS STATE (data-focused)
    // ==========================================
    document.addEventListener('focusin', function (e) {
      const fieldWrapper = e.target.closest('.field, .pager li, .tabs nav a, .tabs nav button');
      if (fieldWrapper) {
        fieldWrapper.setAttribute('data-focused', 'true');
      }
    });

    document.addEventListener('focusout', function (e) {
      const fieldWrapper = e.target.closest('.field, .pager li, .tabs nav a, .tabs nav button');
      if (fieldWrapper) {
        fieldWrapper.removeAttribute('data-focused');
      }
    });

    // ==========================================
    // 5. GLOBAL CLICK OUTSIDE (Popovers/Dropbuttons)
    // ==========================================
    window.addEventListener('click', function (e) {
      const isPopover = e.target.closest('.popover, .popover [aria-expanded]');
      const isDropbutton = e.target.closest('.dropbutton-details, details.dropbutton-details');

      if (!isPopover) {
        document.querySelectorAll('.popover[aria-expanded="true"]').forEach(function (popover) {
          popover.setAttribute('aria-expanded', 'false');
        });
      }

      if (!isDropbutton) {
        document.querySelectorAll('details.dropbutton-details[open]').forEach(function (dropbutton) {
          dropbutton.removeAttribute('open');
        });
      }
    });

    // ==========================================
    // 6. ESCAPE KEY TO DISMISS OVERLAYS
    // ==========================================
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

    // ==========================================
    // 7. DYNAMIC RANGE SLIDERS
    // ==========================================
    document.addEventListener('input', function (e) {
      const rangeInput = e.target.closest('.slider input[type="range"]');
      if (rangeInput) {
        const output = rangeInput.closest('.slider')?.querySelector('output');
        if (output) {
          output.textContent = rangeInput.value;
        }
      }
    });

    // ==========================================
    // 8. HIERARCHY ICON TOGGLES (folder -> folder-open)
    // ==========================================
    document.addEventListener('toggle', function (e) {
      const detailsNode = e.target.closest('.hierarchy details');
      if (detailsNode) {
        const icon = detailsNode.querySelector('summary .axicon');
        if (icon) {
          const iconName = detailsNode.open ? 'Folder-Open' : 'Folder';
          icon.setAttribute('data-name', iconName);
          // Re-render icon if using axicon system
          if (window.renderAxicons) {
            renderAxicons();
          }
        }
      }
    }, true);

    // ==========================================
    // 9. REAL-TIME INPUT VALIDATION
    // ==========================================
    document.addEventListener('input', function (e) {
      const input = e.target.closest('.field input, .field textarea, .field select');
      if (input) {
        const parentField = input.closest('.field');
        if (parentField) {
          if (input.checkValidity && input.checkValidity()) {
            parentField.removeAttribute('data-invalid');
          } else if (input.required || input.value) {
            parentField.setAttribute('data-invalid', 'true');
          }
        }
      }
    });

    // ==========================================
    // 10. NAVBAR MENU TOGGLE + MOBILE A11Y STATE
    // ==========================================
    const isMobileMenuViewport = function () {
      return window.matchMedia('(max-width: 992px)').matches;
    };

    let menuIdSeed = 0;

    const syncMenuState = function (header, expanded, menuButton) {
      if (!header || !menuButton) return;

      const links = header.querySelector('ul.links');
      if (links && !links.id) {
        menuIdSeed += 1;
        links.id = `axiom-main-nav-links-${menuIdSeed}`;
      }
      if (links?.id) {
        menuButton.setAttribute('aria-controls', links.id);
      }

      header.classList.toggle('menu-open', expanded);
      menuButton.setAttribute('aria-expanded', expanded ? 'true' : 'false');

      const body = document.body;
      const shouldLockScroll = expanded && isMobileMenuViewport();
      const hasOpenMobileMenu = isMobileMenuViewport() && document.querySelector('header.main.menu-open');

      if (shouldLockScroll) {
        if (!body.hasAttribute('data-axiom-scroll-lock')) {
          body.setAttribute('data-axiom-scroll-lock', 'true');
          body.setAttribute('data-axiom-scroll-overflow', body.style.overflow || '');
        }
        body.style.overflow = 'hidden';
      } else if (!hasOpenMobileMenu && body.hasAttribute('data-axiom-scroll-lock')) {
        body.style.overflow = body.getAttribute('data-axiom-scroll-overflow') || '';
        body.removeAttribute('data-axiom-scroll-overflow');
        body.removeAttribute('data-axiom-scroll-lock');
      }
    };

    const closeMenu = function (header) {
      if (!header) return;
      const menuButton = header.querySelector('button.menu');
      if (!menuButton) return;
      syncMenuState(header, false, menuButton);
    };

    document.addEventListener('click', function (e) {
      const menuButton = e.target.closest('button.menu');
      if (menuButton) {
        e.preventDefault();
        const header = menuButton.closest('header.main');
        if (!header) return;
        const expanded = menuButton.getAttribute('aria-expanded') === 'true';
        syncMenuState(header, !expanded, menuButton);
        if (!expanded) {
          header.querySelector('ul.links a')?.focus();
        }
        return;
      }

      const navLink = e.target.closest('nav .links a');
      if (navLink) {
        const header = navLink.closest('header.main');
        closeMenu(header);
        return;
      }

      document.querySelectorAll('header.main.menu-open').forEach(function (header) {
        if (!header.contains(e.target)) {
          closeMenu(header);
        }
      });
    });

    window.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      document.querySelectorAll('header.main.menu-open').forEach(function (header) {
        const menuButton = header.querySelector('button.menu');
        closeMenu(header);
        menuButton?.focus();
      });
    });

    window.addEventListener('resize', function () {
      if (isMobileMenuViewport()) return;
      document.querySelectorAll('header.main.menu-open').forEach(function (header) {
        closeMenu(header);
      });
      document.body.style.overflow = '';
      document.body.removeAttribute('data-axiom-scroll-overflow');
      document.body.removeAttribute('data-axiom-scroll-lock');
    });

    document.querySelectorAll('header.main button.menu').forEach(function (menuButton) {
      const header = menuButton.closest('header.main');
      if (header) {
        syncMenuState(header, false, menuButton);
      }
    });

  });

})();
