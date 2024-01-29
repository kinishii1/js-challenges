const isUnique = (arr) => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) return false;
    map[arr[i]] = true;
  }
  return map;
}

console.log(isUnique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // true