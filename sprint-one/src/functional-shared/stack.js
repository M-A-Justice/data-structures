var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.count = 0;
  // var extend = function(obj1, obj2) {
  //   for (var key in obj2) {
  //     obj1[key] = obj2[key];
  //   }
  // };
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    this.count--;
    if (this.count < 0) {
      this.count = 0;
    }
    var remove = this.storage[this.count];
    delete this.storage[this.count];
    return remove;
  },
  size: function() {
    return this.count;
  }
};



