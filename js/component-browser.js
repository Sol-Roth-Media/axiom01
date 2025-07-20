// Axiom Component Browser JS - Redesigned for Horizontal Tabs + Permanent Iframe

class ComponentBrowserRedesigned {
    constructor() {
        console.log('ComponentBrowser: Initializing redesigned browser...');
        this.currentComponent = null;
        this.init();
    }

    init() {
        // Find the new redesigned component browser
        this.browserContainer = document.querySelector('.component-browser-redesigned');
        if (!this.browserContainer) {
            console.log('ComponentBrowser: No redesigned browser container found on this page');
            return;
        }

        // Get the new elements
        this.iframe = document.getElementById('component-preview-iframe');
        this.title = document.getElementById('component-preview-title');
        this.placeholder = document.getElementById('preview-placeholder');
        this.openPageBtn = document.getElementById('open-component-page');
        this.refreshBtn = document.getElementById('refresh-preview');

        // Get all component tab buttons
        this.componentTabs = document.querySelectorAll('.component-tab');

        console.log('ComponentBrowser: Found', this.componentTabs.length, 'component tabs');
        console.log('ComponentBrowser: iframe element:', !!this.iframe);
        console.log('ComponentBrowser: placeholder element:', !!this.placeholder);

        // Initialize event listeners
        this.initComponentTabs();
        this.initActionButtons();

        console.log('ComponentBrowser: Redesigned browser initialized successfully');
    }

    initComponentTabs() {
        console.log('ComponentBrowser: Setting up component tab event listeners...');

        this.componentTabs.forEach((tab, index) => {
            const src = tab.getAttribute('data-src');
            const name = tab.getAttribute('data-name');

            console.log(`ComponentBrowser: Setting up tab ${index + 1}: ${name} -> ${src}`);

            tab.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('ComponentBrowser: Tab clicked:', name, src);
                this.loadComponent(src, name, tab);
            });
        });
    }

    initActionButtons() {
        // Open full page button
        if (this.openPageBtn) {
            this.openPageBtn.addEventListener('click', () => {
                if (this.currentComponent && this.currentComponent.src) {
                    window.open(this.currentComponent.src, '_blank');
                }
            });
        }

        // Refresh button
        if (this.refreshBtn) {
            this.refreshBtn.addEventListener('click', () => {
                if (this.currentComponent && this.currentComponent.src) {
                    this.refreshComponent();
                }
            });
        }
    }

    loadComponent(src, name, tabElement) {
        console.log('ComponentBrowser: Loading component:', name, 'from', src);

        // Store current component info
        this.currentComponent = { src, name, tab: tabElement };

        // Update active tab
        this.setActiveTab(tabElement);

        // Update title
        if (this.title) {
            this.title.textContent = `${name} Component`;
        }

        // Hide placeholder and load iframe
        this.showIframe();

        if (this.iframe) {
            console.log('ComponentBrowser: Setting iframe src to:', src);
            this.iframe.src = src;
        }
    }

    setActiveTab(activeTab) {
        // Remove active class from all tabs
        this.componentTabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // Add active class to clicked tab
        if (activeTab) {
            activeTab.classList.add('active');
        }
    }

    showIframe() {
        if (this.placeholder) {
            this.placeholder.classList.add('hidden');
        }
        console.log('ComponentBrowser: Iframe should now be visible with placeholder hidden');
    }

    refreshComponent() {
        if (this.currentComponent && this.iframe) {
            console.log('ComponentBrowser: Refreshing component:', this.currentComponent.name);
            this.iframe.src = this.currentComponent.src;
        }
    }
}

// Initialize the redesigned component browser when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('ComponentBrowser: DOM loaded, initializing redesigned browser...');

    setTimeout(() => {
        try {
            new ComponentBrowserRedesigned();
        } catch (error) {
            console.error('ComponentBrowser: Failed to initialize redesigned browser:', error);
        }
    }, 100);
});

// Export for potential external usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ComponentBrowserRedesigned;
}
