function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      var num = Math.ceil(Math.random() * 20);
      console.log(num); 
      if(num <= 10) {
        resolve(num)
      } else {
        reject("数字大于10了执行失败")
      }
    }, 2000)
  })
}

function promiseRetry(getData, times, delay) {
  return new Promise((resolve, reject) => {
    function attempt() {
      getData().then(resolve).catch(e => {
        console.log(`还有${times}次尝试`);
        if (times === 0) {
          reject(e);
        } else {
          times--;
          setTimeout(attempt(), delay);
        }
      })
    }
    attempt();
  })
}
promiseRetry(getData, 5, 200);