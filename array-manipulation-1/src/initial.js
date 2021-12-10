/* exported initial */

function initial(array) {
  var initial = [];
  var last = 0;
  for (var i = 0; i < array.length - 1; i++) {
    initial[last] = array[i];
    last++;
  }
  return initial;
}
