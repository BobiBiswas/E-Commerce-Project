const slider = document.getElementById('image-slider');
const imageContainer = document.getElementById('scrollable-image-container');

// Update scroll position based on slider value
slider.addEventListener('input', function () {
    const maxScroll = imageContainer.scrollHeight - imageContainer.clientHeight;
    const scrollPosition = (slider.value / 100) * maxScroll;
    imageContainer.scrollTop = scrollPosition;
});
