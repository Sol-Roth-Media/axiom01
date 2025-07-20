/**
 * axiom.js
 * Core Axiom01 JavaScript utilities and component registration.
 */

import './accordion.js';
import './alert.js';
import './breadcrumb.js';
import './button.js';
import './card.js';
import './carousel.js';
import './commerce.js';
import './component-browser.js';
import './datepicker.js';
import './drawer.js';
import './dropdown.js';
import './empty-state.js';
import './file-upload.js';
import './forms.js';
import './infinite-scroll.js';
import './jump-menu.js';
import './media.js';
import './mobile-navbar.js';
import './modal.js';
import './modals.js';
import './multi-step-form.js';
import './navbar-advanced.js';
import './navbar.js';
import './notification.js';
import './pagination.js';
import './paywall.js';
import './playground.js';
import './prism.js';
import './progress.js';
import './scripts.js';
import './search.js';
import './skeleton.js';
import './stepper.js';
import './tab-bar.js';
import './table.js';
import './tabs.js';
import './tag.js';
import './theme-switcher.js';
import './theme-wizard.js';
import './timeline.js';
import './tooltips.js';
import './utils.js';

console.log('axiom.js: Script loaded.');

const AxiomComponents = {
    components: {},

    register(name, component) {
        console.log(`axiom.js: Registering component: ${name}`);
        this.components[name] = component;
    },

    init() {
        console.log('axiom.js: Initializing components...');
        for (const name in this.components) {
            if (this.components.hasOwnProperty(name)) {
                console.log(`axiom.js: Initializing component: ${name}`);
                this.components[name].init();
            }
        }
        console.log('axiom.js: Component initialization complete.');
    }
};

window.AxiomComponents = AxiomComponents;

document.addEventListener('DOMContentLoaded', () => {
    AxiomComponents.init();
});
