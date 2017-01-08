const tower = require('../lib/challenge.js');
const expect = require('chai').expect;
const Stack = require('../lib/stack.js');
let a = new Stack();
let b = new Stack();
let c = new Stack();

describe('The towers of Hanoi', function() {
  before(function(){
    a.push(1);
    a.push(2);
    a.push(3);
    a.push(4);
  });
  describe('The starting position of all the blocks', function() {
    it('should be in sequential order with the highest block on top and lowest on the bottom', function() {
      expect(a.top.val).to.equal(4);
      expect(b.top).to.equal(null);
      expect(c.top).to.equal(null);
    });
  });
  describe('the end position of all the blocks', function() {
    it('should transfer the nodes from stack a to stack c', function() {
      tower(a,b,c);
      expect(a.top).to.equal(null);
      expect(b.top).to.equal(null);
      expect(c.top.val).to.equal(4);
    });
    it('should make the nodes on stack c be sequential in order, same as they were in the beginning on stack a', function() {
      let four = c.pop();
      let three = c.pop();
      let two = c.pop();
      let one = c.pop();
      expect(four).to.equal(4);
      expect(three).to.equal(3);
      expect(two).to.equal(2);
      expect(one).to.equal(1);
      expect(a.top).to.equal(null);
      expect(b.top).to.equal(null);
    });
  });
});
