'use strict';

/* The following five prompts asks user yes or no
questions about myself and alerts the user if they
are correct or not. */

// Prompt 1
var dogPerson = prompt('Am I a dog person?').toLowerCase();

if(dogPerson === 'yes' || dogPerson === 'y') {
  alert('You are correct!');
  // console.log('User answered correctly');
} else {
  alert('WRONG');
  // console.log('User answered incorrectly');
}

// Prompt 2
var wearGlasses = prompt('Do I wear glasses?').toLowerCase();
if(wearGlasses === 'yes' || wearGlasses === 'y') {
  alert('You are correct!');
  // console.log('User answered correctly');
} else {
  alert('WRONG');
  // console.log('User answered incorrectly');
}

// Prompt 3
var vegan = prompt('Am I vegan?').toLowerCase();
if(vegan === 'yes' || vegan === 'y') {
  alert('WRONG');
  // console.log('User answered incorrectly');
} else {
  alert('You are correct!');
  // console.log('User answered correctly');
}

// Prompt 4
var officeFan = prompt('Do you think that I am a fan of the office?').toLowerCase();
if(officeFan === 'yes' || officeFan === 'y') {
  alert('You are correct!');
  // console.log('User answered correctly');
} else {
  alert('WRONG');
  // console.log('User answered incorrectly');
}

// Prompt 5
var height = prompt('Am I above six feet tall?').toLowerCase();
if(height === 'yes' || height === 'y') {
  alert('WRONG');
  // console.log('User answered incorrectly');
} else {
  alert('You are correct!');
  // console.log('User answered correctly');
}

// Ask user about themselves
var userName = prompt('Now that you\'ve got to know me just a bit, it\'s time to tell me a little about yourself. What is your name?');

var homeTown = prompt('Well hello ' + userName + '! What city or town are you from?');

alert('I see, ' + homeTown + ' is a little bit of a drive from my hometown of Rockford, Illinois. Well anyways it was nice to meet you ' + userName + '. I hope you have a wonderful day and enjoy reading a little more about me on this webpage. Good day!');

