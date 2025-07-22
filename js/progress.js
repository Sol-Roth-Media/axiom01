// Axiom Progress Component JS - CORRECTED

class Progress {
    constructor(element) {
        this.element = element;
        this.init();
    }

    init() {
        const initialValue = this.element.getAttribute('aria-valuenow');
        if (initialValue) {
            this.update(initialValue);
        }
    }

    /**
     * Updates the progress bar's value.
     * @param {number} value - The new percentage value (0-100).
     */
    update(value) {
        const clampedValue = Math.max(0, Math.min(100, value));

        // 1. Update ARIA attribute for accessibility
        this.element.setAttribute('aria-valuenow', clampedValue);

        // 2. Update the CSS Custom Property for styling
        this.element.style.setProperty('--progress-percent', `${clampedValue}%`);

        // 3. If there's a label span, update its text content
        const label = this.element.querySelector('span');
        if (label) {
            label.textContent = `${clampedValue}%`;
        }
    }
}

// Initialize all progress components on the page
document.addEventListener('DOMContentLoaded', () => {
    const progressElements = document.querySelectorAll('.progress');
    progressElements.forEach(element => {
        // Store the instance on the element for external access if needed
        element.progressInstance = new Progress(element);
    });

    // Example of how to dynamically update a progress bar after 2 seconds
    setTimeout(() => {
        const exampleProgress = document.querySelector('#skill-progress');
        if (exampleProgress && exampleProgress.progressInstance) {
            exampleProgress.progressInstance.update(95);
        }
    }, 2000);
});