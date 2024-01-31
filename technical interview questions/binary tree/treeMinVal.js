const Node = require('./node');

// const treeMinVal = (root) => {
//   if (!root) return null;
//   const stack = [root];
//   let min = Infinity;

//   while (stack.length) {
//     const node = stack.pop();
//     if (node.value < min) min = node.value;
//     if (node.right) stack.push(node.right);
//     if (node.left) stack.push(node.left);
//   }

//   return min;
// }

const treeMinVal = (root) => {
  if (!root) return Infinity;
  const leftVal = treeMinVal(root.left);
  const rightVal = treeMinVal(root.right);
  return Math.min(root.value, leftVal, rightVal);
}

// time complexity: O(n)
// space complexity: O(n)