const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.getElementById("time-left");
const score = document.getElementById("score");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = 0;

function moveMole() {
  timerId = setInterval(randomSquare, 650);
}

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");
  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === hitPosition) {
      result++;
      score.innerHTML = result;
      hitPosition = 0;
    }
  });
});

moveMole();

function countdown() {
  currentTime--;
  timeLeft.innerHTML = currentTime;
  if (currentTime == 0) {
    clearInterval(countdownTimerId);
    clearInterval(timerId);
    alert("GAME OVER Your final score is" + result);
  }
}

let countdownTimerId = setInterval(countdown, 1000);
