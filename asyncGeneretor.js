//手写实现async
function asyncGeneretor(generatorFun) {
  return function () {
    const gen = generatorFun.apply(this, arguments);
    return new Promise((resolve, reject) => {
      function step (key, arg) {
        let generatorResult;
        try {
          generatorResult = gen[key](arg);
        } catch(e) {
          reject(e);
        }
        const { value, done } = generatorResult;
        if (done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(v => step("next", v), err => step("throw", err));
        }
      }
      step("next");
    })
  }
}

function* testG() {
  // await 被编译成了yield
  const data = yield getData()
  console.log('data: ', data);
  const data2 = yield getData()
  console.log('data2: ', data2);
  return 'success'
}
asyncGeneretor(testG)().then(v => {
  console.log(11111, v);
});
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      var num = Math.ceil(Math.random() * 20);
      if(num <= 10) {
        resolve(num)
      } else {
        reject("数字大于10了执行失败")
      }
    }, 2000)
  })
}