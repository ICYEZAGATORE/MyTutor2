document.addEventListener("DOMContentLoaded", () => {
  const takeQuizBtn = document.getElementById("takeQuizBtn"); // Get the "Take the Quiz" button

  if (takeQuizBtn) {
    takeQuizBtn.addEventListener("click", () => {
      window.location.href = "financial-literacy-quiz.html"; // Redirect to quiz page
    });
  }
});
