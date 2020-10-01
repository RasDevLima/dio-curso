let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde | 1 - vermelho | 2 - amarelo | 3 - azul

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

// Cria a ordem aleatória das cores
let shuffleOrder = () => {
  order[order.length] = Math.floor(Math.random() * 4);
  clickedOrder = [];

  for(let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

// Ilumina a próxima cor
let lightColor = (element, number) => {
  number = number * 500;
    setTimeout(() => {
  element.classList.add('selected');
  }, number - 250);
    setTimeout(() => {
  element.classList.remove('selected');
  });
}

// Confere as cores clicadas são as mesmas geradas no jogo
let checkOrder = () => {
  for(let i in clickedOrder) {
    if(clickedOrder[i] !== order[i]) {
      gameOver();
      break;
    }
  }
  if(clickedOrder.length === order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
    nextLevel();
  }
}

// Função para o click do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);
}

// Retorna a cor
// 0 - verde | 1 - vermelho | 2 - amarelo | 3 - azul
let createColorElement = (color) => {
  if (color === 0) {
    return green;
  } else if (color === 1) {
    return red;
  } else if (color === 2) {
    return yellow;
  } else if (color === 3) {
    return blue;
  }
}

// Próximo nível do jogo
let nextLevel = () => {
  score++;
  shuffleOrder();
}

// Fim do jogo
let gameOver = () => {
  alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.`);
  order = [];
  clickedOrder = [];

  playGame();
}

// Início jogo
let playGame = () => {
  alert("Bem vindo ao GENESIS! Iniciando novo jogo!");
  score = 0;
  nextLevel();
}

// Evento de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();