const menuIcon = document.querySelector('#menu');
const closeMenu = document.querySelector('#close-menu');
const navOverlay = document.querySelector('#nav-overlay');

// Open the navigation menu
menuIcon.addEventListener('click', () => {
    navOverlay.classList.add('active');
});

// Close the navigation menu
closeMenu.addEventListener('click', () => {
    navOverlay.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('Articulos-Container');
    const leftArrow = document.querySelector('.carousel-arrow.left');
    const rightArrow = document.querySelector('.carousel-arrow.right');

    // Amount to scroll: one container width, or adjust as needed
    const scrollAmount = carousel.offsetWidth * 0.5;

    leftArrow.addEventListener('click', () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: '' });
    });

    rightArrow.addEventListener('click', () => {
        carousel.scrollBy({ left: scrollAmount, behavior: '' });
    });
});