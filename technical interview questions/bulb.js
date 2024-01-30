const bulbs = [0, 1, 0, 1, 1];

const bulbSwitcher = (bulbs) => {
  let count = 0;
  let i = 0;

  while (i < bulbs.length) {
    if (bulbs[i] === 0) {
      count++;
      i += 3;
    } else {
      i++;
    }
  }

  return count;
}