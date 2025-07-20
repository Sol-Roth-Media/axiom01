/**
 * Mobile Navbar Script for index.html
 * Handles mobile menu toggle functionality for the main-navbar structure
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Mobile navbar script loaded');

    // Get the mobile menu toggle button
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navbarNav = document.querySelector('.navbar-nav');

    if (!mobileMenuToggle || !navbarNav) {
        console.warn('Mobile navbar elements not found');
        return;
    }

    // Set initial ARIA state
    mobileMenuToggle.setAttribute('aria-expanded', 'false');

    // Toggle menu when button is clicked
    mobileMenuToggle.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();

        // Toggle the open class on the nav links
        navbarNav.classList.toggle('open');

        // Update the ARIA expanded state
        const isExpanded = navbarNav.classList.contains('open');
        mobileMenuToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');

        // Toggle the icon between bars and X
        const iconElement = mobileMenuToggle.querySelector('i');
        if (iconElement) {
            if (isExpanded) {
                iconElement.classList.remove('fa-bars');
                iconElement.classList.add('fa-times');
            } else {
                iconElement.classList.remove('fa-times');
                iconElement.classList.add('fa-bars');
            }
        }

        console.log('Mobile menu toggled, state:', isExpanded ? 'open' : 'closed');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.main-navbar')) {
            if (navbarNav.classList.contains('open')) {
                navbarNav.classList.remove('open');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');

                // Reset icon to bars
                const iconElement = mobileMenuToggle.querySelector('i');
                if (iconElement) {
                    iconElement.classList.remove('fa-times');
                    iconElement.classList.add('fa-bars');
                }
            }
        }
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navbarNav.classList.contains('open')) {
            navbarNav.classList.remove('open');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mobileMenuToggle.focus(); // Return focus to toggle button

            // Reset icon to bars
            const iconElement = mobileMenuToggle.querySelector('i');
            if (iconElement) {
                iconElement.classList.remove('fa-times');
                iconElement.classList.add('fa-bars');
            }
        }
    });

    // Close menu when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024 && navbarNav.classList.contains('open')) {
            navbarNav.classList.remove('open');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');

            // Reset icon to bars
            const iconElement = mobileMenuToggle.querySelector('i');
            if (iconElement) {
                iconElement.classList.remove('fa-times');
                iconElement.classList.add('fa-bars');
            }
        }
    });

    // Search Modal Toggle Functionality
    const searchButton = document.getElementById('search-toggle');
    const searchModal = document.getElementById('search-modal');
    const searchInput = searchModal?.querySelector('.search-input');

    if (searchButton && searchModal) {
        // Toggle search modal when search button is clicked
        searchButton.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();

            const isOpen = searchModal.classList.contains('open');

            if (isOpen) {
                // Close modal
                searchModal.classList.remove('open');
                searchModal.setAttribute('aria-hidden', 'true');
                searchButton.setAttribute('aria-expanded', 'false');
            } else {
                // Open modal
                searchModal.classList.add('open');
                searchModal.setAttribute('aria-hidden', 'false');
                searchButton.setAttribute('aria-expanded', 'true');

                // Focus on search input when modal opens
                if (searchInput) {
                    setTimeout(() => searchInput.focus(), 100);
                }
            }

            console.log('Search modal toggled, state:', isOpen ? 'closed' : 'open');
        });

        // Close search modal when clicking on backdrop
        searchModal.addEventListener('click', function(event) {
            if (event.target === searchModal) {
                searchModal.classList.remove('open');
                searchModal.setAttribute('aria-hidden', 'true');
                searchButton.setAttribute('aria-expanded', 'false');
            }
        });

        // Close search modal when pressing Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && searchModal.classList.contains('open')) {
                searchModal.classList.remove('open');
                searchModal.setAttribute('aria-hidden', 'true');
                searchButton.setAttribute('aria-expanded', 'false');
                searchButton.focus(); // Return focus to search button
            }
        });

        // Set initial ARIA states
        searchButton.setAttribute('aria-expanded', 'false');
        searchModal.setAttribute('aria-hidden', 'true');
    } else {
        console.warn('Search modal elements not found');
    }
});
