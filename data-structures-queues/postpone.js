/* exported postpone */

function postpone(queue) {
  const view = queue.peek();
  if (view === undefined) {
    return;
  }
  queue.dequeue();
  queue.enqueue(view);
}
