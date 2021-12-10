/* exported isVowel */

function isVowel(char) {
  var vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < char.length; i++) {
    if (vowel.includes(char[i])) { return true; }
  }
  return false;
}
