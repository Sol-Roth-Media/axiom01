// Complete functionality for index.html page
class IndexPageManager {
    constructor() {
        // The init method will be called once the DOM is ready.
    }

    init() {
        console.log('Index Page Manager: Initializing...');

        // Initialize all functionality
        this.initThemeToggle();
        this.initMobileNavbar();
        this.initComponentBrowser();
        this.initSearchModal();
        this.initCopyToClipboard();
        this.initSpacingDemo();
        this.initThemeExplorer();
        this.initDropdowns(); // ✅ ADD THIS LINE

        console.log('Index Page Manager: Initialization complete');
    }

    // ✅ NEW: Spacing slider logic is now part of the main manager
    initSpacingDemo() {
        const slider = document.getElementById('space-unit-slider');
        const valueDisplay = document.getElementById('space-unit-value');

        if (!slider || !valueDisplay) {
            console.log('Spacing demo elements not found');
            return;
        }

        // Set initial display value
        valueDisplay.textContent = slider.value;

        // Add event listener to update CSS variable and display on change
        slider.addEventListener('input', () => {
            const value = slider.value;
            valueDisplay.textContent = value;
            document.documentElement.style.setProperty('--a-space-unit', `${value}rem`);
        });

        console.log('Spacing demo initialized');
    }

    // Theme Toggle Functionality
    initThemeToggle() {
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

    // Mobile Navbar Toggle
    initMobileNavbar() {
        const header = document.querySelector('header.main');
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.links');

        if (!header || !menuToggle || !navLinks) {
            console.log('Mobile navbar elements not found');
            return;
        }

        menuToggle.addEventListener('click', () => {
            header.classList.toggle('is-open');
            const isOpen = header.classList.contains('is-open');

            // Update aria attributes for accessibility
            menuToggle.setAttribute('aria-expanded', isOpen);
            menuToggle.setAttribute('aria-label', isOpen ? 'Close Menu' : 'Toggle Menu');

            console.log(`Mobile menu ${isOpen ? 'opened' : 'closed'}`);
        });

        // Close mobile menu when clicking on links
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                header.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Toggle Menu');
            });
        });

        console.log('Mobile navbar initialized');
    }

    // Component Browser Functionality
    initComponentBrowser() {
        const componentBrowser = document.querySelector('.component-browser');
        if (!componentBrowser) {
            console.log('Component browser not found');
            return;
        }

        const tabButtons = componentBrowser.querySelectorAll('.tab-button');
        const iframe = document.getElementById('component-preview-iframe');
        const searchInput = document.getElementById('component-search-input');
        const categoryFilter = document.getElementById('component-category-filter');

        if (!iframe) {
            console.log('Component iframe not found');
            return;
        }

        // Tab switching functionality
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active state from all tabs
                tabButtons.forEach(tab => {
                    tab.classList.remove('active');
                    tab.setAttribute('aria-selected', 'false');
                });

                // Add active state to clicked tab
                button.classList.add('active');
                button.setAttribute('aria-selected', 'true');

                // Load component in iframe
                const src = button.getAttribute('data-src');
                if (src) {
                    iframe.src = src;
                    console.log(`Loading component: ${src}`);
                }
            });
        });

        // Search functionality
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                this.filterComponents(tabButtons, query, categoryFilter ? categoryFilter.value : '');
            });
        }

        // Category filter functionality
        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                const category = e.target.value;
                const query = searchInput ? searchInput.value.toLowerCase() : '';
                this.filterComponents(tabButtons, query, category);
            });
        }

        // Fullscreen button functionality
        const fullscreenButton = document.getElementById('view-fullscreen-button');
        if (fullscreenButton) {
            fullscreenButton.addEventListener('click', () => {
                const activeTab = componentBrowser.querySelector('.tab-button.active');
                if (activeTab) {
                    const src = activeTab.getAttribute('data-src');
                    if (src) {
                        window.open(src, '_blank');
                        console.log(`Opening component in new window: ${src}`);
                    }
                }
            });
        }

        console.log('Component browser initialized');
    }

    // Filter components based on search and category
    filterComponents(tabButtons, query, category) {
        let visibleCount = 0;

        tabButtons.forEach(button => {
            const componentName = button.querySelector('span').textContent.toLowerCase();
            const componentSrc = button.getAttribute('data-src') || '';

            // Simple category mapping based on component names/paths
            const componentCategory = this.getComponentCategory(componentName, componentSrc);

            const matchesSearch = !query || componentName.includes(query);
            const matchesCategory = !category || category === 'all' || componentCategory === category;

            if (matchesSearch && matchesCategory) {
                button.style.display = 'flex';
                visibleCount++;
            } else {
                button.style.display = 'none';
            }
        });

        // Update component count
        const componentCount = document.getElementById('component-count');
        if (componentCount) {
            componentCount.textContent = visibleCount;
        }

        console.log(`Filtered components: ${visibleCount} visible`);
    }

    // Get component category based on name/path
    getComponentCategory(name, src) {
        // Simple category mapping
        if (name.includes('alert') || name.includes('progress')) return 'feedback';
        if (name.includes('button') || name.includes('form') || name.includes('slider') || name.includes('toggle')) return 'forms';
        if (name.includes('breadcrumb') || name.includes('navbar') || name.includes('tabs')) return 'navigation';
        if (name.includes('card') || name.includes('modal')) return 'layout';
        if (name.includes('avatar') || name.includes('badge') || name.includes('table')) return 'display';
        if (name.includes('carousel') || name.includes('image')) return 'media';
        return 'display'; // default category
    }

    // Search Modal Functionality
    initSearchModal() {
        const searchToggleButton = document.querySelector('.search-toggle');
        const searchModal = document.getElementById('search-modal');
        const closeSearchButton = document.querySelector('.close-search-modal');
        const searchInput = document.getElementById('search-modal-input');

        if (!searchToggleButton || !searchModal || !closeSearchButton || !searchInput) {
            console.log('Search modal elements not found');
            return;
        }

        const openSearch = () => {
            searchModal.classList.remove('is-hidden');
            searchInput.focus();
            console.log('Search modal opened');
        };

        const closeSearch = () => {
            searchModal.classList.add('is-hidden');
            console.log('Search modal closed');
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

        console.log('Search modal initialized');
    }

    // Copy to Clipboard Functionality
    initCopyToClipboard() {
        const copyButtons = document.querySelectorAll('.copy-button');

        copyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const codeElement = button.previousElementSibling?.querySelector('code');
                if (codeElement) {
                    const textToCopy = codeElement.textContent;

                    navigator.clipboard.writeText(textToCopy).then(() => {
                        const originalText = button.textContent;
                        button.textContent = 'Copied!';
                        button.classList.add('success');
                        setTimeout(() => {
                            button.textContent = originalText;
                            button.classList.remove('success');
                        }, 1200);
                    });
                }
            });
        });

        console.log('Copy to clipboard initialized');
    }

    // ✅ NEW: Theme Explorer logic
    initThemeExplorer() {
        const themeSelect = document.getElementById('theme-select');
        const descriptionDisplay = document.getElementById('theme-description-display');
        const html = document.documentElement;

        if (!themeSelect || !descriptionDisplay) {
            console.log('Theme explorer elements not found');
            return;
        }

        const themeDescriptions = {
            'light': "A clean, professional, and modern theme perfect for corporate websites and applications.",
            'dark': "A sleek, dark theme that's easy on the eyes and perfect for modern web apps.",
            'corporate-clean': "A professional, no-nonsense theme for business applications with a crisp blue primary.",
            'synthwave-84': "A retro-futuristic theme with neon colors, a monospace font, and a dark purple background.",
            'nordic-calm': "A spacious, minimalist theme with cool, muted blues inspired by Scandinavian design.",
            'vintage-paper': "A classic theme with sepia tones and a serif font for an academic or historical feel.",
            'dracula': "The famous dark theme for developers, featuring a purple and pink palette on a dark background.",
            'solarized-light': "The classic, low-contrast theme designed for comfortable, long-form reading.",
            'solarized-dark': "The dark counterpart to Solarized Light, maintaining a comfortable, low-contrast feel.",
            'luxe-black': "A premium, high-contrast dark theme with sharp gold accents and a serif font.",
            'minty-fresh': "A light, airy theme with a clean green palette and highly rounded corners.",
            'desert-sunset': "Warm, earthy tones of orange and brown inspired by a desert landscape at dusk.",
            'deep-ocean': "A dark, aquatic theme with deep blues and teals, featuring very rounded elements.",
            'gruvbox-dark': "The popular retro groove theme for developers, with a warm, muted color palette.",
            'sakura-blossom': "A light and soft theme inspired by Japanese cherry blossoms, with pink and white tones.",
            'matcha-green': "A soothing, earthy theme inspired by green tea, with a calm and natural feel.",
            'monokai-pro': "Inspired by the iconic, high-contrast code editor theme with bright, vivid colors.",
            'slate-gray': "A modern, compact, and monochromatic theme for a serious, focused user interface.",
            'tropical-splash': "A vibrant, high-energy theme with bright, sunny colors and extremely rounded elements.",
            'candy-pop': "A playful, sweet theme with soft pastels and bubbly, rounded corners.",
            'rose-pine': "A soft, warm, and elegant dark theme with a cozy, romantic feel.",
            'midnight-moss': "A dark, nature-inspired theme with deep greens and earthy tones for a grounded feel."
        };

        const updateTheme = (theme) => {
            html.setAttribute('data-theme', theme);
            localStorage.setItem('axiom-theme', theme);
            themeSelect.value = theme;
            descriptionDisplay.innerHTML = `<p>${themeDescriptions[theme] || ''}</p>`;

            // Also update the main theme toggle icon in the header
            const themeToggleButton = document.getElementById('theme-toggle');
            const themeIcon = themeToggleButton.querySelector('i');
            if (themeIcon) {
                themeIcon.className = (theme === 'dark' || !theme.includes('light')) ? 'fas fa-sun' : 'fas fa-moon';
            }
        };

        // Event listener for the dropdown
        themeSelect.addEventListener('change', () => {
            updateTheme(themeSelect.value);
        });

        // Set initial state on page load
        const savedTheme = localStorage.getItem('axiom-theme') || 'light';
        updateTheme(savedTheme);

        console.log('Theme explorer initialized');
    }

    // ✅ NEW: Dropdown menu logic
    initDropdowns() {
        const dropdowns = document.querySelectorAll('[data-component="dropdown"]');

        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            if (toggle) {
                toggle.addEventListener('click', (event) => {
                    // Close other open dropdowns first
                    dropdowns.forEach(d => {
                        if (d !== dropdown) {
                            d.classList.remove('is-open');
                        }
                    });
                    // Then toggle the current one
                    event.stopPropagation();
                    dropdown.classList.toggle('is-open');
                });
            }
        });

        // Add a global click listener to close dropdowns when clicking outside
        document.addEventListener('click', () => {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('is-open');
            });
        });

        console.log(`Dropdowns initialized for ${dropdowns.length} elements.`);
    }
}

// ✅ SINGLE, CLEAN INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    const pageManager = new IndexPageManager();
    pageManager.init();
});
