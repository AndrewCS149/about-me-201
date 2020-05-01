'use strict';

/* The following five prompts asks user yes or no
questions about myself and alerts the user if they
are correct or not. */

// counter variable to keep track of how many
// questions were answered
var score = 0;

// 2d array of questions and answers
// value at idx 1 is the correct answer for the question
// value at idx 2 is the incorrect answer for the question
var yesNoQuestions = [
  ['Am I a dog person?', 'yes', 'no'],
  ['Do I wear glasses?', 'yes', 'no'],
  ['Am I vegan?', 'no', 'yes'],
  ['Do you think that I am a fan of the office?', 'yes', 'no'],
  ['Am I above six feet tall?', 'no', 'yes']
];

// Wrong answer responses that are given to the user when the
// incorrect answer is inputted
var wrongAnswers = [
  'Wrong! I like dogs more than most people.',
  'Nope! I have trouble reading the Chick-fil-A menu.',
  'Wrong! Nothing is better than a medium rare steak.',
  'How dare you. I\'m not superstitious, but I am a little stitious.',
  'Incorrect. I am 70 inches tall'
];

// a function to display all questions and responses using a for loop
// to iterate through the arrays
function yesNo() {

  for(var i = 0; i < yesNoQuestions.length; i++) {
    var userResponse = prompt(yesNoQuestions[i][0]).toLowerCase();

    if(userResponse === yesNoQuestions[i][1] ||
      userResponse === yesNoQuestions[i][1][0]) {
      alert('You are correct!');
      score++;
      // console.log('User answered correctly');
    } else if(userResponse === yesNoQuestions[i][2] ||
              userResponse === yesNoQuestions[i][2][0]) {
      alert(wrongAnswers[i]);
      // console.log('User answered incorrectly');
    }
  }
}

// Prompt 6
// Make user guess how many MCU films there are in total
function filmTotal(){
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
}

// Prompt 7
// Make user guess which MCU characters are my favorite.
// console.log('Ask user who my favorite MCU character is.');
function favoriteCharacter(){
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
}


// alert user how many questions they have answered correctly.
function showScore(){
  alert('Congratulations! You have answered ' + score + ' out of 7 questions correctly.');
}

// Ask user about themselves
function greet(){
  var userName = prompt('Now that you\'ve got to know me just a bit, it\'s time to tell me a little about yourself. What is your name?');

  var homeTown = prompt('Well hello ' + userName + '! What city or town are you from?');

  alert('I see, ' + homeTown + ' is a little bit of a drive from my hometown of Rockford, Illinois. Well anyways it was nice to meet you ' + userName + '. I hope you have a wonderful day and enjoy reading a little more about me on this webpage. Good day!');
}

yesNo();
showScore();
filmTotal();
favoriteCharacter();
greet();

