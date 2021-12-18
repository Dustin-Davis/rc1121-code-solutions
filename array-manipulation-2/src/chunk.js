/* exported chunk */

function chunk(array, size) {
  var chunkedArray = [];
  for (var i = 0; i < array.length; i++) {
    var last = chunkedArray[chunkedArray.length - 1];
    if (!last || last.length === size) {
      chunkedArray.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  return chunkedArray;
}
