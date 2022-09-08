// import _ from 'lodash';
import './style.css';
import Logo from './assets/img/logo.png';
import displayDate from './modules/utils.js';
import Score from './modules/score.js';

//* *********Global Variables************//
let scoreList = [];
const addScoreBtn = document.querySelector('#add_score_btn');
const refreshBtn = document.querySelector('#refresh_btn');

function removeScore() {
  const scoreElement = this.parentNode.parentNode;
  scoreList = scoreList.filter((obj) => obj.id !== parseInt(scoreElement.getAttribute('value'), 10));
  scoreElement.remove();
  localStorage.setItem('Scores-List', JSON.stringify(scoreList));
}

function renderScore(obj) {
  const scoreElement = document.createElement('div');
  scoreElement.classList.add('score-item');
  scoreElement.setAttribute('value', obj.id);
  scoreElement.innerHTML = `
            <div class="score-info">
              <h3>${obj.name}: ${obj.score}</h3>
            </div>  
            <div class="remove-btn">
              <button id="remove_score_btn" class="normal-btn" type="button">Remove</button>
            </div>
        `;
  // Set the event listener for the remove button
  scoreElement.querySelector('#remove_score_btn').addEventListener('click', removeScore);
  document.querySelector('#scores_list').appendChild(scoreElement);
}

function addScore() {
  const name = document.querySelector('#name_field');
  const score = document.querySelector('#score_field');
  if (name.value === '' || score.value === '') {
    throw new Error('Please fill in all fields');
  } else {
    const scoreObj = new Score(scoreList.length, score.value, name.value);
    scoreList.push(scoreObj);
    renderScore(scoreObj);
    name.value = '';
    score.value = '';
  }
  localStorage.setItem('Scores-List', JSON.stringify(scoreList));
}

addScoreBtn.addEventListener('click', addScore);

function refreshScores() {
  const scoresListElement = document.querySelector('#scores_list');
  scoresListElement.innerHTML = '';
  scoreList.forEach((obj) => renderScore(obj));
}

refreshBtn.addEventListener('click', refreshScores);

window.onload = () => {
  // Setting Header & Footer logos
  document.querySelector('#header_logo').src = Logo;
  document.querySelector('#footer_logo').src = Logo;
  // Setting the date
  displayDate();
  // Getting the scores from local storage
  scoreList = JSON.parse(localStorage.getItem('Scores-List')) || [];
  refreshScores();
};