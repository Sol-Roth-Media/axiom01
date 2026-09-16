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

        const getMenuItems = () =>
            Array.from(dropdownMenu.querySelectorAll('[role="menuitem"], a, button')).filter((item) => {
                return item.offsetParent !== null && !item.hasAttribute('disabled');
            });

        const toggleDropdown = (isOpen, options = {}) => {
            const { restoreFocus = false, focusFirst = false } = options;
            const newState = typeof isOpen === 'boolean' ? isOpen : !element.classList.contains('is-open');
            element.classList.toggle('is-open', newState);
            toggleButton.setAttribute('aria-expanded', newState);
            dropdownMenu.setAttribute('aria-hidden', !newState);
            // No need to toggle display directly, CSS handles it based on .is-open

            if (newState && focusFirst) {
                getMenuItems()[0]?.focus();
            }
            if (!newState && restoreFocus) {
                toggleButton.focus();
            }
        };

        const clickHandler = (event) => {
            event.stopPropagation(); // Prevent document click from closing immediately
            const isOpen = element.classList.contains('is-open');
            toggleDropdown(!isOpen, { focusFirst: !isOpen });
        };

        const documentClickHandler = (event) => {
            if (!element.contains(event.target) && element.classList.contains('is-open')) {
                toggleDropdown(false); // Close dropdown
            }
        };

        const keydownHandler = (event) => {
            if (event.key === 'Escape' && element.classList.contains('is-open')) {
                event.preventDefault();
                toggleDropdown(false, { restoreFocus: true });
            }

            if (!element.classList.contains('is-open')) {
                return;
            }

            const menuItems = getMenuItems();
            if (!menuItems.length) {
                return;
            }

            const activeIndex = menuItems.indexOf(document.activeElement);

            if (event.key === 'ArrowDown') {
                event.preventDefault();
                const nextIndex = activeIndex + 1 < menuItems.length ? activeIndex + 1 : 0;
                menuItems[nextIndex].focus();
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                const prevIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : menuItems.length - 1;
                menuItems[prevIndex].focus();
            } else if (event.key === 'Home') {
                event.preventDefault();
                menuItems[0].focus();
            } else if (event.key === 'End') {
                event.preventDefault();
                menuItems[menuItems.length - 1].focus();
            }
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
