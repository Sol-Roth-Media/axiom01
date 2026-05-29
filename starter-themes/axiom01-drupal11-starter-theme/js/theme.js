(function (Drupal) {
  Drupal.behaviors.axiom01ThemeInit = {
    attach: function attach(context) {
      if (context !== document) {
        return;
      }
      document.documentElement.classList.add('axiom01-theme-ready');
    }
  };
})(Drupal);
