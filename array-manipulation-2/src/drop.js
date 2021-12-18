/* exported drop */

// define a function named 'drop' with two parameters 'array, count'
// have a empty array assign to a varaible newArray
// loop throght the arary
// return newArray

function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// define a function named 'drop' with two parameters 'array, count'
// have a empty array assign to a varaible newArray
// loop throght the arary
// return newArray
