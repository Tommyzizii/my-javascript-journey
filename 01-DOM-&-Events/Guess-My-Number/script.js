'use strict';

// console.log(document.querySelector('.message').textContent);

// // Making .message to "Correct Number"
// document.querySelector('.message').textContent = '🎉Correct Number!!!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = 30;
// console.log(document.querySelector('.score').textContent);

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

const displayScore = function(score){
  document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('Not a number!🤚🏻');

    // player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else if(guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too low!');
      score -= 1;
      displayScore(score);
    } else {
      document.querySelector('.score').textContent = 'You lost the gaeme! 💥';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
