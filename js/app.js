'use strict';

/* The following five prompts asks user yes or no
questions about myself and alerts the user if they
are correct or not. */

// counter variable to keep track of how many
// questions were answered
var score = 0;

// Prompt 1
// console.log('Ask user if I am a dog person.');
var dogPerson = prompt('Am I a dog person?').toLowerCase();

if(dogPerson === 'yes' || dogPerson === 'y') {
  // console.log('User answered correctly');
  alert('You are correct!');
  score++;
} else {
  alert('WRONG');
  // console.log('User answered incorrectly');
}

// Prompt 2
// console.log('Ask user if I wear glasses.');
var wearGlasses = prompt('Do I wear glasses?').toLowerCase();
if(wearGlasses === 'yes' || wearGlasses === 'y') {
  // console.log('User answered correctly');
  alert('You are correct!');
  score++;
} else {
  // console.log('User answered incorrectly');
  alert('WRONG');
}

// // Prompt 3
// console.log('Ask user if I am vegan.');
var vegan = prompt('Am I vegan?').toLowerCase();
if(vegan === 'yes' || vegan === 'y') {
  // console.log('User answered incorrectly');
  alert('WRONG');
} else {
  // console.log('User answered correctly');
  alert('You are correct!');
  score++;
}

// // Prompt 4
// console.log('Ask user if I am a fan of the office.');
var officeFan = prompt('Do you think that I am a fan of the office?').toLowerCase();
if(officeFan === 'yes' || officeFan === 'y') {
  // console.log('User answered correctly');
  alert('You are correct!');
  score++;
} else {
  alert('WRONG');
  // console.log('User answered incorrectly');
}

// Prompt 5
// console.log('Ask user if I am above 6 feet tall.');
var height = prompt('Am I above six feet tall?').toLowerCase();
if(height === 'yes' || height === 'y') {
  alert('WRONG');
  // console.log('User answered incorrectly');
} else {
  // console.log('User answered correctly');
  alert('You are correct!');
  score++;
}

// Prompt 6
// Make user guess how many MCU films there are in total
var number = Math.floor(Math.random() * 100);
var numGuess = prompt('Can you guess the secret number between 1 and 100?');
var i = 0;
// console.log('Ask user how many MCU films there are.');

while(i < 4) {
  i++;

  if(numGuess == number) {
    // console.log('User answered correctly');
    alert('You are correct!');
    score++;
    break;
  }

  if(i === 4) {
    // console.log('User answered incorrectly');
    alert('You lost... The correct answer is ' + number);
    break;
  }

  if(numGuess < number) {
    numGuess = prompt('Too low. Try Again: ');
  } else {
    numGuess = prompt('Too high. Try Again: ');
  }
}


// Prompt 7
// Make user guess which MCU characters are my favorite.
// console.log('Ask user who my favorite MCU character is.');
var favCharacter = ['iron man', 'thor', 'captain america', 'loki'];
var answer;
var characterCount = 0;

while(!answer) {

  var characterGuess = prompt('Who is one of my favorite MCU characters? ').toLowerCase();

  if(characterGuess === favCharacter[0] ||
      characterGuess === favCharacter[1] ||
      characterGuess === favCharacter[2] ||
      characterGuess === favCharacter[3]) {
    // console.log('User answered correctly');
    alert('You are correct!');
    score++;
    answer = true;
  } else {
    alert('WRONG');
    characterCount++;
  }

  if(characterCount === 6) {
    // console.log('User answered incorrectly');
    alert('Unfortunately, you have lost. My favorite characters are Iron man, Thor, Captain America and Loki.');
    break;
  }
}

// alert user how many questions they have answered correctly.
alert('Congratulations! You have answered ' + score + ' out of 7 questions correctly.');



// Ask user about themselves
var userName = prompt('Now that you\'ve got to know me just a bit, it\'s time to tell me a little about yourself. What is your name?');

var homeTown = prompt('Well hello ' + userName + '! What city or town are you from?');

alert('I see, ' + homeTown + ' is a little bit of a drive from my hometown of Rockford, Illinois. Well anyways it was nice to meet you ' + userName + '. I hope you have a wonderful day and enjoy reading a little more about me on this webpage. Good day!');

