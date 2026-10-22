let clicks = 0;

const counter = document.querySelector("#counter");
const clickButton = document.querySelector("#click-button");
const resetButton = document.querySelector("#reset-button");

function updateCounter() {
  const word = clicks === 1 ? "time" : "times";
  counter.textContent = `You've clicked ${clicks} ${word}.`;
}

clickButton.addEventListener("click", () => {
  clicks += 1;
  updateCounter();
});

resetButton.addEventListener("click", () => {
  clicks = 0;
  updateCounter();
});
