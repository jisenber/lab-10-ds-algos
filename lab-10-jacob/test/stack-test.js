const Stack = require('../lib/stack.js');
const expect = require('chai').expect;

describe('stack module', function() {
  describe('.push()', function() {
    it('should add a new node to the top of the stack', function() {
      let st = new Stack(1);
      st.push(25);
      expect(st.top.val).to.equal(25);
      expect(st.top.prev).to.equal(null);
    });
    it('should throw error when max size exceeded', function() {
      let st = new Stack(1);
      st.push(25);
      expect(new Error).to.be.an('error');
    });
    it('should identify the former top node as the previous node', function() {
      let st = new Stack();
      st.push(5);
      expect(st.top.val).to.equal(5);
      st.push(6);
      expect(st.top.prev.val).to.equal(5);
    });
  });
  describe ('.pop()', function() {
    it('should return the top value of a stack', function() {
      let st = new Stack();
      st.push(5);
      st.push(6);
      let six = st.pop();
      expect(six).to.equal(6);
    });
    it('should remove an element from a stack', function() {
      let st = new Stack();
      st.push(5);
      st.push(6);
      expect(st.top.val).to.equal(6);
      st.pop();
      expect(st.top.val).to.equal(5);
    });
    it('should decrease the size of the stack by one', function() {
      let st = new Stack();
      st.push(5);
      st.push(6);
      expect(st.size).to.equal(2);
      st.pop();
      expect(st.size).to.equal(1);
    });
  });
  describe('.peek()', function() {
    it('should return the value of the top of the stack', function() {
      let st = new Stack();
      st.push(5);
      let five = st.peek();
      expect(five).to.equal(5);
    });
    it('should not affect the size of the stack', function() {
      let st = new Stack();
      st.push(5);
      expect(st.size).to.equal(1);
      st.peek();
      expect(st.size).to.equal(1);
    });
    it('should not change the top value of the stack', function() {
      let st = new Stack();
      st.push(5);
      st.push(6);
      expect(st.top.val).to.equal(6);
      st.peek();
      expect(st.top.val).to.equal(6);
    });
  });
});
