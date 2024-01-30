const camSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const remainder = targetSum - num; 
    if (camSum(remainder, numbers, memo) === true) { 
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
}

console.log(camSum(7, [2, 3])); // true

// time: O(n * m)
// space: O(m)
