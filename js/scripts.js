/**
 * Axiom Framework Scripts
 * v0.1.2 - Enhanced Theme Support with Additional Themes
 *
 * Includes logic for:
 * - Mobile Menu Toggle
 * - Theme Toggling (Light/Dark/Aesthetic via button & Select Dropdown) with icon update and localStorage persistence
 * - Tab Component Interaction
 * - Accordion Component Interaction
 * - Dropdown Menu Component Interaction
 * - Progress Bar Example Interaction
 * - Throbber Example Toggle
 */

// --- Available Themes ---
// Add theme 'value' (for data-theme attribute) and 'name' (for display in select)
const availableThemes = [
    // Core themes
    { value: 'light', name: 'Light Theme' },
    { value: 'dark', name: 'Dark Theme' },

    // Aesthetic themes
    { value: 'aesthetic', name: 'Aesthetic' },
    { value: 'light-aesthetic', name: 'Light Aesthetic' },
    { value: 'dark-aesthetic', name: 'Dark Aesthetic' },

    // Vibrant themes
    { value: 'purple-haze', name: 'Purple Haze', description: 'Rich purple and pink gradient with vibrant colors' },
    { value: 'electric-neon', name: 'Electric Neon', description: 'Vibrant, high-contrast neon colors on a dark background' },
    { value: 'cyberpunk', name: 'Cyberpunk', description: 'High-tech, dystopian aesthetic with bright accent colors' },

    // Color-based themes
    { value: 'blue', name: 'Blue Theme' },
    { value: 'gray', name: 'Gray Theme' },

    // Mood themes
    { value: 'sunset', name: 'Sunset Theme', description: 'Warm orange and purple gradients reminiscent of dusk' },
    { value: 'forest', name: 'Forest Theme', description: 'Natural greens and earth tones for a calming nature-inspired look' },

    // Style themes
    { value: 'metallic-chic', name: 'Metallic Chic', description: 'Sophisticated silver and gold accents with subtle gradients' },
    { value: 'deep-vintage', name: 'Deep Vintage', description: 'Rich, aged colors with classic styling and warm undertones' },
    { value: 'mechanical-floaty', name: 'Mechanical Floaty', description: 'Industrial tones with airy, lightweight accents' },
    { value: 'cool-collected', name: 'Cool Collected', description: 'Balanced cool tones with thoughtful color placement' },

    // Cinematic themes
    { value: 'cinematic-dark', name: 'Cinematic Dark', description: 'Film-noir inspired dark theme with dramatic contrast' },
    { value: 'cinematic-red', name: 'Cinematic Red', description: 'Bold red accents against dark backgrounds for visual impact' },

    // Monochromatic themes
    { value: 'monotone', name: 'Monotone', description: 'Single-hue design with varying shades and tints' },
    { value: 'sepia', name: 'Sepia', description: 'Warm brown tones reminiscent of vintage photographs' },
];

// Theme categories for theme cycling
const themeCategories = {
    core: ['light', 'dark'],
    aesthetic: ['aesthetic', 'light-aesthetic', 'dark-aesthetic'],
    vibrant: ['purple-haze', 'electric-neon', 'cyberpunk', 'sunset'],
    cinematic: ['cinematic-dark', 'cinematic-red'],
    all: availableThemes.map(theme => theme.value)
};


/**
 * Applies a theme to the document and updates UI elements
 * @param {string} themeValue - The theme value to apply
 */
function applyTheme(themeValue) {
    try {
        // Validate themeValue exists in availableThemes
        const themeExists = availableThemes.some(theme => theme.value === themeValue);
        if (!themeExists) {
            console.warn(`Theme "${themeValue}" not found in availableThemes. Defaulting to "light".`);
            themeValue = 'light';
        }

        // Apply theme to document
        document.documentElement.setAttribute('data-theme', themeValue);
        localStorage.setItem('theme', themeValue);

        // Store the current theme category for cycling
        localStorage.setItem('themeCategory', getThemeCategory(themeValue));

        // Update theme toggle button icon based on theme type
        updateThemeToggleButton(themeValue);

        // Update the select dropdown to show the current theme
        const themeSelect = document.getElementById('theme-select');
        if (themeSelect) {
            themeSelect.value = themeValue;
        }
    } catch (error) {
        console.error('Error applying theme:', error);
    }
}

/**
 * Determines which category a theme belongs to
 * @param {string} themeValue - The theme to check
 * @returns {string} The category name
 */
function getThemeCategory(themeValue) {
    if (themeCategories.core.includes(themeValue)) return 'core';
    if (themeCategories.aesthetic.includes(themeValue)) return 'aesthetic';
    if (themeCategories.cinematic.includes(themeValue)) return 'cinematic';
    if (themeCategories.vibrant.includes(themeValue)) return 'vibrant';
    return 'all';
}

/**
 * Updates the theme toggle button icon based on theme type
 * @param {string} themeValue - The current theme
 */
function updateThemeToggleButton(themeValue) {
    const themeToggleButtons = document.querySelectorAll('.theme-toggle');
    themeToggleButtons.forEach(button => {
        const iconElement = button.querySelector('i') || button;

        // Different icons based on theme category
        if (themeCategories.core.includes(themeValue)) {
            // Core themes (light/dark)
            if (themeValue === 'dark') {
                iconElement.innerHTML = '&#x1F319;'; // Moon
                iconElement.setAttribute('title', 'Switch to Light Mode');
                iconElement.setAttribute('aria-label', 'Switch to Light Mode');
            } else {
                iconElement.innerHTML = '&#9728;'; // Sun
                iconElement.setAttribute('title', 'Switch to Dark Mode');
                iconElement.setAttribute('aria-label', 'Switch to Dark Mode');
            }
        } else if (themeCategories.aesthetic.includes(themeValue)) {
            // Aesthetic themes
            iconElement.innerHTML = '&#x2728;'; // Sparkles
            iconElement.setAttribute('title', 'Cycle Theme Mode');
            iconElement.setAttribute('aria-label', 'Cycle Theme Mode');
        } else if (themeCategories.cinematic.includes(themeValue)) {
            // Cinematic themes
            iconElement.innerHTML = '&#x1F3AC;'; // Film frames
            iconElement.setAttribute('title', 'Cycle Cinematic Themes');
            iconElement.setAttribute('aria-label', 'Cycle Cinematic Themes');
        } else if (themeCategories.vibrant.includes(themeValue)) {
            // Vibrant themes
            iconElement.innerHTML = '&#x1F4A5;'; // Collision symbol
            iconElement.setAttribute('title', 'Cycle Vibrant Themes');
            iconElement.setAttribute('aria-label', 'Cycle Vibrant Themes');
        } else {
            // Other themes
            iconElement.innerHTML = '&#x1F3A8;'; // Artist palette
            iconElement.setAttribute('title', 'Cycle Theme Mode');
            iconElement.setAttribute('aria-label', 'Cycle Theme Mode');
        }
    });
}

/**
 * Cycles through themes within a category
 * @param {string} category - The category to cycle through ('core', 'aesthetic', or 'all')
 */
function cycleThemeCategory(category = 'all') {
    const validCategory = themeCategories[category] ? category : 'all';
    const themesInCategory = themeCategories[validCategory];

    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const currentIndex = themesInCategory.indexOf(currentTheme);

    // Next theme in the category (or first if at end/not found)
    const nextIndex = (currentIndex >= 0 && currentIndex < themesInCategory.length - 1)
        ? currentIndex + 1
        : 0;

    applyTheme(themesInCategory[nextIndex]);
}

/**
 * Toggles between theme modes based on the current theme
 * Intelligently cycles through core, aesthetic, or all themes
 */
function toggleTheme() {
    try {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const lastCategory = localStorage.getItem('themeCategory') || 'core';

        // Determine which category to cycle through based on current theme
        if (themeCategories.core.includes(currentTheme)) {
            // If in core themes (light/dark), toggle between them
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        } else if (themeCategories.aesthetic.includes(currentTheme)) {
            // If in aesthetic themes, cycle through them
            cycleThemeCategory('aesthetic');
        } else {
            // For any other theme, cycle through the category it was in or all themes
            cycleThemeCategory(lastCategory !== 'core' && lastCategory !== 'aesthetic' ? 'all' : lastCategory);
        }
    } catch (error) {
        console.error('Error toggling theme:', error);
    }
}

/**
 * Mobile menu functionality is now handled by navbar.js
 * This code is kept for reference but is no longer used
 */

// function initMobileMenu() {
//     // This functionality is now handled by navbar.js
//     console.log('Mobile menu initialization is now handled by navbar.js');
// }

// function initNavbarToggle(toggleSelector, navLinksSelector) {
//     // This functionality is now handled by navbar.js
//     console.log('Navbar toggle initialization is now handled by navbar.js');
// }
/**
 * Utility: Read CSS variable feature toggles
 * Returns true if the variable is set to 'true' (string)
 */
function isFeatureEnabled(varName) {
    return getComputedStyle(document.documentElement).getPropertyValue(varName).trim() === 'true';
}

// Example usage for animations, transitions, font loading, CSS reset
// Wrap any related logic with these checks

// Animation example:
if (isFeatureEnabled('--a-enable-animations')) {
    // Enable animation logic here
    // e.g., add animation classes, run animation JS
}

// Transition example:
if (isFeatureEnabled('--a-enable-transitions')) {
    // Enable transition logic here
    // e.g., add transition classes, run transition JS
}

// Font loading example:
if (isFeatureEnabled('--a-enable-fonts')) {
    // Enable custom font loading logic here
    // e.g., inject font link, apply font-family
}

// CSS reset example:
if (isFeatureEnabled('--a-use-css-reset')) {
    // Enable CSS reset logic here
    // e.g., inject/reset styles if needed
}

// Document feature toggle logic in JS and CSS for maintainability
// See axiom_config.css for variable definitions

// --- Feature Toggle Helpers ---
function getFeatureToggle(varName) {
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim() === 'true';
}

// Example usage:
const enableAnimations = getFeatureToggle('--a-enable-animations');
const enableTransitions = getFeatureToggle('--a-enable-transitions');
const enableFonts = getFeatureToggle('--a-enable-fonts');
const useCssReset = getFeatureToggle('--a-use-css-reset');

// Use these toggles to conditionally enable/disable features throughout the script
// Example: Only run animation logic if enableAnimations is true

// Example usage in components:
// Only apply transitions/animations if enabled by CSS variable

/**
 * Initializes the tabs component
 */
function initTabs() {
    const enableTransitions = isFeatureEnabled('--a-enable-transitions');
    const tabLists = document.querySelectorAll('.tabs [role="tablist"]');
    tabLists.forEach((tabList) => {
        const tabs = tabList.querySelectorAll('[role="tab"]');
        const panels = [];

        tabs.forEach(tab => {
            const panelId = tab.getAttribute('aria-controls');
            if (!panelId) return;

            const panel = document.getElementById(panelId);
            if (panel) panels.push(panel);
        });

        if (tabs.length === 0 || panels.length === 0) return;

        tabs.forEach((tab, index) => {
            // Click event
            tab.addEventListener('click', () => {
                // Deactivate all tabs
                tabs.forEach((t) => {
                    t.setAttribute('aria-selected', 'false');
                    t.setAttribute('tabindex', '-1');
                    const panel = document.getElementById(t.getAttribute('aria-controls'));
                    if (panel) panel.hidden = true;
                });

                // Activate selected tab
                tab.setAttribute('aria-selected', 'true');
                tab.setAttribute('tabindex', '0');
                const activePanel = document.getElementById(tab.getAttribute('aria-controls'));
                if (activePanel) activePanel.hidden = false;

                // Optionally add transition if enabled
                if (enableTransitions) {
                    activePanel.style.transition = 'opacity 0.3s';
                    activePanel.style.opacity = '1';
                }
            });

            // Keyboard navigation
            tab.addEventListener('keydown', (e) => {
                let newIndex = index;
                let proceed = false;

                if (e.key === 'ArrowRight') {
                    newIndex = (index + 1) % tabs.length;
                    proceed = true;
                }
                else if (e.key === 'ArrowLeft') {
                    newIndex = (index - 1 + tabs.length) % tabs.length;
                    proceed = true;
                }
                else if (e.key === 'Home') {
                    newIndex = 0;
                    proceed = true;
                }
                else if (e.key === 'End') {
                    newIndex = tabs.length - 1;
                    proceed = true;
                }

                if (proceed) {
                    e.preventDefault();
                    tabs[newIndex].focus();
                    tabs[newIndex].click();
                }
            });
        });
    });
}

/**
 * Initializes the accordion component
 */
function initAccordion() {
    const enableTransitions = isFeatureEnabled('--a-enable-transitions');
    const accordionButtons = document.querySelectorAll('.accordion button[aria-controls]');

    accordionButtons.forEach((button) => {
        const panelId = button.getAttribute('aria-controls');
        if (!panelId) return;

        const panel = document.getElementById(panelId);
        if (!panel) return;

        const isInitiallyExpanded = button.getAttribute('aria-expanded') === 'true';
        panel.hidden = !isInitiallyExpanded;

        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);
            panel.hidden = isExpanded;

            if (enableTransitions) {
                panel.style.transition = 'max-height 0.3s';
            }
        });

        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
}

/**
 * Initializes dropdown menu components (Axiom01)
 * - Targets .dropdown-trigger
 * - Supports <li role="option"> items
 * - Full keyboard navigation (Arrow keys, Enter, Escape, Tab)
 * - ARIA and focus management
 */
function initDropdowns() {
    const enableTransitions = isFeatureEnabled('--a-enable-transitions');
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');

    // Close all dropdowns when clicking outside
    document.addEventListener('click', (event) => {
        dropdownTriggers.forEach(trigger => {
            const menuId = trigger.getAttribute('aria-controls');
            if (!menuId) return;
            const menu = document.getElementById(menuId);
            if (!menu || menu.hidden) return;
            const dropdownContainer = trigger.closest('.dropdown');
            if (dropdownContainer && !dropdownContainer.contains(event.target)) {
                menu.hidden = true;
                trigger.setAttribute('aria-expanded', 'false');
            }
        });
    });

    dropdownTriggers.forEach(trigger => {
        const menuId = trigger.getAttribute('aria-controls');
        if (!menuId) return;
        const menu = document.getElementById(menuId);
        if (!menu) return;

        // Open/close on click
        trigger.addEventListener('click', (event) => {
            event.stopPropagation();
            const isOpen = menu.hidden === false;
            menu.hidden = isOpen;
            trigger.setAttribute('aria-expanded', String(!isOpen));
            if (!isOpen) {
                // Focus first item
                const firstItem = menu.querySelector('[role="option"]');
                if (firstItem) setTimeout(() => firstItem.focus(), 100);
            }

            if (enableTransitions) {
                menu.style.transition = 'opacity 0.2s';
                menu.style.opacity = menu.hidden ? '0' : '1';
            }
        });

        // Keyboard navigation for trigger
        trigger.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (menu.hidden) {
                    trigger.click();
                } else {
                    const firstItem = menu.querySelector('[role="option"]');
                    if (firstItem) firstItem.focus();
                }
            } else if (e.key === 'Escape') {
                menu.hidden = true;
                trigger.setAttribute('aria-expanded', 'false');
                trigger.focus();
            }
        });

        // Keyboard navigation for menu items
        const menuItems = menu.querySelectorAll('[role="option"]');
        menuItems.forEach((item, index) => {
            item.setAttribute('tabindex', '-1');
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    menu.hidden = true;
                    trigger.setAttribute('aria-expanded', 'false');
                    trigger.focus();
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const nextIndex = (index + 1) % menuItems.length;
                    menuItems[nextIndex].focus();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prevIndex = (index - 1 + menuItems.length) % menuItems.length;
                    menuItems[prevIndex].focus();
                } else if (e.key === 'Tab') {
                    menu.hidden = true;
                    trigger.setAttribute('aria-expanded', 'false');
                } else if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    item.click();
                    menu.hidden = true;
                    trigger.setAttribute('aria-expanded', 'false');
                    trigger.focus();
                }
            });
            // Click closes menu
            item.addEventListener('click', () => {
                menu.hidden = true;
                trigger.setAttribute('aria-expanded', 'false');
                trigger.focus();
            });
        });
    });
}

/**
 * Initializes theme selector functionality
 */
function initThemeSelector() {
    const themeSelect = document.getElementById('theme-select');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (!themeSelect) return;

    // Clear existing options
    themeSelect.innerHTML = '';

    // Add ARIA attributes
    themeSelect.setAttribute('aria-label', 'Select theme');

    // Populate theme selector dropdown with optgroups for categories
    const coreGroup = document.createElement('optgroup');
    coreGroup.label = 'Core Themes';

    const aestheticGroup = document.createElement('optgroup');
    aestheticGroup.label = 'Aesthetic Themes';

    const specialtyGroup = document.createElement('optgroup');
    specialtyGroup.label = 'Specialty Themes';

    availableThemes.forEach(theme => {
        const option = document.createElement('option');
        option.value = theme.value;
        option.textContent = theme.name;

        // Add to appropriate group
        if (themeCategories.core.includes(theme.value)) {
            coreGroup.appendChild(option);
        } else if (themeCategories.aesthetic.includes(theme.value)) {
            aestheticGroup.appendChild(option);
        } else {
            specialtyGroup.appendChild(option);
        }
    });

    // Add all groups to select
    themeSelect.appendChild(coreGroup);
    themeSelect.appendChild(aestheticGroup);
    themeSelect.appendChild(specialtyGroup);

    // Set initial value
    themeSelect.value = currentTheme;

    // Event listener for select dropdown
    themeSelect.addEventListener('change', (event) => {
        applyTheme(event.target.value);
    });

    // Attach event listener to the theme toggle button(s)
    const themeToggleButtons = document.querySelectorAll('.theme-toggle');
    themeToggleButtons.forEach(button => {
        button.addEventListener('click', toggleTheme);
    });

    // Apply initial theme (also updates button icon)
    applyTheme(currentTheme);
}

/**
 * Initialize progress bar demo
 */
function initProgressDemo() {
    const progressButton = document.querySelector('#progress-bar-demo .progress-btn');
    const progressBarContainer = document.querySelector('#progress-bar-demo .progress-bar');
    const progressInner = progressBarContainer ? progressBarContainer.querySelector('.progress') : null;

    if (!progressButton || !progressBarContainer || !progressInner) return;

    let progressValue = parseInt(progressBarContainer.getAttribute('aria-valuenow'), 10) || 0;

    progressButton.addEventListener('click', () => {
        progressValue = Math.min(progressValue + 10, 100);
        progressInner.style.width = `${progressValue}%`;
        progressBarContainer.setAttribute('aria-valuenow', progressValue);

        if (progressValue === 100) {
            progressButton.textContent = 'Completed!';
            progressButton.disabled = true;
        } else {
            progressButton.textContent = 'Increase Progress (JS Example)';
            progressButton.disabled = false;
        }
    });
}

/**
 * Initialize loading throbber demo
 * Only enable animation if --a-enable-animations is true
 */
function initThrobberDemo() {
    const enableAnimations = isFeatureEnabled('--a-enable-animations');
    const toggleButton = document.getElementById('toggle-loading');
    const throbber = document.getElementById('loading-throbber');

    if (!toggleButton || !throbber) return;

    toggleButton.addEventListener('click', () => {
        const isLoading = throbber.classList.toggle('active');
        throbber.setAttribute('aria-hidden', !isLoading);
        toggleButton.textContent = isLoading ? 'Stop Loading' : 'Start Loading';

        // Only enable animation if feature toggle is true
        if (enableAnimations) {
            throbber.style.animation = isLoading ? 'throbber-spin 1s linear infinite' : 'none';
        } else {
            throbber.style.animation = 'none';
        }
    });
}

/**
 * Feature Toggle Checks (CSS Variables)
 * Checks runtime CSS variable values to enable/disable features for accessibility and performance.
 */
function getCSSVariableBool(varName) {
    const value = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
    return value === 'true' || value === '1';
}

const enableAnimations = getCSSVariableBool('--a-enable-animations');
const enableTransitions = getCSSVariableBool('--a-enable-transitions');
const enableFonts = getCSSVariableBool('--a-enable-fonts');
const useCSSReset = getCSSVariableBool('--a-use-css-reset');

// Example usage: Conditionally enable/disable animations
if (!enableAnimations) {
    document.body.classList.add('no-animations');
}
if (!enableTransitions) {
    document.body.classList.add('no-transitions');
}
if (!enableFonts) {
    document.body.classList.add('no-fonts');
}
if (!useCSSReset) {
    document.body.classList.add('no-css-reset');
}

// --- Feature Toggle Checks (CSS Variable Driven) ---
// Only enable features if their corresponding CSS variable is set to 'true'.
// Uses getComputedStyle(document.documentElement).getPropertyValue('--a-variable-name').trim()
const axiomFeatureToggles = {
  useCssReset: getComputedStyle(document.documentElement).getPropertyValue('--a-use-css-reset').trim() === 'true',
  enableAnimations: getComputedStyle(document.documentElement).getPropertyValue('--a-enable-animations').trim() === 'true',
  enableTransitions: getComputedStyle(document.documentElement).getPropertyValue('--a-enable-transitions').trim() === 'true',
  enableFonts: getComputedStyle(document.documentElement).getPropertyValue('--a-enable-fonts').trim() === 'true'
};

// Example usage:
// if (axiomFeatureToggles.enableAnimations) { /* run animation logic */ }
// if (axiomFeatureToggles.enableFonts) { /* load custom fonts */ }
// if (axiomFeatureToggles.useCssReset) { /* apply CSS reset logic */ }
// if (axiomFeatureToggles.enableTransitions) { /* enable transitions */ }

// Documented for maintainability. Add runtime checks before enabling related features below.

/**
 * Main initialization function
 * Only enable font loading and CSS reset if toggles are true
 */
function initAxiom() {
    if (isFeatureEnabled('--a-enable-fonts')) {
        // Font loading logic here (if any)
        // Example: document.body.classList.add('use-fonts');
    }
    if (isFeatureEnabled('--a-use-css-reset')) {
        // CSS reset logic here (if any)
        // Example: document.body.classList.add('use-css-reset');
    }
    initThemeSelector();
    // Mobile menu handled by navbar.js
    initTabs();
    initAccordion();
    initDropdowns();
    initProgressDemo();
    initThrobberDemo();
}

// Run all initializations after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initAxiom);

// Call initDropdowns on DOMContentLoaded
if (document.readyState !== 'loading') {
    initDropdowns();
} else {
    document.addEventListener('DOMContentLoaded', initDropdowns);
}

// --- Mobile Menu Toggle (Main Navbar) ---
// This code is now handled by initMobileMenu() function
// The duplicate event listeners were causing conflicts

// Drawer (Mobile Navigation)
document.addEventListener('DOMContentLoaded', function() {
  var drawer = document.getElementById('drawer');
  var toggle = document.getElementById('drawer-toggle');
  if (drawer && toggle) {
    toggle.addEventListener('click', function() {
      drawer.classList.toggle('drawer-open');
      // Add backdrop for accessibility
      let backdrop = document.querySelector('.drawer-backdrop');
      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'drawer-backdrop';
        document.body.appendChild(backdrop);
      }
      backdrop.classList.toggle('open', drawer.classList.contains('drawer-open'));
      backdrop.onclick = function() {
        drawer.classList.remove('drawer-open');
        backdrop.classList.remove('open');
      };
    });
    // Accessibility: close drawer with backdrop click or Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        drawer.classList.remove('drawer-open');
        var backdrop = document.querySelector('.drawer-backdrop');
        if (backdrop) backdrop.classList.remove('open');
      }
    });
    // Ensure drawer closes when resizing to desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth > 900) {
        drawer.classList.remove('drawer-open');
        var backdrop = document.querySelector('.drawer-backdrop');
        if (backdrop) backdrop.classList.remove('open');
      }
    });
  }
});
