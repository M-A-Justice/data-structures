var BinarySearchTree = function(value) {
  var instance = Object.create(BinarySearchTree.prototype);
  instance.value = value;
  instance.left = null;
  instance.right = null;
  return instance;
};

BinarySearchTree.prototype.left = function() {
  return this.left;
};
BinarySearchTree.prototype.right = function() {
  return this.right;
};
BinarySearchTree.prototype.insert = function(value) {
  if (this.value > value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  if (this.value < value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};
BinarySearchTree.prototype.contains = function(target) {
  // returns boolean
  var flag = false;
  var recursion = function(tree) {
    // if we hit value flag equals true
    if (tree.value === target) {
      flag = true;
      // if left is not null and is greater than target
    } else if (tree.left !== null && tree.value > target) {
      // recurse left
      recursion(tree.left);
      // otherwise if right is not null and is less than target
    } else if (tree.right !== null && tree.value < target) {
      // recurse right
      recursion(tree.right);
    }
  };
  recursion(this);
  return flag;
};
BinarySearchTree.prototype.depthFirstLog = function(func) {
  // executes callback on every value in the tree
  // recursive function
  var recursion = function(tree) {
    // apply callback to value
    func.call(tree, tree.value);
    // check if left or right are not viable
    if (tree.left !== null) {
      recursion(tree.left);
    }
    if (tree.right !== null) {
      recursion(tree.right);
    }
  };
  recursion(this);
};
/*
 * Complexity: What is the time complexity of the above functions? Left/Right: O(1) Contains/Insert/Depth: O(log n)
 */
