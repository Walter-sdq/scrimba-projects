let startTime;
let interval;
let running = false;

function startStopwatch() {
  if (!running) {
    startTime = Date.now() - (interval || 0);
    interval = setInterval(updateDisplay, 10);
    running = true;
  }
}

function stopStopwatch() {
  clearInterval(interval);
  interval = null;
  running = false;
}

function resetStopwatch() {
  stopStopwatch();
  document.getElementById("display").textContent = "00:00:00";
}

function updateDisplay() {
  const currentTime = Date.now() - startTime;
  const minutes = Math.floor(currentTime / 60000);
  const seconds = Math.floor((currentTime % 60000) / 1000);
  const milliseconds = Math.floor((currentTime % 1000) / 10);

  document.getElementById("display").textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(2, "0")}`;
}

document.getElementById("start").addEventListener("click", startStopwatch);
document.getElementById("stop").addEventListener("click", stopStopwatch);
document.getElementById("reset").addEventListener("click", resetStopwatch);
