// js/theme-switcher.js

const ThemeSwitcher = {
    init(element) {
        const selectElement = element.querySelector('select');
        if (!selectElement) {
            console.error('Axiom: Theme switcher component requires a select element.');
            return;
        }

        const htmlElement = document.documentElement;

        // Set initial value
        selectElement.value = htmlElement.getAttribute('data-theme') || 'light';

        selectElement.addEventListener('change', () => {
            htmlElement.setAttribute('data-theme', selectElement.value);
        });
    }
};

export default ThemeSwitcher;