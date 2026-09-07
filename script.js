// script.js - Netflix Clone interactivity

document.addEventListener('DOMContentLoaded', () => {
  setupFaqAccordion();
  setupGetStarted();
});

// 1. FAQ accordion: click a question to expand/collapse its answer
function setupFaqAccordion() {
  const faqItems = document.querySelectorAll('.faqbox');

  faqItems.forEach((item) => {
    item.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all other open items (accordion behaviour)
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('active');
          rotateIcon(other, false);
        }
      });

      // Toggle the clicked item
      item.classList.toggle('active', !isOpen);
      rotateIcon(item, !isOpen);
    });
  });
}

// Rotates the +/- svg icon inside a faqbox to indicate open/closed state
function rotateIcon(faqbox, isOpenState) {
  const svg = faqbox.querySelector('svg');
  if (svg) {
    svg.style.transition = 'transform 0.2s ease';
    svg.style.transform = isOpenState ? 'rotate(45deg)' : 'rotate(0deg)';
  }
}

// 2. Basic email validation on the hero "Get Started" button
function setupGetStarted() {
  const getStartedBtn = document.querySelector('.hero-buttons .btn-red');
  const emailInput = document.querySelector('.hero-buttons input[type="text"]');

  if (!getStartedBtn || !emailInput) return;

  getStartedBtn.addEventListener('click', (e) => {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      e.preventDefault();
      emailInput.style.border = '1px solid red';
      alert('Please enter a valid email address to get started.');
    } else {
      emailInput.style.border = '';
      alert('Great! (This is a demo clone — sign-up isn\'t actually wired up.)');
    }
  });
}