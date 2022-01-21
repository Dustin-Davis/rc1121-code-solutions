/* exported difference */
function difference(first, second) {
  const symmetricDiff = {};
  const res = [];
  for (const word of first) {
    if (word in symmetricDiff) {
      delete symmetricDiff[word];
    } else {
      symmetricDiff[word] = true;
    }
  }

  for (const word of second) {
    if (word in symmetricDiff) {
      delete symmetricDiff[word];
    } else {
      symmetricDiff[word] = true;
    }
  }

  for (const word of first) {
    if (word in symmetricDiff) {
      res.push(word);
    }
  }
  for (const word of second) {
    if (word in symmetricDiff) {
      res.push(word);
    }
  }
  return res;
}
