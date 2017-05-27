//https://www.codecademy.com/en/courses/javascript-lesson-205/2/6
function growBeanstalk(years) {
  if (years <= 0) {
    return 0;
  }
  else if (years <= 2) {
    return 1;
  }
  return growBeanstalk(years - 1) + growBeanstalk(years - 2);
}

growBeanstalk(5);

/*

You may be wondering where the computer is storing the values returned by each function call in our recursion. That is a very good question, and it has an answer!

When you run a program, the data that is produced within that program (variables, function calls, etc.) are stored in the stack, which you can think of as a temporary storage device for the computer.

Every time a function is called within a program, the returned value of that function is stored in the stack.

We've only scratched the surface of control flow and the stack, but hopefully the visualizations have helped you to understand more or less what they are.
Instructions

The letters A= through I= in the visual guide represent values stored in the stack.

When you are done trying to think like a computer, press Run.*/





/*
// THE FOLLOWING IS NOT REAL JAVASCRIPT
// It is a visual guide to how values
// are stored in the stack.
1. growBeanstalk(5) {
    return growBeanstalk(4) + growBeanstalk(3);
2.   growBeanstalk(4) {
      return growBeanstalk(3) + growBeanstalk(2);
3.     growBeanstalk(3) {
        return growBeanstalk(2) + growBeanstalk(1);
4.       growBeanstalk(2) {
A=        return 1;
         };
5.       growBeanstalk(1) {
B=        return 1;
         };
C=      return 2; // (1 + 1)
       };
6.     growBeanstalk(2) {
D=      return 1;
       };
E=    return 3; // (2 + 1)
     };
7.   growBeanstalk(3) {
      return growBeanstalk(2) + growBeanstalk(1);
8.     growBeanstalk(2) {
F=      return 1;
       };
9.     growBeanstalk(1) {
G=      return 1;
       };
H=    return 2; // (1 + 1)
     };
I=  return 5; // (3 + 2)
   };
*/
