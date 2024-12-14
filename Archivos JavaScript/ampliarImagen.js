// Selecciona la imagen
const imagen = document.getElementById('imagen-zoom');
var amplicion = 5

// Verifica si la imagen fue encontrada
if (imagen) {
  // Agrega un evento de clic
  imagen.addEventListener('click', () => {
    console.log("Imagen clickeada");

    // Si la imagen está ampliada, vuelve a su tamaño original
    if (imagen.style.transform === 'scale(1.'+ amplicion + ')') {
      imagen.style.transform = 'scale(1)';
    } else {
      imagen.style.transform = 'scale(1.'+ amplicion + ')';
    }
  });
} else {
  console.error("No se encontró la imagen con el ID 'imagen-zoom'");
}
