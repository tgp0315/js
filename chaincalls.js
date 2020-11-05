// 链式调用
class CodingMan {
  constructor(name) {
    setTimeout(() => {
      console.log(`hi! This is ${name}`);
    }, 0)
  }
  sleep(time) {
    let curTime = new Date();
    let delay = time * 1000;
    setTimeout(() => {
      while (new Date() - curTime < delay) {};
      console.log(`Wake up after ${time}`);
    }, 0);
    return this;
  }
  sleepFirst(time) {
    let curTime = new Date();
    let delay = time * 1000;
    while (new Date() - curTime < delay) {};
    console.log(`Wake up after ${time}`);
    return this;
  }
  eat(food) {
    setTimeout(() => {
      console.log(`Eat ${food}~~`);
    }, 0);
    return this;
  }
};
let codingMan = new CodingMan("Peter");
codingMan.sleep(3).eat('dinner');
codingMan.eat('dinner').eat('supper');
codingMan.sleepFirst(5).eat('supper');