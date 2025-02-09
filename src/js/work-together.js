const form = document.getElementById('cooperationForm');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.modal-btn');

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const comments = document.getElementById('comments').value;

    try {
        const response = await fetch('https://portfolio-js.b.goit.study/api-docs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, comments })
        });
        
        if (response.ok) {
            form.reset();
            modal.style.display = 'flex';
        } else {
            alert('Error submitting form. Please check your input and try again.');
        }
    } catch (error) {
        alert('Network error. Please try again later.');
    }
});

function closeModal() {
    modal.style.display = 'none';
}

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', function(event) {
    if (event.target === modal) closeModal();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') closeModal();
});