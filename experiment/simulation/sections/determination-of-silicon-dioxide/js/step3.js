// JavaScript for Step 3 of Determination of Silicon Dioxide (SiO₂)
if (localStorage.getItem('step2Completed') !== 'true') {
  localStorage.setItem('blinkStep', '2');
  alert('Please complete Step 2 before proceeding to Step 3.');
  window.location.href = '../index.html';
}
document.addEventListener('DOMContentLoaded', function () {
    // Get the static image, animation GIF, clickable area and arrow elements
    const staticImage = document.getElementById('static-image');
    const animationGif = document.getElementById('animation-gif');
    const washingImage = document.getElementById('washing-image');
    const washingGif = document.getElementById('washing-gif');
    const equipmentClickable = document.getElementById('equipment-clickable');
    const washingClickable = document.getElementById('washing-clickable');
    const clickArrow = document.getElementById('click-arrow');
    const nextStepButton = document.getElementById('next-step');
    const prevStepButton = document.getElementById('prev-step');
    const instructionText = document.getElementById('instruction-text');

    let currentPhase = 'filtration'; // Track current phase: 'filtration' or 'washing'

    // Set initial states
    nextStepButton.classList.add('hidden'); // Initially hide the next button

    // Position the clickable area over the filter funnel on the image
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

        // Position clickable area over the filter funnel (adjust these values as needed)
        // These are approximate values - you'll need to adjust them based on where the funnel is in your image

        equipmentClickable.style.left = imgWidth * 0.145 + 'px'; // 11.5% from the left
        equipmentClickable.style.top = imgHeight * 0.15 + 'px'; // 15% from the top
        equipmentClickable.style.width = imgWidth * 0.15 + 'px'; // 15% of image width
        equipmentClickable.style.height = imgHeight * 0.25 + 'px';

        // Position washing clickable area (will be used in phase 2)
        washingClickable.style.left = imgWidth * 0.35 + 'px'; // Different position for washing
        washingClickable.style.top = imgHeight * 0.45 + 'px';
        washingClickable.style.width = imgWidth * 0.13 + 'px';
        washingClickable.style.height = imgHeight * 0.3 + 'px';

        // Position the arrow to point to the active clickable area
        updateArrowPosition();
    }

    function updateArrowPosition() {
        if (currentPhase === 'filtration') {
            clickArrow.style.left = (parseFloat(equipmentClickable.style.left) + parseFloat(equipmentClickable.style.width) / 2) + 'px';
            clickArrow.style.top = (parseFloat(equipmentClickable.style.top) - 30) + 'px';
        } else if (currentPhase === 'washing') {
            clickArrow.style.left = (parseFloat(washingClickable.style.left) + parseFloat(washingClickable.style.width) / 2) + 'px';
            clickArrow.style.top = (parseFloat(washingClickable.style.top) - 30) + 'px';
        }
    }

    // Call the positioning function
    positionClickableElements();

    // Handle window resize to reposition elements
    window.addEventListener('resize', positionClickableElements);

    // Add click event listener to the filtration clickable area
    equipmentClickable.addEventListener('click', function () {
        if (currentPhase === 'filtration') {
            // Hide the static image and filtration clickable elements
            staticImage.classList.add('hidden');
            equipmentClickable.classList.add('hidden');
            clickArrow.classList.add('hidden');

            // Show the filtration animation GIF
            animationGif.classList.remove('hidden');

            // Update instruction text
            instructionText.textContent = 'Filtration in progress... Please wait.';

            // Calculate the duration of the filtration GIF
            const filtrationDuration = 8000; // 6 seconds for filtration

            // After the filtration animation completes, start washing phase
            setTimeout(function () {
                localStorage.setItem('step3Completed', 'true');
                // Hide filtration animation
                animationGif.classList.add('hidden');

                // Show washing image
                washingImage.classList.remove('hidden');

                // Show washing clickable area and arrow
                washingClickable.classList.remove('hidden');
                clickArrow.classList.remove('hidden');

                // Update phase and instruction
                currentPhase = 'washing';
                instructionText.textContent = 'Now click on the wash bottle to wash the filtered residue with distilled water.';

                // Update arrow position for washing
                updateArrowPosition();
            }, filtrationDuration);
        }
    });

    // Add click event listener to the washing clickable area
    washingClickable.addEventListener('click', function () {
        if (currentPhase === 'washing') {
            // Hide the washing image and clickable elements
            washingImage.classList.add('hidden');
            washingClickable.classList.add('hidden');
            clickArrow.classList.add('hidden');

            // Show the washing animation GIF
            washingGif.classList.remove('hidden');

            // Update instruction text
            instructionText.textContent = 'Washing in progress... Removing soluble impurities.';

            // Calculate the duration of the washing GIF
            const washingDuration = 8000; // 8 seconds for washing

            // After the washing animation completes, show the next step button
            setTimeout(function () {
                instructionText.textContent = 'Filtration and washing completed! The SiO₂ residue is now ready for drying and weighing.';
                nextStepButton.classList.remove('hidden');
            }, washingDuration);
        }
    });

    // Add click event listener for next-step button
    nextStepButton.addEventListener('click', function () {
        window.location.href = 'Step4.html';
    });

    // Add click event listener for prev-step button
    prevStepButton.addEventListener('click', function () {
        window.location.href = 'Step2.html';
    });
});
