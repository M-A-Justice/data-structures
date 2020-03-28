var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];// fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var flag = false;
  // some recursive function
  var recursive = function(node) {
    if (target === node.value) {
      flag = true;
      return flag;
    }
    // call some function on node
    node.children.forEach(function(element) {
      recursive(element);
    });
  };
  recursive(this);
  return flag;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
