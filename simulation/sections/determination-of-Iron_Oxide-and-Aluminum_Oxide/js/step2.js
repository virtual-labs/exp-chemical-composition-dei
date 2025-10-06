// JavaScript for Step 1: Addition of NH4OH to obtain aluminium hydroxide

document.addEventListener('DOMContentLoaded', function () {
    // Get the static image, animation GIF, clickable area and arrow elements
    const staticImage = document.getElementById('static-image');
    const animationGif = document.getElementById('animation-gif');
    const equipmentClickable = document.getElementById('equipment-clickable');
    const clickArrow = document.getElementById('click-arrow');
    const nextStepButton = document.getElementById('next-step');
    const prevStepButton = document.getElementById('prev-step');

    // Set initial states
    nextStepButton.classList.add('hidden'); // Initially hide the next button

    // Position the clickable area over the ammonium oxalate bottle on the image
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

        // Position clickable area over the ammonium oxalate bottle (adjust these values as needed)
        // These are approximate values - you'll need to adjust them based on where the bottle is in your image
        equipmentClickable.style.left = imgWidth * 0.115 + 'px'; // 40% from the left
        equipmentClickable.style.top = imgHeight * 0.15 + 'px'; // 25% from the top
        equipmentClickable.style.width = imgWidth * 0.15 + 'px'; // 30% of image width
        equipmentClickable.style.height = imgHeight * 0.25 + 'px'; // 35% of image height


        // Position the arrow to point to the clickable area
        clickArrow.style.left = (parseFloat(equipmentClickable.style.left) + parseFloat(equipmentClickable.style.width) / 2) + 'px';
        clickArrow.style.top = (parseFloat(equipmentClickable.style.top) - 30) + 'px'; // Position above the clickable area
    }

    // Call the positioning function
    positionClickableElements();

    // Handle window resize to reposition elements
    window.addEventListener('resize', positionClickableElements);

    // Add click event listener to the clickable area
    equipmentClickable.addEventListener('click', function () {
        // Hide the static image and clickable elements
        staticImage.classList.add('hidden');
        equipmentClickable.classList.add('hidden');
        clickArrow.classList.add('hidden');

        // Show the animation GIF
        animationGif.classList.remove('hidden');

        // Calculate the duration of the GIF (adjust this based on your actual GIF duration)
        const gifDuration = 8000; // 8 seconds - replace with actual duration of your GIF

        // After the GIF animation completes, show the next step button
        setTimeout(function () {
            nextStepButton.classList.remove('hidden');
        }, gifDuration);
    });

    // Add click event listener for next-step button
    nextStepButton.addEventListener('click', function () {
        window.location.href = 'Step3.html';
    });

    // Add click event listener for prev-step button
    prevStepButton.addEventListener('click', function () {
        window.location.href = 'Step1.html';
    });
});
