// Smooth scroll for navigation
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert("Thank you! Your message has been sent successfully.");
  e.target.reset();
});
