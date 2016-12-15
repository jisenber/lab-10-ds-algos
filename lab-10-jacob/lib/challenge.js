const Stack = require('./stack.js');

function challenge(array) {
  var stack1 = new Stack();
  var stack2 = new Stack();
  var stack3 = new Stack();
  for (var i = 0; i < array.length; i++) {
    stack1.push(array[i]);
  }
  while(stack3.size < 2) {
    organize(stack1, stack2, stack3);
  }
  console.log(stack1);
  console.log(stack2);
  console.log(stack3);
}


function organize(one, two, three) {
  if ((!three.top)&&(!two.top)) { //start em' off!
    three.push(one.top.val);
    one.pop();
  }
  else if (!three.top) {
    if (one.top.val < two.top.val) {
      three.push(one.top.val);
      one.pop();
    } else {
      three.push(two.top.val);
      two.pop();
    }
  } else if (!two.top) {
    if (one.top.val < three.top.val) {
      two.push(one.top.val);
      one.pop();
    } else {
      two.push(three.top.val);
      three.pop();
    }
  } else if (!one.top) {
    if(two.top.val < three.top.val) {
      one.push(two.top.val);
      two.pop();
    } else {
      one.push(three.top.val);
      three.pop();
    }
  } else if ((one.top.val) && (two.top.val) && (three.top.val)) {
    if ((one.top.val > two.top.val) && (one.top.val > three.top.val)) {
      if (two.top.val > three.top.val) {
        three.push(two.top.val);
        two.pop();
      } else {
        two.push(three.top.val);
        three.pop();
      }
    } else if ((two.top.val > three.top.val) && (two.top.val > one.top.val)) {
      if (one.top.val > three.top.val) {
        three.push(one.top.val);
        one.pop();
      } else {
        one.push(three.top.val);
        three.pop();
      }
    } else if ((three.top.val > two.top.val) && (three.top.val > one.top.val)) {
      if (two.top.val > one.top.val) {
        one.push(two.top.val);
        two.pop();
      } else {
        two.push(one.top.val);
        one.pop();
      }
    }
  }
}


challenge([1,2,3]);
