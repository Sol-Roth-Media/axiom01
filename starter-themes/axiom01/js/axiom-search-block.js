(function (Drupal, once, drupalSettings) {
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function renderResults(container, results, emptyMessage) {
    if (!container) {
      return;
    }

    if (!results.length) {
      container.innerHTML = '<p>' + escapeHtml(emptyMessage) + '</p>';
      return;
    }

    var items = results.map(function (result) {
      var label = escapeHtml(result.label);
      var value = escapeHtml(result.value);
      return '<li><a href="' + value + '">' + label + '</a></li>';
    }).join('');

    container.innerHTML = '<ul>' + items + '</ul>';
  }

  Drupal.behaviors.axiomSearchBlock = {
    attach: function attach(context) {
      once('axiom01-search-block', '[data-axiom01-search-block]', context).forEach(function (element) {
        var blockId = element.getAttribute('data-search-block-id');
        var input = element.querySelector('[data-search-input]');
        var output = element.querySelector('[data-search-results]');
        if (!blockId || !input || !output) {
          return;
        }

        var settings = drupalSettings.axiom01 && drupalSettings.axiom01.searchBlocks
          ? drupalSettings.axiom01.searchBlocks[blockId]
          : null;
        if (!settings || !Array.isArray(settings.results)) {
          return;
        }

        var source = settings.results;
        var emptyMessage = settings.emptyMessage || 'No matching results.';

        var update = function update() {
          var query = input.value.toLowerCase().trim();
          if (!query) {
            output.innerHTML = '';
            return;
          }
          var filtered = source.filter(function (result) {
            return result.label.toLowerCase().indexOf(query) !== -1 || result.value.toLowerCase().indexOf(query) !== -1;
          });
          renderResults(output, filtered, emptyMessage);
        };

        input.addEventListener('input', update);
      });
    }
  };
})(Drupal, once, drupalSettings);
