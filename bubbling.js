// 冒泡排序
//普通版
function bubblingSort(arr) {
  console.time("普通版冒泡排序耗时")
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len -1 -i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.timeEnd("普通版冒泡排序耗时")
  return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubblingSort(arr));

// 优化冒泡排序
function bubblingSort2(arr) {
  console.time("改进后冒泡排序耗时");
  var i = arr.length - 1;//初始时， 最后位置保持不变
  while( i > 0) {
    var pos = 0;//每趟开始时，无记录交换
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos = j;//记录交换的位置
        var tmp = arr[i];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
      i = pos;
    }
  }
  console.timeEnd("改进后冒泡排序耗时");
  return arr;
}

console.log(bubblingSort2(arr));