const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    if (cache[args]) return cache[args];
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

const factorial = memoize((x) => {
  if (x === 0) return 1;
  return x * factorial(x - 1);
});

const slowFactorial = (x) => {
  if (x === 0) return 1;
  return x * slowFactorial(x - 1);
}

// factorial memo

console.time('factorial 20');
console.log(factorial(20)); 
console.timeEnd('factorial 20');

console.time('factorial 21');
console.log(factorial(21)); 
console.timeEnd('factorial 21');

console.time('factorial 22');
console.log(factorial(22)); 
console.timeEnd('factorial 22');

// slowFactorial

console.time('slowFactorial 20');
console.log(slowFactorial(20));
console.timeEnd('slowFactorial 20');

console.time('slowFactorial 21');
console.log(slowFactorial(21));
console.timeEnd('slowFactorial 21');

console.time('slowFactorial 22');
console.log(slowFactorial(22)); 
console.timeEnd('slowFactorial 22');
