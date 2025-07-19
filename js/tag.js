// Axiom Tag Component JS

class Tag {
    constructor(element) {
        this.element = element;
        this.removeButton = this.element.querySelector('.tag-remove');

        if (this.removeButton) {
            this.init();
        }
    }

    init() {
        this.removeButton.addEventListener('click', () => this.remove());
    }

    remove() {
        this.element.remove();
    }
}

if (typeof AxiomComponents === 'undefined') {
    window.AxiomComponents = {};
}

AxiomComponents.Tag = {
    init: function() {
        const tagElements = document.querySelectorAll('.tag');
        tagElements.forEach(element => {
            new Tag(element);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    AxiomComponents.Tag.init();
});