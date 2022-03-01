/* exported takeSmaller */

function takeSmaller(queue) {
  const first = queue.peek();
  queue.dequeue();
  if (queue.peek() === undefined) {
    return first;
  }
  const second = queue.peek();
  if (first < second) {
    queue.dequeue();
    queue.enqueue(second);
    return first;
  } else if (first === second) {
    queue.dequeue();
    queue.enqueue(second);
    return first;
  } else if (first > second) {
    queue.dequeue();
    queue.enqueue(first);
    return second;
  }
}
