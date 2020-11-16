const { type } = require("os");

// 手写实现bind
function myBind(context) {
  if (typeof this !== "function") {
    return;
  }
  var self = this;
  var args = Array.prototype.slice(arguments, 1);
  var A = function() {};
  var B = function() {
    var _this = this instanceof self ?  this : context;
    return self.apply(_this, args.concat(Array.prototype.slice.call(arguments, 0)));
  }
  if (this.prototype) {
    A.prototype = this.prototype;
  }
  B.prototype = new A();
  return B;
}