// Manejo del formulario
function handleSubmit() {
  const email = document.getElementById('email-input').value;
  if (email) {
    alert(`Correo enviado: ${email}`); // Simulación de envío
    document.getElementById('email-input').value = ''; // Limpia el input
  } else {
    alert('Por favor, ingresa un correo válido.');
  }
}

// Animaciones de visibilidad al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.features, .buy, .social, .contact');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.querySelector('.section-title').style.opacity = '1';
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });
});
