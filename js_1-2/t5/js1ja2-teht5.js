'use strict';

function isLeapYear(year){
  return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
}

const year = parseInt(prompt('Enter a year: '));

if (isLeapYear(year)){
  document.getElementById('teht5').innerHTML = year + ' is leap year';
} else{
  document.getElementById('teht5').innerHTML = year + ' is not a leap year';
}