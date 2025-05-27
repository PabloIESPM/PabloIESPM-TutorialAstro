const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    // Toggle 'hidden' class for mobile visibility
    // The 'md:flex' class will ensure it's visible on medium screens and up regardless of 'hidden'
    navLinks.classList.toggle('hidden'); 
    
    // Check visibility state by seeing if 'hidden' is PRESENT.
    // If 'hidden' is present, menu is closed (not expanded).
    const isExpanded = !navLinks.classList.contains('hidden');
    hamburger.setAttribute('aria-expanded', isExpanded.toString());
  });
}