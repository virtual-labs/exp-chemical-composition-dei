// JavaScript for Step 1: Adding Ammonium Hydroxide for CaO Determination

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const staticImage = document.getElementById('static-image');
    const animationGif = document.getElementById('animation-gif');
    const equipmentClickable = document.getElementById('equipment-clickable');
    const nextButton = document.getElementById('next-step');
    const prevButton = document.getElementById('prev-step');
    
    // Step state variables
    let stepCompleted = false;
    let additionCount = 0;
    let currentPH = 7.0; // Starting neutral pH
    const targetPH = 8.5; // Target slightly alkaline pH
    
    // Create pH indicator and feedback elements
    createUIElements();
    
    // Event listeners
    equipmentClickable.addEventListener('click', handleNH4OHAddition);
    nextButton.addEventListener('click', proceedToNextStep);
    
    function createUIElements() {
        // Create pH indicator display
        const phIndicator = document.createElement('div');
        phIndicator.innerHTML = `
            <div style="text-align: center; margin: 15px 0;">
                <h4>Solution pH Monitor:</h4>
                <div id="ph-display" class="ph-indicator ph-neutral">pH: ${currentPH.toFixed(1)}</div>
                <div id="feedback-message"></div>
                <div id="addition-counter" style="margin-top: 10px; font-size: 0.9em; color: #666;">
                    NH₄OH drops added: <span id="drop-count">0</span>
                </div>
            </div>
        `;
        
        // Insert pH indicator after step content
        const stepContent = document.querySelector('.step-content');
        stepContent.appendChild(phIndicator);
    }
    
    function handleNH4OHAddition() {
        if (stepCompleted) {
            showFeedback('Step already completed! Solution is at optimal pH.', 'success');
            return;
        }
        
        // Show animation
        staticImage.style.display = 'none';
        animationGif.style.display = 'block';
        animationGif.classList.remove('hidden');
        
        // Simulate adding NH4OH drops
        additionCount++;
        currentPH += 0.3; // Each click increases pH by 0.3
        
        // Update UI
        updatePHDisplay();
        updateDropCounter();
        
        // Check if target pH is reached
        setTimeout(() => {
            staticImage.style.display = 'block';
            animationGif.style.display = 'none';
            animationGif.classList.add('hidden');
            
            checkStepCompletion();
        }, 2000);
    }
    
    function updatePHDisplay() {
        const phDisplay = document.getElementById('ph-display');
        const phValue = Math.min(currentPH, 9.5); // Cap at 9.5 to avoid over-alkaline
        
        phDisplay.textContent = `pH: ${phValue.toFixed(1)}`;
        
        // Update pH indicator styling
        phDisplay.className = 'ph-indicator';
        if (phValue < 7.5) {
            phDisplay.classList.add('ph-neutral');
        } else if (phValue >= 8.0 && phValue <= 9.0) {
            phDisplay.classList.add('ph-alkaline');
        } else if (phValue > 9.0) {
            phDisplay.classList.add('ph-alkaline');
            phDisplay.style.backgroundColor = '#ffcdd2';
            phDisplay.style.color = '#d32f2f';
            phDisplay.style.borderColor = '#f44336';
        } else {
            phDisplay.classList.add('ph-neutral');
        }
    }
    
    function updateDropCounter() {
        const dropCount = document.getElementById('drop-count');
        dropCount.textContent = additionCount;
    }
    
    function checkStepCompletion() {
        const phValue = Math.min(currentPH, 9.5);
        
        if (phValue >= 8.0 && phValue <= 9.0) {
            // Perfect pH range achieved
            stepCompleted = true;
            showFeedback('Excellent! Solution is now slightly alkaline (pH 8-9). Ready for next step.', 'success');
            nextButton.disabled = false;
            nextButton.style.backgroundColor = '#28a745';
            
            // Mark step as completed
            document.querySelector('.step-container').classList.add('step-completed');
            
        } else if (phValue < 8.0) {
            // Still too acidic
            showFeedback('Solution is still not alkaline enough. Continue adding NH₄OH dropwise.', 'warning');
            
        } else if (phValue > 9.0) {
            // Too alkaline
            showFeedback('Warning: Solution is becoming too alkaline! This may affect the analysis.', 'error');
            
            if (phValue > 9.5) {
                showFeedback('Solution is now too alkaline. This step needs to be restarted for accurate results.', 'error');
                // Disable further additions
                equipmentClickable.style.pointerEvents = 'none';
                equipmentClickable.style.opacity = '0.5';
            }
        }
    }
    
    function showFeedback(message, type) {
        const feedbackElement = document.getElementById('feedback-message');
        feedbackElement.textContent = message;
        feedbackElement.className = `feedback-message feedback-${type}`;
        
        // Auto-hide warning and error messages after 5 seconds
        if (type !== 'success') {
            setTimeout(() => {
                feedbackElement.textContent = '';
                feedbackElement.className = '';
            }, 5000);
        }
    }
    
    function proceedToNextStep() {
        if (stepCompleted) {
            // Navigate to next step
            window.location.href = 'Step2.html';
        }
    }
    
    // Initialize pH display
    updatePHDisplay();
    updateDropCounter();
    
    // Add hover effects for better UX
    equipmentClickable.addEventListener('mouseenter', function() {
        if (!stepCompleted) {
            this.style.backgroundColor = 'rgba(40, 167, 69, 0.2)';
            this.style.borderColor = '#28a745';
        }
    });
    
    equipmentClickable.addEventListener('mouseleave', function() {
        if (!stepCompleted) {
            this.style.backgroundColor = 'rgba(40, 167, 69, 0.1)';
            this.style.borderColor = 'transparent';
        }
    });
    
    // Add educational tooltips
    const tooltips = {
        'equipment-clickable': 'Click to add NH₄OH dropwise. Monitor the pH to reach 8-9 range.'
    };
    
    Object.keys(tooltips).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.title = tooltips[id];
        }
    });
});
