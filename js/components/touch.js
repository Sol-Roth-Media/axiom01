// js/components/touch.js
export default {
  init(element) {
    const pad = element.querySelector('[data-role="pad"]') || element;
    const list = element.querySelector('ol');
    let downAt = 0;
    let startX = 0;
    let startY = 0;

    const push = (message) => {
      if (!list) return;
      const item = document.createElement('li');
      item.textContent = message;
      list.prepend(item);
      while (list.children.length > 6) {
        list.lastElementChild.remove();
      }
    };

    const down = (event) => {
      const point = event.touches ? event.touches[0] : event;
      downAt = Date.now();
      startX = point.clientX;
      startY = point.clientY;
    };

    const up = (event) => {
      const point = event.changedTouches ? event.changedTouches[0] : event;
      const duration = Date.now() - downAt;
      const deltaX = point.clientX - startX;
      const deltaY = point.clientY - startY;
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      if (duration > 450 && absX < 12 && absY < 12) {
        push('Long press');
        return;
      }

      if (absX > 40 || absY > 40) {
        if (absX > absY) {
          push(deltaX > 0 ? 'Swipe right' : 'Swipe left');
        } else {
          push(deltaY > 0 ? 'Swipe down' : 'Swipe up');
        }
        return;
      }

      push('Tap');
    };

    pad.addEventListener('pointerdown', down);
    pad.addEventListener('pointerup', up);
    pad.addEventListener('touchstart', down, { passive: true });
    pad.addEventListener('touchend', up);

    return {
      destroy() {
        pad.removeEventListener('pointerdown', down);
        pad.removeEventListener('pointerup', up);
        pad.removeEventListener('touchstart', down);
        pad.removeEventListener('touchend', up);
      }
    };
  }
};
