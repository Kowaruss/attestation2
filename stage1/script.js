const popup = document.getElementById("popup");
const startTestBtn = document.getElementById("startTestBtn");
const mainContent = document.getElementById("mainContent");
const timerEl = document.getElementById("timer");
const counterEl = document.getElementById("counter");
const betImage = document.getElementById("betImage");
const answerInput = document.getElementById("answerInput");
const nextBtn = document.getElementById("nextBtn");

const TOTAL_BETS = 5;
let currentBet = 0;
let correct = 0;
let wrong = 0;
let usedImages = [];
let startTime = null;

let timeLeft = 360; // 6 минут
let timerInterval;

const images = [
  "1234.jpg",
  "2341.jpg",
  "3412.jpg",
  "4123.jpg",
  "555.jpg"
];

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();

    if (timeLeft <= 0) {
      finishStage();
    }
  }, 1000);
}

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerEl.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function getRandomImage() {
  const available = images.filter(img => !usedImages.includes(img));
  const random = available[Math.floor(Math.random() * available.length)];
  usedImages.push(random);
  return random;
}

let currentAnswer = "";

function loadNextBet() {
  if (currentBet >= TOTAL_BETS) {
    finishStage();
    return;
  }

  counterEl.textContent = `Ставка ${currentBet + 1} из ${TOTAL_BETS}`;
  const img = getRandomImage();
  betImage.src = `images/${img}`;
  currentAnswer = img.split(".")[0];
  answerInput.value = "";
}

nextBtn.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim();

  if (!/^\d+$/.test(userAnswer)) {
    alert("Введите число. Пустые и нечисловые ответы запрещены.");
    return;
  }

  if (userAnswer === currentAnswer) {
    correct++;
  } else {
    wrong++;
  }

  currentBet++;
  loadNextBet();
});

function finishStage() {
  clearInterval(timerInterval);

  const unanswered = TOTAL_BETS - (correct + wrong);
  wrong += unanswered;

  const spentSeconds = 360 - timeLeft;
  const minutes = Math.floor(spentSeconds / 60);
  const seconds = spentSeconds % 60;
  const formattedTime = `${minutes} мин ${seconds} сек`;

  localStorage.setItem("stage1_errors", wrong);
  localStorage.setItem("stage1_time", formattedTime);

  nextBtn.textContent = "Завершить этап";
  nextBtn.onclick = () => {
    window.location.href = "result.html";
  };
}

startTestBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
  mainContent.classList.remove("hidden");
  startTime = Date.now();
  startTimer();
  loadNextBet();
});
