/* exported isLowerCased */

// define a  function with the name 'isLowerCased' with one parameter 'word
// use a for loop to run through the parameters length
// use a if statment to have the lowerCased word return true
// then return false

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word === word.toLowerCase()) { return true; }
  }
  return false;
}

// define a function named 'isLowerCased' with one parameter 'word'
// make a for loop with initialization set to var i = 0 then have a condition set to run the lenght of the parameter and then have the final expression increment up
// use a if statment and set its condition to have the parameter stricly equal to the .toLowerCase method of the object and have it return true
// then return false if the statment wasn't true
