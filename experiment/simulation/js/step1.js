// JavaScript for Step 1 of the Chemical Composition of Cement experiment

document.addEventListener('DOMContentLoaded', function() {
    // Get the next-step button element
    const nextStepButton = document.getElementById('next-step');
    
    // Add click event listener for next-step button (alternative to inline onclick)
    if (nextStepButton) {
        nextStepButton.addEventListener('click', function() {
            window.location.href = 'Step2.html';
        });
    }
    
    // Get the back button (first button in navigation)
    const backButton = document.querySelector('.navigation button:first-child');
    
    // Add click event listener for back button (alternative to inline onclick)
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = '../index.html';
        });
    }
});