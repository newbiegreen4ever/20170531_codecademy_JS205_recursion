function growBeanstalk(years) {
  // Base case
  if (years <= 2) {
    return 1;
  }	
  // Recursive case
  return growBeanstalk(years - 1) + growBeanstalk(years - 2);	
}

// Set the height of the beanstalk using your function
//Any integer above 30 may take some time to evaluate, so be patient with your computer. It is working hard on this one.
var years = 20;
var height = growBeanstalk(years);

console.log("the beanstalk reaches a height of " + height + "m after " + years + " years.");
