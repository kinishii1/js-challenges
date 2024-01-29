// const fibonacci = (n) => {
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];

//     result.push(a + b);
//   }

//   return result[n];
// }

const memoization = (fn) => { 
  const cache = {};

  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}


const slowFib = (n) => {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2); 
}

const fib = memoization(slowFib);

console.log(fib(5));