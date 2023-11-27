document.addEventListener('DOMContentLoaded', function () {
  const openModalBtn = document.getElementById('openModalBtn');
  const modal = document.getElementById('modal');
  const overlay = document.getElementById('overlay');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const contactForm = document.getElementById('contactForm');

  openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
    overlay.style.display = 'block';
    disablePageScrolling();
  });

  closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    enablePageScrolling();
  });

  overlay.addEventListener('click', function () {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    enablePageScrolling();
  });

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // No need for additional JavaScript handling with Formspree
  });

  function disablePageScrolling() {
    document.body.style.overflow = 'hidden';
  }

  function enablePageScrolling() {
    document.body.style.overflow = 'auto';
  }
});
