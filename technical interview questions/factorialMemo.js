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

console.time('factorial 5');
console.log(factorial(5)); // 120
console.timeEnd('factorial 5');

console.time('factorial 6');
console.log(factorial(6)); // 720
console.timeEnd('factorial 6');

console.time('factorial 7');
console.log(factorial(7)); // 5040
console.timeEnd('factorial 7');

console.time('factorial 8');
console.log(factorial(8)); // 40320
console.timeEnd('factorial 8');