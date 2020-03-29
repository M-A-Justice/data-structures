var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var newestCount = 0;
  var oldestCount = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[newestCount] = value;
    newestCount++;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[oldestCount];
    delete storage[oldestCount];
    oldestCount++;
    return dequeued;
  };

  someInstance.size = function() {
    var size = newestCount - oldestCount;
    if (size < 0) {
      return 0;
    }
    return size;
  };

  return someInstance;
};
