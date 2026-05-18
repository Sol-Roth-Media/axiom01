// js/components/dropdown.js
export default {
    init(element) {
        const toggleButton = element.querySelector('.dropdown-toggle');
        const dropdownMenu = element.querySelector('.dropdown-menu');

        if (!toggleButton || !dropdownMenu) {
            console.error('Dropdown component: Missing toggle button or menu.', element);
            return;
        }

        const toggleDropdown = () => {
            const isOpen = element.classList.toggle('is-open');
            toggleButton.setAttribute('aria-expanded', isOpen);
            // No need to toggle display directly, CSS handles it based on .is-open
        };

        toggleButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent document click from closing immediately
            toggleDropdown();
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (event) => {
            if (!element.contains(event.target) && element.classList.contains('is-open')) {
                element.classList.remove('is-open');
                toggleButton.setAttribute('aria-expanded', 'false');
            }
        });

        // Close dropdown on escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && element.classList.contains('is-open')) {
                element.classList.remove('is-open');
                toggleButton.setAttribute('aria-expanded', 'false');
            }
        });
    }
};
