/* exported take */

// define a function named 'take' with two parameters 'array, count'
// loop through the array and keep the count
// return array

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    if (count < array.length) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// define a function named 'take' with two parameters 'array, count'
// for the count of newarray
// if the count is less than the array.length push array into the new array
// return array
