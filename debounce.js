// 防抖
function debounce(fn, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function() {
        timeout = null;
      }, wait);
      if (callNow) fn.apply(context, args);
    } else {
      timeout = setTimeout(function() {
        fn.apply(context, args);
      }, wait)
    }
  };
};

var aaa = debounce(function() {
  console.log(22222222);
}, 500);
window.addEventListener("resize", aaa);