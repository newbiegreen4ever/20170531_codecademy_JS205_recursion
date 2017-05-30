//https://www.codecademy.com/en/courses/javascript-lesson-205/4/3

function guessNumber(number, clue) {
  // Prompt the user for a number using the string value of clue
  guess = prompt(clue);
  // Convert their guess to a number using +
  guess = +guess;
  
  while (guess !== number) {
    if (guess < number) {
      guess = prompt("Too low. Guess again.");
    }
    else if (guess > number) {
      guess = prompt("Too high. Guess again.");
    }
    guess = +guess;
  }

/*
A simple tree diagram for "while" loop

"while" -> "if"       --> prompt another input, see if it does not satisfy "while" condition, exit
        -> "else if"  --> prompt another input, see if it does not satisfy "while" condition, exit
        
*/
                            
                         
  
  console.log("You got it! The number was " + number);
}

guessNumber (8, "Pick a number between 1 and 10");
