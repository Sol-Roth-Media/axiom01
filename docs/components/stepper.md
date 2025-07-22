# Stepper Component

Multi-step process navigation with progress indication and form validation support.

## Basic Stepper

```html
<div class="stepper" role="navigation" aria-label="Setup process">
  <div class="stepper-header">
    <div class="step completed" aria-current="false">
      <div class="step-marker">
        <i class="fas fa-check" aria-hidden="true"></i>
      </div>
      <div class="step-content">
        <h4>Account Info</h4>
        <p>Basic account details</p>
      </div>
    </div>
    
    <div class="step active" aria-current="step">
      <div class="step-marker">2</div>
      <div class="step-content">
        <h4>Profile Setup</h4>
        <p>Personal information</p>
      </div>
    </div>
    
    <div class="step" aria-current="false">
      <div class="step-marker">3</div>
      <div class="step-content">
        <h4>Verification</h4>
        <p>Email verification</p>
      </div>
    </div>
    
    <div class="step" aria-current="false">
      <div class="step-marker">4</div>
      <div class="step-content">
        <h4>Complete</h4>
        <p>Finish setup</p>
      </div>
    </div>
  </div>
  
  <div class="stepper-content">
    <div class="step-panel active" id="step-2" role="tabpanel" aria-labelledby="step-2-tab">
      <h3>Profile Setup</h3>
      <form class="step-form">
        <div class="form-group">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" required>
        </div>
        <div class="form-group">
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" required>
        </div>
      </form>
    </div>
  </div>
  
  <div class="stepper-actions">
    <button class="button secondary" id="prev-step">Previous</button>
    <button class="button primary" id="next-step">Next</button>
  </div>
</div>
```

## Vertical Stepper

```html
<div class="stepper vertical">
  <div class="step completed">
    <div class="step-marker">
      <i class="fas fa-check" aria-hidden="true"></i>
    </div>
    <div class="step-content">
      <h4>Order Placed</h4>
      <p>Your order has been confirmed</p>
      <time class="step-time">2 hours ago</time>
    </div>
  </div>
  
  <div class="step completed">
    <div class="step-marker">
      <i class="fas fa-check" aria-hidden="true"></i>
    </div>
    <div class="step-content">
      <h4>Processing</h4>
      <p>Order is being prepared</p>
      <time class="step-time">1 hour ago</time>
    </div>
  </div>
  
  <div class="step active">
    <div class="step-marker">
      <i class="fas fa-truck" aria-hidden="true"></i>
    </div>
    <div class="step-content">
      <h4>Shipped</h4>
      <p>Package is on the way</p>
      <time class="step-time">30 minutes ago</time>
    </div>
  </div>
  
  <div class="step">
    <div class="step-marker">4</div>
    <div class="step-content">
      <h4>Delivered</h4>
      <p>Package delivered</p>
    </div>
  </div>
</div>
```

## CSS Variables

```css
.stepper {
  --stepper-line-color: var(--a-color-outline);
  --stepper-active-color: var(--a-color-primary);
  --stepper-completed-color: var(--a-color-success);
  --stepper-marker-size: 2rem;
}
```

## Accessibility Features

- Proper navigation role and ARIA labels
- Current step indication with `aria-current="step"`
- Keyboard navigation support
- Screen reader friendly progress announcements

## JavaScript Integration

```javascript
class Stepper {
  constructor(element) {
    this.stepper = element;
    this.steps = element.querySelectorAll('.step');
    this.panels = element.querySelectorAll('.step-panel');
    this.currentStep = 0;
    
    this.init();
  }
  
  init() {
    const prevBtn = this.stepper.querySelector('#prev-step');
    const nextBtn = this.stepper.querySelector('#next-step');
    
    prevBtn?.addEventListener('click', () => this.previousStep());
    nextBtn?.addEventListener('click', () => this.nextStep());
  }
  
  goToStep(stepIndex) {
    // Remove active states
    this.steps.forEach(step => {
      step.classList.remove('active');
      step.setAttribute('aria-current', 'false');
    });
    
    this.panels.forEach(panel => {
      panel.classList.remove('active');
    });
    
    // Set new active step
    if (this.steps[stepIndex]) {
      this.steps[stepIndex].classList.add('active');
      this.steps[stepIndex].setAttribute('aria-current', 'step');
    }
    
    if (this.panels[stepIndex]) {
      this.panels[stepIndex].classList.add('active');
    }
    
    this.currentStep = stepIndex;
  }
  
  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.goToStep(this.currentStep + 1);
    }
  }
  
  previousStep() {
    if (this.currentStep > 0) {
      this.goToStep(this.currentStep - 1);
    }
  }
}
```
