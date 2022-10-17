// solved
var isIsomorphic = function(s, t) {
    let map1 = {};
    let map2 = {};
    for(let i = 0; i< s.length; i++){
      let letter1 = s[i];
      let letter2 = t[i];
      if(!map1[letter1]){
        map1[letter1] = t[i];
      }
      else if(map1[letter1] && map1[letter1] != t[i]){
        return false;
      }
      if(!map2[letter2]){
        map2[letter2] = s[i];
      }
      else if(map2[letter2] && map2[letter2] != s[i]){
        return false;
      }
    }
    return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"))
console.log(isIsomorphic("paper", "title"))
console.log(isIsomorphic("badc", "baba"))
