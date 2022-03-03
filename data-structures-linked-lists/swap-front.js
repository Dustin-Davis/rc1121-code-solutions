/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const first = list;
  const second = list.next;
  const theRest = list.next.next;
  list = second;
  list.next = first;
  list.next.next = theRest;
  return list;
}
