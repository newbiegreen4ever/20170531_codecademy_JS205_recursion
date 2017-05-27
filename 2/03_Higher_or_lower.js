//https://www.codecademy.com/en/courses/javascript-lesson-205/2/3
function guessNumber(number) {
  // Prompt the user for a number
  guess = prompt("Guess a number between 1 and 10");
	
  // Convert their guess to a number using +
  guess = +guess;


  
  // Define base case
  if (guess === number) {
	return console.log("You got it! The number was " + number);
	/*NB you should only use return at the end of calculation.*/
      }
      
      
  // Define recursive case with a function call
  else if (guess < number) {
      console.log("Your guess is too small, try again");
      guessNumber(number);
      }
      
  else if (guess > number) {
      console.log("Your guess is too big, try again");
      guessNumber(number);
      }
  
}

// Call the function guessNumber() with an integer for an argument
guessNumber(8);
