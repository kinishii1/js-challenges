const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let shortestCombination = null

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderCombination = bestSum(remainder, numbers, memo)
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num]
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination
      }
    }
  }

  memo[targetSum] = shortestCombination
  return shortestCombination
}

console.log(bestSum(7, [5, 3, 4, 7])) // [7]

// m = targetSum
// n = numbers.length

// Brute Force
// time: O(n^m * m)
// space: O(m^2)

// Memoized
// time: O(n * m^2)
// space: O(m^2)