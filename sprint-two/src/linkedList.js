var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    // if no nodes
    if (!list.head) {
      // head and tail = node
      list.head = node;
      list.tail = node;
      // otherwise
    } else {
      // add node to the tail
      list.tail.next = node;
      // and set tail to equal node
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    // move head to next node
  };

  list.contains = function(target) {
    // while loop starting at the head
    // if target equals current value
    // return true
    // otherwise
    // set current node to equal next node
    // if not found while loop will exit and return false
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
