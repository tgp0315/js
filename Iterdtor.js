// 迭代器
// 迭代器就是在不暴露对象的内部标识的情况下，能够遍历整个元素

function Iterdtor(arr) {
  let data = [];
  if (!Array.isArray(arr)) {
    data = [arr];
  } else {
    data = arr;
  }
  let length = data.length;
  let index = 0;
  // 迭代器的核心next
  // 当调用next的时候会开始输出内部对象的下一项
  this.next = function() {
    let result = {};
    result.value = data[index];
    result.done = index >= length - 1;
    if (index !== length) {
      index += 1;
      return result;
    };
    return "data is all done";
  };
}
let arr = [1, 2, 3, 3, 4, 5];
// 生成一个迭代器对象
let iterdtor = new Iterdtor(arr);
iterdtor.next();
iterdtor.next();