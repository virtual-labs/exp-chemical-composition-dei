// JavaScript for Step 4 of Determination of Silicon Dioxide (SiO₂)

document.addEventListener('DOMContentLoaded', function() {
    // Get all the image and UI elements
    const staticImage = document.getElementById('static-image');
    const ovenOpened = document.getElementById('oven-opened');
    const dryingGif = document.getElementById('drying-gif');
    const ovenClosed = document.getElementById('oven-closed');
    const weighingImage = document.getElementById('weighing-image');
    const weighingGif = document.getElementById('weighing-gif');
    const ovenClickable = document.getElementById('oven-clickable');
    const residueClickable = document.getElementById('residue-clickable');
    const weighingClickable = document.getElementById('weighing-clickable');
    const clickArrow = document.getElementById('click-arrow');
    const nextStepButton = document.getElementById('next-step');
    const prevStepButton = document.getElementById('prev-step');
    const weighingPanel = document.getElementById('weighing-panel');
    const calculateButton = document.getElementById('calculate-button');
    const calculationPanel = document.getElementById('calculation-panel');
    const instructionText = document.getElementById('instruction-text');
    
    let currentPhase = 'oven-opening'; // Track current phase: 'oven-opening', 'residue-placement', 'weighing'
    
    // Set initial states
    nextStepButton.classList.add('hidden');
    
    // Position the clickable areas over the equipment on the images
    function positionClickableElements() {
        // Wait for the image to load to get its dimensions
        if (staticImage.complete) {
            setupClickableAreas();
        } else {
            staticImage.onload = setupClickableAreas;
        }
    }
    
    function setupClickableAreas() {
        const imgWidth = staticImage.offsetWidth;
        const imgHeight = staticImage.offsetHeight;
        
        // Position clickable area over the oven (for opening phase)
        ovenClickable.style.left = imgWidth * 0.58 + 'px';
        ovenClickable.style.top = imgHeight * 0.50 + 'px';
        ovenClickable.style.width = imgWidth * 0.05 + 'px';
        ovenClickable.style.height = imgHeight * 0.05 + 'px';
        
        // Position clickable area over the silicon residue (for placement phase)
        residueClickable.style.left = imgWidth * 0.8 + 'px';
        residueClickable.style.top = imgHeight * 0.6 + 'px';
        residueClickable.style.width = imgWidth * 0.15 + 'px';
        residueClickable.style.height = imgHeight * 0.2 + 'px';
        
        // Position clickable area over the analytical balance (for weighing phase)
        weighingClickable.style.left = imgWidth * 0.72 + 'px';
        weighingClickable.style.top = imgHeight * 0.32 + 'px';
        weighingClickable.style.width = imgWidth * 0.15 + 'px';
        weighingClickable.style.height = imgHeight * 0.15 + 'px';
        
        // Position the arrow to point to the active clickable area
        updateArrowPosition();
    }
    
    function updateArrowPosition() {
        if (currentPhase === 'oven-opening') {
            clickArrow.style.left = (parseFloat(ovenClickable.style.left) + parseFloat(ovenClickable.style.width)/2) + 'px';
            clickArrow.style.top = (parseFloat(ovenClickable.style.top) - 30) + 'px';
        } else if (currentPhase === 'residue-placement') {
            clickArrow.style.left = (parseFloat(residueClickable.style.left) + parseFloat(residueClickable.style.width)/2) + 'px';
            clickArrow.style.top = (parseFloat(residueClickable.style.top) - 30) + 'px';
        } else if (currentPhase === 'weighing') {
            clickArrow.style.left = (parseFloat(weighingClickable.style.left) + parseFloat(weighingClickable.style.width)/2) + 'px';
            clickArrow.style.top = (parseFloat(weighingClickable.style.top) - 30) + 'px';
        }
    }
    
    // Call the positioning function
    positionClickableElements();
    
    // Handle window resize to reposition elements
    window.addEventListener('resize', positionClickableElements);
    
    // Add click event listener to the oven clickable area (oven opening phase)
    ovenClickable.addEventListener('click', function() {
        if (currentPhase === 'oven-opening') {
            // Hide the initial oven image and oven clickable elements
            staticImage.classList.add('hidden');
            ovenClickable.classList.add('hidden');
            clickArrow.classList.add('hidden');
            
            // Update instruction text
            instructionText.textContent = 'Oven opened! Now click on the silicon dioxide residue to place it in the oven.';
            
            // Show oven opened image
            ovenOpened.classList.remove('hidden');
            
            // Show residue clickable area and arrow
            residueClickable.classList.remove('hidden');
            clickArrow.classList.remove('hidden');
            
            // Update phase and arrow position
            currentPhase = 'residue-placement';
            updateArrowPosition();
        }
    });
    
    // Add click event listener to the residue clickable area (residue placement phase)
    residueClickable.addEventListener('click', function() {
        if (currentPhase === 'residue-placement') {
            // Hide the oven opened image and residue clickable elements
            ovenOpened.classList.add('hidden');
            residueClickable.classList.add('hidden');
            clickArrow.classList.add('hidden');
            
            // Show the drying animation GIF
            dryingGif.classList.remove('hidden');
            
            // Update instruction text
            instructionText.textContent = 'Drying process in progress... Removing moisture from the residue.';
            
            // Duration for the drying animation
            const dryingAnimationDuration = 6000; // 6 seconds
            
            setTimeout(function() {
                // Hide drying gif, show oven closed
                dryingGif.classList.add('hidden');
                ovenClosed.classList.remove('hidden');
                instructionText.textContent = 'Drying complete! The SiO₂ residue is now ready for weighing.';
                
                // Duration to show closed oven
                const closedOvenDuration = 4000; // 4 seconds
                
                setTimeout(function() {
                    // Start weighing phase
                    ovenClosed.classList.add('hidden');
                    weighingImage.classList.remove('hidden');
                    weighingClickable.classList.remove('hidden');
                    clickArrow.classList.remove('hidden');
                    
                    // Update phase and instruction
                    currentPhase = 'weighing';
                    instructionText.textContent = 'Now click on the analytical balance to weigh the dried silicon dioxide residue.';
                    
                    // Update arrow position for weighing
                    updateArrowPosition();
                }, closedOvenDuration);
            }, dryingAnimationDuration);
        }
    });
    
    // Add click event listener to the weighing clickable area
    weighingClickable.addEventListener('click', function() {
        if (currentPhase === 'weighing') {
            // Hide the weighing image and clickable elements
            weighingImage.classList.add('hidden');
            weighingClickable.classList.add('hidden');
            clickArrow.classList.add('hidden');
            
            // Show the weighing animation GIF
            weighingGif.classList.remove('hidden');
            
            // Update instruction text
            instructionText.textContent = 'Weighing in progress... Determining the mass of dried SiO₂ residue.';
            
            // Calculate the duration of the weighing GIF
            const weighingDuration = 8000; // 8 seconds
            
            // After the weighing animation completes, show the weighing panel
            setTimeout(function() {
                weighingGif.classList.add('hidden');
                weighingPanel.classList.remove('hidden');
                instructionText.textContent = 'Weighing completed! Results are displayed below.';
            }, weighingDuration);
        }
    });
    
    // Add click event listener for calculate button
    calculateButton.addEventListener('click', function() {
        // Show the calculation panel
        calculationPanel.classList.remove('hidden');
        
        // Show the next step button after calculations
        setTimeout(function() {
            nextStepButton.classList.remove('hidden');
        }, 1000);
    });
    
    // Add click event listener for next-step button
    nextStepButton.addEventListener('click', function() {
        // Navigate back to the main determination section or show completion message
        alert('Silicon dioxide determination analysis complete! The cement sample contains 24.0% SiO₂.');
        window.location.href = '../index.html';
    });
    
    // Add click event listener for prev-step button
    prevStepButton.addEventListener('click', function() {
        window.location.href = 'Step3.html';
    });
});
