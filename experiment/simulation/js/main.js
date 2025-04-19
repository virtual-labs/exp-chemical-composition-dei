//Your JavaScript goes in here
document.addEventListener('DOMContentLoaded', function() {
    // Get the start button element
    const startButton = document.getElementById('start-experiment');
    
    // Add click event listener to the start button
    if (startButton) {
        startButton.addEventListener('click', function() {
            // Here you would typically navigate to the first step of the experiment
            alert('Starting the experiment to determine the chemical composition of cement');
            
            // In a real implementation, you might use window.location to navigate to the first step
            // window.location.href = './Steps/Step1.html';
            
            // Or you could dynamically load content into the current page
            // document.querySelector('.content').innerHTML = '<h2>Step 1: Sample Preparation</h2>...';
        });
    }
});
