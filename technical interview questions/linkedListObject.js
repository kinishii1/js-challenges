class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
  }

  insert(value) {
    const node = { value, next: null };
    this.tail.next = node;
    this.tail = node;
  }

  removeTail() {
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;
  }

  removeHead() {
    this.head = this.head.next;
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode.value !== value) {
      currentNode = currentNode.next;
  }
    return currentNode.value === value;
  }

  isHead(node) {
    return this.head.node === node;
  }

  isTail(node) {
    return this.tail.node === node;
  }

  insertAfter(node, value) {
    const newNode = { value, next: node.next };
    node.next = newNode;
  }

  removeNext(node) {
    node.next = node.next.next;
  }
}

const list = new LinkedList(1);
list.insert(2);
list.insert(3);
list.insert(4);
console.log(JSON.stringify(list, null, 2));