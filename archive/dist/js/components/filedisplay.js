// js/components/filedisplay.js
export default {
  init(element) {
    const input = element.querySelector('input[type="file"]');
    const list = element.querySelector('ul');
    const urls = new Set();

    if (!input || !list) return;

    const clearUrls = () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
      urls.clear();
    };

    const render = (files) => {
      clearUrls();
      list.innerHTML = '';
      Array.from(files).forEach((file) => {
        const item = document.createElement('li');
        const detail = document.createElement('p');
        detail.textContent = `${file.name} • ${Math.round(file.size / 1024)} KB`;

        const url = URL.createObjectURL(file);
        urls.add(url);

        const link = document.createElement('a');
        link.href = url;
        link.download = file.name;
        link.textContent = 'Download copy';

        item.appendChild(detail);

        if (file.type.startsWith('text/')) {
          const preview = document.createElement('pre');
          const reader = new FileReader();
          reader.onload = () => {
            preview.textContent = String(reader.result || '').slice(0, 400);
          };
          reader.readAsText(file);
          item.appendChild(preview);
        }

        item.appendChild(link);
        list.appendChild(item);
      });
    };

    const handler = () => render(input.files || []);
    input.addEventListener('change', handler);
    render([]);

    return {
      destroy() {
        input.removeEventListener('change', handler);
        clearUrls();
      }
    };
  }
};
