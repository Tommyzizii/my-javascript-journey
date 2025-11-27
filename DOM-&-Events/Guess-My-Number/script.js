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

let guess;
let score = 20;

const secretNumber = Math.trunc(Math.random() * 100);
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a number!🤚🏻';

    // player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 'You lost the gaeme! 💥';
    }

    //guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.score').textContent = 'You lost the gaeme! 💥';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  if (!guess) {
    document.querySelector('.message').textContent =
      'Write a number or use ⬆️/⬇️ to select a number';
  }
});
