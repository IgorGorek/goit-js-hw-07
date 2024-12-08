function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add('box');
    fragment.appendChild(box);
  }

  boxesContainer.innerHTML = '';
  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  document.getElementById('boxes').innerHTML = '';
}

document.querySelector('[data-create]').addEventListener('click', () => {
  const input = document.querySelector('input');
  const amount = parseInt(input.value, 10);
  
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; 
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
