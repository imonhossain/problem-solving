/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
let Trie = function () {
  this.root = {};
}
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let letter of word) {
    if (node[letter] === undefined) {
      node[letter] = {};
    }
    node = node[letter];
  }
  node.isEnd = true;
}


var wordBreak = function (s, wordDict) {
  let trie = new Trie();
  for (let word of wordDict) {
    trie.insert(word);
  }
  let node = trie.root;

  for (let i = 0; i < s.length; i++) {
    // console.log('node', node);
    let letter = s[i];
    if (node[letter]) {
      node = node[letter];
    } else {
      if (node)
        node = trie.root;
      if (node[letter] === undefined) {
        return false;
      }
      node = node[letter];

    }
  }
  return true;
};

// console.log("result", wordBreak("leetcode", ["leet", "code"]))
// console.log("result", wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
// console.log("result", wordBreak("applepenapple", ["apple", "pen"]))
console.log("result", wordBreak("abcd",
  ["a", "abc", "b", "cd"],))