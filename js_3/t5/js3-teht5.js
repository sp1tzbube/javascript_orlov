'use strict';

const numbers5 = [];
 
while (true) {
  const input5 = Number(prompt('Teht. 5: Enter a number:'));
 
  if (numbers5.includes(input5)) {
    alert('The number ' + input5 + ' has already been given.');
    break;
  }
 
  numbers5.push(input5);
}
 
numbers5.sort((a, b) => a - b); 
 
console.log('Tehtävä 5 – numbers in ascending order:');
for (const n of numbers5) {
  console.log(n);
}