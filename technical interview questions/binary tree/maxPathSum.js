// const maxPathSum = (root) => {
//   let max = -Infinity;

//   const dfs = (node) => {
//     if (!node) return 0;

//     const left = Math.max(0, dfs(node.left));
//     const right = Math.max(0, dfs(node.right));
//     max = Math.max(max, left + right + node.value);
//     return Math.max(left, right) + node.value;
//   }

//   return max;
// }

const maxPathSum = (root) => {
  if (!root) return -Infinity;
  if (root.left === null && root.right === null) return root.value;
  const maxPathRootSum = Math.max(maxPathSum(root.left), maxPathSum(root.right));

  return maxPathRootSum + root.value;
}

// const maxPathSum = (root) => {
//   let max = -Infinity;
//   let stack = [root];
//   let sum = 0;

//   while (stack.length) {
//     const node = stack.pop();
//     if (node.value > 0) sum += node.value;
//     if (node.right) stack.push(node.right);
//     if (node.left) stack.push(node.left);
//   }

//   return sum;
// }
