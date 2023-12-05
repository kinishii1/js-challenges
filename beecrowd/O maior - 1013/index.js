const [a, b, c] = lines.shift().split(' ').map(Number);
const maiorAB = (a, b) => {
    return (a + b + Math.abs(a - b)) / 2
}

const resposta = maiorAB(maiorAB(a, b), c);

console.log(`${resposta} eh o maior`);