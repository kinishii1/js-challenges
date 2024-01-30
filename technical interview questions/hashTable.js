class HashTable {

  constructor() {
    this.storage = [];
    this.storageLimit = 25;
  }

  insert(key, value) {
    const index = this._hash(key, this.storageLimit);

    if (!this.storage[index]){
      this.storage[index] = [];
    }

    this.storage[index].push([key, value]);
  }

  remove(key) {
    const index = this._hash(key, this.storageLimit);

    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
    }

    if (!this.storage[index]) {
      return undefined;
    }

    if (this.storage[index].length > 1) {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i];
        }
      }
    }
  }

  retrieve(key) {
    const index = this._hash(key, this.storageLimit);
    
    if (this.storage[index]) {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }

    return undefined;
  }

  _hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i) * 3;
    }
    return sum % n;
  }
}

const hashTable = new HashTable();
hashTable.insert('a', 'b');
hashTable.insert('c', 'd');
hashTable.insert('e', 'f');
hashTable.insert('g', 'h');

console.log(hashTable.retrieve('a'));
console.log(hashTable.retrieve('c'));

hashTable.remove('a');
hashTable.remove('c');

console.log(hashTable.retrieve('a'));
console.log(hashTable.retrieve('c'));