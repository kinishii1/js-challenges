const Node = require('./node');

// const treeSum = (root) => {
//   if (!root) return 0;
//   const stack = [root];
//   let sum = 0;

//   while (stack.length) {
//     const node = stack.pop();
//     sum += node.value;
//     if (node.right) stack.push(node.right);
//     if (node.left) stack.push(node.left);
//   }

//   return sum;
// }

const treeSum = (root) => {
  if (!root) return 0;
  return root.value + treeSum(root.left) + treeSum(root.right);
}

// time complexity: O(n)
// space complexity: O(n)

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.left = new Node(6);
root.right.right = new Node(7);

  //     1
  //   /  \
  //   2   3
  // /    / \
  //4    6   7

console.log(treeSum(root)); // 23