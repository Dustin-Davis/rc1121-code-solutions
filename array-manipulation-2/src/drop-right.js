/* exported dropRight */

function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    if (count < array.length) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
