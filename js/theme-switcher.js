// Axiom Enhanced Theme Switcher Component JS

class ThemeSwitcher {
    constructor(element) {
        console.log('ThemeSwitcher: Constructor called.');
        this.element = element;
        // Fix: Directly target the button by its ID
        this.button = document.getElementById('theme-toggle');
        this.dropdown = this.element.querySelector('.theme-dropdown'); // Fixed class name
        this.options = this.element.querySelectorAll('.theme-option');

        this.init();
    }

    init() {
        console.log('ThemeSwitcher: init() called.');
        if (this.button && this.dropdown) {
            this.button.addEventListener('click', (e) => {
                e.stopPropagation();
                console.log('ThemeSwitcher: Theme switcher button clicked.');
                this.toggle();
            });
        } else {
            console.warn('ThemeSwitcher: Theme switcher button or dropdown not found.', this.element);
        }

        // Handle theme option clicks
        this.options.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const theme = option.dataset.theme;
                this.setTheme(theme);
                this.updateActiveOption(theme);
                this.close();
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.element.contains(e.target)) {
                this.close();
            }
        });

        // Set initial active theme option
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.setTheme(savedTheme);
        this.updateActiveOption(savedTheme);
    }

    toggle() {
        if (this.dropdown) {
            this.dropdown.classList.toggle('open');
        }
    }

    close() {
        if (this.dropdown) {
            this.dropdown.classList.remove('open');
        }
    }

    updateActiveOption(theme) {
        this.options.forEach(option => {
            if (option.dataset.theme === theme) {
                option.classList.add('active');
                option.setAttribute('aria-pressed', 'true');
            } else {
                option.classList.remove('active');
                option.setAttribute('aria-pressed', 'false');
            }
        });
    }

    setTheme(theme) {
        console.log('ThemeSwitcher: Setting theme to:', theme);
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
}

window.AxiomComponents = window.AxiomComponents || {};
AxiomComponents.ThemeSwitcher = {
    init: function() {
        console.log('AxiomComponents.ThemeSwitcher.init called.');
        const themeSwitcherElements = document.querySelectorAll('.theme-switcher');
        themeSwitcherElements.forEach(element => {
            new ThemeSwitcher(element);
        });
    }
};
