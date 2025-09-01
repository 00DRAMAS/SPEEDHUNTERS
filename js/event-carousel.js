document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.event-carousel');
    const leftArrow = document.querySelector('.event-carousel-arrow.left');
    const rightArrow = document.querySelector('.event-carousel-arrow.right');
    const scrollAmount = 350; // or use carousel.offsetWidth * 0.8 for responsiveness

    leftArrow.addEventListener('click', () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    rightArrow.addEventListener('click', () => {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.event-carousel');
    const leftArrow = document.querySelector('.event-carousel-arrow.left');
    const rightArrow = document.querySelector('.event-carousel-arrow.right');

    if (!carousel || !leftArrow || !rightArrow) return;

    // Scroll by the width of one event card
    const scrollAmount = carousel.querySelector('.event-container')?.offsetWidth || 400;

    leftArrow.addEventListener('click', () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
});