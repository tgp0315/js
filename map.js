function Map () {
  let times = {};
  this.size = 0;
  // 操作方法
  // has方法
  this.has = function (val) {
    return items.hasOwnproperty(val);
  };
  // set (key, val) 方法
  this.set = function (key, val) {
    if (this.has[key]) {
      this.items[key] = val;
    } else {
      this.items[key] = val;
      this.size++;
    }
  };
  // get
  this.get = function (key) {
    return this.items[key] ? this.items[key] : undefined;
  };
  //delete
  this.delete = function (key) {
    if (this.has[key]) {
      delete this.items[key];
      this.size--
      return true;
    }
    return false;
  };
  // clear
  this.clear = function () {
    this.items = {};
    this.size = 0;
  };
  // 遍历方法
  // keys
  this.keys = function () {
    return Object.keys(this.items);
  };
  // values
  this.values = function () {
    return Object.values(this.items);
  };
  // foreach
  this.forEach = function(fn, context) {
    for (let i = 0; i < this.size; i++) {
      let key = Object.keys(items)[i];
      let value = Object.values(items)[i];
      fn.call(context, value, key, items);
    }
  }
}

module.exports = Map;