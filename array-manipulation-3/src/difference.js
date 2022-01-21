/* exported difference */
function difference(first, second) {
  const difference = [];

  for (const firstItem of first) {
    if (!second.includes(firstItem)) {
      difference.push(firstItem);
    }
  }

  for (const secondItem of second) {
    if (!first.includes(secondItem)) {
      difference.push(secondItem);
    }
  }

  return difference;

}
