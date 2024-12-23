let currentStep = 0;
const steps = document.querySelectorAll('.step');
const stepIndicators = document.querySelectorAll('.steps li');

// Function to update the active step
function updateSteps() {
    steps.forEach((step, index) => {
        step.classList.toggle('active', index === currentStep);
    });

    stepIndicators.forEach((indicator, index) => {
        indicator.classList.toggle('current', index === currentStep);
    });

    // Enable/disable buttons
    document.querySelector('.prev-btn').disabled = currentStep === 0;
    document.querySelector('.next-btn').textContent =
        currentStep === steps.length - 1 ? 'Submit' : 'Next';
}

// Move to the next step
function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateSteps();
    } else {
        alert('Form submitted successfully!');
    }
}

// Move to the previous step
function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        updateSteps();
    }
}

// Initialize the first step
updateSteps();
