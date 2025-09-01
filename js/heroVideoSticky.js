// window.addEventListener('scroll', function() {
//     const video = document.getElementById('heroVideo');
//     const triggerHeight = 120; // Adjust: logo+menu height in px

//     if (window.scrollY > triggerHeight) {
//         video.classList.add('sticky');
//     } else {
//         video.classList.remove('sticky');
//     }
// });

window.addEventListener('scroll', function() {
    const video = document.getElementById('heroVideo');
    const nav = document.querySelector('nav');
    const navHeight = nav.offsetHeight;

    // Get the distance from the top of the page to the video
    const videoRect = video.getBoundingClientRect();
    const videoTop = videoRect.top + window.scrollY;

    if (window.scrollY >= videoTop - navHeight) {
        video.classList.add('inside-nav');
    } else {
        video.classList.remove('inside-nav');
    }
});