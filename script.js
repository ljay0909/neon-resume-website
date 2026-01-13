// Smooth Scrolling for Contact Button
document.querySelector('.neon-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});

// Set CSS variable for skill progress animation
document.querySelectorAll('.skill-progress').forEach(progress => {
    const width = progress.style.width;
    progress.style.setProperty('--progress-width', width);
});