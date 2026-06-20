/**
 * Sticky Header with Scroll Shrink Effect
 * Makes header sticky and shrinks it when user scrolls down
 */

(function() {
    'use strict';

    const header = document.querySelector('header.main');
    if (!header) return;

    let lastScrollTop = 0;
    let isScrolled = false;

    function updateHeaderState() {
        const currentScroll = window.scrollY || document.documentElement.scrollTop;
        
        if (currentScroll > 10 && !isScrolled) {
            // User scrolled down - add scrolled class
            header.classList.add('scrolled');
            isScrolled = true;
        } else if (currentScroll <= 10 && isScrolled) {
            // User scrolled back to top - remove scrolled class
            header.classList.remove('scrolled');
            isScrolled = false;
        }
        
        lastScrollTop = currentScroll;
    }

    // Listen for scroll events with throttling
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateHeaderState();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Also check on page load in case user refreshed while scrolled
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateHeaderState);
    } else {
        updateHeaderState();
    }
})();
