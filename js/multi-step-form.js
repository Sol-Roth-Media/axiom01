// js/multi-step-form.js

const MultiStepForm = {
    init(element) {
        const prevBtn = element.querySelector('#prev-btn');
        const nextBtn = element.querySelector('#next-btn');
        const submitBtn = element.querySelector('#submit-btn');
        const form = element.querySelector('#multi-step-form');
        const steps = Array.from(element.querySelectorAll('.form-step'));
        const stepIndicators = Array.from(element.querySelectorAll('.step'));
        let currentStep = 0;

        const updateButtons = () => {
            prevBtn.disabled = currentStep === 0;
            if (currentStep === steps.length - 1) {
                nextBtn.style.display = 'none';
                submitBtn.style.display = 'inline-block';
            } else {
                nextBtn.style.display = 'inline-block';
                submitBtn.style.display = 'none';
            }
        };

        const updateStepIndicator = () => {
            stepIndicators.forEach((indicator, index) => {
                if (index === currentStep) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        };

        const showStep = (stepIndex) => {
            steps.forEach((step, index) => {
                step.classList.toggle('active', index === stepIndex);
            });
            currentStep = stepIndex;
            updateButtons();
            updateStepIndicator();
        };

        const validateStep = (stepIndex) => {
            const inputs = steps[stepIndex].querySelectorAll('input[required], select[required]');
            let isValid = true;
            inputs.forEach(input => {
                const errorMessage = input.parentElement.querySelector('.error-message');
                if (!input.checkValidity()) {
                    isValid = false;
                    errorMessage.textContent = input.validationMessage;
                } else {
                    errorMessage.textContent = '';
                }
            });
            return isValid;
        };

        nextBtn.addEventListener('click', () => {
            if (validateStep(currentStep) && currentStep < steps.length - 1) {
                if (currentStep === steps.length - 2) {
                    // Populate confirmation details
                    const email = form.querySelector('#email').value;
                    const fullName = form.querySelector('#full-name').value;
                    const country = form.querySelector('#country').value;
                    const confirmationDetails = form.querySelector('#confirmation-details');
                    confirmationDetails.innerHTML = `
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Full Name:</strong> ${fullName}</p>
                        <p><strong>Country:</strong> ${country}</p>
                    `;
                }
                showStep(currentStep + 1);
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentStep > 0) {
                showStep(currentStep - 1);
            }
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateStep(currentStep)) {
                alert('Form submitted successfully!');
                form.reset();
                showStep(0);
            }
        });

        showStep(0);
    }
};

export default MultiStepForm;