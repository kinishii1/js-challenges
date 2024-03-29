// LIFO - Last In First Out

export class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  getMin() {
    return Math.min(...this.stack);
  }

  getMax() {
    return Math.max(...this.stack);
  }

  sort() {
    return this.stack.sort((a, b) => a - b);
  }
}