var isSubsequence = function (s, t) {
  let i = -1;
  let count = 0;
  for (const letter of s) {
    for (i; i < t.length;) {
      i += 1;
      if (letter === t[i]) {
        count++;
        break;
      }
    }
  }
  return s.length === count;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("aaaaaa", "bbaaaa"));