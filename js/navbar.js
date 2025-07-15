/**
 * Axiom01 Navbar Component JavaScript
 * Handles mobile menu toggle functionality and accessibility
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all navbars on the page
  initAllNavbars();
});

/**
 * Initialize all navbar components on the page
 */
function initAllNavbars() {
  // Get all navbar elements
  const navbars = document.querySelectorAll('.navbar');
  
  navbars.forEach(navbar => {
    const menuToggle = navbar.querySelector('.menu-toggle');
    const navLinks = navbar.querySelector('.nav-links');
    
    if (!menuToggle || !navLinks) {
      console.warn('Navbar missing required elements:', navbar);
      return;
    }
    
    initNavbarToggle(menuToggle, navLinks);
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
        menuToggle.focus();
      });
    }
  });
}

/**
 * Initialize a single navbar toggle button
 * @param {HTMLElement} menuToggle - The menu toggle button
 * @param {HTMLElement} navLinks - The navigation links container
 */
function initNavbarToggle(menuToggle, navLinks) {
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
}