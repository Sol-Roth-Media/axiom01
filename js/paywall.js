// Axiom Paywall Component JS

class Paywall {
    constructor(element) {
        console.log('Paywall: Constructor called.');
        this.element = element;
        this.unlockButton = this.element.querySelector('[data-paywall-unlock]');

        this.init();
    }

    init() {
        console.log('Paywall: init() called.');
        if (this.unlockButton) {
            this.unlockButton.addEventListener('click', () => this.unlock());
        } else {
            console.warn('Paywall: Unlock button not found for paywall', this.element);
        }
    }

    unlock() {
        console.log('Paywall: Unlocking paywall.');
        this.element.classList.add('unlocked');
    }
}

window.AxiomComponents = window.AxiomComponents || {};
AxiomComponents.Paywall = {
    init: function() {
        console.log('AxiomComponents.Paywall.init called.');
        const paywallElements = document.querySelectorAll('.paywall');
        paywallElements.forEach(element => {
            new Paywall(element);
        });
    }
};
