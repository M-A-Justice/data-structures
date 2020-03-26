var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.dequeue = function() {
    var dequeued;
    for (var key in storage) {
      if (dequeued === undefined) {
        dequeued = storage[key];
        break;
      }
    }
    if (count !== 0) {
      count--;
    }
    delete storage[key];
    return dequeued;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
