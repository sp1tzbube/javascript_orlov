'use strict';

const dogs = [];
 
for (let i = 0; i < 6; i++) {
  dogs.push(prompt('Teht. 3: Name of dog ' + (i + 1) + '/6:'));
}
 
dogs.sort((a, b) => b.localeCompare(a)); 
 
const dogList = document.createElement('ul');
for (const dog of dogs) {
  const li = document.createElement('li');
  li.innerText = dog;
  dogList.appendChild(li);
}
document.getElementById('teht3').appendChild(dogList);