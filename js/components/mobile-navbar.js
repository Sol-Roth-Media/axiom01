// js/components/mobile-navbar.js
export default {
  /**
   * Initializes the mobile navbar component.
   * Sets up event listeners and initial ARIA attributes for accessibility.
   * @param {HTMLElement} element The main DOM element for the mobile navbar (e.g., header.main).
   * @returns {object} An object with a destroy method for cleanup.
   */
  init: function(element) {
    const menuToggleButton = element.querySelector('.menutoggle');
    const navLinks = element.querySelector('ul.links');

    if (!menuToggleButton || !navLinks) {
      console.error('Axiom: Mobile Navbar component: Missing menu toggle button or navigation links.', element);
      return;
    }

    // --- Accessibility: Assign IDs if not present ---
    const uniqueId = Math.random().toString(36).substr(2, 9);
    menuToggleButton.id = menuToggleButton.id || `axiom-menutoggle-${uniqueId}`;
    navLinks.id = navLinks.id || `axiom-nav-links-${uniqueId}`;

    // --- Accessibility: Set initial ARIA attributes ---
    menuToggleButton.setAttribute('aria-controls', navLinks.id);
    // Initial state is closed, so aria-expanded is false
    menuToggleButton.setAttribute('aria-expanded', 'false');
    // Initial state is hidden for mobile, so aria-hidden is true
    navLinks.setAttribute('aria-hidden', 'true');

    const toggleMenu = () => {
      const isOpen = element.classList.toggle('menu-open');
      menuToggleButton.setAttribute('aria-expanded', isOpen);
      navLinks.setAttribute('aria-hidden', !isOpen);
    };

    const clickHandler = (event) => {
      // Ensure we only toggle if the menu toggle button itself was clicked
      if (event.target.closest('.menutoggle') === menuToggleButton) {
        toggleMenu();
      }
    };

    // Attach event listener to the menu toggle button
    menuToggleButton.addEventListener('click', clickHandler);

    // Optional: Close menu if a link inside is clicked (for SPA-like behavior)
    const linkClickHandler = (event) => {
        if (event.target.tagName === 'A' && element.classList.contains('menu-open')) {
            toggleMenu(); // Close the menu after a link is clicked
        }
    };
    navLinks.addEventListener('click', linkClickHandler);


    console.log('Axiom: Mobile Navbar component initialized:', element);

    return {
      /**
       * Cleans up the mobile navbar component by removing event listeners
       * and resetting ARIA attributes.
       */
      destroy() {
        menuToggleButton.removeEventListener('click', clickHandler);
        navLinks.removeEventListener('click', linkClickHandler);

        // Reset ARIA attributes
        menuToggleButton.removeAttribute('id');
        menuToggleButton.removeAttribute('aria-controls');
        menuToggleButton.removeAttribute('aria-expanded');
        navLinks.removeAttribute('id');
        navLinks.removeAttribute('aria-hidden');

        // Ensure menu is closed visually
        element.classList.remove('menu-open');
      }
    };
  }
};
