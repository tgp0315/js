// 用setTimeout实现setInterval
var executeTimes = 0;
var intervalTime = 500;
var intervalId = null;
var oriTime = new Date().getTime();
// 放开下面注释运行setInterval的demo
// intervalId = setInterval(intervalFun, intervalTime);
// 放开下面的注释运行setTimeout的Demo
setTimeout(timeOutFun,intervalTime);

function intervalFun() {
  executeTimes++;
  var nowExecuteTimes = executeTimes;
  var timediff = new Date().getTime() - oriTime;
  console.log("doIntervalFun--" +  nowExecuteTimes+ ",after" + timediff +  "ms");
  sleep(1000);
  console.log("doIntervalFun--" + nowExecuteTimes + "finish！");
  if (executeTimes === 5) {
    clearInterval(intervalId)
  }
}

function timeOutFun(){
  executeTimes++;
  var nowExecuteTimes = executeTimes;
  var timeDiff = new Date().getTime() - oriTime;
  console.log("doTimeOutFun——"+nowExecuteTimes+", after " + timeDiff + "ms");
  sleep(1000);
  console.log("doTimeOutFun——"+nowExecuteTimes+" finish !");
  if(executeTimes<5){
      setTimeout(arguments.callee,intervalTime);
  }
}

function sleep(sleepTime) {
  var start = new Date().getTime();
  while (true) {
    if (new Date().getTime() - start > sleepTime) {
      break;
    }
  }
}