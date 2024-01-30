// allConstructs Tabulation

const allConstructs = (target, wordBank) => {
  const table = Array(target.length + 1).fill().map(() => []);
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (const word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombinations = table[i].map(subArray => [...subArray, word]);
        table[i + word.length].push(...newCombinations);
      }
    }
  }

  return table[target.length];
}

console.log(allConstructs('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] 
console.log(allConstructs('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // [ [ 'abc', 'def' ] ]

// m = target.length
// n = wordBank.length

// time complexity: O(n * m^2)
// space complexity: O(m^2)