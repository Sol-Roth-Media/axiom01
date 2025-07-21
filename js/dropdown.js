// js/dropdown.js

const Dropdown = {
    init(element) {
        const toggleButton = element.querySelector('.dropdown-toggle');
        const menu = element.querySelector('.dropdown-menu');

        if (!toggleButton || !menu) {
            console.error('Axiom: Dropdown component is missing required elements (toggle or menu).');
            return;
        }

        toggleButton.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = menu.classList.contains('is-open');
            // Close all other dropdowns
            document.querySelectorAll('.dropdown-menu.is-open').forEach(openMenu => {
                if (openMenu !== menu) {
                    openMenu.classList.remove('is-open');
                }
            });
            menu.classList.toggle('is-open');
        });

        // Close the menu if the user clicks outside of it
        document.addEventListener('click', () => {
            menu.classList.remove('is-open');
        });
    }
};

export default Dropdown;