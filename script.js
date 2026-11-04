
// Smooth navigation
document.querySelectorAll('nav a, .hero-buttons a').forEach(link => {
  link.addEventListener('click', function(event) {
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Reveal sections when scrolling
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15
});

sections.forEach(section => {
  observer.observe(section);
});

// Current year in footer
const footer = document.querySelector('footer p');

if (footer) {
  footer.textContent =
    `© ${new Date().getFullYear()} Qanber Ali Mughal. All rights reserved.`;
}

console.log('QAM Website loaded successfully!');
