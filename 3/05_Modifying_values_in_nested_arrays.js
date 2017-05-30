//https://www.codecademy.com/en/courses/javascript-lesson-205/3/5
//Note: 2017-05-30 wow it's challenging to a newbie!

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
  //x - which element in the nested array to start with, e.g. if you call x = 1, "berlin" ([0][0]) will not be covered by fixLetterCase().
  //y - which nested array to start with, e.g. if you call y = 3, ["berlin", "parIs", "MaDRiD"] ([0]), ["monTEvideo", "BrASiLia"] ([1]) and ["dElhi", "toKYo", "BeiJing"] ([2]) will not be covered by fixLetterCase() 
  
  if (y === capitals.length) {
    //if you start with the last nested array ["kiGaLi", "pretoRIA"] ([4]), you leave the fixLetterCase loop -> return once you finish capitalizing it.
    return;
  }
  else if (x === capitals[y].length) {
    //if you are at (finish capitalizing) the last element in the nested array, you should start with next nested array -> y + 1
    return fixLetterCase(capitals, 0, y + 1);
  }
  else {
    //capitalize the starting element in the starting array -> remember you feed the starting x & y at the beginning
    capitals[y][x] = capitalize(capitals[y][x]);
    //capitalize next element in the same array -> x + 1
    return fixLetterCase(capitals, x + 1, y);
  }	
}

fixLetterCase(capitals, 0, 0);

console.log(capitals);
