function openRegistrationOverlay() {
    document.getElementById('registration-overlay').classList.add('active');
}

function closeRegistrationOverlay() {
    document.getElementById('registration-overlay').classList.remove('active');
}

// Open overlay on Add Comment or any Reply button
document.getElementById('add-comment-btn').onclick = openRegistrationOverlay;
document.querySelectorAll('.reply-btn, .reply-btn2').forEach(btn => {
    btn.onclick = openRegistrationOverlay;
});
document.querySelectorAll('.reply-btn-nested').forEach(btn => {
  btn.onclick = openRegistrationOverlay;
});

// Close overlay
document.getElementById('close-registration').onclick = closeRegistrationOverlay;

// Prevent form submission (demo only)
document.getElementById('registration-form').onsubmit = function(e) {
    e.preventDefault();
    closeRegistrationOverlay();
    alert('Registered! (Demo)');
};