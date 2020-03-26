var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.oldestCount = 0;
  instance.newestCount = 0;
  return instance;
};

var queueMethods = {
  enqueue(value) {
    this.storage[this.newestCount] = value;
    this.newestCount++;
  },
  dequeue() {
    var dequeued = this.storage[this.oldestCount];
    delete this.storage[this.oldestCount];
    this.oldestCount++;
    return dequeued;
  },
  size() {
    var size = this.newestCount - this.oldestCount;
    if (size < 0) {
      size = 0;
    }
    return size;
  }
};


