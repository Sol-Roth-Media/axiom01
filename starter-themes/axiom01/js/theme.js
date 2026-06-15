(function (Drupal) {
  function applySystemTheme() {
    var root = document.documentElement;
    if (!root || root.getAttribute('data-theme-mode') !== 'system' || !window.matchMedia) {
      return;
    }

    var media = window.matchMedia('(prefers-color-scheme: dark)');
    var syncTheme = function syncTheme(event) {
      root.setAttribute('data-theme', event.matches ? 'dark' : 'light');
    };

    syncTheme(media);
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', syncTheme);
    }
    else if (typeof media.addListener === 'function') {
      media.addListener(syncTheme);
    }
  }

  Drupal.behaviors.axiomThemeInit = {
    attach: function attach(context) {
      if (context !== document) {
        return;
      }
      applySystemTheme();
    }
  };

  Drupal.behaviors.axiomComponentBridge = {
    attach: function attach(context) {
      if (window.Axiom && typeof window.Axiom.init === 'function') {
        window.Axiom.init();
      }
    }
  };
})(Drupal);
