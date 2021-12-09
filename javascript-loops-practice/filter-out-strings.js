/* exported filterOutStrings */
function filterOutStrings(values) {
  for (var i = 0; i < values.length; i++) {
    var array = values.filter(values => values <= 98);
  }
  return array;
}
