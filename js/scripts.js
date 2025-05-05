/**
 * Axiom Framework Core Scripts
 *
 * Includes functionality for:
 * - Mobile navigation toggle
 * - Theme switching (light/dark mode + color scheme)
 * - Interactive component initialization (Tabs, Accordion, Dropdown, Modal, Toast)
 * - Demo component logic (Progress Bar, Throbber)
 *
 * Version: 0.1.0
 */

document.addEventListener('DOMContentLoaded', () => {

    /**
     * Mobile Navigation Toggle
     */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links'); // Assuming only one primary nav-links container

    if (menuToggle && navLinks) {
        // Initial ARIA state
        menuToggle.setAttribute('aria-expanded', 'false');
        navLinks.setAttribute('aria-hidden', 'true'); // Hide initially for JS users

        // Toggle navigation menu on button click
        menuToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open'); // Toggle 'open' state
            menuToggle.classList.toggle('open', isOpen); // Sync button state
            menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            navLinks.setAttribute('aria-hidden', !isOpen ? 'true' : 'false');
        });
    } else {
        console.warn("Axiom: Menu toggle button or navigation links container not found.");
    }

    /**
     * Theme Toggling Functionality (Mode + Scheme)
     */
    const themeToggleButtons = document.querySelectorAll('.theme-toggle'); // Get ALL theme toggles (navbar + fixed)
    const themeSchemeButtonsContainer = document.getElementById('theme-scheme-buttons');
    const defaultMode = 'light';
    const defaultScheme = 'blue'; // Matches the base hues in CSS

    // Function to apply the full theme (mode + scheme)
    function applyTheme(mode, scheme) {
        const theme = `${mode}-${scheme}`; // e.g., light-blue, dark-green
        document.documentElement.setAttribute('data-theme', theme);

        // Update active scheme button state
        if (themeSchemeButtonsContainer) {
            themeSchemeButtonsContainer.querySelectorAll('.theme-button').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.setScheme === scheme);
            });
        }
        // Update toggle button text/icon (Example uses text/emoji)
        themeToggleButtons.forEach(button => {
            // You might want more sophisticated icon switching logic here
            // Using textContent for simplicity; innerHTML could be used for icons
            button.textContent = mode === 'light' ? '🌙' : '☀️'; // Simple emoji example
            button.setAttribute('title', mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode');
            button.setAttribute('aria-label', mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode');
        });
    }

    // Function to toggle light/dark mode
    function toggleThemeMode() {
        let currentMode = defaultMode;
        let currentScheme = defaultScheme;
        try {
            currentMode = localStorage.getItem('themeMode') || defaultMode;
            currentScheme = localStorage.getItem('themeScheme') || defaultScheme;
        } catch (e) { /* Ignore */ }

        const newMode = currentMode === 'light' ? 'dark' : 'light';
        try {
            localStorage.setItem('themeMode', newMode);
        } catch (e) { console.warn("Axiom: Could not save theme mode preference.", e); }

        applyTheme(newMode, currentScheme);
    }

    // Function to set the color scheme
    function setColorScheme(scheme) {
        let currentMode = defaultMode;
        try {
            currentMode = localStorage.getItem('themeMode') || defaultMode;
        } catch (e) { /* Ignore */ }

        try {
            localStorage.setItem('themeScheme', scheme);
        } catch (e) { console.warn("Axiom: Could not save theme scheme preference.", e); }

        applyTheme(currentMode, scheme);
    }

    // Initial theme load
    let initialMode = defaultMode;
    let initialScheme = defaultScheme;
    try {
        initialMode = localStorage.getItem('themeMode') || defaultMode;
        initialScheme = localStorage.getItem('themeScheme') || defaultScheme;
    } catch (e) {
        console.warn("Axiom: Could not read theme preferences from localStorage.", e);
    }
    applyTheme(initialMode, initialScheme); // Apply loaded or default theme

    // Attach event listener to all theme toggle buttons
    if (themeToggleButtons.length > 0) {
        themeToggleButtons.forEach(button => {
            button.addEventListener('click', toggleThemeMode);
        });
    } else {
        console.warn("Axiom: No theme toggle buttons found with class '.theme-toggle'.");
    }

    // Attach event listeners to scheme buttons
    if (themeSchemeButtonsContainer) {
        themeSchemeButtonsContainer.querySelectorAll('.theme-button').forEach(button => {
            button.addEventListener('click', () => {
                const scheme = button.dataset.setScheme;
                if (scheme) {
                    setColorScheme(scheme);
                }
            });
        });
    } else {
        // This might appear if viewing a page without the full theme switcher UI
        // console.warn("Axiom: Theme scheme button container '#theme-scheme-buttons' not found.");
    }


    /**
     * Component Initializations
     */

        // Tab Component Initialization
    const tabLists = document.querySelectorAll('.tabs ul[role="tablist"]');
    if (tabLists.length > 0) {
        tabLists.forEach((tabList) => {
            const tabs = tabList.querySelectorAll('[role="tab"]');
            const tabContainer = tabList.closest('.tabs');
            if (!tabContainer) { console.warn("Axiom Tabs: Could not find parent '.tabs' container for tablist.", tabList); return; }
            const panels = tabContainer.querySelectorAll(':scope > [role="tabpanel"]');
            if (tabs.length !== panels.length) { console.warn("Axiom Tabs: Mismatch between number of tabs and panels in", tabContainer); return; }

            tabs.forEach((tab, index) => {
                const isSelected = tab.getAttribute('aria-selected') === 'true';
                tab.setAttribute('tabindex', isSelected ? '0' : '-1');
                if (panels[index]) { panels[index].hidden = !isSelected; }
                tab.addEventListener('click', () => {
                    tabs.forEach((t) => { t.setAttribute('aria-selected', 'false'); t.setAttribute('tabindex', '-1'); });
                    panels.forEach((panel) => panel.hidden = true);
                    tab.setAttribute('aria-selected', 'true'); tab.setAttribute('tabindex', '0');
                    if (panels[index]) { panels[index].hidden = false; }
                });
                tab.addEventListener('keydown', (e) => {
                    let newIndex = index; let moved = false;
                    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { newIndex = (index + 1) % tabs.length; moved = true; }
                    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { newIndex = (index - 1 + tabs.length) % tabs.length; moved = true; }
                    else if (e.key === 'Home') { newIndex = 0; moved = true; }
                    else if (e.key === 'End') { newIndex = tabs.length - 1; moved = true; }
                    if (moved) { e.preventDefault(); tabs[newIndex].focus(); /* tabs[newIndex].click(); // Optional: activate on arrow */ }
                });
            });
        });
    }

    // Accordion Component Initialization
    const accordionHeaders = document.querySelectorAll('.accordion h3');
    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach((header) => {
            const panel = header.nextElementSibling;
            if (!panel || panel.tagName === 'H3') { console.warn("Axiom Accordion: Could not find panel for header:", header); return; }
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            header.setAttribute('role', 'button'); header.setAttribute('aria-expanded', isExpanded ? 'true' : 'false'); header.setAttribute('tabindex', '0');
            panel.hidden = !isExpanded;
            header.addEventListener('click', () => { const currentlyExpanded = header.getAttribute('aria-expanded') === 'true'; header.setAttribute('aria-expanded', String(!currentlyExpanded)); panel.hidden = currentlyExpanded; });
            header.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); header.click(); } });
        });
    }

    // Dropdown Menu Component Initialization
    const dropdownToggles = document.querySelectorAll('.dropdown .dropdown-toggle');
    if (dropdownToggles.length > 0) {
        dropdownToggles.forEach(toggle => {
            const dropdown = toggle.closest('.dropdown'); if (!dropdown) return;
            const menu = dropdown.querySelector('.dropdown-menu'); if (!menu) return;
            toggle.setAttribute('aria-haspopup', 'true'); toggle.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-hidden', 'true');
            toggle.addEventListener('click', (e) => { e.stopPropagation(); const isOpen = menu.classList.toggle('show'); menu.setAttribute('aria-hidden', String(!isOpen)); toggle.setAttribute('aria-expanded', String(isOpen)); });
        });
        document.addEventListener('click', (e) => {
            document.querySelectorAll('.dropdown .dropdown-menu.show').forEach(openMenu => {
                const dropdown = openMenu.closest('.dropdown');
                if (dropdown && !dropdown.contains(e.target)) { openMenu.classList.remove('show'); openMenu.setAttribute('aria-hidden', 'true'); const toggle = dropdown.querySelector('.dropdown-toggle'); if (toggle) { toggle.setAttribute('aria-expanded', 'false'); } }
            });
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.dropdown .dropdown-menu.show').forEach(openMenu => {
                    openMenu.classList.remove('show'); openMenu.setAttribute('aria-hidden', 'true'); const dropdown = openMenu.closest('.dropdown'); const toggle = dropdown?.querySelector('.dropdown-toggle'); if (toggle) { toggle.setAttribute('aria-expanded', 'false'); toggle.focus(); }
                });
            }
        });
    }

    // Modal Component Initialization
    const modals = document.querySelectorAll('.modal');
    if (modals.length > 0) {
        modals.forEach(modal => {
            const modalId = modal.id;
            if (!modalId) { console.warn("Axiom Modal: Modal element missing required 'id' attribute.", modal); return; }

            const openTriggers = document.querySelectorAll(`[data-modal-target="#${modalId}"]`);
            // Select close triggers within this specific modal
            const closeTriggers = modal.querySelectorAll('[data-modal-close]');
            let lastFocusedElement = null; // To store focus before opening

            const openModal = (triggerElement) => {
                lastFocusedElement = triggerElement || document.activeElement; // Store the element that opened the modal
                modal.classList.add('active');
                modal.setAttribute('aria-hidden', 'false');
                // Basic focus management - focus first focusable element inside
                // More robust focus trapping is recommended for production
                const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                const firstFocusable = focusableElements[0];
                if (firstFocusable) { firstFocusable.focus(); } else { modal.focus(); } // Fallback
            };

            const closeModal = () => {
                modal.classList.remove('active');
                modal.setAttribute('aria-hidden', 'true');
                // Return focus to the element that opened the modal
                if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
                    lastFocusedElement.focus();
                }
            };

            openTriggers.forEach(trigger => {
                trigger.addEventListener('click', () => openModal(trigger));
            });

            closeTriggers.forEach(trigger => {
                trigger.addEventListener('click', closeModal);
            });

            // Close on Escape key
            modal.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') { closeModal(); }
                // Basic focus trapping (can be improved)
                if (e.key === 'Tab') {
                    const focusableElements = Array.from(modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(el => el.offsetParent !== null); // Only visible/focusable
                    if (focusableElements.length === 0) return; // No focusable elements

                    const firstFocusable = focusableElements[0];
                    const lastFocusable = focusableElements[focusableElements.length - 1];

                    if (e.shiftKey) { // Shift + Tab
                        if (document.activeElement === firstFocusable) {
                            lastFocusable.focus();
                            e.preventDefault();
                        }
                    } else { // Tab
                        if (document.activeElement === lastFocusable) {
                            firstFocusable.focus();
                            e.preventDefault();
                        }
                    }
                }
            });
        });
    }

    // Toast Notification Functionality
    const toastContainer = document.getElementById('toastPlacement');
    // Expose function to global scope OR use event listeners to trigger toasts
    window.showToast = function(message = 'Default Toast Message', {
        id = `toast-${Date.now()}`, // Generate unique ID
        title = 'Notification',
        type = '', // e.g., 'toast-success', 'toast-error'
        duration = 5000 // Auto-dismiss duration in ms (null for no auto-dismiss)
    } = {}) {
        if (!toastContainer) {
            console.error("Axiom Toast: Toast container '#toastPlacement' not found.");
            return;
        }

        const toastClasses = ['toast', type].filter(Boolean).join(' '); // Add type class if provided

        const toastHTML = `
            <div class="${toastClasses}" id="${id}" role="alert" aria-live="assertive" aria-atomic="true">
              <div class="toast-body">
                 ${title ? `<strong>${title}</strong><br>` : ''}
                 ${message}
              </div>
              <button type="button" class="toast-close" aria-label="Close" onclick="this.closest('.toast').remove()">&times;</button>
            </div>`;

        toastContainer.insertAdjacentHTML('beforeend', toastHTML);
        const newToast = document.getElementById(id);

        // Trigger animation (already handled by CSS animation)

        // Auto-dismiss
        if (duration !== null && duration > 0) {
            setTimeout(() => {
                // Add exit animation class before removing (optional)
                newToast?.remove();
            }, duration);
        }
    };

    // Example Toast Triggers (Remove or adapt for your application)
    const showToastBtn = document.getElementById('showToastBtn');
    if (showToastBtn) {
        showToastBtn.addEventListener('click', () => {
            window.showToast('This is a standard toast.', { type: 'toast-info', title: 'Info' });
        });
    }
    const showErrorToastBtn = document.getElementById('showErrorToastBtn');
    if (showErrorToastBtn) {
        showErrorToastBtn.addEventListener('click', () => {
            window.showToast('Something went wrong!', { type: 'toast-error', title: 'Error', duration: null }); // No auto-dismiss
        });
    }


    // --- Demo Specific JS ---
    // Progress Bar Example
    const progressDemoSection = document.getElementById('progress-bar-demo');
    if (progressDemoSection) {
        const progressBar = progressDemoSection.querySelector('.progress-bar .progress');
        const progressContainer = progressDemoSection.querySelector('.progress-bar');
        const progressButton = progressDemoSection.querySelector('.progress-btn');
        let progressValue = 0;
        if (progressBar && progressContainer && progressButton) {
            if (!progressContainer.hasAttribute('aria-valuenow')) { progressContainer.setAttribute('aria-valuenow', '0'); }
            else { progressValue = parseInt(progressContainer.getAttribute('aria-valuenow'), 10) || 0; progressBar.style.width = `${progressValue}%`; }
            progressButton.addEventListener('click', () => {
                progressValue = Math.min(progressValue + 10, 100); progressBar.style.width = `${progressValue}%`; progressContainer.setAttribute('aria-valuenow', progressValue);
                if (progressValue === 100) { progressButton.textContent = 'Completed!'; progressButton.disabled = true; }
            });
        } else { console.warn("Axiom Progress Demo: Missing elements within #progress-bar-demo."); }
    }
    // Throbber Example
    const toggleLoadingButton = document.getElementById('toggle-loading'); const loadingThrobber = document.getElementById('loading-throbber');
    if (toggleLoadingButton && loadingThrobber) {
        const isInitiallyLoading = loadingThrobber.classList.contains('active'); loadingThrobber.setAttribute('aria-hidden', String(!isInitiallyLoading)); toggleLoadingButton.textContent = isInitiallyLoading ? 'Stop Loading' : 'Start Loading';
        toggleLoadingButton.addEventListener('click', () => { const isLoading = loadingThrobber.classList.toggle('active'); loadingThrobber.setAttribute('aria-hidden', String(!isLoading)); toggleLoadingButton.textContent = isLoading ? 'Stop Loading' : 'Start Loading'; });
    }


    // --- End of DOMContentLoaded ---
});
