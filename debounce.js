// 防抖
function debounce(fn, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!timeout) fn.apply(context, args);
    }
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) fn.apply(context, args);
  };
};

var aaa = debounce(function() {
  console.log(22222222);
}, 500);
window.addEventListener("resize", aaa);