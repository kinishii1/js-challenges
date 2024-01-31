const Node = require('./node');

// const treeIncludes = (root, target) => {
//   if (!root) return false;
//   const queue = [root];

//   while (queue.length) {
//     const node = queue.shift();
//     if (node.value === target) return true;
//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//   }

//   return false;
// }

const treeIncludes = (root, target) => {
  if (!root) return false;
  if (root.value === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
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

console.log(treeIncludes(root, 5)); // false
console.log(treeIncludes(root, 6)); // true
console.log(treeIncludes(root, 7)); // true
