
// Solved
var findRepeatedDnaSequences = function(s) {
  const map = {}
  const result = [];
  for(let i = 0; i< s.length - 9; i++){
    const substr = s.substr(i, 10);
    if(map[substr] === 1){
      map[substr] += 1;
      result.push(substr);
    }else if(map[substr] >= 2){
      map[substr] += 1;
    }else{
      map[substr] = 1;
    }
  }
  return result;
};   
console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))
console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA"))
console.log(findRepeatedDnaSequences("AAAAAAAAAAA"))