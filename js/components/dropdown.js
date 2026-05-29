// js/components/dropdown.js
export default {
    /**
     * Initializes the dropdown component on a given DOM element.
     * Sets up event listeners and initial ARIA attributes.
     * @param {HTMLElement} element The main DOM element for the dropdown.
     * @returns {object} An object with a destroy method for cleanup.
     */
    init(element) {
        const toggleButton = element.querySelector('[data-dropdown-toggle], .dropdown-toggle');
        const dropdownMenu = element.querySelector('[data-dropdown-menu], .dropdown.menu');

        if (!toggleButton || !dropdownMenu) {
            console.error('Axiom: Dropdown component: Missing toggle button or menu.', element);
            return;
        }

        // --- Accessibility: Assign IDs if not present ---
        const uniqueId = Math.random().toString(36).substr(2, 9);
        const toggleHadId = Boolean(toggleButton.id);
        const menuHadId = Boolean(dropdownMenu.id);
        const menuHadRole = dropdownMenu.hasAttribute('role');
        toggleButton.id = toggleButton.id || `axiom-dropdown-toggle-${uniqueId}`;
        dropdownMenu.id = dropdownMenu.id || `axiom-dropdown-menu-${uniqueId}`;

        // --- Accessibility: Set initial ARIA attributes ---
        toggleButton.setAttribute('aria-haspopup', 'true');
        toggleButton.setAttribute('aria-expanded', 'false');
        toggleButton.setAttribute('aria-controls', dropdownMenu.id);
        if (!menuHadRole) {
            dropdownMenu.setAttribute('role', 'menu');
        }
        dropdownMenu.setAttribute('aria-labelledby', toggleButton.id);
        dropdownMenu.setAttribute('aria-hidden', 'true'); // Initially hidden

        const toggleDropdown = (isOpen) => {
            const newState = typeof isOpen === 'boolean' ? isOpen : !element.classList.contains('is-open');
            element.classList.toggle('is-open', newState);
            toggleButton.setAttribute('aria-expanded', newState);
            dropdownMenu.setAttribute('aria-hidden', !newState);
            // No need to toggle display directly, CSS handles it based on .is-open
        };

        const clickHandler = (event) => {
            event.stopPropagation(); // Prevent document click from closing immediately
            toggleDropdown();
        };

        const documentClickHandler = (event) => {
            if (!element.contains(event.target) && element.classList.contains('is-open')) {
                toggleDropdown(false); // Close dropdown
            }
        };

        const keydownHandler = (event) => {
            if (event.key === 'Escape' && element.classList.contains('is-open')) {
                toggleDropdown(false); // Close dropdown
                toggleButton.focus(); // Return focus to the toggle button
            }
            // TODO: Add keyboard navigation for menu items (Up/Down arrows, Home/End)
        };

        toggleButton.addEventListener('click', clickHandler);
        document.addEventListener('click', documentClickHandler);
        document.addEventListener('keydown', keydownHandler);

        return {
            /**
             * Cleans up the dropdown component by removing event listeners
             * and resetting ARIA attributes.
             */
            destroy() {
                toggleButton.removeEventListener('click', clickHandler);
                document.removeEventListener('click', documentClickHandler);
                document.removeEventListener('keydown', keydownHandler);

                // Reset ARIA attributes
                if (!toggleHadId) {
                    toggleButton.removeAttribute('id');
                }
                toggleButton.removeAttribute('aria-haspopup');
                toggleButton.removeAttribute('aria-expanded');
                toggleButton.removeAttribute('aria-controls');
                if (!menuHadId) {
                    dropdownMenu.removeAttribute('id');
                }
                if (!menuHadRole) {
                    dropdownMenu.removeAttribute('role');
                }
                dropdownMenu.removeAttribute('aria-labelledby');
                dropdownMenu.removeAttribute('aria-hidden');

                // Ensure dropdown is closed visually
                element.classList.remove('is-open');
            }
        };
    }
};
