// 手写实现promise
function promise(exector) {
  let self = this;
  // 这里加入一个状态标识
  this.status = "pending";
  this.value = undefined;
  this.reason = undefined;
  //存储then中成功的回调函数
  this.onResolvedCallbacks = [];
  // 存储then中失败的回调函数
  this.onRejectedCallback = [];
  // 成功执行
  function resolve(value) {
    // 判断是否处于pending状态
    if (self.status === "pending") {
      self.value = value;
      // 执行之后需要改变状态
      self.status = "resolve";
      // 成功之后遍历then中成功的所有回调函数
      self.onRejectedCallback.forEach(fn => fn());
    }
  }
  // 失败执行
  function reject(value) {
    if (self.status === "pending") {
      self.reason = value;
      self.status = "reject";
      self.onRejectedCallback.forEach(fn => fn());
    }
  }
  // 这里对异常进行处理
  try {
    exector(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

promise.prototype.then = function(onFulfilled, onRejected) {
  let self = this;
  if (this.status === "resolved") {
    onFulfilled(self.value);
  }
  if (this.status === "rejectd") {
    onRejected(self.reason);
  }
  // 如果异步执行则为pending状态
  if (this.status === "pending") {
    // 保存回调函数
    this.onRejectedCallback.push(() => {
      onFulfilled(self.value);
    })
    this.onResolvedCallbacks.push(() => {
      onRejected(self.reason);
    })
  }
}

// 这里我们可以再次实验

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
      if(Math.random() > 0.5) {
          resolve('成功');
      } else {
          reject('失败');
      }
  })
})

promise.then((data) => {
  console.log('success' + data);
}, (err) => {
  console.log('err' + err);
})