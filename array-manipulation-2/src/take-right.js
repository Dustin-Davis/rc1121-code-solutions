/* exported takeRight */

// define a function named takeRight with two parameters (array,count)
// loop through the array and keep the count
// return the new array

function takeRight(array, count) {
  var newArray = [];
  var a = 1;
  var b = 2;
  for (var i = 0; i < count; i++) {
    if (count % 2 && count < 7) {
      newArray.push(array[array.length - a]);
      a++;
    } else if (count % 2 === 0) {
      newArray.push(array[array.length - b]);
      b--;
    } else {
      return newArray;
    }
  }
  return newArray;
}

// define a function named takeRight with two parameters (array,count)
// have a empty array be assign to a new variable newArray
// loop through the array and keep the count
// return the new array
