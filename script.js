const question = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const score = document.getElementById("score");

let currentQuestion = 0;
let marks = 0;
let selectedAnswer = null;

function loadQuestion() {
  selectedAnswer = null;
  nextBtn.disabled = true;
  
  const q = questions[currentQuestion];
  question.innerHTML = `${currentQuestion + 1}. ${q.question}`;
  options.innerHTML = "";
  
  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerHTML = option;
    btn.className = "option";
    
    btn.onclick = () => {
      document.querySelectorAll(".option").forEach(b => {
        b.classList.remove("selected");
      });
      
      btn.classList.add("selected");
      selectedAnswer = index;
      nextBtn.disabled = false;
    };
    
    options.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  if (selectedAnswer === questions[currentQuestion].answer) {
    marks++;
  }
  
  currentQuestion++;
  
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    quiz.style.display = "none";
    result.style.display = "block";
    score.innerHTML = `তোমার স্কোর: ${marks} / ${questions.length}`;
  }
};

loadQuestion();