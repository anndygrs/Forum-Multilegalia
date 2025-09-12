// Detecta el dispositivo
function isMobile() {
    const ua = navigator.userAgent.toLowerCase();
    const ancho = window.innerWidth;
    // Detectar teléfono móvil por user agent
    const esTelefono = /iphone|ipod|android.*mobile|windows phone|blackberry/.test(ua);
    // Detectar tablet por user agent
    const esTablet = /ipad|android(?!.*mobile)|tablet/.test(ua);
    if (esTelefono) {
      return true;
    } else if (esTablet) {
      return true;
    } else {
      // Si no se detecta por user agent, usar ancho de pantalla
      if (ancho <= 767) {
        return true;
      } else if (ancho > 767 && ancho <= 1024) {
        return true;
      } else {
        return false;
      }
    }
}

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

// Revisa el dispositivo, y si es movil, abre la modal con un retraso de 3seg
function checkDevice(title, description) {
    if (isMobile()) {
        setTimeout(() => {
            openModal(title, description);
        }, 3000);
    } else {
        openModal(title, description);
    }
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