// solved
var groupAnagrams = function(strs) {
  let map = {};
  for(let word of strs){
    let sort = [...word].sort((a, b) => a.localeCompare(b)).join("");
    if(map[sort]){
      map[sort].push(word);
    }else{
      map[sort] = [word]
    }
  }
  const result = [];
  for(let [key, value] of Object.entries(map)){
    result.push(value);
  }
  return result;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams([""]));