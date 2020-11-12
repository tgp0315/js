// 观察者模式
class Obsever {
  constructor() {
    this.topics = {};
  }
  // 注册监听函数
  subscribe(topic, handler) {
    if (!this.topics.hasOwnProperty(topic)) {
      this.topics[topic] = [];
    }
    this.topics[topic].push(handler);
  }
  // 发布事件，触发观察者回调事件
  publish(topic, info) {
    if (this.topics.hasOwnProperty(topic)) {
      this.topics[topic].forEach(handler => handler(info));
    }
  }
  //移除主题的一个观察者回调
  remove(topic, handler) {
    if (!this.topics.hasOwnProperty(topic)) return;
    var handlerIndex = -1;
    this.topics[topic].forEach((item, index) => {
      if (item === handler) {
        handlerIndex = index;
      }
    });
    if (handlerIndex >= 0) {
      this.topics[topic].splice(handlerIndex, 1);
    }
  }
  removeAll(topic) {
    if (!this.topics.hasOwnProperty(topic)) {
      this.topics[topic] = [];
    }
  }
}