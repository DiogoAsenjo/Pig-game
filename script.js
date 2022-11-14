'use strict';

//Selecting elements. Aqui temos duas formas de selecionar id's do doc. HTML.
const score0 = document.querySelector(`#score--0`);
const score1 = document.getElementById(`score--1`);
const diceEl = document.querySelector(`.dice`);
const currentScore0 = document.getElementById(`current--0`);
const currentScore1 = document.getElementById(`current--1`);

//Starting conditions.
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add(`hidden`);
currentScore0.textContent = 0;
currentScore1.textContent = 0;
