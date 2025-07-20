/**
 * Axiom01 Empty State Component
 * Provides user-friendly empty states with programmatic API for dynamic content management
 */

class AxiomEmptyState {
  constructor() {
    this.states = {
      loading: {
        icon: '⟳',
        title: 'Loading Content',
        description: 'Please wait while we fetch your data...',
        variant: 'loading',
        role: 'status',
        spinner: true
      },
      error: {
        icon: '⚠️',
        title: 'Something Went Wrong',
        description: 'We encountered an error while loading your data. Please try again.',
        variant: 'error',
        role: 'alert',
        actions: [
          { text: 'Try Again', class: 'primary', action: 'retry' },
          { text: 'Contact Support', class: 'secondary', action: 'support' }
        ]
      },
      empty: {
        icon: '📝',
        title: 'No Content Available',
        description: 'There is no content to display at the moment.',
        variant: '',
        role: 'status',
        actions: [
          { text: 'Create Content', class: 'primary', action: 'create' }
        ]
      },
      search: {
        icon: '🔍',
        title: 'No Results Found',
        description: 'We couldn\'t find anything matching your search. Try different keywords.',
        variant: 'search',
        role: 'status',
        actions: [
          { text: 'Clear Search', class: 'secondary', action: 'clear' },
          { text: 'Browse All', class: 'tertiary', action: 'browse' }
        ]
      }
    };
    this.init();
  }

  init() {
    this.setupInteractiveDemo();
    this.registerComponent();
  }

  /**
   * Create an empty state element
   * @param {Object} options - Configuration options
   * @returns {Element} - Empty state element
   */
  create(options = {}) {
    const {
      icon = '📝',
      title = 'No Content',
      description = '',
      variant = '',
      size = '',
      role = 'status',
      ariaLabel = '',
      actions = [],
      meta = '',
      image = null,
      spinner = false
    } = options;

    const emptyState = document.createElement('div');
    emptyState.className = `empty-state${variant ? ` empty-state--${variant}` : ''}${size ? ` empty-state--${size}` : ''}${image ? ' empty-state--with-image' : ''}`;
    emptyState.setAttribute('role', role);
    emptyState.setAttribute('aria-label', ariaLabel || title);

    // Create image or icon
    if (image) {
      const imageEl = document.createElement('div');
      imageEl.className = 'empty-state-image';
      imageEl.setAttribute('aria-hidden', 'true');
      imageEl.innerHTML = image;
      emptyState.appendChild(imageEl);
    } else {
      const iconEl = document.createElement('div');
      iconEl.className = `empty-state-icon${spinner ? ' empty-state-spinner' : ''}`;
      iconEl.setAttribute('aria-hidden', 'true');
      iconEl.textContent = icon;
      emptyState.appendChild(iconEl);
    }

    // Create title
    const titleEl = document.createElement('h3');
    titleEl.className = 'empty-state-title';
    titleEl.textContent = title;
    emptyState.appendChild(titleEl);

    // Create description
    if (description) {
      const descEl = document.createElement('p');
      descEl.className = 'empty-state-description';
      descEl.innerHTML = description; // Allow HTML for highlighting search terms, etc.
      emptyState.appendChild(descEl);
    }

    // Create actions
    if (actions && actions.length > 0) {
      const actionsEl = document.createElement('div');
      actionsEl.className = 'empty-state-actions';

      actions.forEach(action => {
        const button = document.createElement('button');
        button.className = action.class || 'secondary';
        button.textContent = action.text;
        button.setAttribute('data-action', action.action);

        if (action.ariaLabel) {
          button.setAttribute('aria-label', action.ariaLabel);
        }

        if (action.disabled) {
          button.disabled = true;
        }

        actionsEl.appendChild(button);
      });

      emptyState.appendChild(actionsEl);
    }

    // Create meta information
    if (meta) {
      const metaEl = document.createElement('div');
      metaEl.className = 'empty-state-meta';
      metaEl.innerHTML = meta;
      emptyState.appendChild(metaEl);
    }

    return emptyState;
  }

  /**
   * Show empty state in a container
   * @param {Element} container - Container element
   * @param {Object} options - Configuration options
   */
  show(container, options = {}) {
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';

    // Create and append empty state
    const emptyState = this.create(options);
    container.appendChild(emptyState);

    // Update container classes
    container.classList.remove('has-content');

    // Announce to screen readers if it's an error or important update
    if (options.role === 'alert' || options.announce) {
      this.announceToScreenReader(options.title || 'Content updated', 'polite');
    }

    return emptyState;
  }

  /**
   * Show content in a container (hide empty state)
   * @param {Element} container - Container element
   * @param {String|Element} content - Content to show
   */
  showContent(container, content) {
    if (!container) return;

    container.classList.add('has-content');

    if (typeof content === 'string') {
      container.innerHTML = content;
    } else if (content instanceof Element) {
      container.innerHTML = '';
      container.appendChild(content);
    }

    this.announceToScreenReader('Content loaded successfully');
  }

  /**
   * Show predefined state
   * @param {Element} container - Container element
   * @param {String} stateName - Name of predefined state
   * @param {Object} overrides - Override options
   */
  showState(container, stateName, overrides = {}) {
    const state = this.states[stateName];
    if (!state) {
      console.warn(`Unknown state: ${stateName}`);
      return;
    }

    const options = { ...state, ...overrides };
    return this.show(container, options);
  }

  /**
   * Update empty state content dynamically
   * @param {Element} emptyState - Empty state element
   * @param {Object} updates - Properties to update
   */
  update(emptyState, updates = {}) {
    if (!emptyState || !emptyState.classList.contains('empty-state')) return;

    if (updates.title) {
      const titleEl = emptyState.querySelector('.empty-state-title');
      if (titleEl) titleEl.textContent = updates.title;
    }

    if (updates.description) {
      const descEl = emptyState.querySelector('.empty-state-description');
      if (descEl) {
        descEl.innerHTML = updates.description;
      } else if (updates.description) {
        // Create description if it doesn't exist
        const newDescEl = document.createElement('p');
        newDescEl.className = 'empty-state-description';
        newDescEl.innerHTML = updates.description;
        const titleEl = emptyState.querySelector('.empty-state-title');
        titleEl.insertAdjacentElement('afterend', newDescEl);
      }
    }

    if (updates.icon) {
      const iconEl = emptyState.querySelector('.empty-state-icon');
      if (iconEl) iconEl.textContent = updates.icon;
    }

    if (updates.ariaLabel) {
      emptyState.setAttribute('aria-label', updates.ariaLabel);
    }
  }

  /**
   * Setup interactive demo
   */
  setupInteractiveDemo() {
    const dynamicContent = document.getElementById('dynamic-content');
    const showLoadingBtn = document.getElementById('show-loading');
    const showErrorBtn = document.getElementById('show-error');
    const showEmptyBtn = document.getElementById('show-empty');
    const showContentBtn = document.getElementById('show-content');

    if (!dynamicContent) return;

    // Initialize with empty state
    this.showState(dynamicContent, 'empty');

    // Button event listeners
    if (showLoadingBtn) {
      showLoadingBtn.addEventListener('click', () => {
        this.showState(dynamicContent, 'loading');

        // Simulate loading delay
        setTimeout(() => {
          this.showState(dynamicContent, 'empty', {
            title: 'Loading Complete',
            description: 'No data was found after loading.'
          });
        }, 2000);
      });
    }

    if (showErrorBtn) {
      showErrorBtn.addEventListener('click', () => {
        this.showState(dynamicContent, 'error');
      });
    }

    if (showEmptyBtn) {
      showEmptyBtn.addEventListener('click', () => {
        this.showState(dynamicContent, 'empty');
      });
    }

    if (showContentBtn) {
      showContentBtn.addEventListener('click', () => {
        const sampleContent = this.createSampleContent();
        this.showContent(dynamicContent, sampleContent);
      });
    }

    // Handle action button clicks within empty states
    dynamicContent.addEventListener('click', (e) => {
      const button = e.target.closest('button[data-action]');
      if (!button) return;

      const action = button.getAttribute('data-action');
      this.handleAction(action, dynamicContent, button);
    });
  }

  /**
   * Create sample content for demo
   */
  createSampleContent() {
    const content = document.createElement('div');
    content.innerHTML = `
      <h3>Sample Content Loaded</h3>
      <div class="content-grid">
        <div class="content-item">
          <h4>Article 1</h4>
          <p>This is a sample article with some content to demonstrate the loaded state.</p>
        </div>
        <div class="content-item">
          <h4>Article 2</h4>
          <p>Another piece of content showing how the component handles real data.</p>
        </div>
        <div class="content-item">
          <h4>Article 3</h4>
          <p>A third item to show the grid layout in action.</p>
        </div>
      </div>
    `;
    return content;
  }

  /**
   * Handle action button clicks
   * @param {String} action - Action name
   * @param {Element} container - Container element
   * @param {Element} button - Button element
   */
  handleAction(action, container, button) {
    switch (action) {
      case 'retry':
        this.showState(container, 'loading');
        setTimeout(() => {
          const sampleContent = this.createSampleContent();
          this.showContent(container, sampleContent);
        }, 1500);
        break;

      case 'create':
        this.announceToScreenReader('Create action triggered');
        console.log('Create action triggered');
        break;

      case 'clear':
        this.showState(container, 'empty', {
          title: 'Search Cleared',
          description: 'Your search has been cleared. Browse all available content below.'
        });
        break;

      case 'browse':
        const sampleContent = this.createSampleContent();
        this.showContent(container, sampleContent);
        break;

      case 'support':
        this.announceToScreenReader('Opening support contact');
        console.log('Contact support triggered');
        break;

      default:
        console.log(`Unknown action: ${action}`);
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
      AxiomComponents.register('emptyState', {
        init: () => {
          console.log('Empty State component initialized');
        },
        create: this.create.bind(this),
        show: this.show.bind(this),
        showContent: this.showContent.bind(this),
        showState: this.showState.bind(this),
        update: this.update.bind(this)
      });
    }
  }
}

// Initialize empty state component
document.addEventListener('DOMContentLoaded', () => {
  window.AxiomEmptyState = new AxiomEmptyState();
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AxiomEmptyState;
}
