/* exported getKeys */

// define a function named 'getKeys' with one parameter 'object'
// assign a empty array to a variable named keys
// use a for..in loop
// push the object at value into the array values
// return keys
function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}

// define a function named 'getKeys' with one parameter 'object'
// assign a empty array to a variable named keys
// use a for..in loop with the variable set to key
// push the variable key into the array keys
// return keys
