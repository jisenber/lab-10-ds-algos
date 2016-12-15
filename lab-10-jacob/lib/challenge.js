const Stack = require('./stack.js');

function challenge(array) {
  var stack1 = new Stack();
  var stack2 = new Stack();
  var stack3 = new Stack();
  for (var i = 0; i < array.length; i++) {
    stack1.push(array[i]);
  }
  organize(stack1, stack2, stack3);
  console.log(stack1);
  console.log(stack2);
  console.log(stack3);
}


function organize(one, two, three) {
  three.push(one.top.val);
  one.pop();
  two.push(one.top.val);
  one.pop();
  two.push(three.top.val);
  three.pop();
  three.push(one.top.val);
  one.pop();
  one.push(two.top.val);
  two.pop();
  three.push(two.top.val);
  two.pop();
  three.push(one.top.val);
  one.pop();
}

challenge([1,2,3]);
