document.addEventListener('DOMContentLoaded', function() {
    const staticImage = document.getElementById('static-image');
    const animationGif = document.getElementById('animation-gif');
    const equipmentClickable = document.getElementById('equipment-clickable');
    const clickArrow = document.getElementById('click-arrow');
    const nextStepButton = document.getElementById('next-step');

    nextStepButton.classList.add('hidden');

    function positionClickableElements() {
        if (staticImage.complete) {
            setupClickableArea();
        } else {
            staticImage.onload = setupClickableArea;
        }
    }

    function setupClickableArea() {
        const imgWidth = staticImage.offsetWidth;
        const imgHeight = staticImage.offsetHeight;

        equipmentClickable.style.left = imgWidth * 0.83 + 'px';
        equipmentClickable.style.top = imgHeight * 0.06 + 'px';
        equipmentClickable.style.width = imgWidth * 0.15 + 'px';
        equipmentClickable.style.height = imgHeight * 0.40 + 'px';

        clickArrow.style.left = (parseFloat(equipmentClickable.style.left) + parseFloat(equipmentClickable.style.width)/2) + 'px';
        clickArrow.style.top = (parseFloat(equipmentClickable.style.top) - 30) + 'px';
    }

    positionClickableElements();
    window.addEventListener('resize', positionClickableElements);

    equipmentClickable.addEventListener('click', function() {
        staticImage.classList.add('hidden');
        equipmentClickable.classList.add('hidden');
        clickArrow.classList.add('hidden');
        animationGif.classList.remove('hidden');

        const gifDuration = 9000;

        setTimeout(function() {
            localStorage.setItem('step1Completed', 'true');
            nextStepButton.classList.remove('hidden');
        }, gifDuration);
    });

    nextStepButton.addEventListener('click', function() {
        window.location.href = 'Step2.html';
    });

    const backButton = document.querySelector('.navigation button:first-child');
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = '../../sections.html';
        });
    }
});