'use strict';

const teht6 = document.getElementById('teht6');

if (confirm('Should I calculate the square root?')){
  const number = parseFloat(prompt('Enter a number: '))

  if (number < 0){
    teht6.innerText = 'The square root of a negative number is not defined';
  } else {
    teht6.innerText = 'The square root of ' + number + ' is ' + Math.sqrt(number);
  } 
} else {
    teht6.innerText = 'The squre root is not calculated';
  }
