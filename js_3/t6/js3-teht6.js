'use strict';

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
 
const rollList = document.createElement('ul');
let roll;
 
do {
  roll = rollDice();
  const li = document.createElement('li');
  li.innerText = roll;
  rollList.appendChild(li);
} while (roll !== 6);
 
document.getElementById('teht6').appendChild(rollList);