'use strict';

const numbers1 = [];
 
for (let i = 0; i < 5; i++) {
  numbers1.push(Number(prompt('Teht. 1: Enter number ' + (i + 1) + '/5:')));
}
 
console.log('Tehtävä 1 – numbers in reverse order:');
for (let i = numbers1.length - 1; i >= 0; i--) {
  console.log(numbers1[i]);
}