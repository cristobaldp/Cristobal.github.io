// Escuchar el evento de envío del formulario
document.getElementById('testForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
  
    let totalQuestions = 4; // Número total de preguntas
    let correctAnswers = 0; // Contador de respuestas correctas
  
    // Definir las respuestas correctas
    const answers = {

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
  