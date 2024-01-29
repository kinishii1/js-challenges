// // coins 5, 10, 25

// const makeChange = (coins, amount) => {
//   coins.sort((a, b) => b - a)
//   let coinsTotal = 0;
//   let i = 0;

//   while (amount > 0) {
//     if (coins[i] <= amount) {
//       amount -= coins[i];
//       coinsTotal++;
//     } else {
//       i++;
//     }
//   }

//   return coinsTotal
// };

// console.log(makeChange([5, 10, 25], 50)) // 2
// console.log(makeChange([5, 10, 25], 100)) // 4

const coins = [10, 6, 1];

const makeChange = (value, i) => {
  if (value === 0) return 0;
  let minCoins;

  coins.forEach((coin, i) => {
    if (value - coin >= 0) {
      let currMinCoins = makeChange(value - coin, i);
      if (minCoins === undefined || currMinCoins < minCoins) {
        minCoins = currMinCoins;
      }
    }
  });

  return minCoins + 1;
}

console.log(makeChange(12, 0)) // 2