const container = document.querySelector(".container");

const createPixels = (amount, target) => {
  target.replaceChildren();
  for (let index = 0; index < amount ** 2; index++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.style.flex = `1 1 ${640 / amount}px`;
    target.appendChild(pixel);
  }
};

let drawingMode = "darken";

const setDrawingMode = (mode) => {
  const pixels = document.querySelectorAll(".pixel");
  const getRandomRgbValue = () => {
    return Math.floor(Math.random() * 251);
  };
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = "white";
    pixel.style.opacity = "1.0";
  });
  if (mode === "black") {
    pixels.forEach((pixel) => {
      pixel.addEventListener("mouseenter", () => {
        pixel.style.backgroundColor = "black";
      });
    });
  } else if (mode === "rainbow") {
    pixels.forEach((pixel) => {
      pixel.addEventListener("mouseenter", () => {
        pixel.style.backgroundColor = `rgb(${getRandomRgbValue()},${getRandomRgbValue()},${getRandomRgbValue()})`;
      });
    });
  } else if (mode === "darken") {
    pixels.forEach((pixel) => {
      pixel.style.opacity = "0.0";
      pixel.addEventListener("mouseenter", () => {
        pixel.style.backgroundColor = "black";
        if (pixel.style.opacity <= 1) {
          pixel.style.opacity = `${parseFloat(pixel.style.opacity) + 0.1}`;
        }
      });
    });
  }
};

const gridSize = document.querySelector(".grid-size");

gridSize.addEventListener("click", () => {
  let userInput;
  do {
    userInput = prompt("Enter a number between 1 and 50:");
    userInput = parseInt(userInput, 10);
  } while (isNaN(userInput) || userInput < 1 || userInput > 50);
  createPixels(userInput, container);
  setDrawingMode(drawingMode);
});

const blackBtn = document.querySelector(".black-button");
const rainbowBtn = document.querySelector(".rainbow-button");
const darkenBtn = document.querySelector(".darken-button");

blackBtn.addEventListener("click", () => {
  setDrawingMode("black");
});
rainbowBtn.addEventListener("click", () => {
  setDrawingMode("rainbow");
});
darkenBtn.addEventListener("click", () => {
  setDrawingMode("darken");
});

createPixels(16, container);
setDrawingMode(drawingMode);
