// js/components/pullrefresh.js
export default {
  init(element) {
    const indicator = element.querySelector('output');
    const area = element.querySelector('[data-role="surface"]') || element;
    let startY = 0;
    let distance = 0;
    let active = false;
    let busy = false;

    const setDistance = (value) => {
      distance = Math.max(0, Math.min(120, value));
      area.style.setProperty('--pull-distance', `${distance}px`);
      if (indicator) {
        const percent = Math.round((distance / 80) * 100);
        indicator.value = `${Math.max(0, Math.min(100, percent))}`;
        indicator.textContent = busy ? 'Refreshing…' : distance >= 80 ? 'Release to refresh' : 'Pull to refresh';
      }
    };

    const triggerRefresh = () => {
      if (busy) return;
      busy = true;
      element.setAttribute('aria-busy', 'true');
      setDistance(80);
      const event = new CustomEvent('axiom:refresh', { bubbles: true });
      element.dispatchEvent(event);
      window.setTimeout(() => {
        busy = false;
        element.setAttribute('aria-busy', 'false');
        setDistance(0);
      }, 800);
    };

    const down = (event) => {
      if (busy || area.scrollTop > 0) return;
      const point = event.touches ? event.touches[0] : event;
      startY = point.clientY;
      active = true;
    };

    const move = (event) => {
      if (!active || busy) return;
      const point = event.touches ? event.touches[0] : event;
      const delta = point.clientY - startY;
      if (delta > 0) {
        if (event.cancelable) event.preventDefault();
        setDistance(delta * 0.5);
      }
    };

    const up = () => {
      if (!active) return;
      active = false;
      if (distance >= 80) {
        triggerRefresh();
      } else {
        setDistance(0);
      }
    };

    area.addEventListener('pointerdown', down);
    area.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    area.addEventListener('touchstart', down, { passive: true });
    area.addEventListener('touchmove', move, { passive: false });
    area.addEventListener('touchend', up);
    element.setAttribute('aria-busy', 'false');
    setDistance(0);

    return {
      destroy() {
        area.removeEventListener('pointerdown', down);
        area.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
        area.removeEventListener('touchstart', down);
        area.removeEventListener('touchmove', move);
        area.removeEventListener('touchend', up);
      }
    };
  }
};
