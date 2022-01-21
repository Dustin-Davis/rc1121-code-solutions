/* exported unique */
function unique(array) {
  const repeats = {};
  const uniqueArr = [];
  for (const word of array) {
    if (word in repeats) {
      continue;
    }
    repeats[word] = true;
    uniqueArr.push(word);
  }
  return uniqueArr;
}
