//https://www.codecademy.com/en/courses/javascript-lesson-205/3/5

// capitals array contains 5 nested arrays
var capitals = [ ["berlin", "parIs", "MaDRiD"], 
                 ["monTEvideo", "BrASiLia"],
                 ["dElhi", "toKYo", "BeiJing"],
                 ["CanBerra"],
                 ["kiGaLi", "pretoRIA"] ];

// Capitalize function
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Our recursive function
function fixLetterCase(array, x, y) {
  if (y === capitals.length) {
    return;
  }
  else if (x === capitals[y].length) {
    return fixLetterCase(array, 0, y + 1);
  }
  else {
    capitals[y][x] = capitalize(capitals[y][x]);
    return fixLetterCase(array, x + 1, y);
  }	
}

fixLetterCase(capitals, 0, 0);

console.log(capitals);
