
const createBoxes = amount => {
  const sketchScreen = document.querySelector('#sketchScreen');
  const boxWidth = sketchScreen.offsetWidth / amount;
  for (let index = 0; index < amount**2 ; index++) {
    const box = document.createElement('div');
    box.setAttribute('class', 'box');
    box.setAttribute('style', `width:${boxWidth}px;height:${boxWidth}px;background-color:rgb(255, 255, 255)`);
    sketchScreen.appendChild(box);
  }
}

const paintBlack = () => {
  const boxesNodeList = document.querySelectorAll('.box');
  boxesNodeList.forEach(box => {
    box.addEventListener('mouseenter', () => {
      box.style.backgroundColor = 'rgb(0,0,0)';
    });
  });
}

const paintRainbow = () => {
  const boxesNodeList = document.querySelectorAll('.box');
  boxesNodeList.forEach(box => {
    box.addEventListener('mouseenter', () => {

      const randomRgbValue = () => Math.floor(Math.random() * 256);
      box.style.backgroundColor = `rgb(${randomRgbValue()}, ${randomRgbValue()}, ${randomRgbValue()})`;
    });
  });
}

const paintDarken = () => {
  const boxesNodeList = document.querySelectorAll('.box');
  boxesNodeList.forEach(box => {
  let value = 0;
    box.addEventListener('mouseenter', () => {
    if (value < 1) {
      value += 0.1;
      box.style.backgroundColor = `rgba(0, 0, 0, ${ value })`; };    
    });
  });
}

const clearScreen = () => {
  const sketchScreen = document.querySelector('#sketchScreen');
  while (sketchScreen.firstChild) {
    sketchScreen.removeChild(sketchScreen.firstChild);
  }
}

const gridSizeBtn = document.querySelector('#gridSizeBtn');
gridSizeBtn.addEventListener('click', () => {
  do {
    gridSize = prompt('Please insert grid size under 10s0');
  } while (gridSize > 99 || gridSize < 1);
  clearScreen();
  createBoxes(gridSize);
  currentMode();
});

const paintBlackBtn = document.querySelector('#blackBtn');
paintBlackBtn.addEventListener('click', () => {
  currentMode = paintBlack;
  currentMode();
});

const paintRainbowBtn = document.querySelector('#rainbowBtn');
paintRainbowBtn.addEventListener('click', () => {
  currentMode = paintRainbow;
  currentMode();
});

const paintDarkenBtn = document.querySelector('#darkenBtn');
paintDarkenBtn.addEventListener('click', () => {
  currentMode = paintDarken;
  currentMode();
});

const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => {
  clearScreen();
  createBoxes(gridSize);
  currentMode();
});

let gridSize = 6;
let currentMode = paintBlack;

document.addEventListener('DOMContentLoaded', createBoxes(gridSize));
document.addEventListener('DOMContentLoaded', currentMode);