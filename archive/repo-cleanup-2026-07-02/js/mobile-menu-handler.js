/**
 * Mobile Menu Handler - Direct implementation
 * Handles menu toggle for mobile navigation
 * THIS MUST WORK - bulletproof version
 */

console.log('[Mobile Menu] Script starting...');

// Immediate initialization function
(function initMenu() {
    'use strict';
    
    console.log('[Mobile Menu] Initializing...');

    // Wait for DOM if needed
    const setupMenuHandler = () => {
        console.log('[Mobile Menu] DOM Ready, setting up...');
        
        const header = document.querySelector('header.main');
        const menuBtn = document.querySelector('header.main button.menu.toggle');
        const navLinks = document.querySelector('header.main ul.links');

        console.log('[Mobile Menu] Found:', {
            header: !!header,
            menuBtn: !!menuBtn,
            navLinks: !!navLinks
        });

        if (!header || !menuBtn || !navLinks) {
            console.error('[Mobile Menu] Missing required elements!');
            return;
        }

        console.log('[Mobile Menu] All elements found, attaching listeners...');

        // Click handler for menu button
        const clickHandler = (e) => {
            console.log('[Mobile Menu] Button clicked');
            e.preventDefault();
            e.stopPropagation();
            
            const isOpen = header.classList.toggle('menu-open');
            console.log('[Mobile Menu] Menu toggled:', isOpen ? 'OPEN' : 'CLOSED');
        };

        // Add listener - use both capture and bubble phases
        menuBtn.addEventListener('click', clickHandler, false);
        menuBtn.addEventListener('touchend', clickHandler, false);
        
        console.log('[Mobile Menu] Click listeners attached');

        // Close menu when a link is clicked
        navLinks.addEventListener('click', function(e) {
            console.log('[Mobile Menu] Link clicked');
            if (e.target.tagName === 'A' && header.classList.contains('menu-open')) {
                console.log('[Mobile Menu] Closing menu after link click');
                header.classList.remove('menu-open');
            }
        }, false);

        // Close menu on outside click
        document.addEventListener('click', function(e) {
            if (header.classList.contains('menu-open') && !header.contains(e.target)) {
                console.log('[Mobile Menu] Outside click, closing');
                header.classList.remove('menu-open');
            }
        }, false);

        // Close menu on Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && header.classList.contains('menu-open')) {
                console.log('[Mobile Menu] Escape pressed, closing');
                header.classList.remove('menu-open');
            }
        }, false);

        console.log('[Mobile Menu] ✓ FULLY INITIALIZED');
        console.log('[Mobile Menu] Button should now respond to clicks');
    };

    // Check if DOM is already ready
    if (document.readyState === 'loading') {
        console.log('[Mobile Menu] Document loading, waiting for DOMContentLoaded');
        document.addEventListener('DOMContentLoaded', setupMenuHandler);
    } else {
        console.log('[Mobile Menu] Document already loaded');
        setupMenuHandler();
    }
})();

console.log('[Mobile Menu] Script loaded');
