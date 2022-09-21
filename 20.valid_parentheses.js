var isValid2 = function (s) {
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

var isValid = function (s) {
  const length = s.length;
  if (length % 2 !== 0) return false;
  let map = {
    '(':')',
    '{':'}',
    '[':']',
  }
  let stack = [];
  for(let letter of s){
    if(map[letter]){
      stack.push(letter);
    } else if (stack.length && map[(stack[stack.length - 1])] === letter){
      stack.pop();
    }else{
      return false;
    }
  }
  return stack.length === 0;
};



console.log(isValid("()[]{}"));
console.log(isValid("(]"));