'use strict';

// Prompt 1
var dogPerson = prompt('Am I a dog person?').toLowerCase();

if(dogPerson === 'yes' || dogPerson === 'y') {
  alert('You are correct!');
  console.log('User answered correctly');
} else {
  alert('WRONG');
  console.log('User answered incorrectly');
}

// Prompt 2
var wearGlasses = prompt('Do I wear glasses?').toLowerCase();
if(wearGlasses === 'yes' || wearGlasses === 'y') {
  alert('You are correct!');
  console.log('User answered correctly');
} else {
  alert('WRONG');
  console.log('User answered incorrectly');
}

// Prompt 3
var vegan = prompt('Am I vegan?').toLowerCase();
if(vegan === 'yes' || vegan === 'y') {
  alert('WRONG');
  console.log('User answered incorrectly');
} else {
  alert('You are correct!');
  console.log('User answered correctly');
}

// Prompt 4
var officeFan = prompt('Do you think that I am a fan of the office?').toLowerCase();
if(officeFan === 'yes' || officeFan === 'y') {
  alert('You are correct!');
  console.log('User answered correctly');
} else {
  alert('WRONG');
  console.log('User answered incorrectly');
}

// Prompt 5
var height = prompt('Am I above six feet tall?').toLowerCase();
if(height === 'yes' || height === 'y') {
  alert('WRONG');
  console.log('User answered incorrectly');
} else {
  alert('You are correct!');
  console.log('User answered correctly');
}
