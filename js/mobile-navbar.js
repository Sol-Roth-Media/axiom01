const MobileNavbar = {
  init: function() {
    const mainHeader = document.querySelector('[data-component="mobile-navbar"]');
    if (!mainHeader) return;

    const menuToggle = mainHeader.querySelector('.menu-toggle');
    const navLinks = mainHeader.querySelector('.links');

    if (!menuToggle || !navLinks) {
      console.warn('Axiom: Mobile navbar toggle or nav links not found within the main header.');
      return;
    }

    menuToggle.setAttribute('aria-controls', 'nav-links');
    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.addEventListener('click', (event) => {
      event.preventDefault();
      const isOpen = mainHeader.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });
  },

  destroy: function() {
    const mainHeader = document.querySelector('[data-component="mobile-navbar"]');
    if (!mainHeader) return;

    const menuToggle = mainHeader.querySelector('.menu-toggle');
    if (menuToggle) {
      // Simple way to remove listeners: replace the node.
      const newToggle = menuToggle.cloneNode(true);
      menuToggle.parentNode.replaceChild(newToggle, menuToggle);
    }
    mainHeader.classList.remove('is-open');
  }
};

export default MobileNavbar;