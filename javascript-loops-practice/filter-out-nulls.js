/* exported filterOutNulls */
function filterOutNulls(values) {
  for (var i = 0; i < values.length; i++) {
    var array = values.filter(values => values != null);
  }
  return array;
}
