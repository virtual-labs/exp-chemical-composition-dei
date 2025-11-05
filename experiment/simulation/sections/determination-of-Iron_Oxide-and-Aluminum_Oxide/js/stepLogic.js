window.addEventListener('DOMContentLoaded', () => {
    const currentStep = document.body.getAttribute('data-step');
    const previousStep = document.body.getAttribute('data-prev');
    const nextStepFile = document.body.getAttribute('data-next');

    const clickable = document.getElementById('equipment-clickable');
    const staticImage = document.getElementById('static-image');
    const gifImage = document.getElementById('animation-gif');
    const nextStepBtn = document.getElementById('next-step');
    const prevStepBtn = document.getElementById('prev-step');
    const warningBox = document.getElementById('warning');

    // Check if previous step is completed
    if (previousStep && localStorage.getItem(previousStep + 'Completed') !== 'true') {
        warningBox.classList.remove('hidden');
    }

    // Handle interaction to complete current step
    if (clickable) {
        clickable.addEventListener('click', () => {
            if (staticImage) staticImage.classList.add('hidden');
            if (gifImage) gifImage.classList.remove('hidden');
            if (nextStepBtn) nextStepBtn.classList.remove('hidden');
            localStorage.setItem(currentStep + 'Completed', 'true');
        });
    }

    // Handle next step navigation
    if (nextStepBtn && nextStepFile) {
        nextStepBtn.addEventListener('click', () => {
            const completed = localStorage.getItem(currentStep + 'Completed');
            if (completed === 'true') {
                window.location.href = nextStepFile;
            } else {
                warningBox.classList.remove('hidden');
            }
        });
    }

    // Handle previous step navigation
    if (prevStepBtn) {
        prevStepBtn.addEventListener('click', () => {
            window.history.back();
        });
    }

    // Close warning popup
    window.closeWarning = function () {
        warningBox.classList.add('hidden');
    };
});
