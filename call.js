// 手写实现call
function myCall(context) {
  let context = context || window;
  let args = Array.prototype.slice.call(arguments, 1);
  context.fn = this;
  let result = context.fn(...args);
  delete context.fn;
  return result;
}