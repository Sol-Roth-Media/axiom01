/**
 * Axicons Loader - Modular Icon System v2
 * Ultra-lightweight: Load only what you need
 * 
 * Start with axicons-base.js (89KB, 450 base icons)
 * Mix and match optional variants:
 *   - axicons-thin-variants.js (170KB, 760 icons)
 *   - axicons-inverted-variants.js (243KB, 758 icons)
 *   - axicons-color-variants.js (440KB, 1,351 icons)
 *   - axicons-premium-variants.js (185KB, 622 icons)
 * 
 * Total Possible: 3,941 icons across all variants
 */

(function(window) {
  'use strict';

  const loaderScript = document.currentScript && document.currentScript.src
    ? new URL(document.currentScript.src, window.location.href)
    : new URL('js/axicons-loader.js', window.location.href);

  function resolveAssetUrl(fileName) {
    return new URL(`./${fileName}`, loaderScript).href;
  }

  window.AxiconsLoader = {
    // Track loaded icon sets
    loaded: {
      base: false,
      thin: false,
      inverted: false,
      color: false,
      premium: false
    },

    /**
     * Load base icons (minimal, default)
     * @returns {Promise}
     */
    loadBase: async function() {
      if (this.loaded.base) {
        return window.axicons;
      }
      
      try {
        // Check if already loaded via script tag
        if (window.axicons && Array.isArray(window.axicons)) {
          this.loaded.base = true;
          return window.axicons;
        }
        
        // Dynamically load base icons
        const response = await fetch(resolveAssetUrl('axicons-base.js'));
        const script = await response.text();
        eval(script);
        this.loaded.base = true;
        return window.axicons;
      } catch (error) {
        console.error('Failed to load base icons:', error);
        return window.axicons || [];
      }
    },

    /**
     * Load thin variants
     * @returns {Promise}
     */
    loadThin: async function() {
      if (this.loaded.thin) {
        return window.axicons;
      }

      if (!this.loaded.base) {
        await this.loadBase();
      }

      try {
        const response = await fetch(resolveAssetUrl('axicons-thin-variants.js'));
        const script = await response.text();
        eval(script);
        this.loaded.thin = true;
        return window.axicons;
      } catch (error) {
        console.error('Failed to load thin variants:', error);
        return window.axicons;
      }
    },

    /**
     * Load inverted variants
     * @returns {Promise}
     */
    loadInverted: async function() {
      if (this.loaded.inverted) {
        return window.axicons;
      }

      if (!this.loaded.base) {
        await this.loadBase();
      }

      try {
        const response = await fetch(resolveAssetUrl('axicons-inverted-variants.js'));
        const script = await response.text();
        eval(script);
        this.loaded.inverted = true;
        return window.axicons;
      } catch (error) {
        console.error('Failed to load inverted variants:', error);
        return window.axicons;
      }
    },

    /**
     * Load color variants
     * @returns {Promise}
     */
    loadColor: async function() {
      if (this.loaded.color) {
        return window.axicons;
      }

      if (!this.loaded.base) {
        await this.loadBase();
      }

      try {
        const response = await fetch(resolveAssetUrl('axicons-color-variants.js'));
        const script = await response.text();
        eval(script);
        this.loaded.color = true;
        return window.axicons;
      } catch (error) {
        console.error('Failed to load color variants:', error);
        return window.axicons;
      }
    },

    /**
     * Load premium variants
     * @returns {Promise}
     */
    loadPremium: async function() {
      if (this.loaded.premium) {
        return window.axicons;
      }

      if (!this.loaded.base) {
        await this.loadBase();
      }

      try {
        const response = await fetch(resolveAssetUrl('axicons-premium-variants.js'));
        const script = await response.text();
        eval(script);
        this.loaded.premium = true;
        return window.axicons;
      } catch (error) {
        console.error('Failed to load premium variants:', error);
        return window.axicons;
      }
    },

    /**
     * Replace current icons with a specific variant
     * Useful to switch from base to thin, inverted, or color only
     * @param {string} variant - 'thin', 'inverted', or 'color'
     * @returns {Promise}
     */
    replaceWith: async function(variant) {
      switch(variant.toLowerCase()) {
        case 'thin':
          return await this.loadThin();
        case 'inverted':
          return await this.loadInverted();
        case 'color':
          return await this.loadColor();
        case 'premium':
          return await this.loadPremium();
        case 'base':
          return await this.loadBase();
        default:
          console.warn(`Unknown variant: ${variant}`);
          return window.axicons;
      }
    },

    /**
     * Load all variants (full library)
     * @returns {Promise}
     */
    loadAll: async function() {
      await this.loadBase();
      await this.loadThin();
      await this.loadInverted();
      await this.loadColor();
      await this.loadPremium();
      return window.axicons;
    },

    /**
     * Get icon by name (case-insensitive)
     * @param {string} name - Icon name
     * @returns {object|null}
     */
    getIcon: function(name) {
      if (!window.axicons || !Array.isArray(window.axicons)) {
        return null;
      }
      return window.axicons.find(i => i && i.name && i.name.toLowerCase() === name.toLowerCase()) || null;
    },

    /**
     * Search icons by name or category
     * @param {string} query - Search term
     * @param {string} category - Optional category filter
     * @returns {array}
     */
    search: function(query, category = null) {
      if (!window.axicons || !Array.isArray(window.axicons)) {
        return [];
      }

      const lowerQuery = query.toLowerCase();
      let results = window.axicons.filter(icon => 
        icon.name.toLowerCase().includes(lowerQuery)
      );

      if (category) {
        results = results.filter(icon => icon.category === category);
      }

      return results;
    },

    /**
     * Get stats on loaded icons
     * @returns {object}
     */
    getStats: function() {
      if (!window.axicons || !Array.isArray(window.axicons)) {
        return { total: 0, categories: {}, loaded: this.loaded };
      }

      const stats = {
        total: window.axicons.length,
        categories: {},
        loaded: this.loaded,
        byVariant: {
          base: 0,
          thin: 0,
          inverted: 0,
          color: 0,
          premium: 0
        }
      };

      window.axicons.forEach(icon => {
        // Count by category
        stats.categories[icon.category] = (stats.categories[icon.category] || 0) + 1;

        // Count by variant
        if (icon.name.includes('Thin')) stats.byVariant.thin++;
        else if (icon.name.includes('Inverted')) stats.byVariant.inverted++;
        else if (icon.name.includes('Color') || icon.name.includes('Premium')) stats.byVariant.color++;
        else stats.byVariant.base++;
      });

      return stats;
    }
  };

  // Auto-load base icons on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      window.AxiconsLoader.loadBase();
    });
  } else {
    window.AxiconsLoader.loadBase();
  }

})(window);
