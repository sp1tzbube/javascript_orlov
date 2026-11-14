'use strict';

const numbers4 = [];
let input4 = Number(prompt('Teht. 4: Enter a number (0 to stop):'));
 
while (input4 !== 0) {
  numbers4.push(input4);
  input4 = Number(prompt('Teht. 4: Enter a number (0 to stop):'));
}
 
numbers4.sort((a, b) => b - a); 
 
console.log('Tehtävä 4 – numbers from largest to smallest:');
for (const n of numbers4) {
  console.log(n);
}