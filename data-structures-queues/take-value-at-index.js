/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let i = 0;
  while (i !== index) {
    const first = queue.peek();
    queue.dequeue();
    queue.enqueue(first);
    i++;
  }
  return queue.dequeue();
}
