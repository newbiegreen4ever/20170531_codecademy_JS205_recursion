//https://www.codecademy.com/en/courses/javascript-lesson-205/4/1
// Write a function to get the factorial of a number.

function factorial (n) {
    if (n < 0) {
        return console.log("must be a positive integer!")
    };
    
    if (n === 0) {
        return 1;
    };
     
    return n * factorial(n - 1);
    //NB you DON't have to set the n-- negative increment in recursion. Negative increment is for "for loop". To return the function itself with n - 1 is sufficient continuing condition. For "for loop", since it the function remains unchanged, it is necessary to set n--.

}

console.log(factorial (5));
