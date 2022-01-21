/* exported isAnagram */
function isAnagram(firstString, secondString) {

  var sortedFirstString = firstString.toLowerCase().split(' ').join('').split('').sort().join('');
  var sortedSecondString = secondString.toLowerCase().split(' ').join('').split('').sort().join('');

  if (sortedFirstString !== sortedSecondString) {
    return false;
  }
  return true;
}
