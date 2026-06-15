// js/components/storyview.js
export default {
  init(element) {
    const frames = Array.from(element.querySelectorAll('[data-role="frame"]'));
    const bars = Array.from(element.querySelectorAll('progress'));
    const next = element.querySelector('[data-action="next"]');
    const prev = element.querySelector('[data-action="prev"]');
    const status = element.querySelector('[role="status"]');
    const interval = Number(element.getAttribute('data-interval') || 4500);

    if (!frames.length) return;

    let index = frames.findIndex((frame) => !frame.hidden);
    if (index < 0) index = 0;
    let timer = null;

    const render = () => {
      frames.forEach((frame, frameIndex) => {
        frame.hidden = frameIndex !== index;
        frame.setAttribute('aria-hidden', String(frameIndex !== index));
      });
      bars.forEach((bar, barIndex) => {
        bar.value = barIndex < index ? 100 : barIndex === index ? 100 : 0;
      });
      if (status) status.textContent = `Story ${index + 1} of ${frames.length}`;
    };

    const stopTimer = () => {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    };

    const startTimer = () => {
      stopTimer();
      timer = window.setInterval(() => {
        index = (index + 1) % frames.length;
        render();
      }, interval);
    };

    const nextHandler = () => {
      index = (index + 1) % frames.length;
      render();
      startTimer();
    };

    const prevHandler = () => {
      index = index === 0 ? frames.length - 1 : index - 1;
      render();
      startTimer();
    };

    const keyHandler = (event) => {
      if (!element.contains(document.activeElement)) return;
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextHandler();
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevHandler();
      }
      if (event.key === 'Home') {
        event.preventDefault();
        index = 0;
        render();
        startTimer();
      }
      if (event.key === 'End') {
        event.preventDefault();
        index = frames.length - 1;
        render();
        startTimer();
      }
      if (event.key === 'Escape') {
        stopTimer();
      }
    };

    next?.addEventListener('click', nextHandler);
    prev?.addEventListener('click', prevHandler);
    element.addEventListener('pointerdown', stopTimer);
    element.addEventListener('pointerup', startTimer);
    document.addEventListener('keydown', keyHandler);

    render();
    startTimer();

    return {
      destroy() {
        stopTimer();
        next?.removeEventListener('click', nextHandler);
        prev?.removeEventListener('click', prevHandler);
        element.removeEventListener('pointerdown', stopTimer);
        element.removeEventListener('pointerup', startTimer);
        document.removeEventListener('keydown', keyHandler);
      }
    };
  }
};
