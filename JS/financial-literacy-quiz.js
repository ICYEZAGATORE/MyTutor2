document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.getElementById("quizForm");
  const resultDiv = document.getElementById("result");

  quizForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    let score = 0;

    // Check the answers for each question
    const q1 = quizForm.querySelector('input[name="q1"]:checked');
    const q2 = quizForm.querySelector('input[name="q2"]:checked');
    const q3 = quizForm.querySelector('input[name="q3"]:checked');

    if (q1 && q1.value === "a") score++;
    if (q2 && q2.value === "b") score++;
    if (q3 && q3.value === "b") score++;

    // Display the result
    resultDiv.innerHTML = `<p>You scored ${score} out of 3!</p>`;

    // Optionally, add logic to handle further navigation or saving progress
  });
});
