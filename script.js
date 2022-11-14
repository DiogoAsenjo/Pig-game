'use strict';

//Selecting elements. Aqui temos duas formas de selecionar id's do doc. HTML.
let score0 = document.querySelector(`#score--0`);
const score1 = document.getElementById(`score--1`);
const diceEl = document.querySelector(`.dice`);
const currentScore0 = document.getElementById(`current--0`);
const currentScore1 = document.getElementById(`current--1`);
const rollDice = document.querySelector(`.btn--roll`);
const newGame = document.querySelector(`.btn--new`);
const hold = document.querySelector(`.btn--hold`);

//Starting conditions.
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add(`hidden`);
currentScore0.textContent = 0;
currentScore1.textContent = 0;
let currentScore = 0;

//Rolling the dice.
rollDice.addEventListener(`click`, function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove(`hidden`);
  diceEl.src = `dice-${dice}.png`; //Aqui estamos manipulando o  arquivo de imagem que aparecerá na tela do jogo de acordo com o número tirado no dado.
  console.log(dice);
  if (dice !== 1) {
    currentScore += dice;
    currentScore0.textContent = currentScore;
  } else {
    //Switch to the next player
  }
});
