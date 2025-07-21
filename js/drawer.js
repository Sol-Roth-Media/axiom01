// Axiom Drawer Component JS

class Drawer {
    constructor(drawerElement) {
        this.drawer = drawerElement;
        this.closeButton = this.drawer.querySelector('.drawer-close');
        this.backdrop = this.drawer.nextElementSibling;
        this.triggerButtons = document.querySelectorAll(`[aria-controls="${this.drawer.id}"]`);
        this.focusableElements =
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        this.firstFocusableElement = null;
        this.lastFocusableElement = null;

        this.init();
    }

    init() {
        this.triggerButtons.forEach(button => {
            button.addEventListener('click', () => this.open());
        });

        this.closeButton.addEventListener('click', () => this.close());
        this.backdrop.addEventListener('click', () => this.close());
        this.drawer.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.close();
            }
        });
    }

    open() {
        this.drawer.classList.add('open');
        this.backdrop.classList.add('open');
        this.drawer.removeAttribute('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        const focusableContent = this.drawer.querySelectorAll(this.focusableElements);
        this.firstFocusableElement = focusableContent[0];
        this.lastFocusableElement = focusableContent[focusableContent.length - 1];

        this.firstFocusableElement.focus();
        this.drawer.addEventListener('keydown', (e) => this.trapFocus(e));
    }

    close() {
        this.drawer.classList.remove('open');
        this.backdrop.classList.remove('open');
        this.drawer.setAttribute('hidden', 'true');
        document.body.style.overflow = ''; // Restore background scrolling

        this.triggerButtons[0].focus();
    }

    trapFocus(e) {
        let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) { // if shift key pressed for shift + tab combination
            if (document.activeElement === this.firstFocusableElement) {
                this.lastFocusableElement.focus(); // add focus for the last focusable element
                e.preventDefault();
            }
        } else { // if tab key is pressed
            if (document.activeElement === this.lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                this.firstFocusableElement.focus(); // add focus for the first focusable element
                e.preventDefault();
            }
        }
    }
}

if (typeof AxiomComponents === 'undefined') {
    window.AxiomComponents = {};
}

AxiomComponents.Drawer = {
    init: function() {
        const drawerElements = document.querySelectorAll('.drawer');
        drawerElements.forEach(drawer => {
            new Drawer(drawer);
        });
    }
};

// document.addEventListener('DOMContentLoaded', () => {
//     AxiomComponents.Drawer.init();
// });