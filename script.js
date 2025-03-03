// window.addEventListener('scroll', function() {
//     const nav = document.querySelector('.nav');
//     if (window.scrollY > 50) {
//         nav.classList.add('scrolled');
//     } else {
//         nav.classList.remove('scrolled');
//     }
// });
// Select the navigation bar and sidebar elements
const nav = document.querySelector('.nav');
const sidebar = document.querySelector('.sidebar');
const menuButton = document.querySelector('.menu-button');

// Add event listener to the menu button
menuButton.addEventListener('click', toggleSidebar);

// Add event listener to the window scroll event
window.addEventListener('scroll', toggleScrolledClass);

// Function to toggle the sidebar visibility
function toggleSidebar() {
  sidebar.classList.toggle('visible');
}

// Function to toggle the "scrolled" class on the navigation bar
function toggleScrolledClass() {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}