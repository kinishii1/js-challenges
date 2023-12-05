const resposta = (n) => {
  let phrase = '';
  for (let i = 1; i <= n; i++) {
    phrase += ' Ho';
  }
  phrase += '!';
  return phrase
}

console.log(resposta(5));