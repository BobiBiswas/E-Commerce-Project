let currentImageIndex = 0;

const images = [
    'img/g1.jpeg',
    'img/g2.jpeg',
    'img/g3.jpeg',
    'img/g4.png'
];

function updateMainImage(src) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = src;
}

function showImage(index) {
    const gallery = document.querySelector('.gallery');
    gallery.style.display = 'block'; // Show the gallery

    const imgElements = gallery.querySelectorAll('img');
    imgElements.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
    });
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateMainImage(images[currentImageIndex]);
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateMainImage(images[currentImageIndex]);
}

// Initialize with the first image
updateMainImage(images[currentImageIndex]);
