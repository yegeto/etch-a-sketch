const container = document.querySelector(".container");

const createPixels = (amount, target) => {
  for (let index = 0; index < amount ** 2; index++) {
    const pixel = document.createElement("div");
    pixel.setAttribute("class", "pixel");
    target.appendChild(pixel);
  }
};

createPixels(16, container);

const pixels = document.querySelectorAll(".pixel");

pixels.forEach((pixel) => {
  pixel.addEventListener("mouseenter", () => {
    pixel.style.backgroundColor = "black";
  });
});
