var isValid = function (s) {
  const stack = [];
  stack.push(s[0]);
  let stackLength = 1;
  for (let i = 1; i<s.length; i++) {
    const letter = s[i];
    if (stackLength){
      if ((stack[stackLength - 1] === '(' && letter === ')') || (stack[stackLength - 1] === '{' && letter === '}') || (stack[stackLength - 1] === '[' && letter === ']')){
      stackLength -=1;
      stack.pop();
      }else{
        stack.push(letter);
        stackLength += 1;
      }
      
    }else{
      stack.push(letter);
      stackLength += 1;
    }
  }
  if (stackLength === 0) return true;
  return false
};


console.log(isValid("()[]{}"));
console.log(isValid("(]"));