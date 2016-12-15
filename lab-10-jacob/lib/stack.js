const Node = require('./node.js');

const Stack = module.exports = function(maxSize) {
  this.top = null;
  this.maxSize = maxSize || 1000000;
  this.size = 0;
};

Stack.prototype.push = function(val) {
  this.top = new Node(val, this.top);
  this.size += 1;
  if (this.size > this.maxSize) {
    throw new Error('Stack Overflowwwwww!');
  }
};

Stack.prototype.pop = function() {
  let temp = this.top.val;
  this.top = this.top.prev;
  this.size -= 1;
  return temp;
};

Stack.prototype.peek = function() {
  return this.top.val;
};
