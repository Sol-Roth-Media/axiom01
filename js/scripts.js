/**
 * Axiom Framework Scripts
 * v0.1.2 - Enhanced Theme Support with Additional Themes
 */

// --- Available Themes ---
const availableThemes = [
    { value: 'light', name: 'Light Theme' },
    { value: 'dark', name: 'Dark Theme' },
    { value: 'aesthetic', name: 'Aesthetic' },
    { value: 'light-aesthetic', name: 'Light Aesthetic' },
    { value: 'dark-aesthetic', name: 'Dark Aesthetic' },
    { value: 'purple-haze', name: 'Purple Haze' },
    { value: 'electric-neon', name: 'Electric Neon' },
    { value: 'cyberpunk', name: 'Cyberpunk' },
    { value: 'blue', name: 'Blue Theme' },
    { value: 'gray', name: 'Gray Theme' },
    { value: 'sunset', name: 'Sunset Theme' },
    { value: 'forest', name: 'Forest Theme' },
    { value: 'metallic-chic', name: 'Metallic Chic' },
    { value: 'deep-vintage', name: 'Deep Vintage' },
    { value: 'mechanical-floaty', name: 'Mechanical Floaty' },
    { value: 'cool-collected', name: 'Cool Collected' },
    { value: 'cinematic-dark', name: 'Cinematic Dark' },
    { value: 'cinematic-red', name: 'Cinematic Red' },
    { value: 'monotone', name: 'Monotone' },
    { value: 'sepia', name: 'Sepia' },
];

function applyTheme(themeValue) {
    document.documentElement.setAttribute('data-theme', themeValue);
    localStorage.setItem('theme', themeValue);
}

function initThemeSelector() {
    const themeSelect = document.getElementById('theme-select');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (!themeSelect) return;

    availableThemes.forEach(theme => {
        const option = document.createElement('option');
        option.value = theme.value;
        option.textContent = theme.name;
        themeSelect.appendChild(option);
    });

    themeSelect.value = currentTheme;

    themeSelect.addEventListener('change', (event) => {
        applyTheme(event.target.value);
    });

    applyTheme(currentTheme);
}

function initAxiom() {
    initThemeSelector();
}

document.addEventListener('DOMContentLoaded', initAxiom);