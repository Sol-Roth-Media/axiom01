// Axiom Jump Menu Component JS

class JumpMenu {
    constructor(element) {
        this.element = element;
        this.links = this.element.querySelectorAll('a');

        this.init();
    }

    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    this.setActive(link);
                }
            });
        });
    }

    setActive(activeLink) {
        this.links.forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }
}

if (typeof AxiomComponents === 'undefined') {
    window.AxiomComponents = {};
}

AxiomComponents.JumpMenu = {
    init: function() {
        const jumpMenuElements = document.querySelectorAll('.jump-menu');
        jumpMenuElements.forEach(element => {
            new JumpMenu(element);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    AxiomComponents.JumpMenu.init();
});