/**
 * Axiom01 Timeline Component
 * Provides accessible timeline and step indicator functionality with keyboard navigation
 */

class AxiomTimeline {
  constructor() {
    this.currentStep = 1;
    this.totalSteps = 5;
    this.steps = [
      { title: 'Getting Started', description: 'Welcome! This is the first step of our interactive demo.' },
      { title: 'Basic Information', description: 'Enter your basic details and preferences.' },
      { title: 'Configuration', description: 'Configure your settings and options.' },
      { title: 'Review', description: 'Review all your information before proceeding.' },
      { title: 'Complete', description: 'Congratulations! You have completed all steps.' }
    ];
    this.init();
  }

  init() {
    this.setupInteractiveDemo();
    this.setupKeyboardNavigation();
    this.registerComponent();
  }

  /**
   * Create a timeline structure
   * @param {Array} items - Timeline items
   * @param {Element} container - Container element
   * @param {Object} options - Configuration options
   */
  createTimeline(items, container, options = {}) {
    const {
      vertical = false,
      withIcons = false,
      minimal = false,
      ariaLabel = 'Timeline'
    } = options;

    if (!container || !Array.isArray(items)) return;

    const timeline = document.createElement('div');
    timeline.className = `timeline${vertical ? ' timeline--vertical' : ''}${withIcons ? ' timeline--with-icons' : ''}${minimal ? ' timeline--minimal' : ''}`;
    timeline.setAttribute('role', 'list');
    timeline.setAttribute('aria-label', ariaLabel);

    items.forEach(item => {
      const timelineItem = document.createElement('div');
      timelineItem.className = `timeline-item${item.current ? ' timeline-item--current' : ''}${item.completed ? ' timeline-item--completed' : ''}${item.upcoming ? ' timeline-item--upcoming' : ''}`;
      timelineItem.setAttribute('role', 'listitem');

      const marker = document.createElement('div');
      marker.className = `timeline-marker${item.markerClass ? ` ${item.markerClass}` : ''}`;
      marker.setAttribute('aria-hidden', 'true');

      if (withIcons && item.icon) {
        const icon = document.createElement('span');
        icon.className = 'icon';
        icon.textContent = item.icon;
        marker.appendChild(icon);
      }

      const content = document.createElement('div');
      content.className = 'timeline-content';

      if (item.title) {
        const title = document.createElement('h3');
        title.textContent = item.title;
        content.appendChild(title);
      }

      if (item.date) {
        const time = document.createElement('time');
        time.setAttribute('datetime', item.datetime || item.date);
        time.textContent = item.date;
        content.appendChild(time);
      }

      if (item.description) {
        const desc = document.createElement('p');
        desc.textContent = item.description;
        content.appendChild(desc);
      }

      if (item.badge) {
        const badge = document.createElement('div');
        badge.className = `timeline-badge${item.badgeClass ? ` ${item.badgeClass}` : ''}`;
        badge.textContent = item.badge;
        content.appendChild(badge);
      }

      timelineItem.appendChild(marker);
      timelineItem.appendChild(content);
      timeline.appendChild(timelineItem);
    });

    container.appendChild(timeline);
    return timeline;
  }

  /**
   * Create a stepper structure
   * @param {Array} steps - Step items
   * @param {Element} container - Container element
   * @param {Object} options - Configuration options
   */
  createStepper(steps, container, options = {}) {
    const {
      currentStep = 1,
      compact = false,
      ariaLabel = 'Step indicator'
    } = options;

    if (!container || !Array.isArray(steps)) return;

    const stepper = document.createElement('div');
    stepper.className = `stepper${compact ? ' stepper--compact' : ''}`;
    stepper.setAttribute('role', 'navigation');
    stepper.setAttribute('aria-label', ariaLabel);

    if (compact) {
      this.createCompactStepper(stepper, steps, currentStep);
    } else {
      this.createFullStepper(stepper, steps, currentStep);
    }

    container.appendChild(stepper);
    return stepper;
  }

  /**
   * Create full stepper with all steps visible
   */
  createFullStepper(stepper, steps, currentStep) {
    const ol = document.createElement('ol');
    ol.className = 'stepper-list';

    steps.forEach((step, index) => {
      const stepNumber = index + 1;
      const li = document.createElement('li');
      const isCompleted = stepNumber < currentStep;
      const isCurrent = stepNumber === currentStep;
      const isUpcoming = stepNumber > currentStep;

      li.className = `stepper-step${isCompleted ? ' stepper-step--completed' : ''}${isCurrent ? ' stepper-step--current' : ''}${isUpcoming ? ' stepper-step--upcoming' : ''}`;
      li.setAttribute('aria-current', isCurrent ? 'step' : 'false');

      const button = document.createElement('button');
      button.className = 'stepper-button';
      button.setAttribute('aria-label', `${isCurrent ? 'Current step: ' : isUpcoming ? `Step ${stepNumber}: ` : `Go to step ${stepNumber}: `}${step.title || step}`);
      button.disabled = isUpcoming;

      const icon = document.createElement('span');
      icon.className = 'stepper-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = isCompleted ? '✓' : stepNumber;

      const label = document.createElement('span');
      label.className = 'stepper-label';
      label.textContent = step.title || step;

      button.appendChild(icon);
      button.appendChild(label);
      li.appendChild(button);
      ol.appendChild(li);
    });

    stepper.appendChild(ol);
  }

  /**
   * Create compact stepper for mobile
   */
  createCompactStepper(stepper, steps, currentStep) {
    const progress = document.createElement('div');
    progress.className = 'stepper-progress';
    progress.setAttribute('aria-hidden', 'true');

    const progressBar = document.createElement('div');
    progressBar.className = 'stepper-progress-bar';
    progressBar.style.width = `${(currentStep / steps.length) * 100}%`;

    progress.appendChild(progressBar);

    const info = document.createElement('div');
    info.className = 'stepper-info';

    const current = document.createElement('span');
    current.className = 'stepper-current';
    current.textContent = `Step ${currentStep} of ${steps.length}:`;

    const title = document.createElement('span');
    title.className = 'stepper-title';
    title.textContent = steps[currentStep - 1]?.title || `Step ${currentStep}`;

    info.appendChild(current);
    info.appendChild(title);

    const nav = document.createElement('div');
    nav.className = 'stepper-nav';

    const prevButton = document.createElement('button');
    prevButton.className = 'stepper-prev';
    prevButton.setAttribute('aria-label', 'Go to previous step');
    prevButton.textContent = '← Back';
    prevButton.disabled = currentStep === 1;

    const nextButton = document.createElement('button');
    nextButton.className = 'stepper-next primary';
    nextButton.setAttribute('aria-label', 'Go to next step');
    nextButton.textContent = currentStep === steps.length ? 'Complete' : 'Continue →';

    nav.appendChild(prevButton);
    nav.appendChild(nextButton);

    stepper.appendChild(progress);
    stepper.appendChild(info);
    stepper.appendChild(nav);
  }

  /**
   * Update stepper to show different step
   */
  goToStep(stepper, stepNumber) {
    if (stepNumber < 1 || stepNumber > this.totalSteps) return;

    this.currentStep = stepNumber;

    // Update full stepper
    const stepElements = stepper.querySelectorAll('.stepper-step');
    stepElements.forEach((stepEl, index) => {
      const stepNum = index + 1;
      const isCompleted = stepNum < stepNumber;
      const isCurrent = stepNum === stepNumber;
      const isUpcoming = stepNum > stepNumber;

      stepEl.className = `stepper-step${isCompleted ? ' stepper-step--completed' : ''}${isCurrent ? ' stepper-step--current' : ''}${isUpcoming ? ' stepper-step--upcoming' : ''}`;
      stepEl.setAttribute('aria-current', isCurrent ? 'step' : 'false');

      const button = stepEl.querySelector('.stepper-button');
      const icon = stepEl.querySelector('.stepper-icon');

      if (button) {
        button.disabled = isUpcoming;
        button.setAttribute('aria-label', `${isCurrent ? 'Current step: ' : isUpcoming ? `Step ${stepNum}: ` : `Go to step ${stepNum}: `}${this.steps[index]?.title || `Step ${stepNum}`}`);
      }

      if (icon) {
        icon.textContent = isCompleted ? '✓' : stepNum;
      }
    });

    // Update compact stepper
    const progressBar = stepper.querySelector('.stepper-progress-bar');
    if (progressBar) {
      progressBar.style.width = `${(stepNumber / this.totalSteps) * 100}%`;
    }

    const currentSpan = stepper.querySelector('.stepper-current');
    const titleSpan = stepper.querySelector('.stepper-title');
    if (currentSpan) currentSpan.textContent = `Step ${stepNumber} of ${this.totalSteps}:`;
    if (titleSpan) titleSpan.textContent = this.steps[stepNumber - 1]?.title || `Step ${stepNumber}`;

    const prevButton = stepper.querySelector('.stepper-prev');
    const nextButton = stepper.querySelector('.stepper-next');
    if (prevButton) prevButton.disabled = stepNumber === 1;
    if (nextButton) {
      nextButton.textContent = stepNumber === this.totalSteps ? 'Complete' : 'Continue →';
    }

    // Announce to screen readers
    this.announceToScreenReader(`Moved to step ${stepNumber}: ${this.steps[stepNumber - 1]?.title || `Step ${stepNumber}`}`);
  }

  /**
   * Setup interactive demo
   */
  setupInteractiveDemo() {
    const prevButton = document.getElementById('prev-step');
    const nextButton = document.getElementById('next-step');
    const resetButton = document.getElementById('reset-demo');
    const interactiveStepper = document.getElementById('interactive-stepper');
    const stepTitle = document.getElementById('step-title');
    const stepDescription = document.getElementById('step-description');

    if (!interactiveStepper) return;

    // Initialize stepper
    this.createFullStepper(interactiveStepper, this.steps, this.currentStep);
    this.updateStepContent();

    // Add click listeners to stepper buttons
    interactiveStepper.addEventListener('click', (e) => {
      if (e.target.closest('.stepper-button') && !e.target.closest('.stepper-button').disabled) {
        const stepElements = Array.from(interactiveStepper.querySelectorAll('.stepper-step'));
        const clickedStep = stepElements.indexOf(e.target.closest('.stepper-step')) + 1;

        if (clickedStep <= this.currentStep) { // Allow going back to completed steps
          this.goToStep(interactiveStepper, clickedStep);
          this.updateStepContent();
        }
      }
    });

    // Demo control buttons
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        if (this.currentStep > 1) {
          this.goToStep(interactiveStepper, this.currentStep - 1);
          this.updateStepContent();
          this.updateDemoButtons();
        }
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        if (this.currentStep < this.totalSteps) {
          this.goToStep(interactiveStepper, this.currentStep + 1);
          this.updateStepContent();
          this.updateDemoButtons();
        }
      });
    }

    if (resetButton) {
      resetButton.addEventListener('click', () => {
        this.currentStep = 1;
        this.goToStep(interactiveStepper, 1);
        this.updateStepContent();
        this.updateDemoButtons();
        this.announceToScreenReader('Demo reset to first step');
      });
    }

    // Initial button states
    this.updateDemoButtons();
  }

  /**
   * Update step content display
   */
  updateStepContent() {
    const stepTitle = document.getElementById('step-title');
    const stepDescription = document.getElementById('step-description');

    const currentStepData = this.steps[this.currentStep - 1];
    if (stepTitle) stepTitle.textContent = `Step ${this.currentStep}: ${currentStepData.title}`;
    if (stepDescription) stepDescription.textContent = currentStepData.description;
  }

  /**
   * Update demo control buttons
   */
  updateDemoButtons() {
    const prevButton = document.getElementById('prev-step');
    const nextButton = document.getElementById('next-step');

    if (prevButton) prevButton.disabled = this.currentStep === 1;
    if (nextButton) {
      nextButton.disabled = this.currentStep === this.totalSteps;
      nextButton.textContent = this.currentStep === this.totalSteps ? 'Complete' : 'Next Step';
    }
  }

  /**
   * Setup keyboard navigation
   */
  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      const stepperButton = e.target.closest('.stepper-button');
      if (!stepperButton) return;

      const stepper = stepperButton.closest('.stepper');
      const stepElements = Array.from(stepper.querySelectorAll('.stepper-step'));
      const currentIndex = stepElements.findIndex(step => step.contains(stepperButton));

      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          if (currentIndex > 0) {
            const prevButton = stepElements[currentIndex - 1].querySelector('.stepper-button');
            if (prevButton && !prevButton.disabled) {
              prevButton.focus();
            }
          }
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          if (currentIndex < stepElements.length - 1) {
            const nextButton = stepElements[currentIndex + 1].querySelector('.stepper-button');
            if (nextButton && !nextButton.disabled) {
              nextButton.focus();
            }
          }
          break;
        case 'Home':
          e.preventDefault();
          const firstButton = stepElements[0].querySelector('.stepper-button');
          if (firstButton && !firstButton.disabled) {
            firstButton.focus();
          }
          break;
        case 'End':
          e.preventDefault();
          for (let i = stepElements.length - 1; i >= 0; i--) {
            const button = stepElements[i].querySelector('.stepper-button');
            if (button && !button.disabled) {
              button.focus();
              break;
            }
          }
          break;
      }
    });
  }

  /**
   * Announce message to screen readers using ARIA live region
   */
  announceToScreenReader(message, priority = 'polite') {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', priority);
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.textContent = message;

    document.body.appendChild(liveRegion);
    setTimeout(() => liveRegion.remove(), 1000);
  }

  /**
   * Register component with Axiom system
   */
  registerComponent() {
    if (window.AxiomComponents) {
      AxiomComponents.register('timeline', {
        init: () => {
          console.log('Timeline component initialized');
        },
        createTimeline: this.createTimeline.bind(this),
        createStepper: this.createStepper.bind(this),
        goToStep: this.goToStep.bind(this)
      });
    }
  }
}

// Initialize timeline component
document.addEventListener('DOMContentLoaded', () => {
  window.AxiomTimeline = new AxiomTimeline();
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AxiomTimeline;
}
