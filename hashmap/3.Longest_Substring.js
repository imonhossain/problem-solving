// not solved
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let current = 0;
  let map = {};
  for(let letter of s){
    if(!map[letter]){
      map[letter] = true;
      current += 1;
    }else{
      if(max<current){
        max = current;
      }
      //map = {};
      current = 1;
    }
  }
  return Math.max(max, current);
}
console.log("<------>")
console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring(" "))
console.log(lengthOfLongestSubstring(""))
console.log(lengthOfLongestSubstring("dvdf"))