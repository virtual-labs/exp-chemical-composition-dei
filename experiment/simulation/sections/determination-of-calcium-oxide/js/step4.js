// JavaScript for Step 4: Weighing and Calculation

document.addEventListener('DOMContentLoaded', function() {
    // Get the static image, animation GIF, clickable area and arrow elements
    const staticImage = document.getElementById('static-image');
    const animationGif = document.getElementById('animation-gif');
    const equipmentClickable = document.getElementById('equipment-clickable');
    const clickArrow = document.getElementById('click-arrow');
    const calculationPanel = document.getElementById('calculation-panel');
    const nextStepButton = document.getElementById('next-step');
    const prevStepButton = document.getElementById('prev-step');
    
    // Set initial states
    nextStepButton.classList.add('hidden'); // Initially hide the next button
    
    // Position the clickable area over the analytical balance on the image
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
        
        // Position clickable area over the analytical balance (adjust these values as needed)
        // These are approximate values - you'll need to adjust them based on where the balance is in your image
        equipmentClickable.style.left = imgWidth * 0.115 + 'px'; // 40% from the left
        equipmentClickable.style.top = imgHeight * 0.15 + 'px'; // 25% from the top
        equipmentClickable.style.width = imgWidth * 0.15 + 'px'; // 30% of image width
        equipmentClickable.style.height = imgHeight * 0.25 + 'px'; // 35% of image height
        
        // Position the arrow to point to the clickable area
        clickArrow.style.left = (parseFloat(equipmentClickable.style.left) + parseFloat(equipmentClickable.style.width)/2) + 'px';
        clickArrow.style.top = (parseFloat(equipmentClickable.style.top) - 30) + 'px'; // Position above the clickable area
    }
    
    // Call the positioning function
    positionClickableElements();
    
    // Handle window resize to reposition elements
    window.addEventListener('resize', positionClickableElements);
    
    // Add click event listener to the clickable area
    equipmentClickable.addEventListener('click', function() {
        // Hide the static image and clickable elements
        staticImage.classList.add('hidden');
        equipmentClickable.classList.add('hidden');
        clickArrow.classList.add('hidden');
        
        // Show the animation GIF
        animationGif.classList.remove('hidden');
        
        // Calculate the duration of the GIF (weighing and calculation process)
        const gifDuration = 2000; // 2 seconds for weighing process
        
        // After the GIF animation completes, show calculation panel and next step button
        setTimeout(function() {
            calculationPanel.classList.remove('hidden');
            
            // Animate the calculation values appearing one by one
            animateCalculationSteps();
            
            // Show the next step button after calculations are complete
            setTimeout(function() {
                nextStepButton.classList.remove('hidden');
            }, 3000);
        }, gifDuration);
    });

    function animateCalculationSteps() {
        const steps = document.querySelectorAll('.step-calculation');
        
        steps.forEach((step, index) => {
            setTimeout(() => {
                step.style.opacity = '0';
                step.style.transform = 'translateY(10px)';
                step.style.transition = 'all 0.5s ease';
                
                setTimeout(() => {
                    step.style.opacity = '1';
                    step.style.transform = 'translateY(0)';
                }, 100);
            }, index * 500);
        });
    }
    
    // Add click event listener for next-step button
    nextStepButton.addEventListener('click', function() {
        // Navigate back to the main determination section or show completion message
        alert('Calcium oxide determination analysis complete! The cement sample contains 10.93% CaO.');
        window.location.href = '../index.html';
    });
    
    // Add click event listener for prev-step button
    prevStepButton.addEventListener('click', function() {
        window.location.href = 'Step3c.html';
    });
});
