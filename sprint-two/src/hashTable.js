

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];
  // if storage bucket does not contain tuple
  if (Array.isArray(this._storage[index])) {
    for (var i = 0; i < this._storage[index].length; i++) {
      var tuple = this._storage[index][i];
      if (tuple[0] === k) {
        tuple[1] = v;
      } else {
        this._storage[index].push([k, v]);
      }
    }
  } else {
    // add key/value tuple
    bucket.push([k, v]);
    // storage
    this._storage[index] = bucket;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  var result;
  bucket.forEach(function(tuple) {
    if (tuple === undefined) {
      return undefined;
    }
    if (tuple[0] === k) {
      result = tuple[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    this._storage[index][i] = undefined;
  }
};


/*
 * Complexity: What is the time complexity of the above functions? Best Case: O(1) Worst Case: O(n)
 */


