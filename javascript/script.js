document.querySelector('a[href="#sobremi"]').addEventListener('click', function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  const sobreMiSection = document.querySelector('.sobre-mi');
  const yOffset = -80; // Ajusta esta cantidad para un desplazamiento más adecuado
  const y = sobreMiSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

  // Desplazarse a la sección con una animación suave
  window.scrollTo({ top: y, behavior: 'smooth' });

  // Agregar la clase para activar la animación al mostrar la sección
  sobreMiSection.classList.add('show-animation');
});