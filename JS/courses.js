document.addEventListener("DOMContentLoaded", () => {
  const coursesContainer = document.getElementById("coursesContainer");
  const logoutBtn = document.getElementById("logoutBtn");

  // Course data
  const courses = [
    {
      title: "Coding 101",
      description: "Learn the basics of programming.",
      image: "../Images/coding-101.jpg",
      link: "coding-101.html", // ✅ Updated to Coding 101's specific page
    },
    {
      title: "Financial Literacy",
      description: "Master financial skills and budgeting.",
      image: "../Images/financial-literacy.jpg",
      link: "financial-literacy.html",
    },
    {
      title: "Math - Integrals",
      description: "Understand integral calculus step by step.",
      image: "../Images/math-integrals.jpg",
      link: "lesson.html",
    },
    {
      title: "Entrepreneurship",
      description: "Build and grow your own business.",
      image: "../Images/entrepreneurship.jpg",
      link: "lesson.html",
    },
    {
      title: "Public Speaking 101",
      description: "Improve your communication and speech skills.",
      image: "../Images/public-speaking.jpg",
      link: "lesson.html",
    },
  ];

  // Populate courses dynamically
  courses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course-card");

    courseCard.innerHTML = `
            <img src="${course.image}" alt="${course.title}">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <button class="enroll-btn">Enroll Now</button>
        `;

    coursesContainer.appendChild(courseCard);

    // Redirect to the appropriate course page when clicked
    courseCard.addEventListener("click", () => {
      window.location.href = course.link;
    });
  });

  // Logout functionality
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      alert("You have been logged out.");
      window.location.href = "login.html";
    });
  }
});
