/**
 * Axiom01 Skeleton Loading Component
 * Provides accessible loading states with ARIA support and screen reader announcements
 */

class AxiomSkeleton {
  constructor() {
    this.init();
  }

  init() {
    this.setupToggleDemo();
    this.registerComponent();
  }

  /**
   * Convert an element to skeleton loading state
   * @param {Element} element - The element to skeletonize
   * @param {Object} options - Configuration options
   */
  show(element, options = {}) {
    const {
      preserveHeight = true,
      announceToScreenReader = true,
      customMessage = 'Loading content'
    } = options;

    if (!element) return;

    // Store original content for restoration
    if (!element.dataset.originalContent) {
      element.dataset.originalContent = element.innerHTML;
      if (preserveHeight) {
        element.dataset.originalHeight = element.offsetHeight + 'px';
      }
    }

    // Add skeleton class and ARIA attributes
    element.classList.add('skeleton');
    element.setAttribute('aria-busy', 'true');
    element.setAttribute('aria-label', customMessage);

    // Generate skeleton structure based on element type
    this.generateSkeletonContent(element);

    // Announce loading to screen readers
    if (announceToScreenReader) {
      this.announceToScreenReader(customMessage);
    }

    // Preserve original height if requested
    if (preserveHeight && element.dataset.originalHeight) {
      element.style.minHeight = element.dataset.originalHeight;
    }
  }

  /**
   * Remove skeleton loading state and restore content
   * @param {Element} element - The element to restore
   * @param {Object} options - Configuration options
   */
  hide(element, options = {}) {
    const {
      announceToScreenReader = true,
      customMessage = 'Content loaded'
    } = options;

    if (!element || !element.dataset.originalContent) return;

    // Restore original content
    element.innerHTML = element.dataset.originalContent;

    // Remove skeleton state
    element.classList.remove('skeleton');
    element.removeAttribute('aria-busy');
    element.removeAttribute('aria-label');
    element.style.minHeight = '';

    // Clean up stored data
    delete element.dataset.originalContent;
    delete element.dataset.originalHeight;

    // Announce completion to screen readers
    if (announceToScreenReader) {
      this.announceToScreenReader(customMessage);
    }
  }

  /**
   * Toggle skeleton state
   * @param {Element} element - The element to toggle
   * @param {Object} options - Configuration options
   */
  toggle(element, options = {}) {
    if (element.classList.contains('skeleton')) {
      this.hide(element, options);
    } else {
      this.show(element, options);
    }
  }

  /**
   * Generate appropriate skeleton content based on element structure
   * @param {Element} element - The element to generate skeleton content for
   */
  generateSkeletonContent(element) {
    const tagName = element.tagName.toLowerCase();

    switch (tagName) {
      case 'article':
      case 'section':
        this.generateCardSkeleton(element);
        break;
      case 'ul':
      case 'ol':
        this.generateListSkeleton(element);
        break;
      case 'table':
        this.generateTableSkeleton(element);
        break;
      default:
        this.generateGenericSkeleton(element);
    }
  }

  /**
   * Generate skeleton for card-like elements
   */
  generateCardSkeleton(element) {
    element.innerHTML = `
      <header>
        <div class="skeleton-avatar"></div>
        <div class="skeleton-text skeleton-text--title"></div>
      </header>
      <section>
        <div class="skeleton-text skeleton-text--line"></div>
        <div class="skeleton-text skeleton-text--line"></div>
        <div class="skeleton-text skeleton-text--line skeleton-text--short"></div>
      </section>
      <footer>
        <div class="skeleton-button"></div>
        <div class="skeleton-button skeleton-button--secondary"></div>
      </footer>
    `;
  }

  /**
   * Generate skeleton for list elements
   */
  generateListSkeleton(element) {
    const itemCount = 3;
    let skeletonHTML = '';

    for (let i = 0; i < itemCount; i++) {
      skeletonHTML += `
        <li class="skeleton-list-item">
          <div class="skeleton-avatar skeleton-avatar--small"></div>
          <div class="skeleton-content">
            <div class="skeleton-text skeleton-text--title skeleton-text--short"></div>
            <div class="skeleton-text skeleton-text--line skeleton-text--medium"></div>
          </div>
        </li>
      `;
    }

    element.innerHTML = skeletonHTML;
    element.classList.add('skeleton-list');
  }

  /**
   * Generate skeleton for table elements
   */
  generateTableSkeleton(element) {
    const hasHeader = element.querySelector('thead');
    const rowCount = 3;
    const colCount = 3;

    let skeletonHTML = '';

    if (hasHeader) {
      skeletonHTML += '<thead><tr>';
      for (let i = 0; i < colCount; i++) {
        skeletonHTML += '<th><div class="skeleton-text skeleton-text--title skeleton-text--short"></div></th>';
      }
      skeletonHTML += '</tr></thead>';
    }

    skeletonHTML += '<tbody>';
    for (let i = 0; i < rowCount; i++) {
      skeletonHTML += '<tr>';
      for (let j = 0; j < colCount; j++) {
        const textClass = j === 0 ? 'skeleton-text--line' :
                         j === 1 ? 'skeleton-text--line skeleton-text--short' :
                         'skeleton-text--line skeleton-text--medium';
        skeletonHTML += `<td><div class="skeleton-text ${textClass}"></div></td>`;
      }
      skeletonHTML += '</tr>';
    }
    skeletonHTML += '</tbody>';

    element.innerHTML = skeletonHTML;
    element.classList.add('skeleton-table');
  }

  /**
   * Generate generic skeleton content
   */
  generateGenericSkeleton(element) {
    element.innerHTML = `
      <div class="skeleton-text skeleton-text--title"></div>
      <div class="skeleton-text skeleton-text--line"></div>
      <div class="skeleton-text skeleton-text--line skeleton-text--short"></div>
    `;
  }

  /**
   * Announce message to screen readers using ARIA live region
   */
  announceToScreenReader(message, priority = 'polite') {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', priority);
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.textContent = message;

    document.body.appendChild(liveRegion);
    setTimeout(() => liveRegion.remove(), 1000);
  }

  /**
   * Set up the interactive demo toggle
   */
  setupToggleDemo() {
    const toggleButton = document.getElementById('toggle-skeleton');
    const demoContent = document.getElementById('demo-content');

    if (toggleButton && demoContent) {
      toggleButton.addEventListener('click', () => {
        const card = demoContent.querySelector('.card');
        if (card) {
          this.toggle(card, {
            customMessage: card.classList.contains('skeleton') ?
              'Content loaded successfully' : 'Loading demo content'
          });

          // Update button text
          toggleButton.textContent = card.classList.contains('skeleton') ?
            'Show Content' : 'Show Skeleton';
        }
      });
    }
  }

  /**
   * Register component with Axiom system
   */
  registerComponent() {
    // Register with AxiomComponents if available
    if (window.AxiomComponents) {
      AxiomComponents.register('skeleton', {
        init: () => {
          console.log('Skeleton component initialized');
        },
        show: this.show.bind(this),
        hide: this.hide.bind(this),
        toggle: this.toggle.bind(this)
      });
    }
  }
}

// Initialize skeleton component
document.addEventListener('DOMContentLoaded', () => {
  window.AxiomSkeleton = new AxiomSkeleton();
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AxiomSkeleton;
}
