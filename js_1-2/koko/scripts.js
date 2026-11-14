'use strict';


// Apufunktio
function isLeapYear(year){
  return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
}

// tehtävä 1 

console.log("I'm printing to consol!");

// tehtävä 2

const name = prompt('What is your name?');
document.getElementById('teht2').innerText = 'Hello, ' + name + '!';

// tehtävä 3

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
  

// tehtävä 4 

const studentName = prompt('Sorting hat: what is your name?');
const houseNumber = Math.floor(Math.random() * 4) + 1;
let house;

if (houseNumber === 1){
  house = 'Gryffindor';
} else if (houseNumber === 2){
  house = 'Slytherin';
} else if (houseNumber === 3){
  house = 'Hufflepuff';
} else if (houseNumber === 4){
  house = 'Ravenclaw';
}

document.getElementById('teht4').innerText = studentName + ', you are ' + house;

// tehtävä 5 

const year = parseInt(prompt('Enter a year: '));

if (isLeapYear(year)){
  document.getElementById('teht5').innerHTML = year + ' is leap year';
} else{
  document.getElementById('teht5').innerHTML = year + ' is not a leap year';
}

// tehtävä 6

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


// tehtävä 7 

const diceCount = parseInt(prompt('How many dice do you want to roll?'));
let diceSum = 0;

for (let i = 0; i < diceCount; i++){
  const roll = Math.floor(Math.random()*6)+1;
  diceSum += roll;
}

console.log('Sum of the dice rolls: '+ diceSum);
document.getElementById('teht7').innerText =
    'You rolled ' + diceCount + ' dice. Sum of the results: ' + diceSum;


// tehtävä 8 

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