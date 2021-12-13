/* exported truncate */

// define a function with a name 'truncate' with two parameter 'length' 'string'
// cut a string down and add a ellipsis
// return string
function truncate(length, string) {
  return string.slice(0, length) + '...';
}

// define a function with a name 'truncate' with two parameter 'length' 'string'
// return the slice method of the string object and call it with two arguments '0' , 'length' and concatenate a ellipsis
