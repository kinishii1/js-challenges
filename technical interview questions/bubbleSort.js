const bubbleSort = (arr) => {
  
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      const curr = arr[i];
      const next = arr[i + 1];
      if (curr > next) {
        arr[i] = next;
        arr[i + 1] = curr;
        swapped = true;
      }
    }
  }
  return arr;
}