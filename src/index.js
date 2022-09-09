// import _ from 'lodash';
import './style.css';
import Logo from './assets/img/logo.png';
import { displayDate, addScore, refreshScores } from './modules/utils.js';

//* *********Setting Add&Refresh Click Listeners************//
const addScoreBtn = document.querySelector('#add_score_btn');
addScoreBtn.addEventListener('click', addScore);
const refreshBtn = document.querySelector('#refresh_btn');
refreshBtn.addEventListener('click', refreshScores);

window.onload = () => {
  // Setting Header & Footer logos
  document.querySelector('#header_logo').src = Logo;
  document.querySelector('#footer_logo').src = Logo;
  // Setting the date
  displayDate();
  // Fetching scores from the api
  refreshScores();
};