/**
 * @file
 * Core Axiom01 Front-End Framework Client Runtime & API.
 * Provides zero-dependency, classless, high-performance interactions.
 * * Leverages document-level event delegation to remain fully compatible with 
 * client-rendered sites, single-page applications, and dynamic HTML injection.
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. Flash of Unstyled Content (FOUC) Mitigation
  // ==========================================================================
  try {
    const cachedMode = localStorage.getItem('axiom-theme-mode') || 'system';
    if (cachedMode === 'dark' || (cachedMode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  } catch (e) {
    console.warn('Local storage theme caching is unavailable.');
  }

  // ==========================================================================
  // 2. Global Axiom Programmatic Component API Namespace
  // ==========================================================================
  window.Axiom = {
    /**
     * Dismisses an alert callout with a professional scale-and-fade animation.
     * @param {HTMLElement} element - The alert container to dismiss.
     */
    dismiss: function (element) {
      if (!element) return;
      element.style.transition = 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
      element.style.opacity = '0';
      element.style.transform = 'scale(0.95)';
      element.addEventListener('transitionend', function () {
        element.remove();
      }, { once: true });
    },

    /**
     * Programmatically sets the active index of a linear steps wizard.
     * @param {HTMLElement} stepsContainer - The parent .steps container.
     * @param {number} targetIndex - The index (0-based) to set active.
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

      // Dispatch event for programmatic workflow integration (e.g. form progression triggers)
      const event = new CustomEvent('axiomStepChange', {
        detail: { activeIndex: targetIndex, activeStep: steps[targetIndex] },
        bubbles: true
      });
      stepsContainer.dispatchEvent(event);
    },

    /**
     * Initializes a progressive keyboard accessibility tree inside hierarchical grids.
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
    }
  };

  // ==========================================================================
  // 3. Document-Level Event Delegation & Event Handlers
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', function () {

    // 3.1. Alert Dismissals (.alert)
    document.addEventListener('click', function (e) {
      const closeBtn = e.target.closest('.alert .close, .alert [data-dismiss="alert"], .alert [data-alert-close]');
      if (closeBtn) {
        e.preventDefault();
        const alert = closeBtn.closest('.alert');
        window.Axiom.dismiss(alert);
      }
    });

    // 3.2. Steps Wizard Progression Timeline (.steps)
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

    // 3.3. Interactive Tab Panel Switches (.tabs)
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
        const targetSection = parent.querySelector(targetId.startsWith('#') ? targetId : '#' + targetId);
        if (targetSection) {
          targetSection.style.display = 'block';
        }
      }
    });

    // 3.4. Input Focus Tracking Attribute Flags (data-focused)
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

    // 3.5. HTML5 details Accordion Chevrons and Icons
    document.addEventListener('toggle', function (e) {
      const detailsParent = e.target.closest('details.bordered');
      if (detailsParent) {
        const icon = detailsParent.querySelector('summary .axicon');
        if (icon) {
          icon.className = detailsParent.open ? 'axicon chevron-down' : 'axicon chevron-right';
        }
      }
    }, true);

    // 3.6. Dynamic Range Sliders Output Value Syncer
    document.addEventListener('input', function (e) {
      const rangeInput = e.target.closest('.slider input[type="range"]');
      if (rangeInput) {
        const output = rangeInput.parentNode.querySelector('output');
        if (output) {
          output.textContent = rangeInput.value;
        }
      }
    });

    // 3.7. Active Input real-time validation error clearings
    document.addEventListener('input', function (e) {
      const input = e.target.closest('.field input, .field textarea, .field select');
      if (input) {
        const parentField = input.closest('.field');
        if (parentField && parentField.getAttribute('data-invalid') === 'true') {
          if (input.checkValidity()) {
            parentField.removeAttribute('data-invalid');
            const errorMessage = parentField.querySelector('.error-message');
            if (errorMessage) errorMessage.remove();
          }
        }
      }
    });

    // 3.8. Hierarchical tree folder visual states (folder -> folder-open)
    document.addEventListener('toggle', function (e) {
      const detailsParent = e.target.closest('.hierarchy details');
      if (detailsParent) {
        const icon = detailsParent.querySelector('summary .axicon');
        if (icon) {
          icon.className = detailsParent.open ? 'axicon folder-open' : 'axicon folder';
        }
      }
    }, true);

    // 3.9. Adaptive Palette Color Toggle Switch with Local Memory
    document.addEventListener('click', function (e) {
      const switcher = e.target.closest('.theme-switch');
      if (switcher) {
        e.preventDefault();
        const currentMode = document.documentElement.getAttribute('data-theme') || 'light';
        const newMode = currentMode === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newMode);
        switcher.setAttribute('aria-checked', newMode === 'dark');
        localStorage.setItem('axiom-theme-mode', newMode);
      }
    });

    // 3.10. Global Defocus handler for Popovers, Dropbuttons, and Modals
    window.addEventListener('click', function () {
      document.querySelectorAll('.popover[aria-expanded="true"]').forEach(function (popover) {
        popover.setAttribute('aria-expanded', 'false');
      });
      document.querySelectorAll('details.dropbutton-details[open]').forEach(function (dropbutton) {
        dropbutton.removeAttribute('open');
      });
    });

    // Escape Key Observer to close active dialog overlays and detail popups
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

    // ==========================================================================
    // 4. Standalone Feature Initializations
    // ==========================================================================
    // Automatically bind keyboard focus accessibility to static tree components
    document.querySelectorAll('.hierarchy').forEach(function (hierarchyContainer) {
      window.Axiom.initHierarchyAccessibility(hierarchyContainer);
    });

  });

})();