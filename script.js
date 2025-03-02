// Get the navbar element
const navbar = document.querySelector('.navbar');

// Add event listener to window scroll
window.addEventListener('scroll', () => {
    // Check if the window has scrolled down
    if (window.scrollY > 50) {
        // Add the scrolled class to the navbar
        navbar.classList.add('scrolled');
    } else {
        // Remove the scrolled class from the navbar
        navbar.classList.remove('scrolled');
    }
});
