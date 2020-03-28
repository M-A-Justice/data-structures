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
    // store former head
    var formerHead = list.head;
    // move head to next node
    list.head = list.head.next;
    // return former head value
    return formerHead.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    // while loop starting at the head
    while (currentNode) {
      // if target equals current value
      if (target === currentNode.value) {
        // return true
        return true;
        // otherwise
      } else {
        // set current node to equal next node
        currentNode = currentNode.next;
      }
    }
    // if not found while loop will exit and return false
    return false;
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
 * Complexity: What is the time complexity of the above functions? Add: O(1) Remove: O(1) Contains: O(n)
 */
