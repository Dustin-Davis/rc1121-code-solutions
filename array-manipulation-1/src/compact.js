/* exported compact */

function compact(array) {
  var newArr = [];

  array.forEach(a => {

    if (a) {
      newArr.push(a);
    }
  });

  return newArr;
}
