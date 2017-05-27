//https://www.codecademy.com/en/courses/javascript-lesson-205/3/4#
// Our array of messy words
var capitals = ["berlin", "parIs", "MaDRiD"];

// Capitalize function
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Our recursive function
function fixLetterCase(array, i) {    
  // Base case
  if (i === capitals.length) {
    return;
  } 
  // Action
  //Calling a function on the value in an array is just like calling a function on a variable or string. You would write it like so: function(array[int]), with int standing in for the index of the item in the array you want the function to be called on.
  capitals[i] = capitalize(capitals[i]);
  // Recursive case
  return fixLetterCase(array, i + 1);
}

// Here is our function call
fixLetterCase(capitals, 0);

console.log(capitals);
