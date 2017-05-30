//https://www.codecademy.com/en/courses/javascript-lesson-205/4/5

// Here is the empty array we will store results in
var multiples = [];

function multiplesOf(base, i) {
  // Base case
  if (i === 0) {
  // NB remember to stop the function when i hits 0 to prevent stack overflow!
    return;
  }
  
  if (multiples.length == i) {
	// Write the array multiples to the console
	return console.log(multiples);
  }
  // Recursive case
  else {
    multiples[i - 1] = base * i;
	// Add a recursive function call
	return multiplesOf(base, i - 1);
  }	
}

multiplesOf(3, 2);

//you can always display elements inside the array in the last line
console.log(multiples);
