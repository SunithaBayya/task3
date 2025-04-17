// Quiz App
const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats"
    ],
    answer: "Cascading Style Sheets",
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (opt === q.answer) score++;
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        questionEl.textContent = "Quiz completed!";
        optionsEl.innerHTML = "";
        scoreEl.textContent = `Final Score: ${score}`;
        document.getElementById("next-btn").style.display = "none";
      }
      scoreEl.textContent = `Score: ${score}`;
    };
    optionsEl.appendChild(btn);
  });
}

document.getElementById("next-btn").onclick = loadQuestion;
loadQuestion();

// Joke API Fetch
document.getElementById("get-joke").onclick = async () => {
  const res = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode&type=single");
  const data = await res.json();
  document.getElementById("joke").textContent = data.joke || "No joke found!";
};

// Dark Mode Toggle
document.getElementById("toggle-theme").onclick = () => {
  document.body.classList.toggle("dark-mode");
};
