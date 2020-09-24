//手写实现new
function myNew(fn) {
  let newObj = {};
  if(fn.prototype) {
    newObj.__proto__ = fm.prototype;
  }
  let args = Array.prototype.slice.call(arguments, 1);
  let result = fn.apply(newObj, args);
  return typeof result === "object" && result !== null ? result : newObj; 
}