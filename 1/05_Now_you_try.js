//https://www.codecademy.com/en/courses/javascript-lesson-205/1/5
function factorial(n) {
  
  if (n === 0) {
    return 1;
    }

  if (n < 0) {
    return console.log("undefined, only positive integer");
    }

  if (n => 1) {
    return n * factorial(n - 1)
    }
  
}

console.log("Buddy, ", 50, "! = ", factorial(50));

/*Now you try
Now that we've covered the bare essentials, try rebuilding the factorial() function we've been working on, but this time write it all from scratch. To help you along, here are five questions that you can use whenever using recursion in your code:

1. What is/are the base case(s)?
2. What is/are the recursive case(s)?
3. Have I included any other necessary termination condition(s)?
4. Do the statements in the function lead to the base case?
5. Does the recursion build on the base case until the desired result is returned by the function?*/
