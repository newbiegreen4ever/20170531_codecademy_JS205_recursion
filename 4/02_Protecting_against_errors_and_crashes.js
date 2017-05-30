//https://www.codecademy.com/en/courses/javascript-lesson-205/4/2
// Set a limiting condition to prevent stack overflow.

function factorial (n) {
    if (n < 0) {
    //NB remember to think for n < 0! Prevent stack overflow by displaying error message.
        return console.log("must be a positive integer!")
    };
    
    if (n === 0) {
        return 1;
    };
     
    return n * factorial(n - 1);
    

}

console.log(factorial (5));
