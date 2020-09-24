//格式化时间
function dateFtt(fmt, date) {
  let ret;
  var o = {
    "Y+": date.getFullYear().toString(),
    "m+": date.getMonth().toString(),
    "d+": date.getDate().toString(),
    "H+": date.getHours().toString(),
    "M+": date.getMinutes().toString(),
    "S+": date.getSeconds().toString()
  };
  for (let k in o) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (o[k]) : (o[k].padStart(ret[1].length, "0")));
    }
  }
  return fmt;
}

let date = new Date();

console.log(dateFtt("YYYY-mm-dd HH:MM", date));