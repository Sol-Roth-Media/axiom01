// Navbar Fix for index.html
// This script adds the necessary functionality to make the navbar menu toggle work on small resolutions

document.addEventListener('DOMContentLoaded', function() {
  console.log('Adding navbar functionality to index.html');

  // Initialize the main navbar
  const navbar = document.querySelector('.navbar-container');

  if (navbar) {
    const mobileToggle = navbar.querySelector('.mobile-toggle');
    const navLinks = navbar.querySelector('.navbar-nav');

    if (!mobileToggle || !navLinks) {
      console.warn('Navbar missing required elements. Found mobile toggle:', !!mobileToggle, 'Found nav links:', !!navLinks);
      return;
    }

    // Set initial state
    mobileToggle.setAttribute('aria-expanded', 'false');

    // Toggle menu when button is clicked
    mobileToggle.addEventListener('click', function(event) {
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

      console.log('Mobile menu toggle clicked, menu is now:', isExpanded ? 'open' : 'closed');
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

    console.log('Mobile navbar toggle initialized successfully');
  } else {
    console.warn('Main navbar container not found');
  }
});
