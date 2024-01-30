// return the max product of 3 elements in an array 

const maxp3 = (A) => {
  A.sort((a, b) => a - b);
  
  const hi3 = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
  const lo2hi1 = A[0] * A[1] * A[A.length - 1];

  return Math.max(hi3, lo2hi1);
}

console.log(maxp3([-3, 1, 2, -2, 5, 6])); // 60
console.log(maxp3([-5, 5, -1, 4, 2])); // 100

// time: O(nlogn)
// space: O(1)