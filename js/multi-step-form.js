// Axiom Multi-Step Form Component JS

class MultiStepForm {
    constructor(element) {
        console.log('MultiStepForm: Constructor called.');
        this.element = element;
        this.stepper = this.element.querySelector('.stepper');
        this.steps = this.element.querySelectorAll('.form-step');
        this.nextButton = this.element.querySelector('[data-multi-step-form-next]');
        this.prevButton = this.element.querySelector('[data-multi-step-form-prev]');
        this.submitButton = this.element.querySelector('button[type="submit"]');
        this.currentStep = 0;

        this.init();
    }

    init() {
        console.log('MultiStepForm: init() called.');
        this.update();

        if (this.nextButton) {
            this.nextButton.addEventListener('click', () => this.next());
        } else {
            console.warn('MultiStepForm: Next button not found.', this.element);
        }

        if (this.prevButton) {
            this.prevButton.addEventListener('click', () => this.prev());
        } else {
            console.warn('MultiStepForm: Previous button not found.', this.element);
        }
    }

    next() {
        console.log('MultiStepForm: Next step.');
        if (this.currentStep < this.steps.length - 1) {
            this.currentStep++;
            this.update();
        }
    }

    prev() {
        console.log('MultiStepForm: Previous step.');
        if (this.currentStep > 0) {
            this.currentStep--;
            this.update();
        }
    }

    update() {
        console.log('MultiStepForm: Updating form display for step:', this.currentStep);
        this.steps.forEach((step, index) => {
            step.classList.toggle('active', index === this.currentStep);
        });

        if (this.stepper) {
            this.stepper.querySelectorAll('.stepper-step').forEach((step, index) => {
                step.classList.toggle('active', index === this.currentStep);
            });
        } else {
            console.warn('MultiStepForm: Stepper element not found.', this.element);
        }

        this.prevButton.style.display = this.currentStep === 0 ? 'none' : 'inline-block';
        this.nextButton.style.display = this.currentStep === this.steps.length - 1 ? 'none' : 'inline-block';
        this.submitButton.style.display = this.currentStep === this.steps.length - 1 ? 'inline-block' : 'none';
    }
}

window.AxiomComponents = window.AxiomComponents || {};
AxiomComponents.MultiStepForm = {
    init: function() {
        console.log('AxiomComponents.MultiStepForm.init called.');
        const multiStepFormElements = document.querySelectorAll('.multi-step-form');
        multiStepFormElements.forEach(element => {
            new MultiStepForm(element);
        });
    }
};
