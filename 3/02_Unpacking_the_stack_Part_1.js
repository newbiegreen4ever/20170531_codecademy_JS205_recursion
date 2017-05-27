//https://www.codecademy.com/en/courses/javascript-lesson-205/3/2
function factorial(n) {
    if (n === 1) {
		return 1;
	} else {
		return n * factorial(n-1);
	}
}

// 1. Create an empty array called "stack"
stack = [];

// 2. Define the function countDown(int) 
function countDown(int) {

    //On the first line of the function countDown, 
    //use the push() method to add the variable int to the stack. 
    //For a refresher on the push() method, see the exercise Give it a push.
    stack.push(int);
    
    //Define your base case for countDown(). 
    //In this case, it will be when int is equal to 1. It should return the value 1.
    if (int === 1) {
        return 1;
    }
    
    //Define the recursive case for countDown(). Make sure to pass it the correct argument!
    else {
        countDown(int-1)
    }

}
// 3. Call countDown() on an integer

countDown(5);

// And now let's have a look at that stack:
console.log(stack);
