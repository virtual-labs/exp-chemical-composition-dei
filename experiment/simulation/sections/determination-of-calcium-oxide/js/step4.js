if (localStorage.getItem('step3Completed') !== 'true') {
  localStorage.setItem('blinkStep', '3');
  alert('Please complete Step 3 before proceeding to Step 4.');
  window.location.href = '../index.html';
}document.addEventListener('DOMContentLoaded', function() {
    // Get all necessary elements
    const staticImage = document.getElementById('static-image');
    const animationGif = document.getElementById('animation-gif');
    const equipmentClickable = document.getElementById('equipment-clickable');
    const clickArrow = document.getElementById('click-arrow');
    const weighingPanel = document.getElementById('weighing-panel');
    const calculationPanel = document.getElementById('calculation-panel');
    const calculateButton = document.getElementById('calculate-button');
    const nextStepButton = document.getElementById('next-step');
    const prevStepButton = document.getElementById('prev-step');
    
    // Set initial states
    nextStepButton.classList.add('hidden'); // Initially hide the next button
    
    // Track current step
    let currentStep = 'weighing'; // 'weighing' or 'calculating'
    
    // Position the clickable area over the analytical balance on the image
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
        
        // Position clickable area over the analytical balance
        equipmentClickable.style.left = imgWidth * 0.715 + 'px';
        equipmentClickable.style.top = imgHeight * 0.25 + 'px';
        equipmentClickable.style.width = imgWidth * 0.15 + 'px';
        equipmentClickable.style.height = imgHeight * 0.25 + 'px';
        
        // Position the arrow to point to the clickable area
        clickArrow.style.left = (parseFloat(equipmentClickable.style.left) + parseFloat(equipmentClickable.style.width)/2) + 'px';
        clickArrow.style.top = (parseFloat(equipmentClickable.style.top) - 30) + 'px';
    }
    
    // Call the positioning function
    positionClickableElements();
    
    // Handle window resize to reposition elements
    window.addEventListener('resize', positionClickableElements);
    
    // Add click event listener to the clickable area (weighing step)
    equipmentClickable.addEventListener('click', function() {
        if (currentStep === 'weighing') {
            performWeighing();
        }
    });
    
    // Function to handle weighing step
    function performWeighing() {
        // Hide the static image and clickable elements
        staticImage.classList.add('hidden');
        equipmentClickable.classList.add('hidden');
        clickArrow.classList.add('hidden');
        
        // Show the animation GIF
        animationGif.classList.remove('hidden');
        
        // Calculate the duration of the weighing GIF
        const gifDuration = 4000; // 2 seconds for weighing process
        
        // After the GIF animation completes, show weighing results
        setTimeout(function() {
            localStorage.setItem('step4Completed', 'true');
            // Hide the animation and show weighing panel
            animationGif.classList.add('hidden');
            weighingPanel.classList.remove('hidden');
            
            // Animate the weighing results appearing
            animateWeighingResults();
            
            // Update current step
            currentStep = 'calculating';
        }, gifDuration);
    }
    
    // Function to animate weighing results
    function animateWeighingResults() {
        const steps = document.querySelectorAll('.weighing-step');
        
        steps.forEach((step, index) => {
            setTimeout(() => {
                step.style.opacity = '0';
                step.style.transform = 'translateY(10px)';
                step.style.transition = 'all 0.5s ease';
                
                setTimeout(() => {
                    step.style.opacity = '1';
                    step.style.transform = 'translateY(0)';
                }, 100);
            }, index * 300);
        });
    }
    
    // Add click event listener for the calculate button
    calculateButton.addEventListener('click', function() {
        performCalculation();
    });
    
    // Function to handle calculation step
    function performCalculation() {
        // Hide the weighing panel
        weighingPanel.classList.add('hidden');
        
        // Show the calculation panel
        calculationPanel.classList.remove('hidden');
        
        // Animate the calculation values appearing one by one
        animateCalculationSteps();
        
        // Show the next step button after calculations are complete
        setTimeout(function() {
            nextStepButton.classList.remove('hidden');
        }, 3000);
    }

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
        alert('Calcium oxide determination analysis complete! The cement sample contains 64.0% CaO.');
        window.location.href = '../index.html';
    });
    
    // Add click event listener for prev-step button
    prevStepButton.addEventListener('click', function() {
        window.location.href = 'Step3c.html';
    });
});
