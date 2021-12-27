/* exported omit */

function omit(source, keys) {
  var obj = { ...source };
  for (var property of keys) {
    if (property in source) {
      delete obj[property];
    }
  }
  return obj;
}
