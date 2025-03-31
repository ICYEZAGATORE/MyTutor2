document.addEventListener("DOMContentLoaded", () => {
  const quizQuestions = [
    {
      question: "What is a budget?",
      options: [
        "A plan for managing money",
        "A type of bank account",
        "A government tax system",
        "A loan agreement",
      ],
      answer: "A plan for managing money",
    },
    {
      question: "Which of the following is NOT considered a type of income?",
      options: ["Salary", "Investments", "Debt", "Business profits"],
      answer: "Debt",
    },
    {
      question: "What does 'APR' stand for in credit card terms?",
      options: [
        "Annual Percentage Rate",
        "Automatic Payment Renewal",
        "Asset Protection Ratio",
        "Advanced Payment Record",
      ],
      answer: "Annual Percentage Rate",
    },
    {
      question: "Which is the best way to build a good credit score?",
      options: [
        "Max out your credit card and pay later",
        "Make on-time payments and keep low balances",
        "Avoid using credit at all",
        "Open multiple credit cards at once",
      ],
      answer: "Make on-time payments and keep low balances",
    },
    {
      question: "What is an emergency fund?",
      options: [
        "A loan from the government",
        "Savings for unexpected expenses",
        "Money set aside for vacations",
        "A retirement account",
      ],
      answer: "Savings for unexpected expenses",
    },
  ];

  const quizContainer = document.getElementById("quizQuestions");
  const quizForm = document.getElementById("quizForm");
  const resultContainer = document.getElementById("resultContainer");
  const scoreDisplay = document.getElementById("score");
  const retryBtn = document.getElementById("retryBtn");

  // Generate quiz questions dynamically
  quizQuestions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionTitle = document.createElement("h3");
    questionTitle.textContent = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionTitle);

    q.options.forEach((option) => {
      const label = document.createElement("label");
      label.innerHTML = `
                <input type="radio" name="question${index}" value="${option}" required>
                ${option}
            `;
      questionDiv.appendChild(label);
    });

    quizContainer.appendChild(questionDiv);
  });

  // Handle form submission
  quizForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let score = 0;

    quizQuestions.forEach((q, index) => {
      const selectedOption = document.querySelector(
        `input[name="question${index}"]:checked`
      );
      if (selectedOption && selectedOption.value === q.answer) {
        score++;
      }
    });

    scoreDisplay.textContent = score;
    resultContainer.classList.remove("hidden");
    quizForm.classList.add("hidden");
  });

  // Retry button functionality
  retryBtn.addEventListener("click", () => {
    resultContainer.classList.add("hidden");
    quizForm.classList.remove("hidden");
    quizForm.reset();
  });
});
