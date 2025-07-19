// Enhanced Navbar JavaScript

class NavbarAdvanced {
    constructor() {
        console.log('NavbarAdvanced: Constructor called.');
        this.mobileToggle = document.getElementById('mobile-toggle');
        this.navbarNav = document.getElementById('navbar-nav');
        this.mobileIcon = this.mobileToggle ? this.mobileToggle.querySelector('i') : null;
        this.searchToggle = document.getElementById('search-toggle');
        this.searchModal = document.getElementById('search-modal');
        this.searchInput = document.querySelector('.search-modal .search-input');

        this.init();
    }

    init() {
        console.log('NavbarAdvanced: init() called.');
        if (this.mobileToggle && this.navbarNav && this.mobileIcon) {
            console.log('NavbarAdvanced: Mobile toggle elements found.');
            this.mobileToggle.addEventListener('click', () => this.toggleMobileMenu());
        } else {
            console.warn('NavbarAdvanced: Mobile toggle elements not found.', { mobileToggle: this.mobileToggle, navbarNav: this.navbarNav, mobileIcon: this.mobileIcon });
        }

        if (this.searchToggle && this.searchModal && this.searchInput) {
            console.log('NavbarAdvanced: Search elements found.');
            this.searchToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                console.log('NavbarAdvanced: Search toggle clicked.');
                this.searchModal.classList.add('open');
                this.searchInput.focus();
            });

            this.searchModal.addEventListener('click', (e) => {
                if (e.target === this.searchModal) {
                    console.log('NavbarAdvanced: Search modal backdrop clicked.');
                    this.searchModal.classList.remove('open');
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.searchModal.classList.contains('open')) {
                    console.log('NavbarAdvanced: Escape key pressed, closing search modal.');
                    this.searchModal.classList.remove('open');
                }
            });
        } else {
            console.warn('NavbarAdvanced: Search elements not found.', { searchToggle: this.searchToggle, searchModal: this.searchModal, searchInput: this.searchInput });
        }
    }

    toggleMobileMenu() {
        console.log('NavbarAdvanced: Toggling mobile menu.');
        const isOpen = this.navbarNav.classList.toggle('open');
        this.mobileToggle.setAttribute('aria-expanded', isOpen);
        this.mobileIcon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
    }
}

window.AxiomComponents = window.AxiomComponents || {};
AxiomComponents.NavbarAdvanced = {
    init: function() {
        console.log('AxiomComponents.NavbarAdvanced.init called.');
        new NavbarAdvanced();
    }
};
