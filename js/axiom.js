/**
 * Axiom01 Framework Core JavaScript
 * v0.1.3 - New Component Implementations
 *
 * This file contains the core JavaScript functionality for Axiom01 components.
 * It follows the Axiom philosophy of minimal, accessible, and semantic-first design.
 */

// --- Component Registry ---
const AxiomComponents = {
  initialized: false,
  registry: {},
  
  /**
   * Register a component with the Axiom framework
   * @param {string} name - Component name
   * @param {Function} initFunction - Initialization function
   */
  register: function(name, initFunction) {
    this.registry[name] = initFunction;
    return this;
  },
  
  /**
   * Initialize all registered components
   */
  initAll: function() {
    if (this.initialized) return;

    // Respect feature toggles before initializing components
    if (featureToggles.cssReset) {
      // Optionally apply CSS reset logic here
      // e.g., import or enable _axiom_reset.css
    }

    Object.keys(this.registry).forEach(component => {
      // Example: Only initialize animation-related components if enabled
      if (component === 'animations' && !featureToggles.animations) return;
      if (component === 'transitions' && !featureToggles.transitions) return;
      if (component === 'fonts' && !featureToggles.fonts) return;
      try {
        this.registry[component]();
      } catch (error) {
        console.error(`Error initializing ${component}:`, error);
      }
    });

    this.initialized = true;
    console.log('Axiom01 components initialized');
  }
};

// --- Modal Component ---
/**
 * Modal/Dialog component
 * 
 * Features:
 * - Accessible with proper ARIA attributes
 * - Keyboard navigation (Escape to close, Tab trap within modal)
 * - Click outside to close
 * - Focus management (returns focus to trigger element)
 * - Prevents background scrolling when open
 */
AxiomComponents.register('modal', function initModal() {
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  
  modalTriggers.forEach(trigger => {
    const modalId = trigger.getAttribute('data-modal-target');
    const modal = document.getElementById(modalId);
    
    if (!modal) {
      console.warn(`Modal with ID "${modalId}" not found for trigger:`, trigger);
      return;
    }
    
    // Ensure modal has proper ARIA attributes
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    
    if (!modal.hasAttribute('aria-labelledby')) {
      const heading = modal.querySelector('h1, h2, h3, h4, h5, h6');
      if (heading) {
        const headingId = heading.id || `${modalId}-title`;
        heading.id = headingId;
        modal.setAttribute('aria-labelledby', headingId);
      }
    }
    
    // Find close buttons
    const closeButtons = modal.querySelectorAll('[data-modal-close]');
    
    // Setup trigger click handler
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      openModal(modal, trigger);
    });
    
    // Setup close button handlers
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        closeModal(modal, trigger);
      });
    });
    
    // Setup click outside to close
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal(modal, trigger);
      }
    });
    
    // Setup keyboard navigation
    modal.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeModal(modal, trigger);
      } else if (event.key === 'Tab') {
        trapTabKey(event, modal);
      }
    });
  });
  
  /**
   * Opens a modal dialog
   * @param {HTMLElement} modal - The modal element
   * @param {HTMLElement} trigger - The element that triggered the modal
   */
  function openModal(modal, trigger) {
    // Store the element that had focus before opening the modal
    modal._previouslyFocused = document.activeElement;
    
    // Show the modal
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    
    // Set focus to the first focusable element
    const focusableElements = getFocusableElements(modal);
    if (focusableElements.length) {
      setTimeout(() => {
        focusableElements[0].focus();
      }, 50);
    }
    
    // Dispatch custom event
    modal.dispatchEvent(new CustomEvent('axiom:modal:open', {
      bubbles: true,
      detail: { modal, trigger }
    }));
  }
  
  /**
   * Closes a modal dialog
   * @param {HTMLElement} modal - The modal element
   * @param {HTMLElement} trigger - The element that triggered the modal
   */
  function closeModal(modal, trigger) {
    // Hide the modal
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    
    // Restore background scrolling
    document.body.style.overflow = '';
    
    // Return focus to the trigger element
    if (modal._previouslyFocused) {
      modal._previouslyFocused.focus();
    }
    
    // Dispatch custom event
    modal.dispatchEvent(new CustomEvent('axiom:modal:close', {
      bubbles: true,
      detail: { modal, trigger }
    }));
  }
  
  /**
   * Traps the tab key inside the modal
   * @param {Event} event - The keydown event
   * @param {HTMLElement} modal - The modal element
   */
  function trapTabKey(event, modal) {
    const focusableElements = getFocusableElements(modal);
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    // If shift+tab on first element, move to last element
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } 
    // If tab on last element, move to first element
    else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
  
  /**
   * Gets all focusable elements within a container
   * @param {HTMLElement} container - The container element
   * @returns {Array} Array of focusable elements
   */
  function getFocusableElements(container) {
    return Array.from(container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )).filter(el => !el.hasAttribute('disabled') && el.offsetParent !== null);
  }
});

// --- Notification System ---
/**
 * Notification System component
 * 
 * Features:
 * - Creates toast notifications
 * - Supports different types (success, error, info, warning)
 * - Auto-dismissal with configurable duration
 * - Accessible with proper ARIA attributes
 * - Animated entrance and exit
 */
AxiomComponents.register('notifications', function initNotifications() {
  // Create notification container if it doesn't exist
  let container = document.querySelector('.axiom-notifications');
  
  if (!container) {
    container = document.createElement('div');
    container.className = 'axiom-notifications';
    container.setAttribute('aria-live', 'polite');
    container.setAttribute('aria-relevant', 'additions');
    document.body.appendChild(container);
  }
  
  // Add to global namespace for easy access
  window.AxiomNotify = {
    /**
     * Show a notification
     * @param {string} message - The notification message
     * @param {Object} options - Configuration options
     */
    show: function(message, options = {}) {
      const defaults = {
        type: 'info',           // info, success, error, warning
        duration: 5000,         // ms, 0 for no auto-dismiss
        dismissible: true,      // whether user can dismiss with a close button
        position: 'top-right',  // top-right, top-left, bottom-right, bottom-left
        icon: true              // whether to show an icon
      };
      
      const settings = { ...defaults, ...options };
      
      // Create notification element
      const notification = document.createElement('div');
      notification.className = `axiom-notification ${settings.type}`;
      notification.setAttribute('role', 'status');
      if (settings.type === 'error') {
        notification.setAttribute('role', 'alert');
      }
      
      // Add position class
      container.className = `axiom-notifications ${settings.position}`;
      
      // Create content
      let iconHtml = '';
      if (settings.icon) {
        // Use appropriate icon based on type
        switch(settings.type) {
          case 'success':
            iconHtml = '<div class="notification-icon">✓</div>';
            break;
          case 'error':
            iconHtml = '<div class="notification-icon">✕</div>';
            break;
          case 'warning':
            iconHtml = '<div class="notification-icon">⚠</div>';
            break;
          default:
            iconHtml = '<div class="notification-icon">ℹ</div>';
        }
      }
      
      // Create dismiss button if dismissible
      let dismissButton = '';
      if (settings.dismissible) {
        dismissButton = '<button class="notification-close" aria-label="Dismiss notification">✕</button>';
      }
      
      // Set content
      notification.innerHTML = `
        ${iconHtml}
        <div class="notification-content">${message}</div>
        ${dismissButton}
      `;
      
      // Add to container
      container.appendChild(notification);
      
      // Setup auto-dismiss
      let dismissTimeout;
      if (settings.duration > 0) {
        dismissTimeout = setTimeout(() => {
          dismissNotification(notification);
        }, settings.duration);
      }
      
      // Setup dismiss button
      if (settings.dismissible) {
        const closeButton = notification.querySelector('.notification-close');
        closeButton.addEventListener('click', () => {
          clearTimeout(dismissTimeout);
          dismissNotification(notification);
        });
      }
      
      // Add entrance animation class only if enabled
      if (isFeatureEnabled('--a-enable-animations')) {
        setTimeout(() => {
          notification.classList.add('show');
        }, 10);
      }

      // Return the notification element for potential further manipulation
      return notification;
    },
    
    /**
     * Show a success notification
     * @param {string} message - The notification message
     * @param {Object} options - Configuration options
     */
    success: function(message, options = {}) {
      return this.show(message, { ...options, type: 'success' });
    },
    
    /**
     * Show an error notification
     * @param {string} message - The notification message
     * @param {Object} options - Configuration options
     */
    error: function(message, options = {}) {
      return this.show(message, { ...options, type: 'error' });
    },
    
    /**
     * Show a warning notification
     * @param {string} message - The notification message
     * @param {Object} options - Configuration options
     */
    warning: function(message, options = {}) {
      return this.show(message, { ...options, type: 'warning' });
    },
    
    /**
     * Show an info notification
     * @param {string} message - The notification message
     * @param {Object} options - Configuration options
     */
    info: function(message, options = {}) {
      return this.show(message, { ...options, type: 'info' });
    },
    
    /**
     * Clear all notifications
     */
    clearAll: function() {
      const notifications = container.querySelectorAll('.axiom-notification');
      notifications.forEach(notification => {
        dismissNotification(notification);
      });
    }
  };
  
  /**
   * Dismisses a notification with animation
   * @param {HTMLElement} notification - The notification element
   */
  function dismissNotification(notification) {
    if (isFeatureEnabled('--a-enable-animations')) {
      notification.classList.add('hiding');
      notification.addEventListener('animationend', () => {
        notification.remove();
      });
    } else {
      notification.remove();
    }
  }
});

// --- Date Picker Component ---
/**
 * Date Picker component
 *
 * Features:
 * - Accessible, keyboard-friendly date selection
 * - Minimal markup: input[type="date"] enhancement
 * - Custom calendar popup, ARIA roles
 * - Follows Axiom01 guidelines
 */
AxiomComponents.register('datepicker', function initDatePicker() {
  const dateInputs = document.querySelectorAll('input[type="date"].axiom-datepicker');
  dateInputs.forEach(input => {
    // Only enhance if not native (fallback for browsers)
    if (input.type !== 'date' || input.classList.contains('force-custom')) {
      // Create calendar button
      const wrapper = document.createElement('span');
      wrapper.className = 'datepicker-wrapper';
      input.parentNode.insertBefore(wrapper, input);
      wrapper.appendChild(input);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'datepicker-toggle';
      btn.setAttribute('aria-label', 'Open calendar');
      btn.innerHTML = '<i class="fa-regular fa-calendar"></i>';
      wrapper.appendChild(btn);
      // Create calendar popup
      const calendar = document.createElement('div');
      calendar.className = 'datepicker-calendar';
      calendar.setAttribute('role', 'dialog');
      calendar.setAttribute('aria-modal', 'true');
      calendar.setAttribute('tabindex', '-1');
      calendar.hidden = true;
      wrapper.appendChild(calendar);
      // Calendar rendering logic
      function renderCalendar(selectedDate) {
        // Basic calendar: current month, days grid
        const today = selectedDate ? new Date(selectedDate) : new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        calendar.innerHTML = `<div class="datepicker-header">
          <button type="button" class="datepicker-prev" aria-label="Previous month">&#8592;</button>
          <span class="datepicker-title">${today.toLocaleString('default', { month: 'long' })} ${year}</span>
          <button type="button" class="datepicker-next" aria-label="Next month">&#8594;</button>
        </div>
        <table class="datepicker-table" role="grid">
          <thead><tr>${[...Array(7)].map((_,i)=>'<th>'+['Su','Mo','Tu','We','Th','Fr','Sa'][i]+'</th>').join('')}</tr></thead>
          <tbody></tbody>
        </table>`;
        const tbody = calendar.querySelector('tbody');
        let day = 1;
        let started = false;
        for (let r = 0; r < 6; r++) {
          const tr = document.createElement('tr');
          for (let c = 0; c < 7; c++) {
            const td = document.createElement('td');
            if (!started && c === firstDay.getDay()) started = true;
            if (started && day <= lastDay.getDate()) {
              td.textContent = day;
              td.tabIndex = 0;
              td.setAttribute('role', 'gridcell');
              td.className = 'datepicker-day';
              if (selectedDate && new Date(selectedDate).getDate() === day && new Date(selectedDate).getMonth() === month) {
                td.classList.add('selected');
              }
              td.addEventListener('click', () => {
                input.value = `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
                calendar.hidden = true;
                btn.setAttribute('aria-expanded', 'false');
                input.dispatchEvent(new Event('change'));
              });
              day++;
            }
            tr.appendChild(td);
          }
          tbody.appendChild(tr);
        }
        // Prev/Next month
        calendar.querySelector('.datepicker-prev').onclick = () => renderCalendar(new Date(year, month-1, 1));
        calendar.querySelector('.datepicker-next').onclick = () => renderCalendar(new Date(year, month+1, 1));
      }
      // Open calendar
      btn.addEventListener('click', () => {
        calendar.hidden = !calendar.hidden;
        btn.setAttribute('aria-expanded', String(!calendar.hidden));
        if (!calendar.hidden) {
          renderCalendar(input.value);
          calendar.focus();
        }
      });
      // Close on outside click
      document.addEventListener('mousedown', (e) => {
        if (!wrapper.contains(e.target)) {
          calendar.hidden = true;
          btn.setAttribute('aria-expanded', 'false');
        }
      });
      // Keyboard navigation
      calendar.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          calendar.hidden = true;
          btn.setAttribute('aria-expanded', 'false');
          btn.focus();
        }
      });
    }
  });
});

// --- Infinite Scroll Component ---
/**
 * Infinite Scroll Component
 *
 * Usage:
 * - Add class 'axiom-infinite-scroll' to any scrollable container (e.g. <div>, <main>, <section>)
 * - Optionally set data-infinite-scroll-callback="functionName" to call a global function when triggered
 * - Or listen for the 'axiom:infinite-scroll' event on the container
 *
 * Accessibility:
 * - No impact on keyboard navigation
 * - Works with any semantic container
 */
AxiomComponents.register('infiniteScroll', function initInfiniteScroll() {
  const containers = document.querySelectorAll('.axiom-infinite-scroll');
  containers.forEach(container => {
    let loading = false;
    let threshold = parseInt(container.getAttribute('data-infinite-scroll-threshold'), 10) || 200;
    function onScroll() {
      if (loading) return;
      // Check if near bottom
      const scrollable = container === document.body || container === document.documentElement ? document.documentElement : container;
      const scrollTop = scrollable.scrollTop;
      const scrollHeight = scrollable.scrollHeight;
      const clientHeight = scrollable.clientHeight;
      if (scrollHeight - scrollTop - clientHeight < threshold) {
        loading = true;
        // Fire custom event
        const event = new CustomEvent('axiom:infinite-scroll', { bubbles: true });
        container.dispatchEvent(event);
        // Call callback if specified
        const cbName = container.getAttribute('data-infinite-scroll-callback');
        if (cbName && typeof window[cbName] === 'function') {
          window[cbName](container);
        }
        // Reset loading after short delay (developer should set loading state for real use)
        setTimeout(() => { loading = false; }, 500);
      }
    }
    // Attach scroll listener
    container.addEventListener('scroll', onScroll);
    // If container is window, listen on window
    if (container === document.body || container === document.documentElement) {
      window.addEventListener('scroll', onScroll);
    }
  });
});

// --- Carousel/Slider Component ---
/**
 * Carousel/Slider component (Axiom01)
 *
 * Features:
 * - Semantic markup: .carousel container, .track, .slide
 * - Accessible: ARIA roles, keyboard navigation, focus management
 * - Responsive: touch/swipe support, arrow controls, indicators
 * - Progressive enhancement: works with basic HTML
 */
AxiomComponents.register('carousel', function initCarousel() {
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(carousel => {
    const track = carousel.querySelector('.track');
    const slides = Array.from(track.children);
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    const indicators = carousel.querySelector('.indicators');
    let current = 0;

    // Accessibility roles
    carousel.setAttribute('role', 'region');
    carousel.setAttribute('aria-label', carousel.getAttribute('data-carousel-label') || 'Carousel');
    track.setAttribute('role', 'list');
    slides.forEach((slide, i) => {
      slide.setAttribute('role', 'listitem');
      slide.setAttribute('aria-hidden', i === current ? 'false' : 'true');
      slide.tabIndex = i === current ? 0 : -1;
    });

    // Update slide visibility
    function updateSlides(newIndex) {
      slides.forEach((slide, i) => {
        slide.setAttribute('aria-hidden', i === newIndex ? 'false' : 'true');
        slide.tabIndex = i === newIndex ? 0 : -1;
        slide.classList.toggle('active', i === newIndex);
      });
      if (indicators) {
        Array.from(indicators.children).forEach((dot, i) => {
          dot.classList.toggle('active', i === newIndex);
          dot.setAttribute('aria-current', i === newIndex ? 'true' : 'false');
        });
      }
      current = newIndex;
    }

    // Prev/Next controls
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        updateSlides((current - 1 + slides.length) % slides.length);
        slides[current].focus();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        updateSlides((current + 1) % slides.length);
      });
    }

    // Indicator controls
    if (indicators) {
      Array.from(indicators.children).forEach((dot, i) => {
        dot.addEventListener('click', () => updateSlides(i));
      });
    }

    // Keyboard navigation
    carousel.addEventListener('keydown', (e) => {
      if (e.target === carousel || slides.includes(e.target)) {
        switch (e.key) {
          case 'ArrowLeft':
            e.preventDefault();
            updateSlides((current - 1 + slides.length) % slides.length);
            break;
          case 'ArrowRight':
            e.preventDefault();
            updateSlides((current + 1) % slides.length);
            break;
        }
      }
    });

    // Touch/swipe support
    let startX, isDragging = false;
    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });
    track.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
    });
    track.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          updateSlides((current + 1) % slides.length);
        } else {
          updateSlides((current - 1 + slides.length) % slides.length);
        }
      }
      isDragging = false;
    });

    // Auto-play if configured
    const autoPlay = carousel.hasAttribute('data-autoplay');
    if (autoPlay) {
      const interval = parseInt(carousel.getAttribute('data-autoplay')) || 5000;
      setInterval(() => {
        if (!carousel.matches(':hover')) {
          updateSlides((current + 1) % slides.length);
        }
      }, interval);
    }

    updateSlides(0);
  });
});

// --- Drawer/Sidebar Component ---
/**
 * Drawer/Sidebar component
 *
 * Features:
 * - Focus management with focus trap when open
 * - Escape key to close
 * - Backdrop click handling
 * - ARIA modal patterns for overlay drawers
 * - Smooth animations and responsive behavior
 */
AxiomComponents.register('drawer', function initDrawer() {
  const drawerTriggers = document.querySelectorAll('[data-drawer-target]');

  drawerTriggers.forEach(trigger => {
    const drawerId = trigger.getAttribute('data-drawer-target');
    const drawer = document.getElementById(drawerId);

    if (!drawer) {
      console.warn(`Drawer with ID "${drawerId}" not found for trigger:`, trigger);
      return;
    }

    // Ensure drawer has proper ARIA attributes
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-hidden', 'true');

    if (!drawer.hasAttribute('aria-labelledby')) {
      const heading = drawer.querySelector('h1, h2, h3, h4, h5, h6');
      if (heading) {
        const headingId = heading.id || `${drawerId}-title`;
        heading.id = headingId;
        drawer.setAttribute('aria-labelledby', headingId);
      }
    }

    // Find close buttons
    const closeButtons = drawer.querySelectorAll('[data-drawer-close]');
    const backdrop = drawer.querySelector('.drawer-backdrop') || drawer.parentNode.querySelector('.drawer-backdrop');

    // Setup trigger click handler
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      openDrawer(drawer, trigger);
    });

    // Setup close button handlers
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        closeDrawer(drawer, trigger);
      });
    });

    // Setup backdrop click to close
    if (backdrop) {
      backdrop.addEventListener('click', (event) => {
        if (event.target === backdrop) {
          closeDrawer(drawer, trigger);
        }
      });
    }

    // Setup keyboard navigation
    drawer.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeDrawer(drawer, trigger);
      } else if (event.key === 'Tab') {
        trapTabKey(event, drawer);
      }
    });
  });

  /**
   * Opens a drawer
   * @param {HTMLElement} drawer - The drawer element
   * @param {HTMLElement} trigger - The element that triggered the drawer
   */
  function openDrawer(drawer, trigger) {
    // Store the element that had focus before opening the drawer
    drawer._previouslyFocused = document.activeElement;

    // Show the drawer
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');

    // Prevent background scrolling if overlay drawer
    if (drawer.classList.contains('overlay') || drawer.getAttribute('data-drawer-overlay') === 'true') {
      document.body.style.overflow = 'hidden';
    }

    // Set focus to the first focusable element or close button
    const focusableElements = getFocusableElements(drawer);
    if (focusableElements.length) {
      setTimeout(() => {
        const closeButton = drawer.querySelector('[data-drawer-close]');
        if (closeButton) {
          closeButton.focus();
        } else {
          focusableElements[0].focus();
        }
      }, 50);
    }

    // Dispatch custom event
    drawer.dispatchEvent(new CustomEvent('axiom:drawer:open', {
      bubbles: true,
      detail: { drawer, trigger }
    }));
  }

  /**
   * Closes a drawer
   * @param {HTMLElement} drawer - The drawer element
   * @param {HTMLElement} trigger - The element that triggered the drawer
   */
  function closeDrawer(drawer, trigger) {
    // Hide the drawer
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');

    // Restore background scrolling
    if (drawer.classList.contains('overlay') || drawer.getAttribute('data-drawer-overlay') === 'true') {
      document.body.style.overflow = '';
    }

    // Return focus to the trigger element
    if (drawer._previouslyFocused) {
      drawer._previouslyFocused.focus();
    }

    // Dispatch custom event
    drawer.dispatchEvent(new CustomEvent('axiom:drawer:close', {
      bubbles: true,
      detail: { drawer, trigger }
    }));
  }
});

// --- Progress Bar Component ---
/**
 * Progress Bar component
 *
 * Features:
 * - ARIA live regions for progress announcements
 * - Screen reader friendly completion messages
 * - Real-time value updates
 * - Customizable completion callbacks
 */
AxiomComponents.register('progressBar', function initProgressBar() {
  const progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach(progressBar => {
    const progressElement = progressBar.querySelector('.progress') || progressBar;

    // Ensure proper ARIA attributes
    progressElement.setAttribute('role', 'progressbar');
    progressElement.setAttribute('aria-valuemin', progressElement.getAttribute('aria-valuemin') || '0');
    progressElement.setAttribute('aria-valuemax', progressElement.getAttribute('aria-valuemax') || '100');

    // Create live region for announcements if it doesn't exist
    let liveRegion = progressBar.querySelector('.progress-live-region');
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.className = 'progress-live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.style.position = 'absolute';
      liveRegion.style.width = '1px';
      liveRegion.style.height = '1px';
      liveRegion.style.padding = '0';
      liveRegion.style.margin = '-1px';
      liveRegion.style.overflow = 'hidden';
      liveRegion.style.clip = 'rect(0, 0, 0, 0)';
      liveRegion.style.whiteSpace = 'nowrap';
      liveRegion.style.border = '0';
      progressBar.appendChild(liveRegion);
    }

    // Add update method to progress bar
    progressBar.updateProgress = function(value, options = {}) {
      const min = parseInt(progressElement.getAttribute('aria-valuemin')) || 0;
      const max = parseInt(progressElement.getAttribute('aria-valuemax')) || 100;
      const clampedValue = Math.max(min, Math.min(max, value));

      // Update ARIA value
      progressElement.setAttribute('aria-valuenow', clampedValue);

      // Update visual progress (if using CSS custom properties)
      progressElement.style.setProperty('--progress-value', clampedValue);
      progressElement.style.setProperty('--progress-percent', `${(clampedValue / max) * 100}%`);

      // Announce progress at intervals or completion
      const shouldAnnounce = options.announce ||
                            clampedValue === max ||
                            clampedValue === min ||
                            (clampedValue % (options.announceInterval || 25) === 0);

      if (shouldAnnounce) {
        const percentage = Math.round((clampedValue / max) * 100);
        let message = `${percentage}% complete`;

        if (clampedValue === max) {
          message = options.completionMessage || 'Progress complete';

          // Fire completion callback if provided
          if (options.onComplete && typeof options.onComplete === 'function') {
            options.onComplete(progressBar, clampedValue);
          }

          // Fire custom event
          progressBar.dispatchEvent(new CustomEvent('axiom:progress:complete', {
            bubbles: true,
            detail: { value: clampedValue, percentage }
          }));
        }

        liveRegion.textContent = message;
      }

      // Fire update event
      progressBar.dispatchEvent(new CustomEvent('axiom:progress:update', {
        bubbles: true,
        detail: { value: clampedValue, percentage: (clampedValue / max) * 100 }
      }));
    };

    // Initialize with current value if set
    const initialValue = progressElement.getAttribute('aria-valuenow');
    if (initialValue) {
      progressBar.updateProgress(parseInt(initialValue));
    }
  });
});

// --- Search Component ---
/**
 * Search component
 *
 * Features:
 * - Combobox ARIA patterns
 * - Autocomplete accessibility
 * - Keyboard navigation for results
 * - Result announcements
 * - Debounced input
 * - Result highlighting
 * - Search history support
 */
AxiomComponents.register('search', function initSearch() {
  const searchContainers = document.querySelectorAll('.search-container');

  searchContainers.forEach(container => {
    const searchInput = container.querySelector('input[type="search"], input[data-search]');
    const resultsContainer = container.querySelector('.search-results');

    if (!searchInput) {
      console.warn('Search container missing search input:', container);
      return;
    }

    // Create results container if it doesn't exist
    let results = resultsContainer;
    if (!results) {
      results = document.createElement('div');
      results.className = 'search-results';
      results.setAttribute('role', 'listbox');
      results.setAttribute('aria-hidden', 'true');
      results.style.display = 'none';
      container.appendChild(results);
    }

    // Setup ARIA attributes
    const searchId = searchInput.id || `search-${Math.random().toString(36).substr(2, 9)}`;
    const resultsId = results.id || `${searchId}-results`;

    searchInput.id = searchId;
    results.id = resultsId;

    searchInput.setAttribute('role', 'combobox');
    searchInput.setAttribute('aria-expanded', 'false');
    searchInput.setAttribute('aria-haspopup', 'listbox');
    searchInput.setAttribute('aria-autocomplete', 'list');
    searchInput.setAttribute('aria-controls', resultsId);

    // Create live region for result announcements
    let liveRegion = container.querySelector('.search-live-region');
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.className = 'search-live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'false');
      liveRegion.style.position = 'absolute';
      liveRegion.style.width = '1px';
      liveRegion.style.height = '1px';
      liveRegion.style.padding = '0';
      liveRegion.style.margin = '-1px';
      liveRegion.style.overflow = 'hidden';
      liveRegion.style.clip = 'rect(0, 0, 0, 0)';
      liveRegion.style.whiteSpace = 'nowrap';
      liveRegion.style.border = '0';
      container.appendChild(liveRegion);
    }

    let debounceTimer;
    let selectedIndex = -1;
    let searchHistory = JSON.parse(localStorage.getItem(`axiom-search-history-${searchId}`) || '[]');

    // Debounced search function
    function performSearch(query) {
      // Fire custom search event
      const searchEvent = new CustomEvent('axiom:search:query', {
        bubbles: true,
        detail: { query, container, input: searchInput, results }
      });
      container.dispatchEvent(searchEvent);

      // If no custom handler, perform basic search
      if (!searchEvent.defaultPrevented) {
        // This would typically call an API or filter data
        const mockResults = generateMockResults(query);
        displayResults(mockResults);
      }
    }

    // Display search results
    function displayResults(resultItems) {
      results.innerHTML = '';
      selectedIndex = -1;

      if (resultItems.length === 0) {
        results.setAttribute('aria-hidden', 'true');
        results.style.display = 'none';
        searchInput.setAttribute('aria-expanded', 'false');
        liveRegion.textContent = 'No results found';
        return;
      }

      resultItems.forEach((item, index) => {
        const resultElement = document.createElement('div');
        resultElement.className = 'search-result';
        resultElement.setAttribute('role', 'option');
        resultElement.setAttribute('aria-selected', 'false');
        resultElement.textContent = item.text || item;
        resultElement.dataset.value = item.value || item;

        resultElement.addEventListener('click', () => {
          selectResult(item, resultElement);
        });

        results.appendChild(resultElement);
      });

      results.setAttribute('aria-hidden', 'false');
      results.style.display = 'block';
      searchInput.setAttribute('aria-expanded', 'true');

      // Announce result count
      liveRegion.textContent = `${resultItems.length} results available`;
    }

    // Select a search result
    function selectResult(item, element) {
      const value = item.value || item.text || item;
      searchInput.value = value;

      // Add to search history
      if (!searchHistory.includes(value)) {
        searchHistory.unshift(value);
        searchHistory = searchHistory.slice(0, 10); // Keep last 10 searches
        localStorage.setItem(`axiom-search-history-${searchId}`, JSON.stringify(searchHistory));
      }

      hideResults();

      // Fire selection event
      container.dispatchEvent(new CustomEvent('axiom:search:select', {
        bubbles: true,
        detail: { item, value, container, input: searchInput }
      }));
    }

    // Hide search results
    function hideResults() {
      results.setAttribute('aria-hidden', 'true');
      results.style.display = 'none';
      searchInput.setAttribute('aria-expanded', 'false');
      selectedIndex = -1;
      updateSelectedResult();
    }

    // Update visually selected result
    function updateSelectedResult() {
      const resultElements = results.querySelectorAll('.search-result');
      resultElements.forEach((el, index) => {
        const isSelected = index === selectedIndex;
        el.setAttribute('aria-selected', isSelected ? 'true' : 'false');
        el.classList.toggle('selected', isSelected);
      });

      if (selectedIndex >= 0) {
        searchInput.setAttribute('aria-activedescendant', resultElements[selectedIndex].id || `result-${selectedIndex}`);
      } else {
        searchInput.removeAttribute('aria-activedescendant');
      }
    }

    // Input event handler
    searchInput.addEventListener('input', (event) => {
      const query = event.target.value.trim();

      clearTimeout(debounceTimer);

      if (query.length === 0) {
        hideResults();
        return;
      }

      // Debounce search
      debounceTimer = setTimeout(() => {
        performSearch(query);
      }, 300);
    });

    // Keyboard navigation
    searchInput.addEventListener('keydown', (event) => {
      const resultElements = results.querySelectorAll('.search-result');

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          if (results.style.display === 'block') {
            selectedIndex = Math.min(selectedIndex + 1, resultElements.length - 1);
            updateSelectedResult();
          }
          break;

        case 'ArrowUp':
          event.preventDefault();
          if (results.style.display === 'block') {
            selectedIndex = Math.max(selectedIndex - 1, -1);
            updateSelectedResult();
          }
          break;

        case 'Enter':
          event.preventDefault();
          if (selectedIndex >= 0 && resultElements[selectedIndex]) {
            const resultData = resultElements[selectedIndex].dataset.value;
            selectResult(resultData, resultElements[selectedIndex]);
          }
          break;

        case 'Escape':
          hideResults();
          break;
      }
    });

    // Click outside to close
    document.addEventListener('click', (event) => {
      if (!container.contains(event.target)) {
        hideResults();
      }
    });

    // Mock results generator (for demo purposes)
    function generateMockResults(query) {
      const mockData = [
        'Apple', 'Apricot', 'Banana', 'Blueberry', 'Cherry', 'Date', 'Elderberry',
        'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon', 'Mango', 'Nectarine',
        'Orange', 'Papaya', 'Quince', 'Raspberry', 'Strawberry', 'Tangerine'
      ];

      return mockData
        .filter(item => item.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 8)
        .map(item => ({ text: item, value: item }));
    }
  });
});

// --- Media Component ---
/**
 * Media component
 *
 * Features:
 * - Image galleries with keyboard navigation
 * - Video controls with accessibility
 * - Responsive images with lazy loading
 * - Alt text management
 * - Caption support
 */
AxiomComponents.register('media', function initMedia() {
  // Initialize image galleries
  const galleries = document.querySelectorAll('.image-gallery');

  galleries.forEach(gallery => {
    const images = Array.from(gallery.querySelectorAll('img'));
    let currentIndex = 0;

    // Setup gallery navigation
    gallery.setAttribute('role', 'region');
    gallery.setAttribute('aria-label', gallery.getAttribute('data-gallery-label') || 'Image gallery');

    // Add navigation if multiple images
    if (images.length > 1) {
      const nav = document.createElement('div');
      nav.className = 'gallery-nav';

      const prevBtn = document.createElement('button');
      prevBtn.className = 'gallery-prev';
      prevBtn.setAttribute('aria-label', 'Previous image');
      prevBtn.innerHTML = '‹';

      const nextBtn = document.createElement('button');
      nextBtn.className = 'gallery-next';
      nextBtn.setAttribute('aria-label', 'Next image');
      nextBtn.innerHTML = '›';

      const counter = document.createElement('span');
      counter.className = 'gallery-counter';
      counter.setAttribute('aria-live', 'polite');

      nav.appendChild(prevBtn);
      nav.appendChild(counter);
      nav.appendChild(nextBtn);
      gallery.appendChild(nav);

      // Update gallery display
      function updateGallery(newIndex) {
        images.forEach((img, i) => {
          img.style.display = i === newIndex ? 'block' : 'none';
          img.setAttribute('aria-hidden', i === newIndex ? 'false' : 'true');
        });
        counter.textContent = `${newIndex + 1} of ${images.length}`;
        currentIndex = newIndex;
      }

      // Navigation handlers
      prevBtn.addEventListener('click', () => {
        updateGallery((currentIndex - 1 + images.length) % images.length);
      });

      nextBtn.addEventListener('click', () => {
        updateGallery((currentIndex + 1) % images.length);
      });

      // Keyboard navigation
      gallery.addEventListener('keydown', (e) => {
        switch (e.key) {
          case 'ArrowLeft':
            e.preventDefault();
            updateGallery((currentIndex - 1 + images.length) % images.length);
            break;
          case 'ArrowRight':
            e.preventDefault();
            updateGallery((currentIndex + 1) % images.length);
            break;
        }
      });

      updateGallery(0);
    }
  });

  // Initialize responsive images with lazy loading
  const lazyImages = document.querySelectorAll('img[data-src]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers without IntersectionObserver
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.classList.remove('lazy');
    });
  }

  // Enhanced video controls
  const videoElements = document.querySelectorAll('video.axiom-media');

  videoElements.forEach(video => {
    // Add custom controls if specified
    if (video.hasAttribute('data-custom-controls')) {
      video.removeAttribute('controls');

      const controlsContainer = document.createElement('div');
      controlsContainer.className = 'custom-video-controls';

      const playPauseBtn = document.createElement('button');
      playPauseBtn.className = 'play-pause-btn';
      playPauseBtn.setAttribute('aria-label', 'Play video');
      playPauseBtn.innerHTML = '▶';

      const progressBar = document.createElement('div');
      progressBar.className = 'video-progress';
      progressBar.setAttribute('role', 'slider');
      progressBar.setAttribute('aria-label', 'Video progress');

      const timeDisplay = document.createElement('span');
      timeDisplay.className = 'time-display';
      timeDisplay.setAttribute('aria-live', 'polite');

      controlsContainer.appendChild(playPauseBtn);
      controlsContainer.appendChild(progressBar);
      controlsContainer.appendChild(timeDisplay);
      video.parentNode.insertBefore(controlsContainer, video.nextSibling);

      // Play/pause functionality
      playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
          video.play();
          playPauseBtn.innerHTML = '⏸';
          playPauseBtn.setAttribute('aria-label', 'Pause video');
        } else {
          video.pause();
          playPauseBtn.innerHTML = '▶';
          playPauseBtn.setAttribute('aria-label', 'Play video');
        }
      });

      // Progress tracking
      video.addEventListener('timeupdate', () => {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.style.setProperty('--progress', `${progress}%`);

        const current = formatTime(video.currentTime);
        const total = formatTime(video.duration);
        timeDisplay.textContent = `${current} / ${total}`;
      });
    }
  });

  // Format time helper
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
});

// --- Stepper Component ---
/**
 * Stepper component
 *
 * Features:
 * - Progress indication through multi-step processes
 * - Keyboard navigation between steps
 * - Form integration with validation
 * - ARIA live regions for step announcements
 */
AxiomComponents.register('stepper', function initStepper() {
  const steppers = document.querySelectorAll('.stepper');

  steppers.forEach(stepper => {
    const steps = Array.from(stepper.querySelectorAll('.step'));
    const nextBtn = stepper.querySelector('.stepper-next');
    const prevBtn = stepper.querySelector('.stepper-prev');
    const submitBtn = stepper.querySelector('.stepper-submit');
    let currentStep = 0;

    // Setup ARIA attributes
    stepper.setAttribute('role', 'tablist');
    stepper.setAttribute('aria-label', 'Step-by-step process');

    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.className = 'stepper-live-region';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.style.position = 'absolute';
    liveRegion.style.width = '1px';
    liveRegion.style.height = '1px';
    liveRegion.style.padding = '0';
    liveRegion.style.margin = '-1px';
    liveRegion.style.overflow = 'hidden';
    liveRegion.style.clip = 'rect(0, 0, 0, 0)';
    liveRegion.style.whiteSpace = 'nowrap';
    liveRegion.style.border = '0';
    stepper.appendChild(liveRegion);

    // Setup step attributes
    steps.forEach((step, index) => {
      step.setAttribute('role', 'tabpanel');
      step.setAttribute('aria-labelledby', `step-${index + 1}-header`);
      step.id = step.id || `step-${index + 1}-panel`;

      const header = step.querySelector('h1, h2, h3, h4, h5, h6');
      if (header) {
        header.id = `step-${index + 1}-header`;
      }
    });

    // Update step visibility and state
    function updateStepper(newStep) {
      steps.forEach((step, index) => {
        const isActive = index === newStep;
        const isCompleted = index < newStep;
        const isPending = index > newStep;

        step.classList.toggle('active', isActive);
        step.classList.toggle('completed', isCompleted);
        step.classList.toggle('pending', isPending);
        step.setAttribute('aria-current', isActive ? 'step' : 'false');
        step.style.display = isActive ? 'block' : 'none';
      });

      // Update navigation buttons
      if (prevBtn) {
        prevBtn.disabled = newStep === 0;
        prevBtn.setAttribute('aria-disabled', newStep === 0 ? 'true' : 'false');
      }

      if (nextBtn) {
        const isLastStep = newStep === steps.length - 1;
        nextBtn.style.display = isLastStep ? 'none' : 'inline-block';
      }

      if (submitBtn) {
        const isLastStep = newStep === steps.length - 1;
        submitBtn.style.display = isLastStep ? 'inline-block' : 'none';
      }

      currentStep = newStep;

      // Announce step change
      const stepTitle = steps[newStep].querySelector('h1, h2, h3, h4, h5, h6')?.textContent || `Step ${newStep + 1}`;
      liveRegion.textContent = `${stepTitle}, step ${newStep + 1} of ${steps.length}`;

      // Dispatch custom event
      stepper.dispatchEvent(new CustomEvent('axiom:stepper:change', {
        bubbles: true,
        detail: { step: newStep, stepElement: steps[newStep] }
      }));
    }

    // Navigation handlers
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const nextStep = currentStep + 1;
        if (nextStep < steps.length) {
          // Validate current step before proceeding
          if (validateStep(steps[currentStep])) {
            updateStepper(nextStep);
          }
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const prevStep = currentStep - 1;
        if (prevStep >= 0) {
          updateStepper(prevStep);
        }
      });
    }

    // Keyboard navigation
    stepper.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          if (currentStep > 0) {
            updateStepper(currentStep - 1);
          }
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (currentStep < steps.length - 1 && validateStep(steps[currentStep])) {
            updateStepper(currentStep + 1);
          }
          break;
        case 'Home':
          e.preventDefault();
          updateStepper(0);
          break;
        case 'End':
          e.preventDefault();
          updateStepper(steps.length - 1);
          break;
      }
    });

    // Form validation helper
    function validateStep(stepElement) {
      const form = stepElement.querySelector('form');
      if (!form) return true;

      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          field.setAttribute('aria-invalid', 'true');
          isValid = false;
        } else {
          field.setAttribute('aria-invalid', 'false');
        }
      });

      // Fire validation event
      const validationEvent = new CustomEvent('axiom:stepper:validate', {
        bubbles: true,
        detail: { stepElement, isValid, form }
      });
      stepper.dispatchEvent(validationEvent);

      return isValid && !validationEvent.defaultPrevented;
    }

    // Initialize first step
    updateStepper(0);
  });
});

// --- Tag Component ---
/**
 * Tag component
 *
 * Features:
 * - Interactive tags with removal functionality
 * - Keyboard support for tag management
 * - Chip management with input integration
 * - Accessible tag selection and filtering
 */
AxiomComponents.register('tag', function initTag() {
  // Initialize tag containers
  const tagContainers = document.querySelectorAll('.tag-container');

  tagContainers.forEach(container => {
    const tagInput = container.querySelector('input[data-tag-input]');
    const tagList = container.querySelector('.tag-list');
    let tags = [];

    // Setup ARIA attributes
    container.setAttribute('role', 'group');
    container.setAttribute('aria-label', 'Tag management');

    if (tagList) {
      tagList.setAttribute('role', 'list');
      tagList.setAttribute('aria-label', 'Selected tags');
    }

    // Create tag element
    function createTag(text, removable = true) {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.setAttribute('role', 'listitem');
      tag.textContent = text;

      if (removable) {
        const removeBtn = document.createElement('button');
        removeBtn.className = 'tag-remove';
        removeBtn.setAttribute('aria-label', `Remove ${text} tag`);
        removeBtn.innerHTML = '×';
        removeBtn.tabIndex = 0;

        removeBtn.addEventListener('click', () => {
          removeTag(text);
        });

        removeBtn.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            removeTag(text);
          }
        });

        tag.appendChild(removeBtn);
      }

      return tag;
    }

    // Add tag
    function addTag(text) {
      if (!text.trim() || tags.includes(text)) return false;

      tags.push(text);
      const tagElement = createTag(text);
      tagList.appendChild(tagElement);

      // Announce addition
      const announcement = `Added tag: ${text}`;
      announceToScreenReader(announcement);

      // Fire custom event
      container.dispatchEvent(new CustomEvent('axiom:tag:add', {
        bubbles: true,
        detail: { tag: text, tags: [...tags] }
      }));

      return true;
    }

    // Remove tag
    function removeTag(text) {
      const index = tags.indexOf(text);
      if (index > -1) {
        tags.splice(index, 1);
        const tagElement = Array.from(tagList.children).find(
          el => el.textContent.replace('×', '').trim() === text
        );
        if (tagElement) {
          tagElement.remove();
        }

        // Announce removal
        const announcement = `Removed tag: ${text}`;
        announceToScreenReader(announcement);

        // Fire custom event
        container.dispatchEvent(new CustomEvent('axiom:tag:remove', {
          bubbles: true,
          detail: { tag: text, tags: [...tags] }
        }));
      }
    }

    // Screen reader announcements
    function announceToScreenReader(message) {
      let liveRegion = container.querySelector('.tag-live-region');
      if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.className = 'tag-live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.style.position = 'absolute';
        liveRegion.style.width = '1px';
        liveRegion.style.height = '1px';
        liveRegion.style.padding = '0';
        liveRegion.style.margin = '-1px';
        liveRegion.style.overflow = 'hidden';
        liveRegion.style.clip = 'rect(0, 0, 0, 0)';
        liveRegion.style.whiteSpace = 'nowrap';
        liveRegion.style.border = '0';
        container.appendChild(liveRegion);
      }
      liveRegion.textContent = message;
    }

    // Tag input handling
    if (tagInput) {
      tagInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ',') {
          e.preventDefault();
          const value = tagInput.value.trim();
          if (addTag(value)) {
            tagInput.value = '';
          }
        } else if (e.key === 'Backspace' && !tagInput.value && tags.length > 0) {
          // Remove last tag if input is empty and backspace is pressed
          removeTag(tags[tags.length - 1]);
        }
      });

      // Auto-complete functionality
      tagInput.addEventListener('input', () => {
        const query = tagInput.value.toLowerCase();
        const suggestions = container.getAttribute('data-tag-suggestions');

        if (suggestions) {
          const suggestionList = JSON.parse(suggestions)
            .filter(suggestion =>
              suggestion.toLowerCase().includes(query) &&
              !tags.includes(suggestion)
            );

          // Fire suggestion event
          container.dispatchEvent(new CustomEvent('axiom:tag:suggest', {
            bubbles: true,
            detail: { query, suggestions: suggestionList }
          }));
        }
      });
    }

    // Initialize with existing tags
    const existingTags = tagList?.querySelectorAll('.tag');
    existingTags?.forEach(tag => {
      const text = tag.textContent.replace('×', '').trim();
      if (text && !tags.includes(text)) {
        tags.push(text);
      }
    });
  });

  // Initialize clickable filter tags
  const filterTags = document.querySelectorAll('.tag[data-filter]');

  filterTags.forEach(tag => {
    tag.setAttribute('role', 'button');
    tag.setAttribute('tabindex', '0');
    tag.setAttribute('aria-pressed', 'false');

    function toggleTag() {
      const isPressed = tag.getAttribute('aria-pressed') === 'true';
      tag.setAttribute('aria-pressed', (!isPressed).toString());
      tag.classList.toggle('active', !isPressed);

      // Fire filter event
      tag.dispatchEvent(new CustomEvent('axiom:tag:filter', {
        bubbles: true,
        detail: {
          tag: tag.dataset.filter,
          active: !isPressed,
          element: tag
        }
      }));
    }

    tag.addEventListener('click', toggleTag);
    tag.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTag();
      }
    });
  });
});

// --- Feature Toggle System ---
const featureToggles = {
  animations: true,
  transitions: true,
  cssReset: false,
  fonts: true,
  darkMode: true,

  /**
   * Check if a feature is enabled
   * @param {string} feature - Feature name
   * @returns {boolean}
   */
  isEnabled: function(feature) {
    return this[feature] === true;
  },

  /**
   * Toggle a feature on/off
   * @param {string} feature - Feature name
   * @param {boolean} enabled - Whether to enable the feature
   */
  toggle: function(feature, enabled) {
    this[feature] = enabled;
    // Dispatch event for components to react to
    document.dispatchEvent(new CustomEvent('axiom:feature:toggle', {
      detail: { feature, enabled }
    }));
  }
};

// --- Utility Functions ---
/**
 * Check if a CSS feature is enabled via custom properties
 * @param {string} property - CSS custom property name
 * @returns {boolean}
 */
function isFeatureEnabled(property) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(property);
  return value === 'true' || value === '1';
}

/**
 * Gets all focusable elements within a container (shared utility)
 * @param {HTMLElement} container - The container element
 * @returns {Array} Array of focusable elements
 */
function getFocusableElements(container) {
  return Array.from(container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )).filter(el => !el.hasAttribute('disabled') && el.offsetParent !== null);
}

/**
 * Trap tab key navigation within a container (shared utility)
 * @param {Event} event - The keydown event
 * @param {HTMLElement} container - The container element
 */
function trapTabKey(event, container) {
  const focusableElements = getFocusableElements(container);

  if (focusableElements.length === 0) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  // If shift+tab on first element, move to last element
  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  }
  // If tab on last element, move to first element
  else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
}

// --- Initialize Framework ---
document.addEventListener('DOMContentLoaded', () => {
  AxiomComponents.initAll();
});
