// 手写实现flat
function arrayFlat(arr, dep) {
  dep = dep || 1;
  let newArr = JSON.parse(JSON.stringify(arr));
  function arrReduce() {
    return newArr.reduce((prev, cur) => 
      prev.concat(cur), [])
  }
  for (let i = 0; i < dep; i++) {
   let status =  newArr.some(v => {
      if (Array.isArray(v)) {
        return true
      }
      return false
    })
    if (status) {
      newArr = arrReduce();
    }
  }
  return newArr;
}
let arr = [1,2,[3,[5,6],4]];
console.log(arrayFlat(arr, 2));