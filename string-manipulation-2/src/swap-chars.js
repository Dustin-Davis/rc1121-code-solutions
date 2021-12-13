/* exported swapChars */
// define a function named 'swapChars and with three parameters 'firstIndex,secondIndex, string'
// for every charter in the string
// if the index is = firstIndex swap for secondIndex
// return new string

function swapChars(firstIndex, secondIndex, string) {
  var newstring = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newstring += string[secondIndex];
    } else if (i === secondIndex) {
      newstring += string[firstIndex];
    } else { newstring += string[i]; }
  }
  return newstring;
}

// define a function named 'swapChars and with three parameters 'firstIndex,secondIndex, string'
// have a empty assign to a variable newstring
// for every charter in the string
// if the index is = firstIndex swap for secondIndex
// return new string
