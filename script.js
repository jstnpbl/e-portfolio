// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', menuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  menuToggle.setAttribute('aria-label', 'Toggle menu');
});

// Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.id = 'back-to-top';
backToTopButton.innerHTML = '↑';
backToTopButton.classList.add('back-to-top-btn');
backToTopButton.setAttribute('aria-label', 'Back to top');
backToTopButton.setAttribute('role', 'button');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

backToTopButton.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    backToTopButton.click();
  }
});

// Add event listener to nav links to close menu on click
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('active');
  }
});

// Add event listener to window to close menu on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
  }
});

menuToggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    menuToggle.click();
  }
});

// Add smooth scrolling to menu links
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }
});

// Add smooth scrolling to back-to-top button
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});