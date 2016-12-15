const Queue = require('../lib/queue.js');
const expect = require('chai').expect;

describe('queue module', function() {
  describe('enqueue()', function() {
    it('should add a node to the tail of a queue', function() {
      let q = new Queue();
      q.enqueue(5);
      expect(q.tail.val).to.equal(5);
      q.enqueue(6);
      expect(q.tail.val).to.equal(6);
    });
    it('should assign the head to the same value as the tail if the queue only contains one node', function() {
      let q = new Queue();
      q.enqueue(5);
      q.enqueue(6);
      expect(q.tail.val === q.head.val).to.equal(false);
      let newq = new Queue();
      newq.enqueue(5);
      expect(newq.tail.val === newq.head.val).to.equal(true);
    });
    it('should allow the head to keep track of the value that preceeds it', function() {
      let q = new Queue();
      q.enqueue(5);
      expect(q.head.prev).to.equal(undefined);
      q.enqueue(6);
      expect(q.head.prev.val).to.equal(6);
      q.enqueue(7);
      expect(q.head.prev.val).to.equal(6);
    });
  });
  describe('dequeue()', function() {
    it('should return the value of the head of the queue', function() {
      let q = new Queue();
      q.enqueue(5);
      let five = q.dequeue();
      expect(five).to.equal(5);
    });
    it('should make value that was formerly the previous value to the head the new head', function() {
      let q = new Queue();
      q.enqueue(5);
      q.enqueue(6);
      q.enqueue(7);
      expect(q.head.val).to.equal(5);
      expect(q.head.prev.val).to.equal(6);
      q.dequeue();
      expect(q.head.val).to.equal(6);
      expect(q.head.prev.val).to.equal(7);
    });
    it('should throw an error if there is no head to dequeue', function() {
      let q = new Queue();
      expect(function(){
        q.dequeue();
      }).to.throw(Error);
    });
  });
});
