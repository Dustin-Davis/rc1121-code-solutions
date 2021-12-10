/* exported tail */

// define a function with the name of 'tail' with one parameter 'array'
// have a empty array assign to a variable named 'tail'
// use a for loop to look throgh the array and keep all object but the first one
// return the array tail

function tail(array) {
  var tail = [];
  var first = 0;
  for (var i = 1; i < array.length; i++) {
    tail[first] = array[i];
    first++;
  }
  return tail;
}

// define a function with the name of 'tail' with one parameter 'array'
// have a empty array assign to a variable named 'tail'
// have '0' be assigned to a variable named 'first'
// use a for loop with var i = 0 and a condition with i < the length of the array and have the final expression increment up
// have array at i be assign to the variable tail at first
// have the variable first increment up
// return tail
