//Codigo para un boton menú con enlaces con los que acceder a partes especificas de la información
const botonMenu = document.getElementById('botonMenu');
const menu = document.getElementById('menu');
const enlacesMenu = document.querySelectorAll('#menu a');

botonMenu.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});

enlacesMenu.forEach(enlace => {
  enlace.addEventListener('click', (evento) => {
    const idEnlace = enlace.getAttribute('href').substring(1); // Obtiene el ID del destino
    const EnlaceDestino = document.getElementById(idEnlace);
      EnlaceDestino.scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente al elemento
    
      
  });
});
