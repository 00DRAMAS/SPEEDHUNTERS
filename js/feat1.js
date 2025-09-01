// Get all images with the class "feat1-image"
const images = document.querySelectorAll('.feat1-image');

// Add an event listener to each image
images.forEach((image) => {
  image.addEventListener('click', () => {
    // Get the lightbox container
    const lightboxContainer = document.querySelector('.lightbox-container');

    // Get the lightbox image element
    const lightboxImage = document.querySelector('.lightbox-image');

    // Set the lightbox image source to the clicked image source
    lightboxImage.src = image.src;

    // Generate thumbnails
    const thumbnails = document.querySelector('.lightbox-thumbnails');
    thumbnails.innerHTML = '';
    images.forEach((img) => {
      const thumbnail = document.createElement('img');
      thumbnail.src = img.src;
      thumbnail.alt = img.alt;
      thumbnails.appendChild(thumbnail);
    });

    // Show the lightbox
    lightboxContainer.style.display = 'block';
  });
});

// Add event listeners to the lightbox prev and next buttons
document.querySelector('.lightbox-prev').addEventListener('click', () => {
  // Implement prev logic here
});

document.querySelector('.lightbox-next').addEventListener('click', () => {
  // Implement next logic here
});