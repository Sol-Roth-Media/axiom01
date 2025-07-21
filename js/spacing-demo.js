const SpacingDemo = {
  init: function(element) {
    if (!element) return;

    const slider = element.querySelector('#space-unit-slider');
    const valueLabel = element.querySelector('#space-unit-value');

    if (!slider || !valueLabel) {
      console.warn('Axiom: Spacing demo elements not found.');
      return;
    }

    slider.addEventListener('input', () => {
      const value = slider.value;
      document.documentElement.style.setProperty('--a-space-unit', `${value}rem`);
      valueLabel.textContent = value;
    });
  }
};

export default SpacingDemo;
