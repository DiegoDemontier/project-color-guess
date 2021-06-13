/* Cria numero aleatório */
let count = 0;

function newColor() {
  const number = Math.floor(Math.random() * 256);
  return number;
}
/* Adicione um texto com o código RGB a ser adivinhado */
function guessColor() {
  const color = document.querySelector('#rgb-color');
  const rgbColor = `rgb(${newColor()}, ${newColor()}, ${newColor()})`;
  color.innerHTML = rgbColor;
  return rgbColor;
}
guessColor();
/* Adicione a página opções de cores para serem adivinhadas */
function creatListBall() {
  const listBall = document.querySelector('#list-ball');
  for (let index = 0; index < 6; index += 1) {
    const newBall = document.createElement('li');
    newBall.style.backgroundColor = guessColor();
    newBall.className = 'ball';
    listBall.appendChild(newBall);
  }
  const ballColor = document.querySelectorAll('.ball')[5].style.backgroundColor;
  return ballColor;
}
creatListBall();
/* Embaralha as cores */
function mixColor() {
  const number = Math.floor(Math.random() * 6);
  const list = document.querySelectorAll('.ball');
  const listColor = list[number].style.backgroundColor;
  list[number].style.backgroundColor = list[5].style.backgroundColor;
  list[5].style.backgroundColor = listColor;
}
mixColor();
/* reseta cores e rgb */
function resetColor() {
  const listBall = document.querySelectorAll('.ball');
  for (let index = 0; index < listBall.length; index += 1) {
    listBall[index].style.backgroundColor = guessColor();
  }
  document.querySelector('#answer').innerText = 'Escolha uma cor';
  mixColor();
}

function resetGame() {
  const button = document.querySelector('#reset-game');
  button.addEventListener('click', () => {
    resetColor();
  });
}
resetGame();
/* verifica se a cor clicada é a mesma cor indicada no rgb, indica se acertou ou errou e o score */
function colorMatch() {
  document.addEventListener('click', (event) => {
    const text = document.querySelector('#answer');
    const textColor = document.querySelector('#rgb-color').innerText;
    const textScore = document.querySelector('#score');
    if (event.target.classList.contains('ball')) {
      const ballColor = event.target.style.backgroundColor;
      ballColor === textColor ? resetColor() : null;
      ballColor === textColor ? text.innerText = 'Acertou!' : text.innerText = 'Errou! Tente novamente!';
      ballColor === textColor ? count += 3 : count -= 1;
      count < 0 ? count = 0 : null;
      textScore.innerText = count;
    }
  }, false);
}
colorMatch();
