/* exported numVowels */

function numVowels(string) {
  var vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var num = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowel.includes(string[i])) {
      num++;
    }
  }
  return num;
}
