// Axiom Stepper Component JS

class Stepper {
    constructor(element) {
        this.element = element;
        this.steps = this.element.querySelectorAll('.stepper-step');
        this.nextButtons = this.element.querySelectorAll('[data-stepper-next]');
        this.prevButtons = this.element.querySelectorAll('[data-stepper-prev]');
        this.currentStep = 0;

        this.init();
    }

    init() {
        this.update();

        this.nextButtons.forEach(button => {
            button.addEventListener('click', () => this.next());
        });

        this.prevButtons.forEach(button => {
            button.addEventListener('click', () => this.prev());
        });
    }

    next() {
        if (this.currentStep < this.steps.length - 1) {
            this.currentStep++;
            this.update();
        }
    }

    prev() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.update();
        }
    }

    update() {
        this.steps.forEach((step, index) => {
            if (index === this.currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }
}

if (typeof AxiomComponents === 'undefined') {
    window.AxiomComponents = {};
}

AxiomComponents.Stepper = {
    init: function() {
        const stepperElements = document.querySelectorAll('.stepper');
        stepperElements.forEach(element => {
            new Stepper(element);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    AxiomComponents.Stepper.init();
});