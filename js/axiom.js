/**
 * axiom.js
 * Core Axiom01 JavaScript utilities and component registration.
 */

console.log('axiom.js: Script loaded.');

// Ensure AxiomComponents object exists globally
if (typeof window.AxiomComponents === 'undefined') {
    window.AxiomComponents = {};
    console.log('axiom.js: window.AxiomComponents initialized.');
}

// Utility function to get computed CSS variable values
window.AxiomComponents.getCSSVariable = function(varName) {
    return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
};

// Utility for accessible focus management (e.g., for modals, drawers)
window.AxiomComponents.trapFocus = function(element) {
    const focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];

    if (!firstFocusableEl || !lastFocusableEl) {
        console.warn('trapFocus: No focusable elements found in', element);
        return;
    }

    element.addEventListener('keydown', function(e) {
        const isTabPressed = (e.key === 'Tab' || e.keyCode === 9);

        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) { /* shift + tab */
            if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus();
                e.preventDefault();
            }
        } else { /* tab */
            if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                e.preventDefault();
            }
        }
    });

    firstFocusableEl.focus();
};

// Basic utility for announcing content to screen readers
window.AxiomComponents.announce = function(message, polite = true) {
    let liveRegion = document.getElementById('axiom-live-region');
    if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', polite ? 'polite' : 'assertive');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.setAttribute('id', 'axiom-live-region');
        liveRegion.style.position = 'absolute';
        liveRegion.style.width = '1px';
        liveRegion.style.height = '1px';
        liveRegion.style.padding = '0';
        liveRegion.style.margin = '-1px';
        liveRegion.style.overflow = 'hidden';
        liveRegion.style.clip = 'rect(0, 0, 0, 0)';
        liveRegion.style.whiteSpace = 'nowrap';
        liveRegion.style.border = '0';
        document.body.appendChild(liveRegion);
    }
    liveRegion.textContent = ''; // Clear previous message
    setTimeout(() => { liveRegion.textContent = message; }, 100);
};

// Global DOMContentLoaded listener to initialize all registered components
document.addEventListener('DOMContentLoaded', () => {
    console.log('axiom.js: DOMContentLoaded fired. Initializing components...');
    for (const key in window.AxiomComponents) {
        if (window.AxiomComponents.hasOwnProperty(key) && typeof window.AxiomComponents[key].init === 'function') {
            // Skip core utilities and only initialize actual components
            if (key !== 'getCSSVariable' && key !== 'trapFocus' && key !== 'announce') {
                console.log(`axiom.js: Initializing component: ${key}`);
                window.AxiomComponents[key].init();
            }
        }
    }
    console.log('axiom.js: Component initialization complete.');
});