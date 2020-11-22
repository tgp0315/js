// 归并算法
// 排序一个数组，我们先把数组从中间分成前后两部分
// 然后对前后两部分分别排序，再将排好序的两部分合并在一起，这样整个数组就都有序了。
// 归并排序采用的是分治思想。

// 分治，顾名思义，就是分而治之，将一个大问题分解成小的子问题来解决。小的子问题解决了，大问题也就解决了
let mergeSort = arr => {
  // 采用自上而下的递归方法
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  let middle = Math.floor(len / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);
  return mergeSort(mergeSort(left), mergeSort(right));
}
let merge = (left, right) => {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result; 
}