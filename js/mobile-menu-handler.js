/**
 * Mobile Menu Handler - Direct implementation
 * Handles menu toggle for mobile navigation
 */

(function() {
    'use strict';

    function initMobileMenu() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', startHandler);
            return;
        }
        startHandler();
    }

    function startHandler() {
        const header = document.querySelector('header.main');
        
        // Try different selectors for the menu button
        let menuButton = document.querySelector('header.main .actions .menu.toggle');
        if (!menuButton) {
            menuButton = document.querySelector('header.main .menu.toggle');
        }
        if (!menuButton) {
            menuButton = document.querySelector('.menu.toggle');
        }
        
        let navLinks = document.querySelector('header.main .links');
        if (!navLinks) {
            navLinks = document.querySelector('header.main ul.links');
        }

        if (!header || !menuButton || !navLinks) {
            console.warn('Mobile menu: Could not find required elements', {
                header: !!header,
                menuButton: !!menuButton,
                navLinks: !!navLinks
            });
            return;
        }

        console.log('Mobile menu handler initialized successfully');

        // Toggle menu on button click
        menuButton.addEventListener('click', function(e) {
            console.log('Menu button clicked');
            e.preventDefault();
            e.stopPropagation();
            const isOpen = header.classList.toggle('menu-open');
            console.log('Menu is now:', isOpen ? 'open' : 'closed');
        });

        // Close menu when a link is clicked
        navLinks.addEventListener('click', function(e) {
            if (e.target.tagName === 'A' && header.classList.contains('menu-open')) {
                console.log('Menu link clicked, closing menu');
                header.classList.remove('menu-open');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (header.classList.contains('menu-open') && !header.contains(e.target)) {
                console.log('Outside click, closing menu');
                header.classList.remove('menu-open');
            }
        });

        // Close menu on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && header.classList.contains('menu-open')) {
                console.log('Escape key, closing menu');
                header.classList.remove('menu-open');
            }
        });
    }

    // Initialize
    initMobileMenu();
})();
