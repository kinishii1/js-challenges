const countContruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === '') return 1

  let totalCount = 0 

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      const numWaysForRest = countContruct(suffix, wordBank)
      totalCount += numWaysForRest
    }
  }

  memo[target] = totalCount
  return totalCount
}

console.log(countContruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2

// m = target.length
// n = wordBank.length

// Brute Force
// time: O(n^m * m)
// space: O(m^2)

// Memoized
// time: O(n * m^2)
// space: O(m^2)