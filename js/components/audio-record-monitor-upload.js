export default {
  init(element) {
    const handler = (event) => {
      if (event.target.closest('button')) {
        element.setAttribute('data-state', 'active');
      }
    };

    element.addEventListener('click', handler);

    return {
      destroy() {
        element.removeEventListener('click', handler);
      }
    };
  }
};
