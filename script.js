const data = [
  // The Question Bank
  {
    question:
      "This is defined as a group of cells with a similar structure and function.",
    answers: [
      { text: "Tissue", correct: true },
      { text: "Organ", correct: false },
      { text: "Organism", correct: false },
      { text: "Molecules", correct: false },
    ],
  },
  {
    question: "In which cavity is the brain located?",
    answers: [
      { text: "Neural cavity", correct: false },
      { text: "Abdominal cavity", correct: false },
      { text: "Vertebral cavity", correct: false },
      { text: "Cranial cavity", correct: true },
    ],
  },
  {
    question: "A transverse plane will cut a body or organ into:",
    answers: [
      { text: "Anterior and Posterior", correct: false },
      { text: "At an angle", correct: false },
      { text: "Left and Right", correct: false },
      { text: "Superior and Inferior", correct: true },
    ],
  },
  {
    question: "The sternum is located ____ to the heart.",
    answers: [
      { text: "Posterior", correct: false },
      { text: "Anterior", correct: true },
      { text: "Inferior", correct: false },
      { text: "Right", correct: false },
    ],
  },
  {
    question: "How many bones are found in the adult human skeleton?",
    answers: [
      { text: "200", correct: false },
      { text: "206", correct: true },
      { text: "250", correct: false },
      { text: "232", correct: false },
    ],
  },
  {
    question:
      "If you had to get orthopedic surgery to mend your torn meniscus, what largest joint in the body would you have to get repaired?",
    answers: [
      { text: "Elbow", correct: false },
      { text: "Knee", correct: true },
      { text: "Ankle", correct: false },
      { text: "Shoulder", correct: false },
    ],
  },
  {
    question:
      "Of the three principal layers that make up human skin, what name is given to the outer most layer that provides a waterproof and protective barrier?",
    answers: [
      { text: "Dermis", correct: false },
      { text: "Endodermis", correct: false },
      { text: "Epidermis", correct: true },
      { text: "Hypodermis", correct: false },
    ],
  },
  {
    question:
      "The islets of Langerhans are groups of cells that produce insulin and glucagon located in what organ of the body?",
    answers: [
      { text: "Kidney", correct: false },
      { text: "Liver", correct: false },
      { text: "Pancreas", correct: true },
      { text: "Spleen", correct: false },
    ],
  },
  {
    question:
      "The chloecyst is another name for what small organ that stores bile?",
    answers: [
      { text: "Spleen", correct: false },
      { text: "Gallbladder", correct: true },
      { text: "Pancreas", correct: false },
      { text: "Appendix", correct: false },
    ],
  },
  {
    question:
      "Starting at the lower back and running down both legs, which nerve is the longest and widest in the human body?",
    answers: [
      { text: "Sciatic nerve", correct: true },
      { text: "Ulnar nerve", correct: false },
      { text: "Saphenous nerve", correct: false },
      { text: "Femoral nerve", correct: false },
    ],
  },
  {
    question:
      "Components of the central nervous system include all of the following except the:",
    answers: [
      { text: "Spinal nerves", correct: true },
      { text: "Diencephalon", correct: false },
      { text: "Spinal cord", correct: false },
      { text: "Cerebellum", correct: false },
    ],
  },
  {
    question: "The term “rostral” means:",
    answers: [
      { text: "Towards the dorsal aspect", correct: false },
      { text: "Towards the nose", correct: true },
      { text: "Towards the ventral aspect", correct: false },
      { text: "Towards the tail", correct: false },
    ],
  },
  {
    question: "Which sulcus separates the pons from the midbrain?",
    answers: [
      { text: "Inferior Pontine Sulcus", correct: false },
      { text: "Ventral Sulcus", correct: false },
      { text: "Lateral Sulcus", correct: false },
      { text: "Superior Pontine Sulcus", correct: true },
    ],
  },
  {
    question: "The trigeminal nerve arises from the brain at the level of the:",
    answers: [
      { text: "Medulla", correct: false },
      { text: "Midbrian", correct: false },
      { text: "Mid-Pons", correct: true },
      { text: "Diencephalon", correct: false },
    ],
  },
  {
    question:
      "In early embryogenesis, the notochord develops in the midline from the:",
    answers: [
      { text: "Floor plate", correct: false },
      { text: "Mesoderm", correct: true },
      { text: "Ectoderm", correct: false },
      { text: "Neural Plate", correct: false },
    ],
  },
  {
    question:
      "The secondary embryonic brain vesicle that gives rise to the pons and cerebellum is the:",
    answers: [
      { text: "Mesencephalon", correct: false },
      { text: "Telencephalon", correct: false },
      { text: "Myelencephalon", correct: false },
      { text: "Metencephalon", correct: true },
    ],
  },
  {
    question: "The following is NOT true about retinal cones:",
    answers: [
      { text: "They produce sharp images, when excited", correct: false },
      { text: "They are used in bright light", correct: false },
      { text: "They need retinol to work ", correct: true },
      { text: "They are less numerous than the rods", correct: false },
    ],
  },
  {
    question:
      "The ossicle that gets moved by the vibrations of the tympanic membrane is: ",
    answers: [
      { text: "Malleus", correct: true },
      { text: "Incus", correct: false },
      { text: "Stapes", correct: false },
      { text: "Anvil", correct: false },
    ],
  },
  {
    question: "The function of arrector pili muscle is:",
    answers: [
      {
        text: "To contract to squeeze oil from the sebaceous glands",
        correct: false,
      },
      { text: "To squeeze the sweat out of glands", correct: false },
      {
        text: "To contract in order to produce heat for heat regulation",
        correct: false,
      },
      { text: "To raise the hairs in upright position", correct: true },
    ],
  },
  {
    question:
      "The following brain waves are produced during the REM period of sleep cycle:",
    answers: [
      { text: "Beta waves", correct: true },
      { text: "Alpha waves", correct: false },
      { text: "Keppa waves", correct: false },
      { text: "Delta waves", correct: false },
    ],
  },
];

// Setup DOM variables
const questionNo = document.getElementById("number");
const questionLength = document.getElementById("remainingQuestions");
const currentQuestion = document.getElementById("question");
const options = document.getElementById("answers");
const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");
const result = document.getElementById("result");
const resultH3 = document.getElementById("resultH3");
const startQuizBtn = document.getElementById("homeBtn");
const scoreTracker = document.getElementById("scoreTracker");

// Setup Quiz Variable
let currentIndex = 0;
let score = 0;
let states = data.map(() => ({
  questionAnswered: false,
  previousChoice: null,
  lastChoice: null,
  userChoice: null,
}));

// Styling previousBtn depending on its state
function backBtnState() {
  if (currentIndex == 0) {
    backBtn.style.display = "none";
  } else {
    backBtn.style.display = "block";
  }
}

// Styling NextBtn depending on its state
function nextBtnState() {
  if (currentIndex + 1 == data.length) {
    nextBtn.innerText = "Submit";
    nextBtn.style.backgroundColor = "red";
    nextBtn.onmouseover = () => {
      nextBtn.style.backgroundColor = "red";
    };
    nextBtn.onmouseleave = () => {
      nextBtn.style.backgroundColor = "red";
    };
  } else {
    nextBtn.innerText = "Next";
    nextBtn.style.backgroundColor = "#31473A";
    nextBtn.onmouseover = () => {
      nextBtn.style.backgroundColor = "green";
    };
    nextBtn.onmouseleave = () => {
      nextBtn.style.backgroundColor = "#31473A";
    };
  }
}

function chooseAnswer(e) {
  const button = e.target;
  const isCorrect = button.dataset.correct === "true";

  // Remove border from the previous choice
  if (states[currentIndex].lastChoice) {
    states[currentIndex].lastChoice.style.border = "3px solid #7c7c7c";
  }

  // Add border to the current choice
  button.style.border = "3px solid green";
  states[currentIndex].lastChoice = button;
  states[currentIndex].userChoice = button;

  // If this is the user's first choice for this question
  if (!states[currentIndex].questionAnswered) {
    if (isCorrect) {
      score++;
    } else {
      states[currentIndex].previousChoice = false;
    }
  } else {
    // If the user changes their answer
    if (states[currentIndex].previousChoice === true) {
      if (!isCorrect) {
        score--;
      }
    } else {
      if (isCorrect) {
        score++;
      } else {
        states[currentIndex].previousChoice = false;
      }
    }
  }

  states[currentIndex].questionAnswered = true;
  states[currentIndex].previousChoice = isCorrect;
}

function takeQuiz() {
  // Reset Quiz Variable
  currentIndex = 0;
  score = 0;
  states = data.map(() => ({
    questionAnswered: false,
    previousChoice: null,
    lastChoice: null,
    userChoice: null,
  }));

  // Reset DOM variables
  resultH3.style.display = "none";
  backBtn.style.display = "block";
  nextBtn.style.display = "block";
  scoreTracker.style.display = "block";
  options.style.display = "block";
  nextBtn.style.backgroundColor = "#31473A";
  nextBtn.onmouseover = () => {
    nextBtn.style.backgroundColor = "green";
  };
  nextBtn.onmouseleave = () => {
    nextBtn.style.backgroundColor = "#31473A";
  };
  setQuestionAndAnswers();
}

function setQuestionAndAnswers() {
  nextBtn.innerText = "Next";
  // Clear previous answers
  options.innerHTML = "";

  // Set the question number
  questionNo.innerText = (currentIndex + 1).toString();
  questionLength.innerText = data.length.toString();

  // Set question
  currentQuestion.innerText = data[currentIndex].question;

  // Set Options
  data[currentIndex].answers
    .sort(() => Math.random() - 0.5)
    .forEach((answer, index) => {
      const button = document.createElement("button");
      let num = index + 1; //Option number

      button.innerText = `${num}. ${answer.text}`;
      options.appendChild(button);

      // Get user's answer
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", chooseAnswer);

      // Restore state for the current question
      if (states[currentIndex].userChoice) {
        if (states[currentIndex].userChoice.dataset.answer === answer.text) {
          button.style.border = "3px solid green";
          states[currentIndex].lastChoice = button;
        }
      }

      button.dataset.answer = answer.text;
    });

  // Back btn state
  backBtnState();

  // Next Btn State
  nextBtnState();

  startQuizBtn.style.display = "none";
}

function showScore() {
  // Show the users score
  nextBtn.innerText = "Retake Quiz";
  const remark =
    score <= 5
      ? "Poor"
      : score <= 10
      ? "Fair"
      : score <= 15
      ? "Good"
      : "Excellent";

  if (remark === "Poor") {
    result.style.color = "red";
  } else if (remark === "Fair") {
    result.style.color = "yellow";
  } else if (remark === "Good") {
    result.style.color = "green";
  } else {
    result.style.color = "green";
  }

  currentQuestion.innerText = `You scored ${score} out of ${data.length}`;
  resultH3.style.display = "block";
  result.innerText = `${remark}`;
  backBtn.style.display = "none";
  options.style.display = "none";
  questionNo.innerText = score.toString();
  nextBtn.style.backgroundColor = "#31473A";

  nextBtn.onmouseover = () => {
    nextBtn.style.backgroundColor = "green";
  };
  nextBtn.onmouseleave = () => {
    nextBtn.style.backgroundColor = "#31473A";
  };
}

function ShowNextQuestion() {
  currentIndex++;

  // Determine if Quiz is over.
  if (currentIndex < data.length) {
    setQuestionAndAnswers();
  } else {
    showScore();
  }
}

// Function to go to the next question.
nextBtn.onclick = () => {
  if (currentIndex < data.length) {
    ShowNextQuestion();
  } else {
    takeQuiz();
  }
};

// Function to go to the previous question
backBtn.onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    setQuestionAndAnswers();
  }
};

// Home Page
function startPage() {
  currentQuestion.innerHTML = `<div>
    <h2>Anatomy 101 Quiz! </h2>
    <p class="p">Click start Quiz button when you are ready to start the quiz. GoodLuck  </p>
   </div>`;
  nextBtn.style.display = "none";
  backBtn.style.display = "none";
  scoreTracker.style.display = "none";
}

startPage();
