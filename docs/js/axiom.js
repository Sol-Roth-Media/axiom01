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
 * Initializes the mobile menu functionality
 */

/**
 * Initializes the mobile menu functionality
 */

/**
 * Initializes the mobile menu functionality
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.navbar .menu-toggle');
    const navLinks = document.querySelector('.navbar .nav-links');

    if (!menuToggle || !navLinks) {
        console.warn('Mobile menu elements not found:', { menuToggle, navLinks });
        return;
    }

    // Set initial state
    menuToggle.innerHTML = '☰';
    menuToggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');

    // Toggle menu when button is clicked
    menuToggle.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();

        // Toggle the open class on the nav links
        navLinks.classList.toggle('open');

        // Update the expanded state for accessibility
        const isExpanded = navLinks.classList.contains('open');
        menuToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');

        // Update the icon based on state
        menuToggle.innerHTML = isExpanded ? '✕' : '☰';

        console.log('Menu toggle clicked, menu is now:', isExpanded ? 'open' : 'closed');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navLinks.classList.contains('open') &&
            !navLinks.contains(event.target) &&
            !menuToggle.contains(event.target)) {

            navLinks.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.innerHTML = '☰';
        }
    });

    // Add keyboard accessibility
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.innerHTML = '☰';
            menuToggle.focus();
        }
    });
}
/**
 * Initializes the tabs component
 */
function initTabs() {
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
 * Initializes dropdown menu components
 */
function initDropdowns() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    // Close all dropdowns when clicking outside
    document.addEventListener('click', (event) => {
        dropdownToggles.forEach(toggle => {
            const menuId = toggle.getAttribute('aria-controls');
            if (!menuId) return;

            const menu = document.getElementById(menuId);
            if (!menu || !menu.classList.contains('show')) return;

            const dropdownContainer = toggle.closest('.dropdown');
            if (dropdownContainer && !dropdownContainer.contains(event.target)) {
                menu.classList.remove('show');
                menu.setAttribute('aria-hidden', 'true');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Setup dropdown toggles
    dropdownToggles.forEach(toggle => {
        const menuId = toggle.getAttribute('aria-controls');
        if (!menuId) return;

        const menu = document.getElementById(menuId);
        if (!menu) return;

        toggle.addEventListener('click', (event) => {
            event.stopPropagation();
            const isOpen = menu.classList.toggle('show');
            menu.setAttribute('aria-hidden', !isOpen);
            toggle.setAttribute('aria-expanded', isOpen);

            // Set focus to first menu item when opening
            if (isOpen) {
                const firstItem = menu.querySelector('a');
                if (firstItem) setTimeout(() => firstItem.focus(), 100);
            }
        });

        // Add keyboard support for menu items
        const menuItems = menu.querySelectorAll('a');
        menuItems.forEach((item, index) => {
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    toggle.focus();
                    toggle.click();
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const nextIndex = (index + 1) % menuItems.length;
                    menuItems[nextIndex].focus();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prevIndex = (index - 1 + menuItems.length) % menuItems.length;
                    menuItems[prevIndex].focus();
                }
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
 */
function initThrobberDemo() {
    const toggleLoadingButton = document.getElementById('toggle-loading');
    const loadingThrobber = document.getElementById('loading-throbber');

    if (!toggleLoadingButton || !loadingThrobber) return;

    toggleLoadingButton.addEventListener('click', () => {
        const isLoading = loadingThrobber.classList.toggle('active');
        loadingThrobber.setAttribute('aria-hidden', !isLoading);
        toggleLoadingButton.textContent = isLoading ? 'Stop Loading' : 'Start Loading';
    });
}

// Main initialization function
function initAxiom() {
    initThemeSelector();
    initMobileMenu();
    initTabs();
    initAccordion();
    initDropdowns();
    initProgressDemo();
    initThrobberDemo();

    // Log initialization
    console.log('Axiom01 UI Framework initialized');
}

// Run all initializations after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initAxiom);/* PrismJS 1.29.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(e){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof i?new i(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,i;switch(t=t||{},a.util.type(n)){case"Object":if(i=a.util.objId(n),t[i])return t[i];for(var l in r={},t[i]=r,n)n.hasOwnProperty(l)&&(r[l]=e(n[l],t));return r;case"Array":return i=a.util.objId(n),t[i]?t[i]:(r=[],t[i]=r,n.forEach((function(n,a){r[a]=e(n,t)})),r);default:return n}},getLanguage:function(e){for(;e;){var t=n.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(n,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var i=(r=r||a.languages)[e],l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var s in t)t.hasOwnProperty(s)&&(l[s]=t[s]);t.hasOwnProperty(o)||(l[o]=i[o])}var u=r[e];return r[e]=l,a.languages.DFS(a.languages,(function(n,t){t===u&&n!=e&&(this[n]=l)})),l},DFS:function e(n,t,r,i){i=i||{};var l=a.util.objId;for(var o in n)if(n.hasOwnProperty(o)){t.call(n,o,n[o],r||o);var s=n[o],u=a.util.type(s);"Object"!==u||i[l(s)]?"Array"!==u||i[l(s)]||(i[l(s)]=!0,e(s,t,o,i)):(i[l(s)]=!0,e(s,t,null,i))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,l=0;i=r.elements[l++];)a.highlightElement(i,!0===n,r.callback)},highlightElement:function(n,t,r){var i=a.util.getLanguage(n),l=a.languages[i];a.util.setLanguage(n,i);var o=n.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&a.util.setLanguage(o,i);var s={element:n,language:i,grammar:l,code:n.textContent};function u(e){s.highlightedCode=e,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a.hooks.run("after-highlight",s),a.hooks.run("complete",s),r&&r.call(s.element)}if(a.hooks.run("before-sanity-check",s),(o=s.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!s.code)return a.hooks.run("complete",s),void(r&&r.call(s.element));if(a.hooks.run("before-highlight",s),s.grammar)if(t&&e.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else u(a.highlight(s.code,s.grammar,s.language));else u(a.util.encode(s.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new s;return u(a,a.head,e),o(e,a,n,a.head,0),function(e){for(var n=[],t=e.head.next;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(n)}},Token:i};function i(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function l(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function o(e,n,t,r,s,g){for(var f in t)if(t.hasOwnProperty(f)&&t[f]){var h=t[f];h=Array.isArray(h)?h:[h];for(var d=0;d<h.length;++d){if(g&&g.cause==f+","+d)return;var v=h[d],p=v.inside,m=!!v.lookbehind,y=!!v.greedy,k=v.alias;if(y&&!v.pattern.global){var x=v.pattern.toString().match(/[imsuy]*$/)[0];v.pattern=RegExp(v.pattern.source,x+"g")}for(var b=v.pattern||v,w=r.next,A=s;w!==n.tail&&!(g&&A>=g.reach);A+=w.value.length,w=w.next){var E=w.value;if(n.length>e.length)return;if(!(E instanceof i)){var P,L=1;if(y){if(!(P=l(b,A,e,m))||P.index>=e.length)break;var S=P.index,O=P.index+P[0].length,j=A;for(j+=w.value.length;S>=j;)j+=(w=w.next).value.length;if(A=j-=w.value.length,w.value instanceof i)continue;for(var C=w;C!==n.tail&&(j<O||"string"==typeof C.value);C=C.next)L++,j+=C.value.length;L--,E=e.slice(A,j),P.index-=A}else if(!(P=l(b,0,E,m)))continue;S=P.index;var N=P[0],_=E.slice(0,S),M=E.slice(S+N.length),W=A+E.length;g&&W>g.reach&&(g.reach=W);var z=w.prev;if(_&&(z=u(n,z,_),A+=_.length),c(n,z,L),w=u(n,z,new i(f,p?a.tokenize(N,p):N,k,N)),M&&u(n,w,M),L>1){var I={cause:f+","+d,reach:W};o(e,n,t,w.prev,A,I),g&&I.reach>g.reach&&(g.reach=I.reach)}}}}}}function s(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function u(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function c(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;n.next=r,r.prev=n,e.length-=a}if(e.Prism=a,i.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var r="";return n.forEach((function(n){r+=e(n,t)})),r}var i={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},l=n.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),a.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,i=t.code,l=t.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),l&&e.close()}),!1),a):a;var g=a.util.currentScript();function f(){a.manual||a.highlightAll()}if(g&&(a.filename=g.src,g.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var h=document.readyState;"loading"===h||"interactive"===h&&g&&g.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return a}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",(function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var t={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};t["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var n={};n[a]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,(function(){return a})),"i"),lookbehind:!0,greedy:!0,inside:t},Prism.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(a,e){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp("(^|[\"'\\s])(?:"+a+")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))","i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:Prism.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml;
!function(s){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|"+e.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var t=s.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}(Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),Prism.languages.js=Prism.languages.javascript;
