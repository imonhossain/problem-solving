var findTheDifference = function(s, t) {
  let obj = {};
  for(const letter of s){
    obj[letter] = obj[letter] ? obj[letter] +=1 : 1;
  }
  for(const letter of t){
    if(!obj[letter]) return letter;
    obj[letter] = obj[letter] -=1;
  } 
};

console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("", "y"));
