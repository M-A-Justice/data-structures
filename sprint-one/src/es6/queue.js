class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, oldestCount, newestCount) {
    this.storage = {};
    this.newestCount = 0;
    this.oldestCount = 0;
  }

  enqueue(value) {
    this.storage[this.newestCount] = value;
    this.newestCount++;
  }
  dequeue() {
    var dequeued = this.storage[this.oldestCount];
    delete this.storage[this.oldestCount];
    this.oldestCount++;
    return dequeued;
  }
  size() {
    var size = this.newestCount - this.oldestCount;
    if (size < 0) {
      size = 0;
    }
    return size;
  }
}
