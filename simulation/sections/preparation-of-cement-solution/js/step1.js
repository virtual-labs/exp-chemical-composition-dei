// JavaScript for Step 1 of the Chemical Composition of Cement experiment

document.addEventListener('DOMContentLoaded', function() {
    // Get the static image, animation GIF, clickable area and arrow elements
    const staticImage = document.getElementById('static-image');
    const animationGif = document.getElementById('animation-gif');
    const sackClickable = document.getElementById('sack-clickable');
    const clickArrow = document.getElementById('click-arrow');
    const nextStepButton = document.getElementById('next-step');
    
    // Set initial states
    nextStepButton.classList.add('hidden'); // Initially hide the next button
    
    // Position the clickable area over the cement sack on the image
    // These values will need to be adjusted based on the actual image
    function positionClickableElements() {
        // Wait for the image to load to get its dimensions
        if (staticImage.complete) {
            setupClickableArea();
        } else {
            staticImage.onload = setupClickableArea;
        }
    }
    
    function setupClickableArea() {
        const imgWidth = staticImage.offsetWidth;
        const imgHeight = staticImage.offsetHeight;
        
        // Position clickable area over the cement sack (adjust these values as needed)
        // These are approximate values - you'll need to adjust them based on where the sack is in your image
        sackClickable.style.left = imgWidth * 0.25 + 'px'; // 40% from the left
        sackClickable.style.top = imgHeight * 0.4 + 'px'; // 30% from the top
        sackClickable.style.width = imgWidth * 0.2 + 'px'; // 20% of image width
        sackClickable.style.height = imgHeight * 0.29 + 'px'; // 40% of image height
        
        // Position the arrow to point to the clickable area
        clickArrow.style.left = (parseFloat(sackClickable.style.left) + parseFloat(sackClickable.style.width)/2) + 'px';
        clickArrow.style.top = (parseFloat(sackClickable.style.top) - 30) + 'px'; // Position above the clickable area
    }
    
    // Call the positioning function
    positionClickableElements();
    
    // Handle window resize to reposition elements
    window.addEventListener('resize', positionClickableElements);
    
    // Add click event listener to the clickable area
    sackClickable.addEventListener('click', function() {
        // Hide the static image and clickable elements
        staticImage.classList.add('hidden');
        sackClickable.classList.add('hidden');
        clickArrow.classList.add('hidden');
        
        // Show the animation GIF
        animationGif.classList.remove('hidden');
        
        // Calculate the duration of the GIF (adjust this based on your actual GIF duration)
        const gifDuration = 2500; // 5 seconds - replace with actual duration of your GIF
        
        // After the GIF animation completes, show the next step button
        setTimeout(function() {
            localStorage.setItem('step1Completed', 'true');
            nextStepButton.classList.remove('hidden');
        }, gifDuration);
    });
    
    // Add click event listener for next-step button
    nextStepButton.addEventListener('click', function() {
        window.location.href = 'Step2.html';
    });
    
    // Get the back button (first button in navigation)
    const backButton = document.querySelector('.navigation button:first-child');
    
    // Add click event listener for back button
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = '../../../index.html';
        });
    }
});