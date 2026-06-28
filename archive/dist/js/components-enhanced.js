/**
 * AXIOM01 - Enhanced Components Library
 * Drag & Drop, Form Input, Effects Components
 */

/**
 * Queue Component - Drag & Drop Reorderable Lists
 * Handles dragging, dropping, reordering, and form field sync
 */
class QueueComponent {
  constructor(element) {
    this.element = element;
    this.items = Array.from(element.querySelectorAll('li'));
    this.formField = element.getAttribute('data-form-field');
    this.init();
  }

  init() {
    this.items.forEach((item, index) => {
      item.setAttribute('draggable', 'true');
      item.dataset.index = index;
      
      // Drag events
      item.addEventListener('dragstart', (e) => this.onDragStart(e));
      item.addEventListener('dragover', (e) => this.onDragOver(e));
      item.addEventListener('drop', (e) => this.onDrop(e));
      item.addEventListener('dragend', (e) => this.onDragEnd(e));
      item.addEventListener('dragenter', (e) => this.onDragEnter(e));
      item.addEventListener('dragleave', (e) => this.onDragLeave(e));
    });
  }

  onDragStart(e) {
    this.draggedItem = e.target.closest('li');
    this.draggedItem.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  }

  onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  onDragEnter(e) {
    const item = e.target.closest('li');
    if (item && item !== this.draggedItem) {
      item.classList.add('drag-over');
    }
  }

  onDragLeave(e) {
    const item = e.target.closest('li');
    if (item) {
      item.classList.remove('drag-over');
    }
  }

  onDrop(e) {
    e.preventDefault();
    const dropTarget = e.target.closest('li');
    
    if (dropTarget && dropTarget !== this.draggedItem) {
      const allItems = Array.from(this.element.querySelectorAll('li'));
      const draggedIndex = allItems.indexOf(this.draggedItem);
      const targetIndex = allItems.indexOf(dropTarget);
      
      if (draggedIndex < targetIndex) {
        dropTarget.parentNode.insertBefore(this.draggedItem, dropTarget.nextSibling);
      } else {
        dropTarget.parentNode.insertBefore(this.draggedItem, dropTarget);
      }
      
      this.updateFormField();
    }
  }

  onDragEnd(e) {
    this.draggedItem.classList.remove('dragging');
    this.element.querySelectorAll('li').forEach(item => {
      item.classList.remove('drag-over');
    });
  }

  updateFormField() {
    if (this.formField) {
      const values = Array.from(this.element.querySelectorAll('li'))
        .map(li => li.getAttribute('data-value') || li.textContent.trim())
        .join(',');
      
      const hiddenField = document.querySelector(`input[name="${this.formField}"]`);
      if (hiddenField) {
        hiddenField.value = values;
        hiddenField.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  }

  destroy() {
    this.items.forEach(item => {
      item.removeAttribute('draggable');
      item.classList.remove('dragging', 'drag-over');
    });
  }
}

/**
 * Segmented Control - Exclusive Selection Button Group
 */
class SegmentedControlComponent {
  constructor(element) {
    this.element = element;
    this.buttons = Array.from(element.querySelectorAll('button'));
    this.init();
  }

  init() {
    this.buttons.forEach(btn => {
      btn.addEventListener('click', (e) => this.onClick(e));
      btn.addEventListener('keydown', (e) => this.onKeyDown(e));
    });
  }

  onClick(e) {
    const clicked = e.target.closest('button');
    this.setActive(clicked);
    this.element.dispatchEvent(new CustomEvent('segmented-change', {
      detail: { value: clicked.textContent.trim(), button: clicked }
    }));
  }

  onKeyDown(e) {
    const index = this.buttons.indexOf(e.target);
    let nextIndex = index;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextIndex = (index + 1) % this.buttons.length;
      e.preventDefault();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      nextIndex = (index - 1 + this.buttons.length) % this.buttons.length;
      e.preventDefault();
    }

    if (nextIndex !== index) {
      this.buttons[nextIndex].focus();
      this.setActive(this.buttons[nextIndex]);
    }
  }

  setActive(button) {
    this.buttons.forEach(btn => btn.setAttribute('aria-pressed', 'false'));
    button.setAttribute('aria-pressed', 'true');
  }

  destroy() {
    this.buttons.forEach(btn => {
      btn.removeAttribute('aria-pressed');
    });
  }
}

/**
 * Chip Input - Multi-value Tag Input
 */
class ChipInputComponent {
  constructor(element) {
    this.element = element;
    this.field = element.querySelector('.chip-input-field');
    this.formFieldName = element.getAttribute('data-chip-input');
    this.separator = element.getAttribute('data-separator') || ',';
    this.init();
  }

  init() {
    if (this.field) {
      this.field.addEventListener('keydown', (e) => this.onKeyDown(e));
      this.field.addEventListener('blur', () => this.maybeAddChip());
    }

    this.element.querySelectorAll('.chip button').forEach(btn => {
      btn.addEventListener('click', (e) => this.removeChip(e));
    });
  }

  onKeyDown(e) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      this.maybeAddChip();
    }
  }

  maybeAddChip() {
    const value = this.field.value.trim();
    if (value) {
      this.addChip(value);
      this.field.value = '';
    }
  }

  addChip(value) {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.innerHTML = `${value} <button aria-label="Remove ${value}">×</button>`;
    
    chip.querySelector('button').addEventListener('click', (e) => this.removeChip(e));
    this.element.insertBefore(chip, this.field);
    
    this.updateFormField();
  }

  removeChip(e) {
    e.target.closest('.chip').remove();
    this.updateFormField();
    this.field.focus();
  }

  updateFormField() {
    if (this.formFieldName) {
      const values = Array.from(this.element.querySelectorAll('.chip'))
        .map(chip => chip.textContent.replace('×', '').trim())
        .join(this.separator);
      
      const hiddenField = document.querySelector(`input[name="${this.formFieldName}"]`);
      if (hiddenField) {
        hiddenField.value = values;
        hiddenField.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  }

  destroy() {
    if (this.field) {
      this.field.removeEventListener('keydown', this.onKeyDown);
      this.field.removeEventListener('blur', this.maybeAddChip);
    }
  }
}

/**
 * Backlit Component - Radial Glow Effect with Mouse Following
 */
class BacklitComponent {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    // Enable mouse-following glow on hover (optional enhancement)
    this.element.addEventListener('mousemove', (e) => this.onMouseMove(e));
    this.element.addEventListener('mouseenter', () => this.element.classList.add('backlit-active'));
    this.element.addEventListener('mouseleave', () => this.element.classList.remove('backlit-active'));
  }

  onMouseMove(e) {
    if (!this.element.classList.contains('backlit-active')) return;

    const rect = this.element.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    this.element.style.setProperty('--light-x', Math.min(100, Math.max(0, x)) + '%');
    this.element.style.setProperty('--light-y', Math.min(100, Math.max(0, y)) + '%');
  }

  destroy() {
    this.element.classList.remove('backlit-active');
  }
}

/**
 * Auto-initialize all enhanced components
 */
document.addEventListener('DOMContentLoaded', () => {
  // Queue components
  document.querySelectorAll('.queue').forEach(el => {
    if (!window.Axiom || !window.Axiom.initializedComponents) return;
    if (!window.Axiom.initializedComponents.has(el)) {
      const instance = new QueueComponent(el);
      window.Axiom.initializedComponents.set(el, { name: 'Queue', instance });
    }
  });

  // Segmented Control components
  document.querySelectorAll('.segmented-control').forEach(el => {
    if (!window.Axiom || !window.Axiom.initializedComponents) return;
    if (!window.Axiom.initializedComponents.has(el)) {
      const instance = new SegmentedControlComponent(el);
      window.Axiom.initializedComponents.set(el, { name: 'SegmentedControl', instance });
    }
  });

  // Chip Input components
  document.querySelectorAll('.chip-input').forEach(el => {
    if (!window.Axiom || !window.Axiom.initializedComponents) return;
    if (!window.Axiom.initializedComponents.has(el)) {
      const instance = new ChipInputComponent(el);
      window.Axiom.initializedComponents.set(el, { name: 'ChipInput', instance });
    }
  });

  // Backlit components with mouse following
  document.querySelectorAll('.backlit').forEach(el => {
    if (!window.Axiom || !window.Axiom.initializedComponents) return;
    if (!window.Axiom.initializedComponents.has(el)) {
      const instance = new BacklitComponent(el);
      window.Axiom.initializedComponents.set(el, { name: 'Backlit', instance });
    }
  });
});

// Support dynamic initialization
window.Axiom.initQueue = (element) => {
  const instance = new QueueComponent(element);
  window.Axiom.initializedComponents.set(element, { name: 'Queue', instance });
  return instance;
};

window.Axiom.initSegmentedControl = (element) => {
  const instance = new SegmentedControlComponent(element);
  window.Axiom.initializedComponents.set(element, { name: 'SegmentedControl', instance });
  return instance;
};

window.Axiom.initChipInput = (element) => {
  const instance = new ChipInputComponent(element);
  window.Axiom.initializedComponents.set(element, { name: 'ChipInput', instance });
  return instance;
};

window.Axiom.initBacklit = (element) => {
  const instance = new BacklitComponent(element);
  window.Axiom.initializedComponents.set(element, { name: 'Backlit', instance });
  return instance;
};
