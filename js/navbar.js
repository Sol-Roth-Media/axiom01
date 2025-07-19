// Navbar Fix for index.html
// This script adds the necessary functionality to make the navbar menu toggle work on small resolutions

document.addEventListener('DOMContentLoaded', function() {
  console.log('Navbar.js: DOMContentLoaded fired, initializing navbar functionality');

  // Initialize the main navbar
  const navbar = document.querySelector('.navbar-container');
  console.log('Navbar.js: Found navbar container:', !!navbar);

  if (navbar) {
    const mobileToggle = navbar.querySelector('.mobile-toggle');
    const navLinks = navbar.querySelector('.navbar-nav');

    console.log('Navbar.js: Found mobile toggle:', !!mobileToggle);
    console.log('Navbar.js: Found nav links:', !!navLinks);
    console.log('Navbar.js: Mobile toggle element:', mobileToggle);
    console.log('Navbar.js: Nav links element:', navLinks);

    if (!mobileToggle || !navLinks) {
      console.error('Navbar missing required elements. Mobile toggle:', !!mobileToggle, 'Nav links:', !!navLinks);
      return;
    }

    // Set initial state
    mobileToggle.setAttribute('aria-expanded', 'false');
    console.log('Navbar.js: Set initial aria-expanded to false');

    // Toggle menu when button is clicked
    mobileToggle.addEventListener('click', function(event) {
      console.log('Navbar.js: Mobile toggle clicked!');
      event.preventDefault();
      event.stopPropagation();

      // Toggle the open class on the nav links
      navLinks.classList.toggle('open');

      // Update the expanded state for accessibility
      const isExpanded = navLinks.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');

      // Toggle the icon between bars and xmark
      const iconElement = mobileToggle.querySelector('i');
      if (iconElement) {
        if (isExpanded) {
          iconElement.classList.remove('fa-bars');
          iconElement.classList.add('fa-xmark');
        } else {
          iconElement.classList.remove('fa-xmark');
          iconElement.classList.add('fa-bars');
        }
      }

      console.log('Navbar.js: Menu toggle completed. Menu is now:', isExpanded ? 'open' : 'closed');
      console.log('Navbar.js: Nav links classes:', navLinks.className);
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navbar.contains(event.target)) {
        navLinks.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');

        const iconElement = mobileToggle.querySelector('i');
        if (iconElement) {
          iconElement.classList.remove('fa-xmark');
          iconElement.classList.add('fa-bars');
        }
      }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');

        const iconElement = mobileToggle.querySelector('i');
        if (iconElement) {
          iconElement.classList.remove('fa-xmark');
          iconElement.classList.add('fa-bars');
        }
      }
    });

    console.log('Navbar.js: Mobile navbar toggle initialized successfully');
  } else {
    console.error('Navbar.js: Main navbar container not found');
  }

  // Force initialization for Axiom Components if it exists
  if (typeof window.AxiomComponents !== 'undefined' && window.AxiomComponents.Navbar) {
    console.log('Navbar.js: Calling AxiomComponents.Navbar.init()');
    window.AxiomComponents.Navbar.init();
  }
});
