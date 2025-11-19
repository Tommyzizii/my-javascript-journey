'use strict';

console.log(document.querySelector('.message').textContent);

// Making .message to "Correct Number"
document.querySelector('.message').textContent = '🎉Correct Number!!!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.score').textContent = 30;
console.log(document.querySelector('.score').textContent);

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
