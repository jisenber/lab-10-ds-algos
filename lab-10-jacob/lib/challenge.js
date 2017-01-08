//const Stack = require('./stack.js');

function challenge(a,b,c) {
  organize (a.top.val, a, c, b); //run the organize function
  return (a,b,c); //return all the stacks after the function has rearranged the stacks
  function organize(pegs, source, dest, aux) { //s
    if (pegs === 1) {
      dest.push(source.pop());
    } else {
      organize((pegs-1), source, aux, dest);
      dest.push(source.pop());
      organize((pegs-1), aux, dest, source);
    }
  }
}

module.exports = challenge;
