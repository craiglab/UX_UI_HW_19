// Select the navigation bar
const navbar = document.getElementById('navbar');

// Listen for the scroll event
window.addEventListener('scroll', function() {
  // Check if we've scrolled more than zero pixels
  if (window.scrollY > 0) {
    // Add the fixed-nav class if scrolled
    navbar.classList.add('fixed-nav');
  } else {
    // Remove the fixed-nav class if at the top
    navbar.classList.remove('fixed-nav');
  }
});
