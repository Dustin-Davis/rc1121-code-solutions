/* exported invert */

function invert(source) {
  var inverted = {};
  var valuesArray = Object.values(source);
  var keysArray = Object.keys(source);

  for (var i = 0; i < keysArray.length; i++) {
    inverted[valuesArray[i]] = keysArray[i];
  }
  return inverted;
}
