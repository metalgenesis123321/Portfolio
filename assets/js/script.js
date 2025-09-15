// Script to toggle the navigation on small screens
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.navbar ul');

  // Intersection Observer to reveal elements as they scroll into view.
  // Elements with the `.animate-on-scroll` class will fade/slide in
  // when they become visible in the viewport.  See CSS for the
  // animation definitions.
  const animatedItems = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  animatedItems.forEach(item => observer.observe(item));

  if (toggle && navLinks) {
    // Toggle the nav open/closed on hamburger click
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      // Animate hamburger icon
      toggle.classList.toggle('open');
    });
    // Close the menu after clicking a navigation link (use event
    // delegation). This improves the one‑page experience on mobile
    // devices because the menu collapses once you select a section.
    navLinks.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
      }
    });
  }
});