/* exported isUpperCased */

// define a function named 'isUpperCased' with one parameter 'word'
// use a for loop to run through the parameters length
// use a if statment to have the uppercased word return true
// if they are not uppercased have them return false

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word === word.toUpperCase()) { return true; }
  }
  return false;
}

// define a function named 'isUpperCased' with one parameter 'word'
// make a for loop with initialization set to var i =  then have a condition set to run the lenght of the parameter and then have the final expression increment up
// use a if statment and set its condition to have the parameter stricly equal to the .toUpperCase method of the object and have it return true
// then return false if the statment wasn't true
