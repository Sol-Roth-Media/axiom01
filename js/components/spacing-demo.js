class SpacingDemo {
    constructor(element) {
        this.element = element;
        this.slider = this.element.querySelector('#space-unit-slider');
        this.valueDisplay = this.element.querySelector('#space-unit-value');

        if (!this.slider || !this.valueDisplay) {
            console.error('SpacingDemo: Slider or value display element not found.');
            return;
        }

        this.boundHandleInput = this.handleInput.bind(this);
        this.slider.addEventListener('input', this.boundHandleInput);

        // Set initial value
        this.updateSpacing(this.slider.value);
    }

    handleInput(event) {
        this.updateSpacing(event.target.value);
    }

    updateSpacing(value) {
        const remValue = parseFloat(value);
        document.documentElement.style.setProperty('--a-space-unit', `${remValue}rem`);
        this.valueDisplay.textContent = remValue;
    }

    destroy() {
        if (this.slider) {
            this.slider.removeEventListener('input', this.boundHandleInput);
        }
        // Reset to default if necessary, or just remove listeners
        document.documentElement.style.removeProperty('--a-space-unit');
    }
}

// Auto-initialize if axiom.js is not managing components
// document.addEventListener('DOMContentLoaded', () => {
//     const demoElement = document.querySelector('[data-component="spacing-demo"]');
//     if (demoElement && !window.Axiom) { // Check if Axiom is not managing it
//         new SpacingDemo(demoElement);
//     }
// });
