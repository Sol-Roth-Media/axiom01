// js/components/timer.js
export default {
  init(element) {
    const readout = element.querySelector('time');
    const mode = element.querySelector('select');
    const minutes = element.querySelector('[name="minutes"]');
    const seconds = element.querySelector('[name="seconds"]');
    const start = element.querySelector('[data-action="start"]');
    const pause = element.querySelector('[data-action="pause"]');
    const reset = element.querySelector('[data-action="reset"]');
    const status = element.querySelector('[role="status"]');

    let running = false;
    let elapsed = 0;
    let remaining = 0;
    let last = 0;
    let frame = null;

    const format = (totalMs) => {
      const wholeSeconds = Math.max(0, Math.floor(totalMs / 1000));
      const mins = Math.floor(wholeSeconds / 60);
      const secs = wholeSeconds % 60;
      const tenths = Math.floor((totalMs % 1000) / 100);
      return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${tenths}`;
    };

    const desiredCountdown = () => {
      const mins = Number(minutes?.value || 0);
      const secs = Number(seconds?.value || 0);
      return Math.max(0, ((mins * 60) + secs) * 1000);
    };

    const update = () => {
      if (!readout) return;
      if ((mode?.value || 'stopwatch') === 'stopwatch') {
        readout.textContent = format(elapsed);
      } else {
        readout.textContent = format(remaining);
      }
    };

    const tick = (now) => {
      if (!running) return;
      const delta = now - last;
      last = now;
      if ((mode?.value || 'stopwatch') === 'stopwatch') {
        elapsed += delta;
      } else {
        remaining -= delta;
        if (remaining <= 0) {
          remaining = 0;
          running = false;
          if (status) status.textContent = 'Countdown complete';
        }
      }
      update();
      if (running) frame = requestAnimationFrame(tick);
    };

    const startHandler = () => {
      if (running) return;
      if ((mode?.value || 'stopwatch') === 'countdown' && remaining <= 0) {
        remaining = desiredCountdown();
      }
      running = true;
      if (status) status.textContent = 'Running';
      last = performance.now();
      frame = requestAnimationFrame(tick);
    };

    const pauseHandler = () => {
      running = false;
      if (frame) cancelAnimationFrame(frame);
      if (status) status.textContent = 'Paused';
    };

    const resetHandler = () => {
      running = false;
      if (frame) cancelAnimationFrame(frame);
      elapsed = 0;
      remaining = desiredCountdown();
      update();
      if (status) status.textContent = 'Reset';
    };

    const modeHandler = () => {
      resetHandler();
      if (status) status.textContent = mode?.value === 'countdown' ? 'Countdown mode' : 'Stopwatch mode';
    };

    start?.addEventListener('click', startHandler);
    pause?.addEventListener('click', pauseHandler);
    reset?.addEventListener('click', resetHandler);
    mode?.addEventListener('change', modeHandler);
    resetHandler();

    return {
      destroy() {
        running = false;
        if (frame) cancelAnimationFrame(frame);
        start?.removeEventListener('click', startHandler);
        pause?.removeEventListener('click', pauseHandler);
        reset?.removeEventListener('click', resetHandler);
        mode?.removeEventListener('change', modeHandler);
      }
    };
  }
};
