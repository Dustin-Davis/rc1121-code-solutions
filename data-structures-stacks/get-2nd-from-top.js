/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const last = stack.pop();
  if (last === undefined) {
    return undefined;
  }
  const secondFromTop = stack.peek();
  stack.push(last);
  return secondFromTop;
}
