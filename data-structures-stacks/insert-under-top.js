/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const original = stack.peek();
  stack.pop();
  stack.push(value);
  stack.push(original);
  return original;
}
