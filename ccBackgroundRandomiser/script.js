const button = document.querySelector("#button-color");
console.log(button);

function randomColor() {
  return (Math.random() * 255).toFixed();
}

button.addEventListener("click", () => {
  const newColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  button.innerHTML = newColor;
  document.body.style.background = newColor;
});
