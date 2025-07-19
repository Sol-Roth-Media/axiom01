// Axiom Component Browser JS

class ComponentBrowser {
    constructor(element) {
        console.log('ComponentBrowser: Constructor called.');
        this.element = element;
        this.sidebar = this.element.querySelector('.component-browser-sidebar');
        this.content = this.element.querySelector('.component-browser-content');
        this.iframe = this.content.querySelector('.component-browser-iframe');
        this.list = this.sidebar.querySelector('.component-browser-list');
        this.components = [
            'accordion', 'alert', 'button', 'card', 'carousel', 'datepicker', 'drawer',
            'dropdown', 'forms', 'hero', 'infinite-scroll', 'jump-menu', 'media', 'modal',
            'navbar', 'notification', 'progress', 'search', 'stepper', 'tab-bar', 'tag',
            'paywall', 'commerce', 'multi-step-form'
        ];

        this.init();
    }

    init() {
        console.log('ComponentBrowser: init() called.');
        if (!this.list) {
            console.error('ComponentBrowser: Component list element not found.');
            return;
        }
        this.populateList();
        this.links = this.list.querySelectorAll('a');
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('ComponentBrowser: Component link clicked:', link.getAttribute('href'));
                this.loadComponent(link.getAttribute('href'));
                this.setActive(link);
            });
        });

        if (this.links.length > 0) {
            console.log('ComponentBrowser: Loading first component by default.');
            this.loadComponent(this.links[0].getAttribute('href'));
            this.setActive(this.links[0]);
        } else {
            console.warn('ComponentBrowser: No component links found to load.');
        }
    }

    populateList() {
        console.log('ComponentBrowser: Populating component list.');
        this.components.forEach(component => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `components/${component}.html`;
            a.textContent = component.charAt(0).toUpperCase() + component.slice(1);
            li.appendChild(a);
            this.list.appendChild(li);
        });
        console.log(`ComponentBrowser: Populated ${this.components.length} components.`);
    }

    loadComponent(url) {
        console.log('ComponentBrowser: Loading component into iframe:', url);
        if (this.iframe) {
            this.iframe.src = url;
        } else {
            console.error('ComponentBrowser: Iframe element not found.');
        }
    }

    setActive(activeLink) {
        console.log('ComponentBrowser: Setting active link.');
        this.links.forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }
}

window.AxiomComponents = window.AxiomComponents || {};
AxiomComponents.ComponentBrowser = {
    init: function() {
        console.log('AxiomComponents.ComponentBrowser.init called.');
        const componentBrowserElements = document.querySelectorAll('.component-browser');
        componentBrowserElements.forEach(element => {
            new ComponentBrowser(element);
        });
    }
};
