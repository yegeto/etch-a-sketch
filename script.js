const sketchScreen = document.querySelector('#sketchScreen');


function createBoxes(amount) {
  const boxWidth = sketchScreen.offsetWidth / amount;
  for (let index = 0; index < amount**2 ; index++) {
    const box = document.createElement('div');
    box.setAttribute('class', 'box');
    box.setAttribute('style', `width:${boxWidth}px;height:${boxWidth}px`);
    sketchScreen.appendChild(box);
  }
}







createBoxes(16);