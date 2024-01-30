// canConstruct tabulation

const canConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for(let i = 0; i <= target.length; i++) {
        if(table[i]) {
            for(let word of wordBank) {
                if(target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }

    return table[target.length];
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false

// m = target.length
// n = wordBank.length

// Time: O(m^2 * n)
// Space: O(m)