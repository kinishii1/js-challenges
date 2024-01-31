const Node = require('./node');

// const depthFirstValues = (root) => {
//   const values = [];
//   const traverse = (node) => {
//     if (!node) return;
//     values.push(node.value);
//     traverse(node.left);
//     traverse(node.right);
//   };
//   traverse(root);
//   return values;
// }

// const depthFirstValues = (root) => {
//   if (!root) return [];
//   const leftValues = depthFirstValues(root.left);
//   const rightValues = depthFirstValues(root.right);

//   return [root.value, ...leftValues, ...rightValues];
// }

const depthFirstValues = (root) => {
  if (!root) return [];
  const stack = [root];
  const values = [];

  while (stack.length) {
    const node = stack.pop();
    values.push(node.value);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return values;
}

// time complexity: O(n)
// space complexity: O(n)

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.left.left.right = new Node(5);

  //     1
  //   /  \
  //   2   3
  // /    / \
  //4    6   7
  // \
  //  5


console.log(depthFirstValues(root)); // [ 1, 2, 4, 5, 3, 6, 7 ]