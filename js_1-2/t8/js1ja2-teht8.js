'use strict';

function isLeapYear(year){
  return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
}

const startYear = parseInt(prompt('Enter the start year: '));
const endYear = parseInt(prompt('Enter the end year: '));

const ul = document.createElement('ul');

for (let y = startYear; y <= endYear; y++){
  if (isLeapYear(y)){
    const li = document.createElement('li');
    li.innerText = y;
    ul.appendChild(li);
  }
}

document.getElementById('teht8').appendChild(ul);