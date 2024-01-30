const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank);
      const targetWays = suffixWays.map(way => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));

// m = target.length
// n = wordBank.length

// Brute Force
// time: O(n^m * m)
// space: O(m)

// Memoized
// time: O(n * m^2)
// space: O(m^2)