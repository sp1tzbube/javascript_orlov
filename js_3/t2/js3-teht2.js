'use strict';

const participantCount = parseInt(prompt('Teht. 2: How many participants?'));
const participants = [];
 
for (let i = 0; i < participantCount; i++) {
  participants.push(prompt('Teht. 2: Name of participant ' + (i + 1) + ':'));
}
 
participants.sort((a, b) => a.localeCompare(b)); 
 
const ol = document.createElement('ol');
for (const participant of participants) {
  const li = document.createElement('li');
  li.innerText = participant;
  ol.appendChild(li);
}
document.getElementById('teht2').appendChild(ol);