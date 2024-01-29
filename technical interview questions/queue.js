// FIFO - first in first out

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  weave(sourceOne, sourceTwo) {
    const result = new Queue();

    while (sourceOne.peek() || sourceTwo.peek()) {
      if (sourceOne.peek()) {
        result.add(sourceOne.remove());
      }

      if (sourceTwo.peek()) {
        result.add(sourceTwo.remove());
      }
    }

    return result;
  }
}