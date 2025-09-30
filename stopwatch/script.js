let timer;
let running = false;
let hours = 0, minutes = 0, seconds = 0;

function updateDisplay() {
  const display = document.getElementById("display");
  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');
  display.innerText = `${h}:${m}:${s}`;
}

function tick() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function startStop() {
  if (!running) {
    timer = setInterval(tick, 1000);
    running = true;
  } else {
    clearInterval(timer);
    running = false;
  }
}

function reset() {
  clearInterval(timer);
  running = false;
  hours = minutes = seconds = 0;
  updateDisplay();
}
