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
// Escuchar el evento de envío del formulario
document.getElementById('testForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  let totalQuestions = 40; // Número total de preguntas
  let correctAnswers = 0; // Contador de respuestas correctas

  // Definir las respuestas correctas
  const answers = {
      tipoRespuesta1: "Respuesta2 correcta", // Ejemplo: la respuesta correcta de la pregunta 1 es "b"
      tipoRespuesta2: "Respuesta3 correcta",
      tipoRespuesta3: "Respuesta1 correcta",
      tipoRespuesta4: "Respuesta4 correcta",
      tipoRespuesta5: "Respuesta3 correcta",
      tipoRespuesta6: "Respuesta1 correcta",
      tipoRespuesta7: "Respuesta4 correcta",
      tipoRespuesta8: "Respuesta2 correcta",
      tipoRespuesta9: "Respuesta2 correcta",
      tipoRespuesta10:"Respuesta2 correcta",
      tipoRespuesta11:"Respuesta3 correcta",
      tipoRespuesta12: "Respuesta3 correcta",
      tipoRespuesta13: "Respuesta3 correcta",
      tipoRespuesta14: "Respuesta2 correcta",
      tipoRespuesta15: "Respuesta3 correcta",
      tipoRespuesta16: "Respuesta3 correcta",
      tipoRespuesta17: "Respuesta2 correcta",
      tipoRespuesta18: "Respuesta2 correcta",
      tipoRespuesta19: "Respuesta2 correcta",
      tipoRespuesta20: "Respuesta4 correcta",
      tipoRespuesta21: "Respuesta2 correcta",
      tipoRespuesta22: "Respuesta3 correcta",
      tipoRespuesta23: "Respuesta2 correcta",
      tipoRespuesta24: "Respuesta2 correcta",
      tipoRespuesta25: "Respuesta2 correcta",
      tipoRespuesta26: "Respuesta3 correcta",
      tipoRespuesta27: "Respuesta1 correcta",
      tipoRespuesta28: "Respuesta1 correcta",
      tipoRespuesta29: "Respuesta4 correcta",
      tipoRespuesta30: "Respuesta3 correcta",
      tipoRespuesta31: "Respuesta4 correcta",
      tipoRespuesta32: "Respuesta2 correcta",
      tipoRespuesta33: "b",
      tipoRespuesta34: "b",
      tipoRespuesta35: "b",
      tipoRespuesta36: "b",
      tipoRespuesta37: "b",
      tipoRespuesta38: "b",
      tipoRespuesta39: "b",
      tipoRespuesta40: "b",
  };

  // Recorrer las respuestas del formulario
  for (let question in answers) {
      const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
      if (userAnswer && userAnswer.value === answers[question]) {
          correctAnswers++;
      }
  }

  // Calcular la nota
  const score = (correctAnswers / totalQuestions) * 10; // Nota en una escala de 0 a 10

  // Mostrar el resultado
  document.getElementById('result').innerText = `Tu puntuación es: ${score.toFixed(2)} (${correctAnswers} aciertos de ${totalQuestions})`;
});

