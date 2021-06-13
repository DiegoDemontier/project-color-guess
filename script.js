/* Cria numero aleatório */
function newColor() {
  const number = Math.floor(Math.random() * 256);
  return number;
}
/* Adicione um texto com o código RGB a ser adivinhado */
function guessColor() {
  let color = document.querySelector('#rgb-color');
  const rgbColor = `rgb(${newColor()}, ${newColor()}, ${newColor()})`;
  color.innerHTML = rgbColor;
  return rgbColor; 
}
guessColor();
/* Adicione a página opções de cores para serem adivinhadas */
function creatListBall() {
  const listBall = document.querySelector('#list-ball');
  for(let index = 0; index < 6; index += 1) {
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

function colorMatch() {
  const text = document.querySelector('#answer');
  const textColor = document.querySelector('#rgb-color').innerText;
  document.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
      const ballColor = event.target.style.backgroundColor;
      ballColor === textColor ? text.innerText = 'Acertou!': text.innerText = 'Errou! Tente novamente!';
      console.log(text)
    }
  },false)
}
colorMatch();