/**
 * Axiom01 Breadcrumb Navigation Component
 * Provides accessible navigation trails with dropdown support and dynamic management
 */

class AxiomBreadcrumb {
  constructor() {
    this.breadcrumbs = [];
    this.init();
  }

  init() {
    this.setupDropdowns();
    this.setupDynamicDemo();
    this.registerComponent();
  }

  /**
   * Setup dropdown functionality for breadcrumbs with dropdowns
   */
  setupDropdowns() {
    const dropdownButtons = document.querySelectorAll('.breadcrumb--with-dropdowns .has-dropdown button');

    dropdownButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleDropdown(button);
      });

      button.addEventListener('keydown', (e) => {
        this.handleDropdownKeyboard(e, button);
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.has-dropdown')) {
        this.closeAllDropdowns();
      }
    });

    // Close dropdowns on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllDropdowns();
      }
    });
  }

  /**
   * Toggle dropdown menu
   * @param {Element} button - The dropdown button
   */
  toggleDropdown(button) {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // Close all other dropdowns first
    this.closeAllDropdowns();

    if (!isExpanded) {
      button.setAttribute('aria-expanded', 'true');
      const menu = button.nextElementSibling;
      if (menu) {
        // Focus first menu item
        const firstLink = menu.querySelector('a');
        if (firstLink) {
          setTimeout(() => firstLink.focus(), 100);
        }
      }

      // Announce to screen readers
      this.announceToScreenReader('Submenu opened');
    }
  }

  /**
   * Close all dropdown menus
   */
  closeAllDropdowns() {
    const expandedButtons = document.querySelectorAll('.breadcrumb--with-dropdowns button[aria-expanded="true"]');
    expandedButtons.forEach(button => {
      button.setAttribute('aria-expanded', 'false');
    });
  }

  /**
   * Handle keyboard navigation for dropdowns
   * @param {KeyboardEvent} e - The keyboard event
   * @param {Element} button - The dropdown button
   */
  handleDropdownKeyboard(e, button) {
    const menu = button.nextElementSibling;
    if (!menu) return;

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        this.toggleDropdown(button);
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (button.getAttribute('aria-expanded') !== 'true') {
          this.toggleDropdown(button);
        } else {
          const firstLink = menu.querySelector('a');
          if (firstLink) firstLink.focus();
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (button.getAttribute('aria-expanded') === 'true') {
          const lastLink = menu.querySelector('a:last-child');
          if (lastLink) lastLink.focus();
        }
        break;
    }
  }

  /**
   * Create a breadcrumb structure
   * @param {Array} items - Array of breadcrumb items {href, text, current}
   * @param {Element} container - Container element
   * @param {Object} options - Configuration options
   */
  create(items, container, options = {}) {
    const {
      withIcons = false,
      size = 'default',
      ariaLabel = 'Breadcrumb navigation'
    } = options;

    if (!container || !Array.isArray(items)) return;

    const nav = document.createElement('nav');
    nav.className = `breadcrumb${size !== 'default' ? ` breadcrumb--${size}` : ''}${withIcons ? ' breadcrumb--with-icons' : ''}`;
    nav.setAttribute('aria-label', ariaLabel);

    const ol = document.createElement('ol');

    items.forEach((item, index) => {
      const li = document.createElement('li');

      if (item.current || index === items.length - 1) {
        li.setAttribute('aria-current', 'page');
        li.textContent = item.text;
      } else {
        const link = document.createElement('a');
        link.href = item.href || '#';
        link.textContent = item.text;
        li.appendChild(link);
      }

      ol.appendChild(li);
    });

    nav.appendChild(ol);
    container.appendChild(nav);

    return nav;
  }

  /**
   * Add a breadcrumb item dynamically
   * @param {Element} breadcrumb - The breadcrumb container
   * @param {Object} item - The item to add {href, text}
   */
  addItem(breadcrumb, item) {
    if (!breadcrumb || !item) return;

    const ol = breadcrumb.querySelector('ol');
    if (!ol) return;

    // Remove current page indicator from last item
    const currentPage = ol.querySelector('[aria-current="page"]');
    if (currentPage) {
      currentPage.removeAttribute('aria-current');
      const link = document.createElement('a');
      link.href = item.previousHref || '#';
      link.textContent = currentPage.textContent;
      currentPage.innerHTML = '';
      currentPage.appendChild(link);
    }

    // Add new item as current page
    const li = document.createElement('li');
    li.setAttribute('aria-current', 'page');
    li.textContent = item.text;
    ol.appendChild(li);

    // Announce change to screen readers
    this.announceToScreenReader(`Navigated to ${item.text}`);
  }

  /**
   * Remove the last breadcrumb item
   * @param {Element} breadcrumb - The breadcrumb container
   */
  removeLastItem(breadcrumb) {
    if (!breadcrumb) return;

    const ol = breadcrumb.querySelector('ol');
    const items = ol.querySelectorAll('li');

    if (items.length <= 1) return; // Don't remove the last item

    const lastItem = items[items.length - 1];
    const secondLastItem = items[items.length - 2];

    // Make second-to-last item the current page
    if (secondLastItem) {
      const link = secondLastItem.querySelector('a');
      if (link) {
        secondLastItem.innerHTML = link.textContent;
        secondLastItem.setAttribute('aria-current', 'page');
      }
    }

    lastItem.remove();

    // Announce change to screen readers
    this.announceToScreenReader('Navigated back');
  }

  /**
   * Setup interactive demo
   */
  setupDynamicDemo() {
    const addButton = document.getElementById('add-crumb');
    const removeButton = document.getElementById('remove-crumb');
    const toggleIconsButton = document.getElementById('toggle-icons');
    const dynamicBreadcrumb = document.getElementById('dynamic-breadcrumb');

    const sampleCrumbs = [
      { text: 'Products', href: '/products' },
      { text: 'Electronics', href: '/products/electronics' },
      { text: 'Smartphones', href: '/products/electronics/smartphones' },
      { text: 'iPhone', href: '/products/electronics/smartphones/iphone' },
      { text: 'iPhone 15 Pro', href: '/products/electronics/smartphones/iphone/15-pro' }
    ];

    let currentIndex = 0;

    if (addButton && dynamicBreadcrumb) {
      addButton.addEventListener('click', () => {
        if (currentIndex < sampleCrumbs.length) {
          this.addItem(dynamicBreadcrumb, sampleCrumbs[currentIndex]);
          currentIndex++;
        }

        // Disable button if no more items
        if (currentIndex >= sampleCrumbs.length) {
          addButton.disabled = true;
          addButton.textContent = 'No More Items';
        }

        removeButton.disabled = false;
      });
    }

    if (removeButton && dynamicBreadcrumb) {
      removeButton.addEventListener('click', () => {
        this.removeLastItem(dynamicBreadcrumb);

        if (currentIndex > 0) {
          currentIndex--;
        }

        // Re-enable add button
        addButton.disabled = false;
        addButton.textContent = 'Add Breadcrumb';

        // Check if we should disable remove button
        const ol = dynamicBreadcrumb.querySelector('ol');
        const items = ol.querySelectorAll('li');
        if (items.length <= 1) {
          removeButton.disabled = true;
        }
      });

      // Initially disable remove button
      removeButton.disabled = true;
    }

    if (toggleIconsButton && dynamicBreadcrumb) {
      toggleIconsButton.addEventListener('click', () => {
        dynamicBreadcrumb.classList.toggle('breadcrumb--with-icons');

        const hasIcons = dynamicBreadcrumb.classList.contains('breadcrumb--with-icons');
        toggleIconsButton.textContent = hasIcons ? 'Remove Icons' : 'Add Icons';

        // Add or remove icons from links
        const links = dynamicBreadcrumb.querySelectorAll('a');
        links.forEach((link, index) => {
          if (hasIcons && !link.querySelector('.icon')) {
            const icon = document.createElement('span');
            icon.className = 'icon';
            icon.setAttribute('aria-hidden', 'true');
            icon.textContent = ['🏠', '📦', '⚡', '📱', '📱'][index] || '📄';
            link.insertBefore(icon, link.firstChild);
          } else if (!hasIcons) {
            const icon = link.querySelector('.icon');
            if (icon) icon.remove();
          }
        });
      });
    }
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
   * Register component with Axiom system
   */
  registerComponent() {
    if (window.AxiomComponents) {
      AxiomComponents.register('breadcrumb', {
        init: () => {
          console.log('Breadcrumb component initialized');
        },
        create: this.create.bind(this),
        addItem: this.addItem.bind(this),
        removeLastItem: this.removeLastItem.bind(this)
      });
    }
  }
}

// Initialize breadcrumb component
document.addEventListener('DOMContentLoaded', () => {
  window.AxiomBreadcrumb = new AxiomBreadcrumb();
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AxiomBreadcrumb;
}
