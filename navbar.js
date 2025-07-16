// Navbar Component for Axiom01
// This script provides the necessary functionality for the navbar component, including menu toggle, keyboard navigation, and accessibility features

// Function to initialize all navbars on the page
function initAllNavbars() {
  console.log('Initializing all navbars on the page');
  
  const navbars = document.querySelectorAll('.navbar');

  navbars.forEach(navbar => {
    const menuToggle = navbar.querySelector('.menu-toggle');
    const navLinks = navbar.querySelector('.nav-links');

    if (!menuToggle || !navLinks) {
      console.warn('Navbar missing required elements:', navbar);
      return;
    }

    // Set initial state
    menuToggle.setAttribute('aria-expanded', 'false');

    // Toggle menu when button is clicked
    menuToggle.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();

      // Toggle the open class on the nav links
      navLinks.classList.toggle('open');

      // Update the expanded state for accessibility
      const isExpanded = navLinks.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');

      // Toggle the icon between bars and xmark
      const iconElement = menuToggle.querySelector('i');
      if (iconElement) {
        if (isExpanded) {
          iconElement.classList.remove('fa-bars');
          iconElement.classList.add('fa-xmark');
        } else {
          iconElement.classList.remove('fa-xmark');
          iconElement.classList.add('fa-bars');
        }
      }

      console.log('Menu toggle clicked, menu is now:', isExpanded ? 'open' : 'closed');
    });

    // Add keyboard navigation for links
    const links = navLinks.querySelectorAll('a');

    links.forEach((link, index) => {
      link.addEventListener('keydown', function(event) {
        let targetLink = null;

        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
          event.preventDefault();
          targetLink = links[(index + 1) % links.length];
        } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
          event.preventDefault();
          targetLink = links[(index - 1 + links.length) % links.length];
        } else if (event.key === 'Home') {
          event.preventDefault();
          targetLink = links[0];
        } else if (event.key === 'End') {
          event.preventDefault();
          targetLink = links[links.length - 1];
        }

        if (targetLink) {
          targetLink.focus();
        }
      });
    });

    // Add smooth scrolling for same-page navigation links
    links.forEach(link => {
      if (link.hash && link.getAttribute('href').startsWith('#')) {
        link.addEventListener('click', function(event) {
          const targetId = link.hash.slice(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Optionally update the URL hash
            history.pushState(null, '', link.hash);
          }
        });
      }
    });
  });

  // Close menus when clicking outside
  document.addEventListener('click', function(event) {
    const openNavLinks = document.querySelectorAll('.nav-links.open');

    openNavLinks.forEach(navLinks => {
      const navbar = navLinks.closest('.navbar');
      const menuToggle = navbar.querySelector('.menu-toggle');

      if (!navbar.contains(event.target) || event.target.closest('a')) {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');

        // Reset icon to bars
        const iconElement = menuToggle.querySelector('i');
        if (iconElement) {
          iconElement.classList.remove('fa-xmark');
          iconElement.classList.add('fa-bars');
        }
      }
    });
  });

  // Close menus with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      const openNavLinks = document.querySelectorAll('.nav-links.open');

      openNavLinks.forEach(navLinks => {
        const navbar = navLinks.closest('.navbar');
        const menuToggle = navbar.querySelector('.menu-toggle');

        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');

        // Reset icon to bars
        const iconElement = menuToggle.querySelector('i');
        if (iconElement) {
          iconElement.classList.remove('fa-xmark');
          iconElement.classList.add('fa-bars');
        }

        menuToggle.focus();
      });
    }
  });
}

// Initialize navbars when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Check if navbar.js is already loaded
  if (typeof initAllNavbars === 'function') {
    console.log('Initializing navbars');
    initAllNavbars();
  } else {
    console.log('navbar.js is already loaded, no need to add functionality');
  }
});

// Add ARIA live region for menu state announcements
function addAriaLiveRegion() {
  // Create ARIA live region if it doesn't exist
  if (!document.querySelector('.navbar-live-region')) {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('class', 'visually-hidden navbar-live-region');
    document.body.appendChild(liveRegion);
    
    // Add event listeners to all menu toggles
    const menuToggles = document.querySelectorAll('.navbar .menu-toggle');
    menuToggles.forEach(menuToggle => {
      menuToggle.addEventListener('click', function() {
        setTimeout(() => {
          const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
          liveRegion.textContent = isExpanded ? 'Navigation menu expanded' : 'Navigation menu collapsed';
        }, 100);
      });
    });
  }
}

// Initialize ARIA live region when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  addAriaLiveRegion();
});