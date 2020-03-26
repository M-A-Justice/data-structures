var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.newestCount = 0;
  instance.oldestCount = 0;
  var extend = function(obj1, obj2) {
    for (var key in obj2) {
      obj1[key] = obj2[key];
    }
  };
  extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.newestCount] = value;
    this.newestCount++;
  },
  dequeue: function() {
    var dequeued = this.storage[this.oldestCount];
    delete this.storage[this.oldestCount];
    this.oldestCount++;
    return dequeued;
  },
  size: function() {
    var size = this.newestCount - this.oldestCount;
    if (size < 0) {
      size = 0;
    }
    return size;
  }
};


