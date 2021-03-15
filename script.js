'use strict';

let gameanswer = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
//console.log(gameanswer);
//console.log(document.querySelector('.check'));

document.querySelector('.check').addEventListener('click', function () {
  // console.log("inside the function")
  let num = Number(document.querySelector('.guess').value);
  //console.log(num);
  if (num === gameanswer) {
    document.querySelector('.message').textContent =
      ' Huraay correct answer!!!';
    document.querySelector('.number').textContent = gameanswer;
    document.querySelector('body').style.backgroundColor = '#60b347';
    highScore = Math.max(score, highScore);
  document.querySelector('.highscore').textContent = highScore;
  } else {
    if (score > 0) {
        document.querySelector('.message').textContent = num<gameanswer ? "too low":"too high";
        score--;
        document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Please try again';
      score=20;
      document.querySelector('.score').textContent = score;
    }
  } 
});

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing the number';
  
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  gameanswer = Math.trunc(Math.random() * 20 + 1);
});
