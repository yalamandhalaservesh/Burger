document.addEventListener('DOMContentLoaded', function () {
    const clickableDiv = document.getElementById('clickableDiv');
    const frame = document.getElementById('frame');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('closeButton');

    clickableDiv.addEventListener('click', function () {
        overlay.style.display = 'block';
        frame.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        overlay.style.display = 'none';
        frame.style.display = 'none';
    });

    // Optional: Close frame when clicking on the overlay
    overlay.addEventListener('click', function () {
        overlay.style.display = 'none';
        frame.style.display = 'none';
    });
});
