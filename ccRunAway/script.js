function randomLocation(length) {
  return `${Math.floor(Math.random() * length)}px`;
}

function initialise() {
  const runner = document.getElementById("runner");
  const runnerWidth = parseInt(runner.style.width);
  console.log(runnerWidth);
  const width = document.body.clientWidth - runnerWidth;
  const height = document.body.clientHeight - runnerWidth;
  console.log(randomLocation(width));
  runner.addEventListener("mouseover", () => {
    runner.style.top = randomLocation(height);
    runner.style.left = randomLocation(width);
  });
}

window.onload = initialise();
