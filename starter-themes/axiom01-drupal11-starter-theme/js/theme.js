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

  Drupal.behaviors.axiom01ThemeInit = {
    attach: function attach(context) {
      if (context !== document) {
        return;
      }
      document.documentElement.classList.add('axiom01-theme-ready');
      applySystemTheme();
    }
  };
})(Drupal);
