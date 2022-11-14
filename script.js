'use strict';

//Selecting elements. Aqui temos duas formas de selecionar id's do doc. HTML.
const player1 = document.querySelector(`.player--0`);
const player2 = document.querySelector(`.player--1`);
const score0 = document.querySelector(`#score--0`);
const score1 = document.getElementById(`score--1`);
const diceEl = document.querySelector(`.dice`);
const currentScore0 = document.getElementById(`current--0`);
const currentScore1 = document.getElementById(`current--1`);
const rollDice = document.querySelector(`.btn--roll`);
const newGame = document.querySelector(`.btn--new`);
const hold = document.querySelector(`.btn--hold`);

let scores, currentScore, activePlayer, playing;

function initialConditions() {
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  player1.classList.remove(`player--winner`);
  player2.classList.remove(`player--winner`);
  player1.classList.add(`player--active`);
  player2.classList.remove(`player--active`);
  diceEl.classList.add(`hidden`);
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
}

initialConditions();

function switchingPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle(`player--active`);
  player2.classList.toggle(`player--active`);
}

//Rolling the dice.
rollDice.addEventListener(`click`, function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${dice}.png`; //Aqui estamos manipulando o  arquivo de imagem que aparecerá na tela do jogo de acordo com o número tirado no dado.
    console.log(dice);
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchingPlayer();
    }
  }
});

//Holding the score.
hold.addEventListener(`click`, function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
      diceEl.classList.add(`hidden`);
    } else {
      switchingPlayer();
    }
  }
});

//New game button.
newGame.addEventListener(`click`, initialConditions);
