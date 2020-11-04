// 深拷贝
// 缺点：无法保持引用， 当数据的层次很深时，会栈溢出
function deepClone(obj) {
  if (typeof obj !== "object" && obj !== null) {
    throw new Error("不是对象类型");
  }
  let target = Array.isArray(obj) ? [] : {};
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (typeof obj[i] === "object") {
        target[i] = deepClone(obj[i]);
      } else {
        target[i] = obj[i];
      }
    }
  }
  return target;
}

// 防栈溢出函数

function cloneLoop(x) {
  let root = {};
  let loopList = [
    {
      parent: root,
      key: undefined,
      data: x
    }
  ];
  while(loopList.length) {
    // 深度优先
    const node = loopList.pop();
    const parent = node.parent;
    const key = node.key;
    const data = node.data;

    // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
    let res = parent;
    if (typeof key !== 'undefined') {
      res = parent[key] = {};
    }
    for(let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k],
          });
        } else {
          res[k] = data[k];
        }
      }
    }
  }
  return root;
}