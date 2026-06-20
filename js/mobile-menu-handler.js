/**
 * Mobile Menu Handler - Direct implementation
 * Handles menu toggle for mobile navigation
 */

(function() {
    'use strict';

    function initMobileMenu() {
        const header = document.querySelector('header.main');
        const menuButton = document.querySelector('header.main .actions .menu');
        const navLinks = document.querySelector('header.main .links');

        if (!menuButton || !navLinks) {
            console.warn('Mobile menu button or nav links not found');
            return;
        }

        console.log('Mobile menu handler initialized');

        // Toggle menu
        menuButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Menu clicked, toggling...');
            header.classList.toggle('menu-open');
        });

        // Close menu when a link is clicked
        navLinks.addEventListener('click', function(e) {
            if (e.target.tagName === 'A' && header.classList.contains('menu-open')) {
                header.classList.remove('menu-open');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!header.contains(e.target) && header.classList.contains('menu-open')) {
                header.classList.remove('menu-open');
            }
        });

        // Close menu on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && header.classList.contains('menu-open')) {
                header.classList.remove('menu-open');
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
        initMobileMenu();
    }
})();
