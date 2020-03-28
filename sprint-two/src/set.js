var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  // check if hasOwnProperty
  if (this._storage.hasOwnProperty(item)) {
    // return true
    return true;
  }
  // return false
  return false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions? Add: O(1) Remove: O(1) Contains: O(n)
 */
