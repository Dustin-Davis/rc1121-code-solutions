/* exported getLength */

function getLength(list) {
  let i = 1;
  while (list.next !== null) {
    list = list.next;
    i++;
  }
  return i;
}
