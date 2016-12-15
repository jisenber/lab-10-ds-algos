const Node = require('./node');

const Queue = module.exports = function(head, tail) {
	this.head = null
	this.tail = null
}

Queue.prototype.enqueue = function(val) { //first in first out
	let newNode = new Node(val);
	if (!this.tail) {
		this.tail = newNode;
		this.head = this.tail;
		return
	}
	this.tail.prev = newNode;
	this.tail = newNode;

}

Queue.prototype.dequeue = function(val) {
	if (!this.head) throw new Error('error!');
	let temp = this.head.val;
	if (this.head === this.tail) {
		this.tail = null;
		return this.head;
	}
	this.head = this.head.prev;
	return temp;
}