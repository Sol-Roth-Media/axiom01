// js/components/swipecards.js
export default {
  init(element) {
    const cards = Array.from(element.querySelectorAll('article'));
    const status = element.querySelector('[role="status"]');
    const actions = {
      like: element.querySelector('[data-action="like"]'),
      nope: element.querySelector('[data-action="nope"]'),
      reset: element.querySelector('[data-action="reset"]')
    };

    let index = cards.findIndex((card) => !card.hidden);
    if (index < 0) index = 0;

    let activePointer = null;
    let startX = 0;
    let dragX = 0;

    const announce = () => {
      if (!status) return;
      status.textContent = `Card ${Math.min(index + 1, cards.length)} of ${cards.length}`;
    };

    const activeCard = () => cards[index] || null;

    const updateCard = (distance) => {
      const card = activeCard();
      if (!card) return;
      card.style.transform = `translateX(${distance}px) rotate(${distance * 0.04}deg)`;
      card.style.opacity = `${Math.max(0.2, 1 - Math.abs(distance) / 260)}`;
    };

    const commitSwipe = (direction) => {
      const card = activeCard();
      if (!card) return;
      const viewport = Math.max(window.innerWidth, 480);
      const endX = direction === 'right' ? viewport : -viewport;
      card.style.transition = 'transform 200ms ease, opacity 200ms ease';
      updateCard(endX);
      window.setTimeout(() => {
        card.hidden = true;
        card.style.removeProperty('transform');
        card.style.removeProperty('opacity');
        card.style.removeProperty('transition');
        index += 1;
        if (index >= cards.length) {
          index = cards.length;
        }
        announce();
      }, 210);
    };

    const resetDeck = () => {
      cards.forEach((card) => {
        card.hidden = false;
        card.style.removeProperty('transform');
        card.style.removeProperty('opacity');
        card.style.removeProperty('transition');
      });
      index = 0;
      announce();
    };

    const start = (event) => {
      if (index >= cards.length) return;
      const point = event.touches ? event.touches[0] : event;
      activePointer = event.pointerId ?? 'mouse';
      startX = point.clientX;
      dragX = 0;
      const card = activeCard();
      if (card) card.style.removeProperty('transition');
    };

    const move = (event) => {
      if (activePointer === null) return;
      if (event.pointerId !== undefined && event.pointerId !== activePointer) return;
      const point = event.touches ? event.touches[0] : event;
      dragX = point.clientX - startX;
      if (Math.abs(dragX) > 3) {
        updateCard(dragX);
      }
      if (event.cancelable && event.touches) event.preventDefault();
    };

    const end = () => {
      if (activePointer === null) return;
      const threshold = Math.max(72, element.clientWidth * 0.22);
      const card = activeCard();

      if (Math.abs(dragX) >= threshold) {
        commitSwipe(dragX > 0 ? 'right' : 'left');
      } else if (card) {
        card.style.transition = 'transform 180ms ease, opacity 180ms ease';
        card.style.transform = 'translateX(0)';
        card.style.opacity = '1';
      }

      activePointer = null;
      dragX = 0;
    };

    const likeHandler = () => commitSwipe('right');
    const nopeHandler = () => commitSwipe('left');

    actions.like?.addEventListener('click', likeHandler);
    actions.nope?.addEventListener('click', nopeHandler);
    actions.reset?.addEventListener('click', resetDeck);

    element.addEventListener('pointerdown', start);
    window.addEventListener('pointermove', move, { passive: false });
    window.addEventListener('pointerup', end);
    element.addEventListener('touchstart', start, { passive: true });
    element.addEventListener('touchmove', move, { passive: false });
    element.addEventListener('touchend', end);

    announce();

    return {
      destroy() {
        actions.like?.removeEventListener('click', likeHandler);
        actions.nope?.removeEventListener('click', nopeHandler);
        actions.reset?.removeEventListener('click', resetDeck);
        element.removeEventListener('pointerdown', start);
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', end);
        element.removeEventListener('touchstart', start);
        element.removeEventListener('touchmove', move);
        element.removeEventListener('touchend', end);
      }
    };
  }
};
