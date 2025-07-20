/**
 * Axiom01 Theme Customization Wizard
 * Interactive theme builder with real-time preview and export functionality
 */

class AxiomThemeWizard {
  constructor() {
    this.currentTheme = {
      base: 'light',
      primaryHue: 220,
      primarySaturation: 91,
      primaryLightness: 53,
      fontScale: 1,
      fontFamily: 'system',
      borderRadius: 0.5,
      spacingScale: 1
    };

    this.fontFamilies = {
      system: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      inter: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      roboto: '"Roboto", -apple-system, BlinkMacSystemFont, sans-serif',
      'source-sans': '"Source Sans Pro", -apple-system, BlinkMacSystemFont, sans-serif'
    };

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initializeControls();
    this.updatePreview();
  }

  /**
   * Setup all event listeners for the wizard
   */
  setupEventListeners() {
    // Base theme selection
    document.querySelectorAll('input[name="base-theme"]').forEach(input => {
      input.addEventListener('change', (e) => {
        this.currentTheme.base = e.target.value;
        this.updatePreview();
        this.announceChange(`Base theme changed to ${e.target.value}`);
      });
    });

    // Color controls
    const primaryHue = document.getElementById('primary-hue');
    const primarySaturation = document.getElementById('primary-saturation');
    const primaryLightness = document.getElementById('primary-lightness');

    if (primaryHue) {
      primaryHue.addEventListener('input', (e) => {
        this.currentTheme.primaryHue = parseInt(e.target.value);
        this.updateColorValue('primary-hue-value', e.target.value + '°');
        this.updatePreview();
      });
    }

    if (primarySaturation) {
      primarySaturation.addEventListener('input', (e) => {
        this.currentTheme.primarySaturation = parseInt(e.target.value);
        this.updateColorValue('primary-saturation-value', e.target.value + '%');
        this.updatePreview();
      });
    }

    if (primaryLightness) {
      primaryLightness.addEventListener('input', (e) => {
        this.currentTheme.primaryLightness = parseInt(e.target.value);
        this.updateColorValue('primary-lightness-value', e.target.value + '%');
        this.updatePreview();
      });
    }

    // Typography controls
    const fontScale = document.getElementById('font-scale');
    const fontFamily = document.getElementById('font-family');

    if (fontScale) {
      fontScale.addEventListener('change', (e) => {
        this.currentTheme.fontScale = parseFloat(e.target.value);
        this.updatePreview();
        this.announceChange(`Font scale changed to ${e.target.value}x`);
      });
    }

    if (fontFamily) {
      fontFamily.addEventListener('change', (e) => {
        this.currentTheme.fontFamily = e.target.value;
        this.updatePreview();
        this.announceChange(`Font family changed to ${e.target.options[e.target.selectedIndex].text}`);
      });
    }

    // Border radius control
    const borderRadius = document.getElementById('border-radius');
    if (borderRadius) {
      borderRadius.addEventListener('input', (e) => {
        this.currentTheme.borderRadius = parseFloat(e.target.value);
        this.updatePreview();
      });
    }

    // Spacing control
    const spacingScale = document.getElementById('spacing-scale');
    if (spacingScale) {
      spacingScale.addEventListener('change', (e) => {
        this.currentTheme.spacingScale = parseFloat(e.target.value);
        this.updatePreview();
        this.announceChange(`Spacing scale changed to ${e.target.value}x`);
      });
    }

    // Preview size controls
    document.querySelectorAll('.preview-size').forEach(button => {
      button.addEventListener('click', (e) => {
        this.setPreviewSize(e.target.id.replace('preview-', ''));
      });
    });

    // Action buttons
    document.getElementById('export-theme')?.addEventListener('click', () => this.exportTheme());
    document.getElementById('reset-theme')?.addEventListener('click', () => this.resetTheme());
    document.getElementById('save-theme')?.addEventListener('click', () => this.saveTheme());

    // Export modal buttons
    document.getElementById('copy-css')?.addEventListener('click', () => this.copyCSSToClipboard());
    document.getElementById('download-css')?.addEventListener('click', () => this.downloadCSS());

    // Modal close buttons
    document.querySelectorAll('.modal .close').forEach(button => {
      button.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        modal.close();
      });
    });

    // Close modal on backdrop click
    document.getElementById('export-modal')?.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        e.target.close();
      }
    });
  }

  /**
   * Initialize control values
   */
  initializeControls() {
    this.updateColorValue('primary-hue-value', this.currentTheme.primaryHue + '°');
    this.updateColorValue('primary-saturation-value', this.currentTheme.primarySaturation + '%');
    this.updateColorValue('primary-lightness-value', this.currentTheme.primaryLightness + '%');
  }

  /**
   * Update color value display
   */
  updateColorValue(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = value;
    }
  }

  /**
   * Generate primary color from HSL values
   */
  generatePrimaryColor(shade = 500) {
    const { primaryHue, primarySaturation, primaryLightness } = this.currentTheme;

    // Adjust lightness based on shade
    const shadeAdjustments = {
      25: 95, 50: 90, 100: 85, 200: 75, 300: 65, 400: 55,
      500: primaryLightness, 600: primaryLightness - 10,
      700: primaryLightness - 20, 800: primaryLightness - 30,
      900: primaryLightness - 40, 950: primaryLightness - 50
    };

    const adjustedLightness = Math.max(5, Math.min(95, shadeAdjustments[shade] || primaryLightness));
    return `hsl(${primaryHue}, ${primarySaturation}%, ${adjustedLightness}%)`;
  }

  /**
   * Generate complete CSS for current theme
   */
  generateThemeCSS() {
    const { fontScale, fontFamily, borderRadius, spacingScale, base } = this.currentTheme;

    let css = `/* Axiom01 Custom Theme - Generated ${new Date().toLocaleDateString()} */\n\n`;
    css += `:root {\n`;

    // Primary color palette
    [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].forEach(shade => {
      css += `  --a-color-primary-${shade}: ${this.generatePrimaryColor(shade)};\n`;
    });

    // Font family
    if (fontFamily !== 'system') {
      css += `  --a-font-body: ${this.fontFamilies[fontFamily]};\n`;
      css += `  --a-font-heading: ${this.fontFamilies[fontFamily]};\n`;
    }

    // Font scale adjustments
    if (fontScale !== 1) {
      const fontSizes = {
        '2xs': 0.625, xs: 0.75, sm: 0.875, md: 1, lg: 1.125,
        xl: 1.25, '2xl': 1.5, '3xl': 1.875, '4xl': 2.25, '5xl': 3
      };

      Object.entries(fontSizes).forEach(([size, value]) => {
        css += `  --a-size-${size}: ${(value * fontScale).toFixed(3)}rem;\n`;
      });
    }

    // Border radius adjustments
    if (borderRadius !== 0.5) {
      const radiusValues = {
        sm: 0.25, md: 0.5, lg: 0.75, xl: 1, '2xl': 1.5
      };

      Object.entries(radiusValues).forEach(([size, value]) => {
        css += `  --a-radius-${size}: ${(value * (borderRadius * 2)).toFixed(3)}rem;\n`;
      });
    }

    // Spacing scale adjustments
    if (spacingScale !== 1) {
      const spacingValues = {
        '2xs': 0.25, xs: 0.5, sm: 0.75, md: 1, lg: 1.5,
        xl: 2, '2xl': 3, '3xl': 4, '4xl': 6
      };

      Object.entries(spacingValues).forEach(([size, value]) => {
        css += `  --a-space-${size}: ${(value * spacingScale).toFixed(3)}rem;\n`;
      });
    }

    css += `}\n\n`;

    // Add theme-specific overrides
    if (base !== 'light') {
      css += `[data-theme="${base}"] {\n`;
      css += `  /* Theme-specific overrides would go here */\n`;
      css += `}\n`;
    }

    return css;
  }

  /**
   * Update live preview with current theme
   */
  updatePreview() {
    const previewFrame = document.getElementById('preview-frame');
    if (!previewFrame) return;

    // Apply theme to preview frame
    previewFrame.dataset.theme = this.currentTheme.base;

    // Create and apply custom CSS
    let existingStyle = document.getElementById('custom-theme-style');
    if (existingStyle) {
      existingStyle.remove();
    }

    const style = document.createElement('style');
    style.id = 'custom-theme-style';
    style.textContent = this.generateThemeCSS();
    document.head.appendChild(style);

    // Update primary color preview
    const colorPreview = document.getElementById('primary-color-preview');
    if (colorPreview) {
      colorPreview.style.background = this.generatePrimaryColor(500);
    }
  }

  /**
   * Set preview frame size
   */
  setPreviewSize(size) {
    const previewFrame = document.getElementById('preview-frame');
    const buttons = document.querySelectorAll('.preview-size');

    // Update button states
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById(`preview-${size}`)?.classList.add('active');

    // Apply size class
    previewFrame.className = 'preview-content';
    if (size === 'tablet') {
      previewFrame.classList.add('tablet-view');
    } else if (size === 'mobile') {
      previewFrame.classList.add('mobile-view');
    }

    this.announceChange(`Preview size changed to ${size}`);
  }

  /**
   * Export current theme
   */
  exportTheme() {
    const modal = document.getElementById('export-modal');
    const textarea = document.getElementById('export-css');

    if (modal && textarea) {
      textarea.value = this.generateThemeCSS();
      modal.showModal();

      // Focus the textarea for easy selection
      setTimeout(() => textarea.focus(), 100);
    }
  }

  /**
   * Copy CSS to clipboard
   */
  async copyCSSToClipboard() {
    const textarea = document.getElementById('export-css');

    try {
      await navigator.clipboard.writeText(textarea.value);
      this.showToast('CSS copied to clipboard!', 'success');
    } catch (err) {
      // Fallback for older browsers
      textarea.select();
      document.execCommand('copy');
      this.showToast('CSS copied to clipboard!', 'success');
    }
  }

  /**
   * Download CSS as file
   */
  downloadCSS() {
    const css = this.generateThemeCSS();
    const blob = new Blob([css], { type: 'text/css' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'axiom01-custom-theme.css';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    this.showToast('Theme downloaded!', 'success');
  }

  /**
   * Reset theme to defaults
   */
  resetTheme() {
    this.currentTheme = {
      base: 'light',
      primaryHue: 220,
      primarySaturation: 91,
      primaryLightness: 53,
      fontScale: 1,
      fontFamily: 'system',
      borderRadius: 0.5,
      spacingScale: 1
    };

    // Reset form controls
    document.querySelector('input[name="base-theme"][value="light"]').checked = true;
    document.getElementById('primary-hue').value = 220;
    document.getElementById('primary-saturation').value = 91;
    document.getElementById('primary-lightness').value = 53;
    document.getElementById('font-scale').value = 1;
    document.getElementById('font-family').value = 'system';
    document.getElementById('border-radius').value = 0.5;
    document.getElementById('spacing-scale').value = 1;

    this.initializeControls();
    this.updatePreview();
    this.announceChange('Theme reset to defaults');
  }

  /**
   * Save theme to localStorage
   */
  saveTheme() {
    const themeName = prompt('Enter a name for your theme:');
    if (!themeName) return;

    const savedThemes = JSON.parse(localStorage.getItem('axiom-themes') || '{}');
    savedThemes[themeName] = {
      ...this.currentTheme,
      css: this.generateThemeCSS(),
      created: new Date().toISOString()
    };

    localStorage.setItem('axiom-themes', JSON.stringify(savedThemes));
    this.showToast(`Theme "${themeName}" saved!`, 'success');
  }

  /**
   * Show toast notification
   */
  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.textContent = message;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');

    // Add toast styles
    Object.assign(toast.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '12px 24px',
      backgroundColor: type === 'success' ? '#22c55e' : '#3b82f6',
      color: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      zIndex: '1000',
      opacity: '0',
      transform: 'translateY(-10px)',
      transition: 'all 0.3s ease'
    });

    document.body.appendChild(toast);

    // Animate in
    setTimeout(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    }, 10);

    // Animate out and remove
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  /**
   * Announce changes to screen readers
   */
  announceChange(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);
    setTimeout(() => announcement.remove(), 1000);
  }
}

// Initialize the theme wizard when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.AxiomThemeWizard = new AxiomThemeWizard();
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AxiomThemeWizard;
}
