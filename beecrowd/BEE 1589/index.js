const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const T = Number(lines.shift());

for (let i = 0; i < T; i++) {
  const [R1, R2] = lines.shift().split(" ").map(item => Number(item));

  console.log(R1 + R2);
}
