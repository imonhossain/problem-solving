var reverseWords = function(s) {
  const strList = s.split(" ");
  let output = "";
  for(let word of strList){
    for(let i = word.length-1; i>= 0; i--){
      output += word[i];
    }
    output += " "
  }
  return output.trim();
};
console.log(reverseWords("Let's take LeetCode contest"))