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

// Add theme demo functionality for the index.html theme showcase
document.addEventListener('DOMContentLoaded', function() {
    // Handle theme demo cards in the interactive showcase
    const themeDemoCards = document.querySelectorAll('.theme-demo-card');

    themeDemoCards.forEach(card => {
        card.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            if (theme) {
                // Remove active class from all cards
                themeDemoCards.forEach(c => c.classList.remove('active'));
                // Add active class to clicked card
                this.classList.add('active');

                // Apply theme to document
                document.documentElement.setAttribute('data-theme', theme);

                // Update the main theme switcher in navbar to match
                const themeOptions = document.querySelectorAll('.theme-option');
                themeOptions.forEach(option => {
                    option.classList.remove('active');
                    option.setAttribute('aria-pressed', 'false');
                    if (option.getAttribute('data-theme') === theme) {
                        option.classList.add('active');
                        option.setAttribute('aria-pressed', 'true');
                    }
                });

                console.log('Theme changed to:', theme);
            }
        });
    });

    // Handle "View All Themes" button
    const viewAllThemesBtn = document.querySelector('.theme-showcase-cta button');
    if (viewAllThemesBtn) {
        viewAllThemesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Trigger the theme switcher dropdown
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) {
                themeToggle.click();
            }
        });
    }
});
