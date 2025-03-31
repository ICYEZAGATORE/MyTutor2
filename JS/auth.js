// Store this file in your JS directory as auth.js

// Check which page we're on
const isLoginPage = window.location.pathname.includes("login.html");
const isSignupPage = window.location.pathname.includes("signup.html");
const isCoursesPage = window.location.pathname.includes("courses.html");

// Function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to check if user is logged in
function isLoggedIn() {
  return localStorage.getItem("currentUser") !== null;
}

// Function to redirect unauthenticated users
function checkAuth() {
  // Get current path
  const currentPath = window.location.pathname;

  // Define protected pages (adjust paths as needed)
  const protectedPages = ["courses.html"];

  // Check if current page requires authentication
  const requiresAuth = protectedPages.some((page) =>
    currentPath.includes(page)
  );

  if (requiresAuth && !isLoggedIn()) {
    // Redirect to login if trying to access protected page without auth
    window.location.href = "login.html";
  } else if (isLoggedIn() && (isLoginPage || isSignupPage)) {
    // Redirect to courses page if already logged in but on auth pages
    window.location.href = "courses.html";
  }
}

// Handle signup form submission
function handleSignup(e) {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Basic validation
  if (!fullname || !email || !password) {
    alert("All fields are required");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // Check if user already exists
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.some((user) => user.email === email)) {
    alert("An account with this email already exists");
    return;
  }

  // Create new user
  const newUser = {
    id: Date.now().toString(),
    fullname,
    email,
    password, // Note: In a real app, never store passwords in plain text
    createdAt: new Date().toISOString(),
  };

  // Save to localStorage
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  // Auto-login after signup
  const sessionUser = { ...newUser };
  delete sessionUser.password; // Don't store password in the session
  localStorage.setItem("currentUser", JSON.stringify(sessionUser));

  // Redirect to courses page
  alert("Account created successfully!");
  window.location.href = "courses.html";
}

// Handle login form submission
function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Basic validation
  if (!email || !password) {
    alert("Email and password are required");
    return;
  }

  // Check credentials
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    alert("Invalid email or password");
    return;
  }

  // Save user session
  const sessionUser = { ...user };
  delete sessionUser.password; // Don't store password in the session
  localStorage.setItem("currentUser", JSON.stringify(sessionUser));

  // Redirect to courses page (in same directory as login)
  window.location.href = "courses.html";
}

// Handle logout
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

// Initialize auth functionality
function initAuth() {
  // Check authentication status for page redirects
  checkAuth();

  // Set up form handlers
  if (isSignupPage) {
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
      signupForm.addEventListener("submit", handleSignup);
    }
  }

  if (isLoginPage) {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", handleLogin);
    }
  }

  // Add logout functionality to any logout buttons
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", logout);
  }

  // Update UI based on auth status
  updateUIForAuthStatus();
}

// Update UI elements based on authentication status
function updateUIForAuthStatus() {
  const authStatusElements = document.querySelectorAll("[data-auth-status]");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  authStatusElements.forEach((element) => {
    const requiredStatus = element.getAttribute("data-auth-status");

    if (requiredStatus === "authenticated" && currentUser) {
      element.style.display = "block";
    } else if (requiredStatus === "unauthenticated" && !currentUser) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });

  // Update user info if logged in
  if (currentUser) {
    const userNameElements = document.querySelectorAll(".user-name");
    userNameElements.forEach((element) => {
      element.textContent = currentUser.fullname;
    });
  }
}

// Run initialization when DOM is loaded
document.addEventListener("DOMContentLoaded", initAuth);
