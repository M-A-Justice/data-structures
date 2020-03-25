var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    count = 0;
    for (var key in storage) {
      count++;
    }
    storage[count] = value;
  };

  someInstance.pop = function() {
    var removed = storage[count];
    delete storage[count];
    count--;
    return removed;
  };

  someInstance.size = function() {
    if (storage[0] === undefined) {
      return 0;
    } else {
      return count + 1;
    }
  };

  return someInstance;
};
