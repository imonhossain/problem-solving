var findAnagrams = function(s, p) {
  const list = []
  for(let i = 0; i<=(s.length - p.length); i++){
    const subStr = s.slice(i, p.length+i).split("").sort().join("");
    if(subStr === p.split("").sort().join("")) list.push(i);
  }
  return list; 
};

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));