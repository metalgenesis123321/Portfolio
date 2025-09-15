// Script to toggle the navigation on small screens
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.navbar ul');

  // Scroll‑based animation for the floating 3D object. As the user
  // scrolls down, the object rotates and moves diagonally. We cap
  // the progress at 1 to prevent the object from moving endlessly.
  const scrollObject = document.querySelector('.scroll-object');
  const maxAnimScroll = 800; // pixels over which the animation occurs

  function animateOnScroll() {
    if (scrollObject) {
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / maxAnimScroll, 1);
      const rotateDeg = progress * 360; // rotate up to one full turn
      const translateX = progress * -200; // move left
      const translateY = progress * -150; // move up
      scrollObject.style.transform = `translate(-50%, -50%) translate(${translateX}px, ${translateY}px) rotate(${rotateDeg}deg)`;
      // Gradually fade out the object as the user scrolls further down
      scrollObject.style.opacity = 1 - progress;
    }
    requestAnimationFrame(animateOnScroll);
  }

  requestAnimationFrame(animateOnScroll);

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