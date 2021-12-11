/* exported getValues */

// define a function named 'getValues' with one parameter 'object'
// assign a empty array to a variable named values
// use a for..in loop
// push the object at value into the array values
// return values

function getValues(object) {
  var values = [];
  for (var value in object) {
    values.push(object[value]);
  }
  return values;
}

// define a function named 'getValues' with one parameter 'object'
// assign a empty array to a variable named values
// use a for..in loop with the variable set to value
// push the object at value into the array values
// return values
