class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.length = 0;
  }

  enqueue(value) {
    this.storage[this.head + this.length] = value;
    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      return;
    }
    const dequeued = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    this.length--;
    return dequeued;
  }

  peek() {
    return this.storage[this.head];
  }
}
