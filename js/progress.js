// Axiom Progress Component JS

class Progress {
    constructor(element) {
        this.element = element;
        this.isDeterminate = this.element.classList.contains('progress-bar');
        this.isThrobber = this.element.classList.contains('throbber');
        this.liveRegion = null;

        this.init();
    }

    init() {
        if (this.isDeterminate) {
            this.initProgressBar();
        }

        if (this.isThrobber) {
            this.initThrobber();
        }
    }

    initProgressBar() {
        this.progressBar = this.element.querySelector('.progress');
        this.element.setAttribute('aria-valuemin', '0');
        this.element.setAttribute('aria-valuemax', '100');
        this.update(this.element.getAttribute('aria-valuenow') || 0);
    }

    initThrobber() {
        this.element.setAttribute('role', 'status');
        this.createLiveRegion();
        this.announce('Loading...');
    }

    update(value) {
        if (!this.isDeterminate) return;

        const clampedValue = Math.max(0, Math.min(100, value));
        this.element.setAttribute('aria-valuenow', clampedValue);
        this.element.style.setProperty('--a-progress-value', clampedValue);
        this.progressBar.style.width = `${clampedValue}%`;

        this.announce(`Progress: ${clampedValue}%`);
    }

    createLiveRegion() {
        this.liveRegion = document.createElement('div');
        this.liveRegion.setAttribute('aria-live', 'polite');
        this.liveRegion.setAttribute('aria-atomic', 'true');
        this.liveRegion.classList.add('visually-hidden');
        document.body.appendChild(this.liveRegion);
    }

    announce(message) {
        if (this.liveRegion) {
            this.liveRegion.textContent = message;
        }
    }
}

if (typeof AxiomComponents === 'undefined') {
    window.AxiomComponents = {};
}

AxiomComponents.Progress = {
    init: function() {
        const progressElements = document.querySelectorAll('.progress-bar, .throbber');
        progressElements.forEach(element => {
            new Progress(element);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    AxiomComponents.Progress.init();
});