/* exported isPalindromic */

function isPalindromic(string) {

  var stringCombined = string.replaceAll(' ', '').toLowerCase();

  for (var i = 0; i < stringCombined.length / 2; i++) {
    if (stringCombined[i] !== stringCombined[stringCombined.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
