const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let sum = 0;
let count = 0;

while (count < 2) {
  const num = Number(lines.shift());

  if (num < 0 || num > 10) {
    console.log("nota invalida");
  } else {
    sum += num;
    count++;
  }
}

console.log("media = " + (sum / 2).toFixed(2));