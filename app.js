// Get the sections, navigation links, and navbar element
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
const navbar = document.querySelector('header');

// Add an event listener to the window object for the scroll event
window.addEventListener('scroll', () => {

  // Change the color of the navbar if the user has scrolled down the page
  navbar.classList.toggle('scrolled', window.scrollY > 0);

  // Highlight the active navigation link
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.href.includes(id)) {
          link.classList.add('active');
        }
      });
    }
  });
});
