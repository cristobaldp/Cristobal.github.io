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

