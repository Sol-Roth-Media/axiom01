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
    
    Object.keys(this.registry).forEach(component => {
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
      
      // Add entrance animation class
      setTimeout(() => {
        notification.classList.add('show');
      }, 10);
      
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
    notification.classList.add('hiding');
    
    // Remove after animation completes
    notification.addEventListener('animationend', () => {
      notification.remove();
    });
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
        slides[current].focus();
      });
    }

    // Indicators
    if (indicators) {
      Array.from(indicators.children).forEach((dot, i) => {
        dot.addEventListener('click', () => {
          updateSlides(i);
          slides[i].focus();
        });
      });
    }

    // Keyboard navigation
    carousel.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') {
        if (prevBtn) prevBtn.click();
      } else if (e.key === 'ArrowRight') {
        if (nextBtn) nextBtn.click();
      }
    });

    // Touch/swipe support
    let startX = null;
    track.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });
    track.addEventListener('touchend', e => {
      if (startX !== null) {
        const endX = e.changedTouches[0].clientX;
        if (endX - startX > 40 && prevBtn) prevBtn.click();
        else if (startX - endX > 40 && nextBtn) nextBtn.click();
        startX = null;
      }
    });

    // Initial state
    updateSlides(current);
  });
});

// --- Initialize all components when DOM is loaded ---
document.addEventListener('DOMContentLoaded', function() {
  AxiomComponents.initAll();
});