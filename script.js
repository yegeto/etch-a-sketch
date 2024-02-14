
function createBoxes(amount) {
  const sketchScreen = document.querySelector('#sketchScreen');
  const boxWidth = sketchScreen.offsetWidth / amount;
  for (let index = 0; index < amount**2 ; index++) {
    const box = document.createElement('div');
    box.setAttribute('class', 'box');
    box.setAttribute('style', `width:${boxWidth}px;height:${boxWidth}px`);
    sketchScreen.appendChild(box);
  }
}

function paintBlack(nodeList) {
  nodeList.forEach(box => {
    box.addEventListener('mouseenter', () => {
      box.style.backgroundColor = 'rgb(0,0,0)';
    });
  });
}

createBoxes(16);

const boxesNodeList = document.querySelectorAll('.box');

paintBlack(boxesNodeList);