// const pyramid = (n) => {

//   const midpoint = Math.floor((2 * n - 1) / 2)
  
//   for (let row = 0; row < n; row++) {

//     let level = ''
//     for (let col = 0; col < 2 * n - 1; col++) {

//       if (midpoint - row <= col && midpoint + row >= col) {
//         level += '#'
//       } else {
//         level += ' '
//       }
//     }
//     console.log(level)
//   }
// }

const pyramid = (n, row = 0, level = '') => {
  if (row === n) {
    return
  }

  if (level.length === 2 * n - 1) {
    console.log(level)
    return pyramid(n, row + 1)
  }

  const midpoint = Math.floor((2 * n - 1) / 2)
  let add
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#'
  } else {
    add = ' '
  }
  pyramid(n, row, level + add)
}