// Script to toggle the navigation on small screens
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.navbar ul');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      // Animate hamburger icon
      toggle.classList.toggle('open');
    });
  }
});