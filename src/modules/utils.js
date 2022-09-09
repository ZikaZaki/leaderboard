import { DateTime } from './luxon.js';
import Score from './score.js';
import ScoreList from './scorelist.js';

// **********GLOBAL VARIABLES**********//
const scoreList = new ScoreList();

// **********Date Display Function**********//
const displayDate = () => {
  const mainDate = document.getElementById('main_date');
  mainDate.innerText = DateTime.local().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

// **********Scores API-Fetch Function**********//
const fetchScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GVdkzz5NAIgs0GI1WwJw/scores/');
  const json = await response.json();
  // json.result => a list of scores
  return json.result;
};

// **********Score Render Function**********//
const renderScore = async (obj) => {
  const scoreElement = document.createElement('div');
  scoreElement.classList.add('score-item');
  scoreElement.innerHTML = `
            <div class="score-info">
              <h3>${obj.user}: ${obj.score}</h3>
            </div>  
        `;
  document.querySelector('#scores_list').appendChild(scoreElement);
};

// **********Scores Refresh Function**********//
const refreshScores = async () => {
  scoreList.list = await fetchScores();
  const scoresListElement = document.querySelector('#scores_list');
  scoresListElement.innerHTML = '';
  scoreList.list.forEach((obj) => renderScore(obj));
};

// **********Score AddFunction**********//
const addScore = async () => {
  const user = document.querySelector('#name_field').value;
  const score = document.querySelector('#score_field').value;
  if (user === '' || score === '') {
    throw new Error('Please fill in all fields');
  } else {
    // Resetting the input fields
    document.querySelector('#name_field').value = '';
    document.querySelector('#score_field').value = '';
    // Creating a new score object & adding it to the list of scores
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GVdkzz5NAIgs0GI1WwJw/scores/', {
      method: 'POST',
      body: JSON.stringify(new Score(user, score)),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    // Refreshing scores list in the DOM
    refreshScores();
    const message = await response.json();
    return message;
  }
};

export {
  displayDate, addScore, refreshScores,
};