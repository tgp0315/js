// 手写订阅发布模式eventEmitter

class EventEmitter {
  constructor() {
    // 事件对象，存放订阅的名字和事件 如：{ click: [ handler1, handler2 ]}
    this.events = {};
  }
  // 订阅事件的方法
  on(eventName, callback) {
    if (!this.events[eventName]) {
      // 一个名字可以订阅多个事件函数
      this.events[eventName] = [];
    }
    // 存在则push到指定数组的尾部保存
    this.events[eventName].push(callback);
  }
  // 触发事件的方法
  emit(eventName, ...rest) {
    // 遍历执行所有订阅的事件
    this.events[eventName] && this.events[eventName].forEach(f => f.apply(this, rest));
  }
  // 移除订阅
  remove(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(f => f != callback);
    }
  }
  // 只执行一次订阅的事件，然后移除
  once(eventName, callback) {
    const fn = () => {
      callback();
      this.remove(eventName, fn);
    }
    this.on(eventName, fn);
  }
}

const event = new EventEmitter();

const handle = (...pyload) => console.log(pyload);

event.on("click", handle);

event.emit("click", 100, 200, 300, 400);

event.remove("click", handle);

event.once("dbclick", function() {
  console.log("click");
})

event.emit("dbclick", 100);