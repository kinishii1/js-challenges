const Node = require('./node');

const breadthFirstValues = (root) => {
  if (!root) return [];
  const queue = [root];
  const values = [];

  while (queue.length) {
    const node = queue.shift();
    values.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
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

  console.log(breadthFirstValues(root)); // [ 1, 2, 3, 4, 6, 7, 5 ]