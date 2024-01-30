// howSum tabulation 

const howSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for(let i = 0; i <= targetSum; i++) {
        if(table[i] !== null) {
            for(let num of numbers) {
                table[i + num] = [...table[i], num];
            }
        }
    }

    return table[targetSum];
}

console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]

// m = targetSum
// n = numbers.length

// Time: O(m^2 * n)
// Space: O(m^2)