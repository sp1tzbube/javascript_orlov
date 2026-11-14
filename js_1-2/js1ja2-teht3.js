'use strict';

const num1 = parseInt(prompt('Enter the fisrt integer:'));
const num2 = parseInt(prompt('Enter the fisrt integer:'));
const num3 = parseInt(prompt('Enter the fisrt integer:'));

const sum = num1 + num2 + num3;
const product = num1 * num2 *num3; 
const average = sum/3;

document.getElementById('teht3').innerHTML = 
    'Sum: ' + sum  + '<br>' +
    'Product: ' + product + '<br>' +
    'Average: ' + average.toFixed(2);
  