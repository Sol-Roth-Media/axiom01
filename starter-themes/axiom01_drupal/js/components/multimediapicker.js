// js/components/multimediapicker.js
export default {
  init(element) {
    const input = element.querySelector('input[type="file"]');
    const list = element.querySelector('[data-role="list"]');
    const live = element.querySelector('[role="status"]');
    const urls = new Set();

    if (!input || !list) return;

    const revokeAll = () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
      urls.clear();
    };

    const updateLive = () => {
      if (!live) return;
      live.textContent = `${list.children.length} file${list.children.length === 1 ? '' : 's'} selected`;
    };

    const render = (files) => {
      revokeAll();
      list.innerHTML = '';
      Array.from(files).forEach((file, fileIndex) => {
        const url = URL.createObjectURL(file);
        urls.add(url);
        const item = document.createElement('li');
        const title = document.createElement('p');
        title.textContent = `${file.name} (${Math.round(file.size / 1024)} KB)`;

        if (file.type.startsWith('image/')) {
          const image = document.createElement('img');
          image.src = url;
          image.alt = file.name;
          item.appendChild(image);
        } else if (file.type.startsWith('video/')) {
          const video = document.createElement('video');
          video.src = url;
          video.controls = true;
          item.appendChild(video);
        } else if (file.type.startsWith('audio/')) {
          const audio = document.createElement('audio');
          audio.src = url;
          audio.controls = true;
          item.appendChild(audio);
        }

        item.appendChild(title);

        const remove = document.createElement('button');
        remove.type = 'button';
        remove.textContent = 'Remove';
        remove.addEventListener('click', () => {
          const nextFiles = Array.from(input.files || []).filter((_file, idx) => idx !== fileIndex);
          const transfer = new DataTransfer();
          nextFiles.forEach((nextFile) => transfer.items.add(nextFile));
          input.files = transfer.files;
          render(input.files);
        });
        item.appendChild(remove);

        list.appendChild(item);
      });
      updateLive();
    };

    const changeHandler = () => render(input.files || []);
    const dragOverHandler = (event) => {
      event.preventDefault();
    };
    const dropHandler = (event) => {
      event.preventDefault();
      if (!event.dataTransfer?.files?.length) return;
      input.files = event.dataTransfer.files;
      render(input.files || []);
    };

    input.addEventListener('change', changeHandler);
    element.addEventListener('dragover', dragOverHandler);
    element.addEventListener('drop', dropHandler);
    render([]);

    return {
      destroy() {
        input.removeEventListener('change', changeHandler);
        element.removeEventListener('dragover', dragOverHandler);
        element.removeEventListener('drop', dropHandler);
        revokeAll();
      }
    };
  }
};
