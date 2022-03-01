/* exported take2nd */

function take2nd(queue) {
  const first = queue.peek();
  queue.dequeue();
  if (queue.peek() === undefined) {
    return first;
  }
  const second = queue.peek();
  queue.enqueue(first);
  queue.dequeue();
  return second;
}
