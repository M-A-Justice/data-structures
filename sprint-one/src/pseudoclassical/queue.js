var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.oldestCount = 0;
  this.newestCount = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.newestCount] = value;
  this.newestCount++;
},
Queue.prototype.dequeue = function() {
  var dequeued = this.storage[this.oldestCount];
  delete this.storage[this.oldestCount];
  this.oldestCount++;
  return dequeued;
},
Queue.prototype.size = function() {
  var size = this.newestCount - this.oldestCount;
  if (size < 0) {
    size = 0;
  }
  return size;
};


