// Script to toggle the navigation on small screens
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.navbar ul');

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