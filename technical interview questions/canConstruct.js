const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === '') return true

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      if (canConstruct(suffix, wordBank, memo)) {
        memo[target] = true
        return true
      }
    }
  }

  memo[target] = false
  return false
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true

// m = target.length
// n = wordBank.length

// Brute Force
// time: O(n^m * m)
// space: O(m^2)

// Memoized
// time: O(n * m^2)
// space: O(m^2)