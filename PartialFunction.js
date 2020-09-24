//偏函数
var _ = {};

function partial(fn) {
  var args = [].slice.call(arguments, 1);
  return function () {
    var position = 0, len = args.length;
    for (let i = 0; i < len; i++) {
      args[i] = args[i] === _ ? arguments[position++] : args[i];
    }
    while(position < arguments.length) args.push(arguments[position++]);
    return fn.apply(this. args);
  }
}

var subtract = function(a, b) {
  return b - a;
}
var subForm = partial(subForm, _, 20);
subForm(5);