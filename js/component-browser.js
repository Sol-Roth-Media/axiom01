const ComponentBrowser = {
  init: function(element) {
    if (!element) return;

    const tabs = element.querySelectorAll('.tabs button');
    const iframe = element.querySelector('.preview iframe');

    if (!tabs.length || !iframe) {
      console.warn('Axiom: Component browser tabs or iframe not found.');
      return;
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const src = tab.dataset.src;
        if (src) {
          iframe.src = src;
        }

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });
  }
};

export default ComponentBrowser;