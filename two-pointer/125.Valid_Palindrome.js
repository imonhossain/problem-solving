// solved
var isPalindrome = function(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let j = s.length - 1;
  for(i = 0; i<s.length/2; i++){
    if(i>=j) return true;
    if(s[i] !== s[j]){
      return false;
    }
    j--;
  }
  return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));