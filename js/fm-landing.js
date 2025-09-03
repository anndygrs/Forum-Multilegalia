// Toggle menú móvil
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Validación simple del formulario
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (name && email && message) {
        alert('Mensaje enviado exitosamente. Nos pondremos en contacto pronto.');
        form.reset();
    } else {
        alert('Por favor, complete todos los campos.');
    }
});

// Modal functions
function openModal(title, description) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('serviceModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

function closeModal() {
    document.getElementById('serviceModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scroll
}

// Close modal on outside click
window.onclick = function(event) {
    if (event.target == document.getElementById('serviceModal')) {
        closeModal();
    }
}