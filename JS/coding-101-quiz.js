document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.getElementById("quizForm");

  if (quizForm) {
    quizForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Quiz submitted! Answers will be evaluated.");
    });
  }
});
