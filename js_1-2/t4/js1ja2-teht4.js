'use strict';

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