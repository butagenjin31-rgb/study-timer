alert("JS読み込めてます");

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");

let remainingSeconds = 25 * 60;
let intervalId = null;

function updateTimer() {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  timerDisplay.textContent =
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");
}

startButton.addEventListener("click", () => {
  // すでに動いていたら二重起動しない
  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    remainingSeconds--;
    updateTimer();

    if (remainingSeconds <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      remainingSeconds = 0;
      updateTimer();
    }
  }, 1000);
});

// 最初の表示を整える
updateTimer();
