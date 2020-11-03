// memoization 是一种优化技术，
// 主要用于通过存储昂贵的函数调用的结果来加速计算机程序，并在再次发生相同的输入时返回缓存的结果。
// 普通阶乘
const factorial = n => {
  if (n === 1) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

// 使用memoization

const cache = [];
const factorial1 = n => {
  if (n === 1) {
    return 1
  } else if (cache[n - 1]) {
    return cache[n - 1];
  } else {
    let result = factorial1(n - 1) * n;
    cache[n - 1] = result;
    return result;
  }
}
// 使用闭包和memoization
const factorialMemo = () => {
  const cache = []
  const factorial = n => {
      if (n === 1) {
          return 1
      } else if (cache[n - 1]) {
          return cache[n - 1]
      } else {
          let result = factorial(n - 1) * n
          cache[n - 1] = result
          return result
      }
  }
  return factorial
};
const factorial = factorialMemo();