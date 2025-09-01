// Lightbox Modal & Carousel for Feat1.html
// Assumes all images are in 'media/feat-rx7/rx7-#.jpg' (1 to 40)

document.addEventListener('DOMContentLoaded', function () {
  const totalImages = 38;
  const imageFolder = 'media/feat-rx7/';
  const imagePrefix = 'rx7-';
  const imageExt = '.jpg';

  // Collect all images in the article (update selector as needed)
  const articleImages = document.querySelectorAll('.feat-article-img');

  // Modal elements
  const modal = document.getElementById('lightbox-modal');
  const mainImg = document.getElementById('lightbox-main-img');
  const thumbnails = document.getElementById('lightbox-thumbnails');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  let currentIndex = 0;

  // Build image list
  const images = Array.from({ length: totalImages }, (_, i) => `${imageFolder}${imagePrefix}${i + 1}${imageExt}`);

  // Open modal on image click
  articleImages.forEach((img, idx) => {
    img.addEventListener('click', function () {
      currentIndex = idx;
      openModal(currentIndex);
    });
  });

  function openModal(index) {
    modal.classList.add('active');
    updateModal(index);
  }

  function closeModal() {
    modal.classList.remove('active');
  }

  function updateModal(index) {
    currentIndex = index;
    mainImg.src = images[currentIndex];
    // Thumbnails: keep active in center
    const visibleCount = 9; // Show 9 thumbnails (4 left, active, 4 right)
    const half = Math.floor(visibleCount / 2);
    let start = currentIndex - half;
    let end = currentIndex + half;
    if (start < 0) {
      end += -start;
      start = 0;
    }
    if (end > images.length - 1) {
      start -= (end - (images.length - 1));
      end = images.length - 1;
      if (start < 0) start = 0;
    }
    thumbnails.innerHTML = '';
    for (let i = start; i <= end; i++) {
      const thumb = document.createElement('img');
      thumb.src = images[i];
      thumb.className = 'lightbox-thumbnail' + (i === currentIndex ? ' active' : '');
      thumb.addEventListener('click', () => updateModal(i));
      thumbnails.appendChild(thumb);
    }
    // Scroll thumbnail row to keep active in center
    setTimeout(() => {
      const activeThumb = thumbnails.querySelector('.active');
      if (activeThumb) {
        activeThumb.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
      }
    }, 50);
  }
  // Keyboard navigation for modal
  document.addEventListener('keydown', function(e) {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') {
      prevBtn.click();
    } else if (e.key === 'ArrowRight') {
      nextBtn.click();
    } else if (e.key === 'Escape') {
      closeModal();
    }
  });

  // Scroll between carousels (if you have multiple carousels)
  // Example: add class 'carousel' to each carousel container
  // and use ArrowUp/ArrowDown to switch between them
  let currentCarousel = 0;
  const carousels = document.querySelectorAll('.carousel');
  document.addEventListener('keydown', function(e) {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'ArrowUp') {
      if (carousels.length > 1) {
        currentCarousel = (currentCarousel - 1 + carousels.length) % carousels.length;
        carousels[currentCarousel].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else if (e.key === 'ArrowDown') {
      if (carousels.length > 1) {
        currentCarousel = (currentCarousel + 1) % carousels.length;
        carousels[currentCarousel].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });
  prevBtn.addEventListener('click', function () {
    let idx = currentIndex - 1;
    if (idx < 0) idx = images.length - 1;
    updateModal(idx);
  });
  nextBtn.addEventListener('click', function () {
    let idx = currentIndex + 1;
    if (idx >= images.length) idx = 0;
    updateModal(idx);
  });
});
