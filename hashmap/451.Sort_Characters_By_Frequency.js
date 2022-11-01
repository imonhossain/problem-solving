// solved
var frequencySort = function(s) {
  let hashMap = new Map();
  for(let i = 0; i<s.length; i++){
    if(hashMap.has(s[i])){
      hashMap.set(s[i], hashMap.get(s[i]) + 1);
    }else{
      hashMap.set(s[i], 1);
    }
  }
  hashMap = new Map([...hashMap.entries()].sort((a, b) => b[1] - a[1]));
  let str = '';
  for(const [key, value] of hashMap){
    let val = value;
    while(val > 0){
      str += key;
      val--;
    }
  }
  return str;
};

console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb"));