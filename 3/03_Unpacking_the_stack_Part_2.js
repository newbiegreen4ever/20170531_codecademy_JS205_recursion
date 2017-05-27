//https://www.codecademy.com/en/courses/javascript-lesson-205/3/3
var stack = [];

function countDown(int) {
  stack.push(int);
  if (int === 1) {	
    return 1;
  }
    return countDown(int - 1);
}

function multiplyEach() {
  // Remove the last value of the stack by pop()
  // and assign it to the variable int
  int = stack.pop();
  x = stack.length;
  // Base case
  if (stack.length === 0) {
    return int;
  }
  // Recursive case
  else {
	stack[x - 1] = int * stack[x - 1];
	return multiplyEach(x - 1);
  }
}

// Call the function countDown(7)
countDown(7);
// And then print out the value returned by multiplyEach()
console.log(multiplyEach(7));
