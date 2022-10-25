
// SOLVED
var wordPattern = function(pattern, s) {
  const list = s.split(' ');
  if(pattern.length !== list.length) return false;
  const map = {};
  const wordMap = {};
  
  for(let i = 0; i<list.length; i++){
    const letter = pattern[i];
    const word = list[i];
    if(!map[letter]){
      map[letter] = word;
    }else if(map[letter] !== word){
      return false;
    }

    if(!wordMap[word]){
      wordMap[word] = letter;
    }else if(wordMap[word] !== letter){
      return false;
    }
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
console.log(wordPattern("abab", "dog dog dog dog"));