// 手写实现apply
function myApply(context, args) {
  let context = context || window;
  let args = args || [];
  context.fn = this;
  let result = context.fn(...args);
  delete context.fn;
  return result;
}