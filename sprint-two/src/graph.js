

// Instantiate a new graph
var Graph = function() {
  this.edges = {};
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node] === node) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
  delete this.edges[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  console.log(this.edges);
  if (this.edges[fromNode] === fromNode && this.edges[toNode] === toNode) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // check if the from node property is in this.edges
  if (!this.edges.hasOwnProperty(fromNode)) {
    // set this.edges[fromNode] = toNode
    this.edges[fromNode] = fromNode;
  }
  // check if node is in this.edges
  if (!this.edges.hasOwnProperty(toNode)) {
    // set this.edges[toNode] = fromNode
    this.edges[toNode] = toNode;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edges[fromNode];
  delete this.edges[toNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var nodes = this.nodes;
  // for loop iterating over nodes
  for (var node in nodes) {
    // call cb on each node
    cb(this.nodes[node]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


