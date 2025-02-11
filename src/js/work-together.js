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
    validationText.textContent = 'Succes!';
    validationText.classList.add('succes');
    emailInput.classList.add('succes');
    inputsContainer.classList.add('succes');

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
        disableBodyScroll(); // Add this line to disable body scroll
      } else {
        alert('Error submitting form. Please check your input and try again.');
      }
    } catch (error) {
      alert('Network error. Please try again later.');
    }
  } else {
    validationText.textContent = 'Invalid email, try again';
    validationText.classList.add('error');
    emailInput.classList.add('error');
    inputsContainer.classList.add('error');
  }
});

function closeModal() {
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
  enableBodyScroll();
  
  alidationText.textContent = 'Succes!';
  validationText.classList.remove('succes');
  emailInput.classList.remove('succes');
  inputsContainer.classList.remove('succes');
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

emailInput.addEventListener('input', () => {
  validationText.classList.remove('error');
  emailInput.classList.remove('error');
  inputsContainer.classList.remove('error');
});

emailInput.addEventListener('blur', () => {
  emailInput.classList.remove('error');
  inputsContainer.classList.remove('error');
  validationText.classList.remove('error');
});

function disableBodyScroll() {
  document.body.classList.add('no-scroll');
}

function enableBodyScroll() {
  document.body.classList.remove('no-scroll');
}