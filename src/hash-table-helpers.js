// A special array class that can only store the number of items specified by the `limit` argument
class LimitedArray {
  constructor(limit) {
    this.nodeCount = 0;
    // You should not be directly accessing this array from your hash table methods
    // Use the getter and setter methods included in this class to manipulate data in this class
    this.head = null;
    this.tail = null;
    this.limit = limit;
  }

  addNode(key, value) {
    this.nodeCount++;
    const newNode = {
      key,
      value,
      next: null
    };

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  retrieveNode(key) {
    let currentNode = this.head;
    const nodeCheck = () => {
      if (currentNode.key === key) return currentNode.value;
      if (currentNode.next === null) return;
      currentNode = currentNode.next;
      return nodeCheck();
    };
    return nodeCheck();
  }


  checkLimit(index) {
    if (typeof index !== 'number') throw new Error('The supplied index needs to be a number');
    if (this.limit <= index) {
      throw new Error('The supplied index lies out of the array\'s bounds');
    }
  }

  each(cb) {
    for (let i = 0; i < this.storage.length; i++) {
      cb(this.storage[i], i);
    }
  }
  // Use this getter function to fetch elements from this class
  get(index) {
    this.checkLimit(index);
    return this.storage[index];
  }


  get length() {
    return this.storage.length;
  }
  // Use this setter function to add elements to this class
  set(index, value) {
    this.checkLimit(index);
    this.storage[index] = value;
  }
}
/* eslint-disable no-bitwise, operator-assignment */
// This is hash function you'll be using to hash keys
// There's some bit-shifting magic going on here, but essentially, all it is doing is performing the modulo operator
// on the given `str` arg (the key) modded by the limit of the limited array
// This simply ensures that the hash function always returns an index that is within the boundaries of the limited array
const getIndexBelowMax = (str, max) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash;
    hash = Math.abs(hash);
  }
  return hash % max;
};

module.exports = {
  LimitedArray,
  getIndexBelowMax,
};
