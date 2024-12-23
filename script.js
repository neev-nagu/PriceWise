let currentStep = 0; // Tracks the current step
const steps = document.querySelectorAll('.step'); // All step elements
const stepIndicators = document.querySelectorAll('.steps li'); // Sidebar step indicators

// Function to update step visibility with fade transitions
function updateStepVisibility(nextStep) {
    const currentStepElement = steps[currentStep];
    const nextStepElement = steps[nextStep];

    // Fade out current step
    currentStepElement.style.opacity = '0';
    currentStepElement.style.transform = 'translateY(20px)';
    setTimeout(() => {
        // Hide the current step and reset its style
        currentStepElement.style.display = 'none';

        // Show the next step
        nextStepElement.style.display = 'block';
        setTimeout(() => {
            nextStepElement.style.opacity = '1';
            nextStepElement.style.transform = 'translateY(0)';
        }, 10); // Slight delay to trigger the fade-in effect

        // Update sidebar indicators
        stepIndicators.forEach((indicator, index) => {
            indicator.classList.toggle('current', index === nextStep);
        });

        // Update the current step index
        currentStep = nextStep;
    }, 500); // Match the fade-out duration
}

// Move to the next step
function nextStep() {
    if (currentStep < steps.length - 1) {
        updateStepVisibility(currentStep + 1);
    } else {
        alert('Form submitted successfully!');
    }
}

// Move to the previous step
function prevStep() {
    if (currentStep > 0) {
        updateStepVisibility(currentStep - 1);
    }
}

// Initialize the first step on page load
document.addEventListener('DOMContentLoaded', () => {
    const firstStep = steps[currentStep];
    firstStep.style.display = 'block';
    setTimeout(() => {
        firstStep.style.opacity = '1';
        firstStep.style.transform = 'translateY(0)';
    }, 10); // Trigger the fade-in effect on the first step
});
