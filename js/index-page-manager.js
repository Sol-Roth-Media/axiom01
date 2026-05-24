// js/index-page-manager.js

document.addEventListener('DOMContentLoaded', () => {

    // Helper function to apply theme
    const applyTheme = (themeName) => {
        const htmlElement = document.documentElement;
        htmlElement.setAttribute('data-theme', themeName);
        localStorage.setItem('theme', themeName);
    };

    // Helper function to update the theme toggle button icon
    const updateThemeToggleButtonIcon = (themeName) => {
        const themeToggle = document.getElementById('theme-toggle'); // Corrected ID
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                if (themeName === 'dark') {
                    icon.classList.replace('fa-moon', 'fa-sun');
                } else {
                    icon.classList.replace('fa-sun', 'fa-moon');
                }
            }
        }
    };

    // 1. Mobile Navigation Toggle
    const initMobileNav = () => {
        const menuToggle = document.querySelector('.menu.toggle');
        const mainHeader = document.querySelector('header.main');
        const mainContent = document.querySelector('main');

        if (menuToggle && mainHeader && mainContent) {
            menuToggle.addEventListener('click', () => {
                const isOpen = mainHeader.classList.toggle('menu-open');
                menuToggle.setAttribute('aria-expanded', isOpen);
                // Toggle inert on main content when menu is open
                if (isOpen) {
                    mainContent.setAttribute('inert', '');
                } else {
                    mainContent.removeAttribute('inert');
                }
            });
        }
    };

    // 2. Theme Toggling (Header Toggle Button)
    const initHeaderThemeToggle = () => {
        const themeToggle = document.getElementById('theme-toggle'); // Corrected ID
        const htmlElement = document.documentElement;

        // Set initial theme from localStorage or default to 'light'
        const currentTheme = localStorage.getItem('theme') || 'light';
        applyTheme(currentTheme);
        updateThemeToggleButtonIcon(currentTheme); // Use helper for initial icon

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                let theme = htmlElement.getAttribute('data-theme');
                const newTheme = theme === 'light' ? 'dark' : 'light';
                applyTheme(newTheme);
                updateThemeToggleButtonIcon(newTheme); // Use helper for click icon update
                
                // Update theme explorer select if it exists
                const themeSelect = document.getElementById('theme-select');
                if (themeSelect) {
                    themeSelect.value = newTheme;
                    updateThemeDescription(newTheme);
                }
            });
        }
    };

    // 3. Spacing Demo
    const initSpacingDemo = () => {
        const spaceUnitSlider = document.getElementById('space-unit-slider');
        const spaceUnitValueSpan = document.getElementById('space-unit-value');

        if (spaceUnitSlider && spaceUnitValueSpan) {
            // Apply initial value
            document.documentElement.style.setProperty('--a-space-unit', `${spaceUnitSlider.value}rem`);
            spaceUnitValueSpan.textContent = spaceUnitSlider.value;

            spaceUnitSlider.addEventListener('input', (event) => {
                const value = event.target.value;
                document.documentElement.style.setProperty('--a-space-unit', `${value}rem`);
                spaceUnitValueSpan.textContent = value;
            });
        }
    };

    // 4. Component Browser
    const initComponentBrowser = () => {
        const componentTabsContainer = document.querySelector('.component-browser .tabs');
        const componentPreviewIframe = document.getElementById('component-preview-iframe');
        const componentCountSpan = document.getElementById('component-count');
        const componentSearchInput = document.getElementById('component-search-input');
        const componentCategoryFilter = document.getElementById('component-category-filter');
        const viewFullscreenButton = document.getElementById('view-fullscreen-button');

        const allComponentButtons = componentTabsContainer ? Array.from(componentTabsContainer.querySelectorAll('.tab-button')) : [];

        if (componentTabsContainer && componentPreviewIframe) {
            // Initialize iframe with the active tab's src
            const activeTab = componentTabsContainer.querySelector('.tab-button.active');
            if (activeTab) {
                componentPreviewIframe.src = activeTab.dataset.src;
            }

            componentTabsContainer.addEventListener('click', (event) => {
                const targetButton = event.target.closest('.tab-button');
                if (targetButton && !targetButton.classList.contains('active')) {
                    // Remove active from previous
                    const currentActive = componentTabsContainer.querySelector('.tab-button.active');
                    if (currentActive) {
                        currentActive.classList.remove('active');
                        currentActive.setAttribute('aria-selected', 'false');
                    }

                    // Add active to new
                    targetButton.classList.add('active');
                    targetButton.setAttribute('aria-selected', 'true');
                    componentPreviewIframe.src = targetButton.dataset.src;
                }
            });

            // Component Search and Filter
            const filterComponents = () => {
                const searchTerm = componentSearchInput.value.toLowerCase();
                const category = componentCategoryFilter.value;
                let visibleCount = 0;

                allComponentButtons.forEach(button => {
                    const componentName = button.textContent.toLowerCase();
                    const componentCategory = button.dataset.category || 'all'; // Assuming categories can be set via data-category

                    const matchesSearch = componentName.includes(searchTerm);
                    const matchesCategory = (category === 'all' || componentCategory === category);

                    if (matchesSearch && matchesCategory) {
                        button.style.display = '';
                        visibleCount++;
                    } else {
                        button.style.display = 'none';
                    }
                });
                if (componentCountSpan) {
                    componentCountSpan.textContent = visibleCount;
                }
            };

            if (componentSearchInput) {
                componentSearchInput.addEventListener('input', filterComponents);
            }
            if (componentCategoryFilter) {
                componentCategoryFilter.addEventListener('change', filterComponents);
            }
            // Initial filter to set count
            filterComponents();

            // View Fullscreen Button
            if (viewFullscreenButton) {
                viewFullscreenButton.addEventListener('click', () => {
                    const activeTab = componentTabsContainer.querySelector('.tab-button.active');
                    if (activeTab && activeTab.dataset.src) {
                        window.open(activeTab.dataset.src, '_blank');
                    }
                });
            }
        }
    };

    // 5. Search Modal (using Fuse.js for demo purposes)
    const initSearchModal = () => {
        const searchToggle = document.querySelector('.search.toggle');
        const searchModal = document.getElementById('search-modal');
        const closeSearchModalButton = searchModal ? searchModal.querySelector('.close') : null; // Select within modal
        const searchModalInput = document.getElementById('search-modal-input');
        const searchModalResults = document.getElementById('search-modal-results');
        let lastFocusedElement = null;

        const resolveSearchUrl = (url) => {
            if (!url || /^(https?:|#)/.test(url)) return url;

            const inDocsComponents = window.location.pathname.includes('/docs/components/');
            const inDocs = window.location.pathname.includes('/docs/');

            if (url.startsWith('docs/')) {
                const docsRelative = url.replace(/^docs\//, '');
                if (inDocsComponents) return `../${docsRelative}`;
                if (inDocs) return docsRelative;
            }

            return url;
        };

        // Dummy data for Fuse.js search
        const searchData = [
            { title: "Accordion", category: "feedback", url: "docs/components/accordion.html" },
            { title: "AI Chat", category: "ai", url: "docs/components/ai-chat.html" },
            { title: "AI Image Generator", category: "ai", url: "docs/components/ai-image-generator.html" },
            { title: "Alert", category: "feedback", url: "docs/components/alert.html" },
            { title: "Avatar", category: "display", url: "docs/components/avatar.html" },
            { title: "Badge", category: "display", url: "docs/components/badge.html" },
            { title: "Breadcrumb", category: "navigation", url: "docs/components/breadcrumb.html" },
            { title: "Button", category: "forms", url: "docs/components/button.html" },
            { title: "Card", category: "layout", url: "docs/components/card.html" },
            { title: "Carousel", category: "media", url: "docs/components/carousel.html" },
            { title: "Chat", category: "feedback", url: "docs/components/chat.html" },
            { title: "Commerce", category: "ecommerce", url: "docs/components/commerce.html" },
            { title: "Component Browser", category: "layout", url: "docs/components/component-browser.html" },
            { title: "Datepicker", category: "forms", url: "docs/components/datepicker.html" },
            { title: "Drawer", category: "overlay", url: "docs/components/drawer.html" },
            { title: "Dropdown", category: "navigation", url: "docs/components/dropdown.html" },
            { title: "Editor", category: "forms", url: "docs/components/editor.html" },
            { title: "Empty State", category: "feedback", url: "docs/components/empty-state.html" },
            { title: "File Upload", category: "forms", url: "docs/components/file-upload.html" },
            { title: "Footer", category: "layout", url: "docs/components/footer.html" },
            { title: "Forms", category: "forms", url: "docs/components/forms.html" },
            { title: "Hero", category: "layout", url: "docs/components/hero.html" },
            { title: "Infinite Scroll", category: "display", url: "docs/components/infinite-scroll.html" },
            { title: "Media", category: "media", url: "docs/components/media.html" },
            { title: "Modal", category: "overlay", url: "docs/components/modal.html" },
            { title: "Multi-Step Form", category: "forms", url: "docs/components/multi-step-form.html" },
            { title: "Navbar", category: "navigation", url: "docs/components/mobile-navbar.html" },
            { title: "Navigation", category: "navigation", url: "docs/components/navigation.html" },
            { title: "Notification", category: "feedback", url: "docs/components/notification.html" },
            { title: "Pagination", category: "navigation", url: "docs/components/pagination.html" },
            { title: "Paywall", category: "ecommerce", url: "docs/components/paywall.html" },
            { title: "Progress", category: "feedback", url: "docs/components/progress.html" },
            { title: "Search", category: "navigation", url: "docs/components/search.html" },
            { title: "Settings", category: "forms", url: "docs/components/settings.html" },
            { title: "Sidebar", category: "layout", url: "docs/components/sidebar.html" },
            { title: "Skeleton", category: "display", url: "docs/components/skeleton.html" },
            { title: "Slider", category: "forms", url: "docs/components/slider.html" },
            { title: "Table", category: "display", url: "docs/components/table.html" },
            { title: "Tabs", category: "navigation", url: "docs/components/tabs.html" },
            { title: "Timeline", category: "display", url: "docs/components/timeline.html" },
            { title: "Toggle", category: "forms", url: "docs/components/toggle.html" },
            { title: "Tooltip", category: "overlay", url: "docs/components/tooltip.html" },
            { title: "Documentation", category: "docs", url: "docs/components-overview.html" },
            { title: "Advanced Color Details", category: "docs", url: "docs/colors-advanced.html" },
            { title: "Theme Customization Wizard", category: "docs", url: "docs/theme-customization-wizard.html" },
            { title: "Advanced Typography Guide", category: "docs", url: "docs/typography-advanced.html" },
            { title: "Advanced Layout Guide", category: "docs", url: "docs/layout-advanced.html" },
            { title: "Advanced Media & Icons Guide", category: "docs", url: "docs/media-advanced.html" },
            { title: "Interactive Playground", category: "docs", url: "docs/interactive-playground.html" },
            { title: "Contributing Guide", category: "docs", url: "docs/markdown-template.html?file=contributing.md" },
            { title: "Developer Guide", category: "docs", url: "docs/markdown-template.html?file=../DEVELOPER.md" },
            { title: "Styling Guide", category: "docs", url: "docs/markdown-template.html?file=../AXIOM01_STYLING_GUIDE.md" },
            { title: "README", category: "docs", url: "docs/markdown-template.html?file=../readme.md" },
            { title: "MIT License", category: "docs", url: "LICENSE" },
        ];

        const fuse = new Fuse(searchData, {
            keys: ['title', 'category'],
            threshold: 0.3, // Fuzziness of the search
        });

        if (searchToggle && searchModal && closeSearchModalButton && searchModalInput && searchModalResults) {
            const closeModal = () => {
                searchModal.classList.add('is-hidden');
                searchModal.setAttribute('aria-hidden', 'true');
                searchToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = ''; // Restore body scrolling
                searchModalResults.innerHTML = ''; // Clear results
                searchModalInput.value = ''; // Clear input
                if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
                    lastFocusedElement.focus();
                }
            };

            searchToggle.setAttribute('aria-controls', 'search-modal');
            searchToggle.setAttribute('aria-expanded', 'false');

            searchToggle.addEventListener('click', () => {
                lastFocusedElement = document.activeElement;
                searchModal.classList.remove('is-hidden');
                searchModal.setAttribute('aria-hidden', 'false');
                searchToggle.setAttribute('aria-expanded', 'true');
                searchModalInput.focus();
                document.body.style.overflow = 'hidden'; // Prevent scrolling body when modal is open
            });

            closeSearchModalButton.addEventListener('click', () => {
                closeModal();
            });

            searchModalInput.addEventListener('input', (event) => {
                const query = event.target.value;
                searchModalResults.innerHTML = ''; // Clear previous results

                if (query.length > 1) {
                    const results = fuse.search(query);
                    if (results.length > 0) {
                        const ul = document.createElement('ul');
                        results.forEach(result => {
                            const li = document.createElement('li');
                            const a = document.createElement('a');
                            a.href = resolveSearchUrl(result.item.url);
                            a.textContent = result.item.title;
                            li.appendChild(a);
                            ul.appendChild(li);
                        });
                        searchModalResults.appendChild(ul);
                    } else {
                        const p = document.createElement('p');
                        p.textContent = 'No results found.';
                        searchModalResults.appendChild(p);
                    }
                }
            });

            // Close modal on escape key
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && !searchModal.classList.contains('is-hidden')) {
                    closeModal();
                }
            });

            // Close modal when clicking outside the content
            searchModal.addEventListener('click', (event) => {
                if (event.target === searchModal) {
                    closeModal();
                }
            });
        }
    };

    // 5b. Navigation current-page state
    const initCurrentPageNavState = () => {
        const normalizePath = (value) => {
            if (!value) return '';
            let path = value.split('#')[0].split('?')[0];
            path = path.replace(/\/index\.html$/, '/');
            path = path.replace(/\/$/, '');
            return path || '/';
        };

        const currentPath = normalizePath(window.location.pathname);
        const anchors = document.querySelectorAll('header.main .links a, footer.main .links a');

        anchors.forEach((anchor) => {
            const href = anchor.getAttribute('href');
            if (!href || href.startsWith('#') || href.startsWith('http')) return;

            const resolvedPath = normalizePath(new URL(href, window.location.href).pathname);
            if (resolvedPath === currentPath) {
                anchor.setAttribute('aria-current', 'page');
            } else if (anchor.getAttribute('aria-current') === 'page') {
                // Preserve explicitly-authored aria-current only for actual matches.
                anchor.removeAttribute('aria-current');
            }
        });
    };

    // 6. Code Snippet Copying
    const initCodeCopying = () => {
        const copyButtons = document.querySelectorAll('[data-copy-snippet]');
        copyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const pre = button.closest('article').querySelector('pre code');
                if (pre) {
                    navigator.clipboard.writeText(pre.textContent).then(() => {
                        const originalText = button.textContent;
                        button.textContent = 'Copied!';
                        setTimeout(() => {
                            button.textContent = originalText;
                        }, 2000);
                    }).catch(err => {
                        console.error('Failed to copy text: ', err);
                    });
                }
            });
        });
    };

    // Theme Explorer description update
    const themeDescriptions = {
        "light": "A clean, professional, and modern theme perfect for corporate websites and applications.",
        "dark": "A sleek, low-light theme designed to reduce eye strain and provide a sophisticated look.",
        "corporate-clean": "A refined theme with a focus on clarity and professionalism, ideal for business applications.",
        "synthwave-84": "An energetic theme inspired by 80s aesthetics, featuring vibrant neons and dark backgrounds.",
        "nordic-calm": "A serene theme with muted colors and natural tones, evoking a sense of peace and simplicity.",
        "vintage-paper": "A classic, warm theme reminiscent of old books and documents, with sepia tones and textured backgrounds.",
        "dracula": "A dark, moody theme with deep purples and contrasting accents, popular among developers.",
        "solarized-light": "A carefully crafted light theme with a precise color palette for optimal readability and aesthetics.",
        "solarized-dark": "A carefully crafted dark theme with a precise color palette for optimal readability and aesthetics.",
        "luxe-black": "A luxurious dark theme with deep blacks and subtle gold accents, exuding elegance.",
        "minty-fresh": "A bright and invigorating theme with refreshing mint greens and clean whites.",
        "desert-sunset": "A warm theme inspired by desert landscapes, featuring oranges, reds, and earthy tones.",
        "deep-ocean": "A calming theme with deep blues and greens, reminiscent of the ocean's depths.",
        "gruvbox-dark": "The popular retro groove theme for developers.",
        "sakura-blossom": "A delicate theme inspired by cherry blossoms, with soft pinks and light pastels.",
        "matcha-green": "A soothing, earthy theme featuring various shades of green, inspired by matcha tea.",
        "monokai-pro": "A popular dark theme known for its vibrant and distinct syntax highlighting, great for developers.",
        "slate-gray": "A sophisticated theme with cool grays and blues, offering a modern and understated look.",
        "tropical-splash": "A lively theme with bright, contrasting colors inspired by tropical fruits and scenery.",
        "candy-pop": "A fun and playful theme with a burst of bright, cheerful colors.",
        "rose-pine": "A cozy, pastel-inspired dark theme with soft colors for a comfortable coding experience.",
        "midnight-moss": "A deep, earthy theme with dark greens and browns, inspired by a moonlit forest."
    };

    const updateThemeDescription = (selectedTheme) => {
        const themeDescriptionDisplay = document.getElementById('description-display');
        if (themeDescriptionDisplay) {
            themeDescriptionDisplay.querySelector('p').textContent = themeDescriptions[selectedTheme] || "No description available for this theme.";
        }
    };

    const initThemeExplorer = () => {
        const themeSelect = document.getElementById('theme-select');
        const htmlElement = document.documentElement;

        if (themeSelect) {
            // Set initial select value based on current theme
            themeSelect.value = htmlElement.getAttribute('data-theme');
            updateThemeDescription(themeSelect.value);

            themeSelect.addEventListener('change', (event) => {
                const selectedTheme = event.target.value;
                applyTheme(selectedTheme);
                updateThemeDescription(selectedTheme);
                updateThemeToggleButtonIcon(selectedTheme); // Use helper for select change icon update
            });
        }
    };

    // Smooth scrolling for anchor links
    const initSmoothScrolling = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                const mainHeader = document.querySelector('header.main');
                const menuToggle = document.querySelector('.menu.toggle');
                const mainContent = document.querySelector('main');

                if (mainHeader && mainHeader.classList.contains('menu-open')) {
                    mainHeader.classList.remove('menu-open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    mainContent.removeAttribute('inert'); // Ensure inert is removed
                }
            });
        });
    };

    // Highlight active link in sidebar navigation
    const initSidebarHighlighting = () => {
        const sidebarLinks = document.querySelectorAll('.sidebar nav ul li a');
        const currentPath = window.location.pathname;

        sidebarLinks.forEach(link => {
            // Normalize href to match currentPath format (e.g., remove leading '../')
            let linkPath = link.getAttribute('href');
            if (linkPath.startsWith('../')) {
                linkPath = linkPath.substring(2); // Remove '../'
            }
            if (linkPath.startsWith('./')) {
                linkPath = linkPath.substring(2); // Remove './'
            }

            // Construct full absolute path for comparison
            const absoluteLinkPath = new URL(linkPath, window.location.origin + currentPath.substring(0, currentPath.lastIndexOf('/') + 1)).pathname;

            // Check if the current path (or a part of it) matches the link's path
            // This handles cases where the link might be to a directory (e.g., /docs/)
            // or a specific file (e.g., /docs/placeholder.html)
            if (currentPath === absoluteLinkPath || currentPath.startsWith(absoluteLinkPath + '/') || currentPath.endsWith(linkPath)) {
                link.closest('li').classList.add('active');
            } else {
                link.closest('li').classList.remove('active');
            }
        });
    };

    // 7. Dynamic Copyright Year
    const initDynamicCopyrightYear = () => {
        const currentYearSpan = document.getElementById('current-year');
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    };

    // 8. Dropdown Functionality
    const initDropdowns = () => {
        document.querySelectorAll('.dropdown[data-component="dropdown"]').forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            if (toggle) {
                toggle.addEventListener('click', (event) => {
                    event.stopPropagation(); // Prevent document click from closing immediately
                    // Close other open dropdowns
                    document.querySelectorAll('.dropdown.is-open').forEach(openDropdown => {
                        if (openDropdown !== dropdown) {
                            openDropdown.classList.remove('is-open');
                            openDropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
                        }
                    });

                    dropdown.classList.toggle('is-open');
                    const isOpen = dropdown.classList.contains('is-open');
                    toggle.setAttribute('aria-expanded', isOpen);
                });
            }
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (event) => {
            document.querySelectorAll('.dropdown.is-open').forEach(openDropdown => {
                if (!openDropdown.contains(event.target)) {
                    openDropdown.classList.remove('is-open');
                    openDropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
                }
            });
        });
    };

    // Initialize all functionalities
    initMobileNav();
    initHeaderThemeToggle();
    initSpacingDemo();
    initComponentBrowser();
    initSearchModal();
    initCurrentPageNavState();
    initCodeCopying();
    initThemeExplorer();
    initSmoothScrolling();
    initSidebarHighlighting();
    initDynamicCopyrightYear();
    initDropdowns(); // Initialize dropdowns
});
