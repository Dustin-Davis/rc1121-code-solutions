/* exported pick */

function pick(source, keys) {
  var result = {};
  for (var property of keys) {
    if (property in source) {
      result[property] = source[property];
      if (result[property] === undefined) {
        delete result[property];
      }
    }
  }
  return result;
}
