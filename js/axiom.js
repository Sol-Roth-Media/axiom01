class Axiom {
    constructor() {
        this.components = {};
        document.addEventListener('DOMContentLoaded', () => this.init());
    }

    async loadComponent(componentName) {
        if (this.components[componentName]) {
            return this.components[componentName];
        }

        // Updated path to be relative to the js/ directory
        const componentPath = `./${componentName}.js`; 
        try {
            const module = await import(componentPath);
            if (module.default && typeof module.default.init === 'function') {
                this.components[componentName] = module.default;
                return module.default;
            } else {
                console.error(`Axiom: Component ${componentName} does not have a default export with an init method.`);
                return null;
            }
        } catch (error) {
            console.error(`Axiom: Failed to load component ${componentName}.`, error);
            return null;
        }
    }

    async init() {
        console.log('Axiom: Initializing...');

        // Initialize theme toggle functionality first
        this.initializeThemeToggle();

        const componentElements = document.querySelectorAll('[data-component]');
        const loadPromises = [];

        componentElements.forEach(element => {
            const componentName = element.dataset.component;
            if (componentName) {
                // Pass the element to the loader
                loadPromises.push(this.loadComponent(componentName, element)); 
            }
        });

        await Promise.all(loadPromises);

        for (const componentName in this.components) {
            if (this.components.hasOwnProperty(componentName)) {
                try {
                    // Find all elements for this component and init them
                    const elements = document.querySelectorAll(`[data-component="${componentName}"]`);
                    elements.forEach(element => {
                        this.components[componentName].init(element);
                        console.log(`Axiom: Initialized component: ${componentName} on`, element);
                    });
                } catch (error) {
                    console.error(`Axiom: Error initializing component ${componentName}.`, error);
                }
            }
        }
        console.log('Axiom: Initialization complete.');
        this.initSearchModal();
    }

    // FIXED: Complete theme toggle functionality for index.html
    initializeThemeToggle() {
        const themeToggleButton = document.getElementById('theme-toggle');
        if (!themeToggleButton) return;

        const html = document.documentElement;
        const themeIcon = themeToggleButton.querySelector('i');

        // Get current theme
        const getCurrentTheme = () => html.getAttribute('data-theme') || 'light';

        // Update icon based on theme
        const updateIcon = (theme) => {
            if (themeIcon) {
                themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
            themeToggleButton.setAttribute('aria-label',
                theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            );
        };

        // Toggle theme
        const toggleTheme = () => {
            const currentTheme = getCurrentTheme();
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('axiom-theme', newTheme);
            updateIcon(newTheme);
        };

        // Initialize theme from localStorage or default to light
        const savedTheme = localStorage.getItem('axiom-theme') || 'light';
        html.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);

        // Add click handler
        themeToggleButton.addEventListener('click', toggleTheme);
    }

    initSearchModal() {
        const searchToggleButton = document.querySelector('.search-toggle');
        const searchModal = document.getElementById('search-modal');
        const closeSearchButton = document.querySelector('.close-search-modal');
        const searchInput = document.getElementById('search-modal-input');

        if (!searchToggleButton || !searchModal || !closeSearchButton || !searchInput) {
            return;
        }

        const openSearch = () => {
            searchModal.classList.remove('is-hidden');
            searchInput.focus();
        };

        const closeSearch = () => {
            searchModal.classList.add('is-hidden');
        };

        searchToggleButton.addEventListener('click', openSearch);
        closeSearchButton.addEventListener('click', closeSearch);

        // Close modal on escape key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !searchModal.classList.contains('is-hidden')) {
                closeSearch();
            }
        });

        // Close modal on background click
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                closeSearch();
            }
        });
    }

    initCopyToClipboard() {
        const copyButtons = document.querySelectorAll('.copy-button');
        copyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const snippet = button.previousElementSibling.querySelector('code').innerText;
                navigator.clipboard.writeText(snippet).then(() => {
                    button.innerText = 'Copied!';
                    setTimeout(() => {
                        button.innerText = 'Copy Snippet';
                    }, 2000);
                });
            });
        });
    }
}

window.Axiom = new Axiom();
window.Axiom.initCopyToClipboard();