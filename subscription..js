// 简单的订阅发布者模式
// let corp = {};
// corp.list = [];
// corp.on = function (fn) {
//   // 直接把fn先存到列表中
//   this.list.push(fn);
// };
// corp.emit = function () {
//   this.list.forEach(cb => {
//     cb.apply(this, arguments);
//   })
// }

// // 测试用例
// corp.on(function (position, salary) {
//   console.log("你的职位是：" + position);
//   console.log("期望薪水：" + salary);
// });
// corp.on(function(skill, hobby) {
//   console.log("你的技能有：" + skill);
//   console.log("爱好：" + hobby);
// });
// corp.emit("前端", 10000);
// corp.emit("端茶和倒水", "足球")
// 你的职位是：前端
// 期望薪水：10000
// 你的技能有：前端
// 爱好：10000
// 你的职位是：端茶和倒水
// 期望薪水：足球
// 你的技能有：端茶和倒水
// 爱好：足球

// 优化
let corp = {};
// 缓存列表转换为对象
corp.list = {};
corp.on = function (key, fn) {
  // 如果对象中没有对应的key值
  // 也就是说明没有订阅过
  // 那就给key创建一个缓存列表
  if (!this.list[key]) {
    this.list[key] = [];
  }
  // 把函数 添加到对应key的缓存列表里
  this.list[key].push(fn);
};
corp.emit = function () {
  // 第一个参数是对应的key值
  // 直接用数组的shift方法取出
  let key = [].shift.call(arguments),
  fns = this.list[key];
  // 如果缓存列表里没有函数就返回false
  if (!fns || fns.length === 0) {
    return false;
  }
  fns.forEach(fn => {
    fn.apply(this, arguments);
  });
}
corp.remove  = function(key, fn) {
  let fns = this.list[key];
  // 如果缓存列表中没函数，返回false
  if (!fns) return false;
  if (!fn) {
    fns && (fns.length = 0);
  } else {
    fns.forEach((cb, i) => {
      if (cb === fn) {
        fns.splice(i, 1);
      }
    })
  }
}

// 测试用例
corp.on("join", (position, salary) => {
  console.log("你的职位是：" + position);
  console.log("期望薪水：" + salary);
});
corp.on("other", (skill, hobby) => {
  console.log("你的技能有：" + skill);
  console.log("爱好：" + hobby);
});
corp.emit("join", "前端", 10000);
corp.emit("join", "后端", 10000);
corp.emit("other", "端茶和倒水", "足球");