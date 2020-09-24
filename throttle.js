// 节流

const { time } = require("console");

// 普通
function throttle(fn) {
  var canRun = false;
  return function() {
    if (canRun) return;
    canRun = true;
    setTimeout(() => {
      fn.apply(this, arguments);
    }, 500)
  };
};
// 简单
function throttle1(fn, wait, mustRun) {
  var timeout, startTime = new Date();
  return function() {
    var context = this,
    args = arguments,
    curTime = new Date();
    clearTimeout(timeout);
    //  如果达到了规定的触发时间间隔，触发 handler
    if (curTime - startTime >= mustRun) {
      fn.apply(context, args);
      startTime = curTime;
    } else {
      timeout = setTimeout(fn, wait);
    }
  }
}
// 实际想绑定在 scroll 事件上的 handler
function realFunc(){
  console.log("Success");
}
// 采用了节流函数
window.addEventListener('scroll',throttle(realFunc,500,1000));