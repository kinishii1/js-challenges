// Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # character.  Make sure the step has spaces on the right hand side!

// steps(2);
//    '# '
//    '##'

/*
 * padEnd() is a string method in JavaScript that pads the current string with a given string (second argument)
 * until the resulting string reaches the given length (first argument). The padding is applied from the end (right side) of the current string.
 * Syntax: str.padEnd(targetLength [, padString])
 * Example usage:
 * 'abc'.padEnd(10);         // 'abc       '
 * 'abc'.padEnd(10, "foo");  // 'abcfoofoof'
 * 'abc'.padEnd(4,"123456"); // 'abc123'
 * 'abc'.padEnd(1);          // 'abc'
*/

// function steps(n) {
//   let steps = '#'
//   for (let i = 1; i <= n; i++) {
//     console.log(steps.padEnd(n, ' '))
//     steps += '#'
//   }
//   return steps
// }

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = ''
//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         stair += '#'
//       } else {
//         stair += ' '
//       }
//     }
//     console.log(stair)
//   }
// }

function steps(n, row = 0, stair = '') {
  if (n === row) {
    return
  }

  if (n === stair.length) {
    console.log(stair)
    return steps(n, row + 1)
  }

  if (stair.length <= row) {
    stair += '#'
  } else {
    stair += ' '
  }

  steps(n, row, stair)
}

steps(4)