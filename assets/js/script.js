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

  // Fade the hero overlay based on scroll position.  As the user
  // scrolls down from the top of the page, the overlay’s opacity
  // decreases, revealing the background and creating a smooth
  // transition into the rest of the page content.  The effect is
  // similar to how Apple’s hero sections fade as you scroll.
  const heroSection = document.querySelector('.hero');
  const heroOverlay = document.querySelector('.hero-overlay');
  function updateHeroOverlay() {
    if (!heroSection || !heroOverlay) return;
    const rect = heroSection.getBoundingClientRect();
    const height = rect.height;
    // Compute how far the hero section has been scrolled.  When the
    // top of the hero reaches the top of the viewport, progress is 0;
    // when the hero has been scrolled up by its full height, progress
    // reaches 1.  Clamp the value between 0 and 1.
    const progress = Math.min(Math.max(-rect.top / height, 0), 1);
    heroOverlay.style.opacity = 1 - progress;
  }
  // Run once to set the initial state, then update on scroll and
  // resize events.
  updateHeroOverlay();
  window.addEventListener('scroll', updateHeroOverlay);
  window.addEventListener('resize', updateHeroOverlay);
});