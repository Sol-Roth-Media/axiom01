/**
 * Axiom Documentation Site Scripts
 * Handles interactive functionality for the documentation site
 */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.doc-menu-toggle');
  const sidebar = document.querySelector('.doc-sidebar');
  const overlay = document.querySelector('.doc-overlay');
  
  if (menuToggle && sidebar && overlay) {
    menuToggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('open');
      
      // Update ARIA attributes for accessibility
      const isExpanded = sidebar.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });
    
    overlay.addEventListener('click', function() {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
    
    // Close sidebar when clicking a link on mobile
    const sidebarLinks = document.querySelectorAll('.doc-sidebar-links a');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 900) {
          sidebar.classList.remove('open');
          overlay.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId !== '#') {
        e.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Offset for fixed header
          const headerHeight = document.querySelector('.doc-header').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Update URL without page jump
          history.pushState(null, null, targetId);
        }
      }
    });
  });
  
  // Active link highlighting based on scroll position
  const sections = document.querySelectorAll('.doc-section');
  const navLinks = document.querySelectorAll('.doc-nav-links a, .doc-sidebar-links a');
  
  function highlightNavLink() {
    const scrollPosition = window.scrollY;
    const headerHeight = document.querySelector('.doc-header').offsetHeight;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavLink);
  
  // Theme switcher
  const themeToggle = document.querySelector('.theme-toggle');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('axiom-docs-theme', newTheme);
      
      // Update toggle button text
      this.textContent = newTheme === 'light' ? '🌙' : '☀️';
      this.setAttribute('aria-label', `Switch to ${newTheme === 'light' ? 'dark' : 'light'} mode`);
    });
    
    // Set initial theme from localStorage
    const savedTheme = localStorage.getItem('axiom-docs-theme');
    
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      themeToggle.textContent = savedTheme === 'light' ? '🌙' : '☀️';
      themeToggle.setAttribute('aria-label', `Switch to ${savedTheme === 'light' ? 'dark' : 'light'} mode`);
    }
  }
  
  // Code block copy functionality
  document.querySelectorAll('.doc-code-block').forEach(block => {
    const codeElement = block.querySelector('code');
    
    if (codeElement) {
      // Create copy button
      const copyButton = document.createElement('button');
      copyButton.className = 'doc-copy-button';
      copyButton.innerHTML = '<i class="fas fa-copy"></i>';
      copyButton.setAttribute('aria-label', 'Copy code to clipboard');
      copyButton.setAttribute('title', 'Copy code to clipboard');
      
      // Add copy functionality
      copyButton.addEventListener('click', function() {
        const code = codeElement.textContent;
        navigator.clipboard.writeText(code).then(() => {
          // Visual feedback
          copyButton.innerHTML = '<i class="fas fa-check"></i>';
          setTimeout(() => {
            copyButton.innerHTML = '<i class="fas fa-copy"></i>';
          }, 2000);
        });
      });
      
      // Add button to code block
      block.style.position = 'relative';
      block.appendChild(copyButton);
    }
  });
  
  // Initialize on page load
  highlightNavLink();
});