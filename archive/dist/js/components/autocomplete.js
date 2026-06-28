// js/components/autocomplete.js
export default {
  init(element) {
    const input = element.querySelector('input');
    const list = element.querySelector('[role="listbox"]');
    const source = element.getAttribute('data-options') || '';
    const options = source.split(',').map((item) => item.trim()).filter(Boolean);

    if (!input || !list || !options.length) return;

    let active = -1;
    let filtered = [...options];

    const listHadId = Boolean(list.id);
    if (!list.id) {
      list.id = `autocomplete-list-${Math.random().toString(36).slice(2, 11)}`;
    }

    const render = () => {
      list.innerHTML = '';
      filtered.forEach((option, index) => {
        const item = document.createElement('li');
        item.id = `autocomplete-${index}`;
        item.setAttribute('role', 'option');
        item.setAttribute('aria-selected', String(index === active));
        item.textContent = option;
        item.addEventListener('mousedown', (event) => {
          event.preventDefault();
          input.value = option;
          close();
        });
        list.appendChild(item);
      });
      list.hidden = filtered.length === 0;
      input.setAttribute('aria-expanded', String(!list.hidden));
      input.setAttribute('aria-activedescendant', active >= 0 ? `autocomplete-${active}` : '');
    };

    const close = () => {
      active = -1;
      filtered = [];
      render();
    };

    const filter = () => {
      const query = input.value.toLowerCase();
      filtered = options.filter((item) => item.toLowerCase().includes(query));
      active = -1;
      render();
    };

    const inputHandler = () => {
      if (!input.value.trim()) {
        close();
        return;
      }
      filter();
    };

    const keyHandler = (event) => {
      if (list.hidden) return;
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        active = Math.min(filtered.length - 1, active + 1);
        render();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        active = Math.max(0, active - 1);
        render();
      } else if (event.key === 'Enter' && active >= 0) {
        event.preventDefault();
        input.value = filtered[active];
        close();
      } else if (event.key === 'Escape') {
        close();
      }
    };

    const outsideHandler = (event) => {
      if (!element.contains(event.target)) close();
    };

    input.setAttribute('autocomplete', 'off');
    input.setAttribute('role', 'combobox');
    input.setAttribute('aria-haspopup', 'listbox');
    input.setAttribute('aria-controls', list.id);
    input.addEventListener('input', inputHandler);
    input.addEventListener('keydown', keyHandler);
    document.addEventListener('click', outsideHandler);
    close();

    return {
      destroy() {
        input.removeEventListener('input', inputHandler);
        input.removeEventListener('keydown', keyHandler);
        document.removeEventListener('click', outsideHandler);
        input.removeAttribute('aria-controls');
        if (!listHadId) {
          list.removeAttribute('id');
        }
      }
    };
  }
};
