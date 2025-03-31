document.addEventListener("DOMContentLoaded", () => {
  const takeQuizBtn = document.getElementById("takeQuizBtn"); // Quiz button

  if (takeQuizBtn) {
    takeQuizBtn.addEventListener("click", () => {
      window.location.href = "coding-101-quiz.html"; // Redirect to quiz page
    });
  }
});
