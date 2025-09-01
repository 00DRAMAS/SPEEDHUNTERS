document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const icon = btn.querySelector('.like-icon');
        const count = btn.querySelector('.like-count');
        let liked = btn.getAttribute('data-liked') === 'true';
        if (!liked) {
            icon.src = 'media/like-fill.svg';
            count.textContent = parseInt(count.textContent) + 1;
            btn.setAttribute('data-liked', 'true');
        } else {
            icon.src = 'media/like.svg';
            count.textContent = parseInt(count.textContent) - 1;
            btn.setAttribute('data-liked', 'false');
        }
    });
});

document.querySelectorAll('.dislike-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const icon = btn.querySelector('.dislike-icon');
        const count = btn.querySelector('.dislike-count');
        let disliked = btn.getAttribute('data-disliked') === 'true';
        if (!disliked) {
            icon.src = 'media/dislike-fill.svg';
            count.textContent = parseInt(count.textContent) + 1;
            btn.setAttribute('data-disliked', 'true');
        } else {
            icon.src = 'media/dislike.svg';
            count.textContent = parseInt(count.textContent) - 1;
            btn.setAttribute('data-disliked', 'false');
        }
    });
});