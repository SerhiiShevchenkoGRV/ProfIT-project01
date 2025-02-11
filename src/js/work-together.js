const form = document.getElementById('cooperationForm');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modalOverlay');
const closeBtn = document.querySelector('.modal-btn');

const emailInput = document.getElementById('email');
const validationText = document.querySelector('.validation-text');
const inputsContainer = document.querySelector('.form-inputs');

form.addEventListener('submit', async function (event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const comments = document.getElementById('comments').value;

  if (emailInput.validity.valid) {
    validationText.style.display = 'none';

    emailInput.style.borderColor = '#3cbc81';
    validationText.textContent = 'Succes!';
    validationText.style.display = 'inline';
    validationText.style.color = '#3cbc81';
    inputsContainer.style.gap = '38px';
    try {
      const response = await fetch(
        'https://portfolio-js.b.goit.study/api-docs',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, comments }),
        }
      );

      if (response.ok) {
        form.reset();
        modal.style.display = 'flex';
        modalOverlay.style.display = 'block';
        disableBodyScroll(); // Disable scroll when modal is open
      } else {
        alert('Error submitting form. Please check your input and try again.');
      }
    } catch (error) {
      alert('Network error. Please try again later.');
    }
  } else {
    emailInput.style.borderColor = '#e74a3b';
    validationText.style.display = 'inline';
    validationText.textContent = 'Invalid email, try again';
    validationText.style.color = '#e74a3b';
    inputsContainer.style.gap = '38px';
  }
});

function closeModal() {
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
  enableBodyScroll(); // Enable scroll when modal is closed

  validationText.style.display = 'none';
  emailInput.style.borderColor = 'rgba(250, 250, 250, 0.2)';
}

closeBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', function (event) {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

function disableBodyScroll() {
  document.body.classList.add('no-scroll');
}

function enableBodyScroll() {
  document.body.classList.remove('no-scroll');
}
