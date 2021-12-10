/* exported capitalize */
// define a function named 'capitalize' give it one parameter 'word'
// create a string and assign it to a variable named up
// make a for loop with initialization se to var i = 0 then have a condition set to run the lenght of a string and then have the final expression increment up
//
// return up

function capitalize(word) {
  var up = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    up += word[i].toLowerCase();
  }
  return up;
}

// define a function named 'capitalize' give it one parameter 'word'
// have a toUpperCase method of the word[0] and assign it to a variable named up
// make a for loop with initialization set to var i = 1 then have a condition set to run the lenght of the parameter and then have the final expression increment up
// use an expression to add variable up to the method toLowerCase of the word[i] object then assign new value back to up
// then return your varable up
