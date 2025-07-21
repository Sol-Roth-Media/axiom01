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
        this.initThemeToggle();
    }

    initThemeToggle() {
        const themeToggleButton = document.getElementById('theme-toggle');
        if (!themeToggleButton) return;

        const htmlElement = document.documentElement;
        const moonIcon = '<i class="fas fa-moon"></i>';
        const sunIcon = '<i class="fas fa-sun"></i>';

        // Set initial state
        if (htmlElement.getAttribute('data-theme') === 'dark') {
            themeToggleButton.innerHTML = sunIcon;
        } else {
            themeToggleButton.innerHTML = moonIcon;
        }

        themeToggleButton.addEventListener('click', () => {
            if (htmlElement.getAttribute('data-theme') === 'dark') {
                htmlElement.setAttribute('data-theme', 'light');
                themeToggleButton.innerHTML = moonIcon;
            } else {
                htmlElement.setAttribute('data-theme', 'dark');
                themeToggleButton.innerHTML = sunIcon;
            }
        });
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