// Selecciona la imagen
const imagen = document.getElementById('imagen-zoom');

// Verifica si la imagen fue encontrada
if (imagen) {
  // Agrega un evento de clic
  imagen.addEventListener('click', () => {
    console.log("Imagen clickeada");
    imagen.style.transform = 'scale(1.9)'
    // Alterna la clase "ampliada" al hacer clic
    imagen.classList.toggle('ampliada');
  });
} else {
  console.error("No se encontró la imagen con el ID 'imagen-zoom'");
}