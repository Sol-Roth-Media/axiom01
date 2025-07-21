const JumpMenu = {
  init: function(element) {
    if (!element) return;

    const button = element.querySelector('button');
    const menu = element.querySelector('ul');

    if (!button || !menu) {
      console.warn('Axiom: Jump menu button or menu not found.');
      return;
    }

    button.addEventListener('click', (event) => {
      event.stopPropagation();
      menu.classList.toggle('is-open');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('is-open');
    });
  }
};

export default JumpMenu;
