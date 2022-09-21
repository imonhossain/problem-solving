/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let commonPrefix = "";
  let j = 0;
  let i = 0
  currentCharacter = '';
  while (true) {
    console.log(i, j)
    i = 0;
    currentCharacter = strs[i] && strs[i][j] || undefined;
    if (!currentCharacter){
      break;
    }
    
    for (; i < strs.length; i++) {
      const item = strs[i] ? strs[i][j] : -2;
      if (currentCharacter !== item){
        return commonPrefix;
      }
    }
    if (currentCharacter) commonPrefix += currentCharacter;
    j++;
  }
  return commonPrefix;

};

// its time limit execit
var longestCommonPrefix = function (strs) {
  let i = 0;
  while (strs.every((item) => strs[0][i] === item[i])) {
    i++;
  }
  return strs[0].slice(0, i);
};

console.log('output: ', longestCommonPrefix(["flower", "flow", "flight"]));
// console.log('output: ', longestCommonPrefix(["dog", "racecar", "car"]));