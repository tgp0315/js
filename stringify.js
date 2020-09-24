// 手写实现json.stringify
function jsonStringify(obj) {
  let type = typeof obj;
  if (type !== "object" || type === null) {
    if (/string|undefined|function/.test(type)) {
      obj = '"' + obj + '"';
    }
    return String(obj);
  } else {
    let json = [];
    arr = (obj && obj.constructor === Array);
    for (let k in obj) {
      let v = obj[k];
      let type = typeof v;
      if (/string|undefined|function/.test(type)) {
        v = '"' + v + '"';
      } else if (type === "object") {
        v = jsonStringify(v);
      }
      json.push((arr ? "" : '"' + k + '":') + String(v));
    }
    return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
  }
}
console.log(typeof jsonStringify({x: 5}));
console.log(jsonStringify([1, "false", false]));
console.log(jsonStringify({b: undefined}));