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
const form = document.getElementById('testForm');
const resultParagraph = document.getElementById('result');

// Personaliza el número de preguntas y las respuestas correctas
const totalQuestions = 16;
const correctAnswers = ['RespuestaCorrecta', 'RespuestaCorrecta', 'RespuestaCorrecta', 'RespuestaCorrecta','RespuestaCorrecta', 'RespuestaCorrecta', 'RespuestaCorrecta', 'RespuestaCorrecta','RespuestaCorrecta', 'RespuestaCorrecta', 'RespuestaCorrecta', 'RespuestaCorrecta','RespuestaCorrecta', 'RespuestaCorrecta', 'RespuestaCorrecta', 'RespuestaCorrecta'];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let correctCount = 0;
    let incorrectAnswers = [];

    for (let i = 1; i <= totalQuestions; i++) {
        const selectedAnswer = document.querySelector(`input[name=tipoRespuesta${i}]:checked`).value;
        if (selectedAnswer === correctAnswers[i - 1]) {
            correctCount++;
        } else {
            incorrectAnswers.push(i);
        }
    }

    const grade = (correctCount / totalQuestions) * 100;

    resultParagraph.textContent = `Tu nota es: ${grade}%`;

    if (incorrectAnswers.length > 0) {
        resultParagraph.textContent += `\nPreguntas falladas: ${incorrectAnswers.join(', ')}`;
    }
});
