var longestPalindrome = function(s) {
  const map = {};
  for(const letter of s){
    map[letter] =  map[letter] ?  map[letter] += 1 : 1;
  }
  let output = 0;
  let isIncludeOdd = false;

  for(const [key, value] of Object.entries(map)){
    if(value % 2 === 0){
      output += value;
    }else if(!isIncludeOdd){
      isIncludeOdd = true;
      output += value;
    }else{
      output += value-1;
    }
  }
  return output;
};
console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("A"));