class Tree { 
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  insertChild(value) {
    const child = new Tree(value);
    this.children.push(child);
    return child;
  }

  removeChild(value) {
    this.children = this.children.filter(child => child.value !== value);
  }
}