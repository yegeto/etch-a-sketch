const container = document.querySelector(".container");

const createPixels = (amount, target) => {
  target.replaceChildren();
  for (let index = 0; index < amount ** 2; index++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.style.flex = `1 1 ${640 / amount}px`;
    console.log(`${640 / amount}`);

    target.appendChild(pixel);
  }
};

const setModeBlack = () => {
  const pixels = document.querySelectorAll(".pixel");

  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseenter", () => {
      pixel.style.backgroundColor = "black";
    });
  });
};

const gridSize = document.querySelector(".grid-size");

gridSize.addEventListener("click", () => {
  let userInput;
  do {
    userInput = prompt("Enter a number between 1 and 50:");
    userInput = parseInt(userInput, 10);
  } while (isNaN(userInput) || userInput < 1 || userInput > 50);
  createPixels(userInput, container);
  setModeBlack();
});

createPixels(16, container);
setModeBlack();
