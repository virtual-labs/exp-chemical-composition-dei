//Your JavaScript goes in here
document.addEventListener('DOMContentLoaded', function() {
    // Get the start button element
    const startButton = document.getElementById('start-experiment');
    
    // Add click event listener to the start button
    if (startButton) {
        startButton.addEventListener('click', function() {
            // Navigate to the first step of the experiment
            window.location.href = './sections/preparation-of-cement-solution/steps/Step1.html';
            
        });
    }
});