// Axiom Tab Bar Component JS

class TabBar {
    constructor(element) {
        this.element = element;
        this.tabs = this.element.querySelectorAll('.tab');

        this.init();
    }

    init() {
        this.tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => this.activateTab(tab));

            tab.addEventListener('keydown', (e) => {
                let targetTab;
                if (e.key === 'ArrowRight') {
                    targetTab = this.tabs[(index + 1) % this.tabs.length];
                } else if (e.key === 'ArrowLeft') {
                    targetTab = this.tabs[(index - 1 + this.tabs.length) % this.tabs.length];
                }

                if (targetTab) {
                    targetTab.focus();
                    this.activateTab(targetTab);
                }
            });
        });
    }

    activateTab(activeTab) {
        this.tabs.forEach(tab => {
            tab.classList.remove('active');
            tab.setAttribute('aria-selected', 'false');
            tab.setAttribute('tabindex', '-1');
        });

        activeTab.classList.add('active');
        activeTab.setAttribute('aria-selected', 'true');
        activeTab.setAttribute('tabindex', '0');
    }
}

if (typeof AxiomComponents === 'undefined') {
    window.AxiomComponents = {};
}

AxiomComponents.TabBar = {
    init: function() {
        const tabBarElements = document.querySelectorAll('.tab-bar');
        tabBarElements.forEach(element => {
            new TabBar(element);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    AxiomComponents.TabBar.init();
});