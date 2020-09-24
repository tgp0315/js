// 柯里化函数
function currying(fn, args) {
  let length = fn.length;
  let args = args || [];
  let _ = this;
  return function() {
    var newArgs = args.concat(Array.prototype.slice.call(arguments));
    if(newArgs.length < length) {
      return currying.call(_, fn, newArgs);
    }
    return fn.apply(_, newArgs)
  }
}