// Simple theme toggle for index.html - no complex component system needed
class SimpleThemeToggle {
    constructor() {
        this.init();
    }

    init() {
        console.log('Simple Theme Toggle: Initializing...');

        const themeToggleButton = document.getElementById('theme-toggle');
        if (!themeToggleButton) {
            console.log('Theme toggle button not found');
            return;
        }

        const html = document.documentElement;
        const themeIcon = themeToggleButton.querySelector('i');

        // Get current theme
        const getCurrentTheme = () => html.getAttribute('data-theme') || 'light';

        // Update icon based on theme
        const updateIcon = (theme) => {
            if (themeIcon) {
                themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
            themeToggleButton.setAttribute('aria-label',
                theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            );
        };

        // Toggle theme
        const toggleTheme = () => {
            const currentTheme = getCurrentTheme();
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('axiom-theme', newTheme);
            updateIcon(newTheme);

            console.log(`Theme changed to: ${newTheme}`);
        };

        // Initialize theme from localStorage or default to light
        const savedTheme = localStorage.getItem('axiom-theme') || 'light';
        html.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);

        // Add click handler
        themeToggleButton.addEventListener('click', toggleTheme);

        console.log(`Theme toggle initialized with theme: ${savedTheme}`);
    }

    // Simple search modal functionality
    initSearchModal() {
        const searchToggleButton = document.querySelector('.search-toggle');
        const searchModal = document.getElementById('search-modal');
        const closeSearchButton = document.querySelector('.close-search-modal');
        const searchInput = document.getElementById('search-modal-input');

        if (!searchToggleButton || !searchModal || !closeSearchButton || !searchInput) {
            return;
        }

        const openSearch = () => {
            searchModal.classList.remove('is-hidden');
            searchInput.focus();
        };

        const closeSearch = () => {
            searchModal.classList.add('is-hidden');
        };

        searchToggleButton.addEventListener('click', openSearch);
        closeSearchButton.addEventListener('click', closeSearch);

        // Close modal on escape key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !searchModal.classList.contains('is-hidden')) {
                closeSearch();
            }
        });

        // Close modal on background click
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                closeSearch();
            }
        });
    }

    // Copy to clipboard functionality
    initCopyToClipboard() {
        const copyButtons = document.querySelectorAll('.copy-button');
        copyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const snippet = button.previousElementSibling.querySelector('code').innerText;
                navigator.clipboard.writeText(snippet).then(() => {
                    button.innerText = 'Copied!';
                    setTimeout(() => {
                        button.innerText = 'Copy Snippet';
                    }, 2000);
                });
            });
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = new SimpleThemeToggle();
    themeToggle.initSearchModal();
    themeToggle.initCopyToClipboard();
});
