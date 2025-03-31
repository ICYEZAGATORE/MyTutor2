document.addEventListener("DOMContentLoaded", () => {
  // Handle Login Form Submission
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Login Successful!");
      window.location.href = "../HTML/courses.html"; // ✅ Adjusted path
    });
  }

  // Handle Signup Form Submission
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Sign Up Successful!");
      window.location.href = "../HTML/courses.html"; // ✅ Adjusted path
    });
  }

  // Handle Navigation Button Clicks
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      window.location.href = "../HTML/login.html"; // ✅ Corrected path
    });
  }

  if (signupBtn) {
    signupBtn.addEventListener("click", () => {
      window.location.href = "../HTML/signup.html"; // ✅ Corrected path
    });
  }
});
