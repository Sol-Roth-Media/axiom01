/**
 * Axiom01 Account Menu Dropdown Component
 * 
 * Toggles dropdown visibility on button click.
 * Closes when clicking outside or pressing Escape.
 * Fully keyboard accessible.
 * 
 * HTML Structure:
 * <div class="account-menu" data-component="account-menu">
 *   <button class="account-button" aria-expanded="false" aria-haspopup="menu">
 *     <span class="account-icon">👤</span>
 *     <span class="account-name">User Name</span>
 *     <span class="account-toggle">⋮</span>
 *   </button>
 *   <ul class="account-dropdown" role="menu">
 *     <li><a href="/profile" role="menuitem">Profile</a></li>
 *     <li><a href="/settings" role="menuitem">Settings</a></li>
 *     <li><a href="/logout" role="menuitem">Logout</a></li>
 *   </ul>
 * </div>
 */

(function() {
  'use strict';

  const menuElements = document.querySelectorAll('[data-component="account-menu"]');
  
  menuElements.forEach(function(menu) {
    const button = menu.querySelector('.account-button');
    const dropdown = menu.querySelector('.account-dropdown');
    
    if (!button || !dropdown) return;
    
    /**
     * Toggle dropdown open/closed
     */
    function setDropdownOpen(isOpen) {
      button.setAttribute('aria-expanded', isOpen);
      dropdown.style.display = isOpen ? 'block' : 'none';
    }
    
    /**
     * Toggle on button click
     */
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      setDropdownOpen(!isOpen);
    });
    
    /**
     * Close when clicking outside
     */
    document.addEventListener('click', function(e) {
      if (!menu.contains(e.target)) {
        setDropdownOpen(false);
      }
    });
    
    /**
     * Close on Escape key
     */
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
      }
    });
    
    /**
     * Keyboard navigation in dropdown (arrow keys)
     */
    dropdown.addEventListener('keydown', function(e) {
      const items = Array.from(dropdown.querySelectorAll('[role="menuitem"]'));
      const currentIndex = items.indexOf(document.activeElement);
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = currentIndex + 1 < items.length ? currentIndex + 1 : 0;
        items[nextIndex].focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : items.length - 1;
        items[prevIndex].focus();
      }
    });
    
    /**
     * Set initial aria-label
     */
    const userName = button.querySelector('.account-name')?.textContent || 'User';
    button.setAttribute('aria-label', `Account menu for ${userName}`);
  });
})();
