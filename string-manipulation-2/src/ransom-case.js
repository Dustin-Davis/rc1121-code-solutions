/* exported ransomCase */

// define a function named'ransomCase' with one parameter 'string'
// for every charter in the string
// if the index is even have it lowercase if it is odd have it uppercase
// return your variable

function ransomCase(string) {
  var a = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      a += string[i].toLowerCase();
    } else {
      a += string[i].toUpperCase();
    }
  }
  return a;
}

// define a function named'ransomCase' with one parameter 'string'
// have a empty string assign to a variable
// for every charter in the string
// if the index is = i % 2 === 0 have it lowercase if it is odd uppercase
// return your variable
