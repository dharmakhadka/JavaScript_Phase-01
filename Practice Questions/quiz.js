const questions = [
  {
    question: "What is the capital of Nepal?",
    options: ["Kathmandu", "Pokhara", "Biratnagar", "Lalitpur"],
    answer: 0
  },
  {
    question: "What language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: 1
  }
];

let current = 0;
let score = 0;
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score');

function showQuestion() {
  const q = questions[current];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.className = 'option-btn';
    btn.onclick = () => selectOption(i);
    optionsEl.appendChild(btn);
  });
  nextBtn.disabled = true;
}

function selectOption(selected) {
  const correct = questions[current].answer;
  document.querySelectorAll('.option-btn')[correct].style.background = "#bbffc2";
  if (selected === correct) score++;
  document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

function showScore() {
  questionEl.style.display = 'none';
  optionsEl.style.display = 'none';
  nextBtn.style.display = 'none';
  scoreEl.style.display = '';
  scoreEl.textContent = `Your score: ${score} / ${questions.length}`;
}

showQuestion();
