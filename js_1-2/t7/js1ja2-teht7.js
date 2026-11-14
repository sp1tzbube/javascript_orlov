'use strict';

const diceCount = parseInt(prompt('How many dice do you want to roll?'));
let diceSum = 0;

for (let i = 0; i < diceCount; i++){
  const roll = Math.floor(Math.random()*6)+1;
  diceSum += roll;
}

console.log('Sum of the dice rolls: '+ diceSum);
document.getElementById('teht7').innerText =
    'You rolled ' + diceCount + ' dice. Sum of the results: ' + diceSum;

