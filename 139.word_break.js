class Trie {
  // https://en.wikipedia.org/wiki/Trie
  TrieNode(value = undefined, children = undefined) {
    return {
      value: value, // optional, key's value only for leaf/of-interest node
      children: children || {},
      // count: 0,
    };
  }

  constructor() {
    this.r = this.TrieNode();
  }

  insert(key, value = key) {
    let node = this.r;
    for (let char of key) {
      node.children[char] = node.children[char] || this.TrieNode(); // create if not exist
      node = node.children[char]; // goto it's child
    }
    node.value = true; // true/ value; // terminal node has value, representing complete string
    // node.count++; // terminal node count
  }

  findWithConcat(key) {
    let n = key.length;

    let set = new Set();

    const bt = (iContinueFrom) => {
      if (set.has(iContinueFrom)) return false; // already restarted, at iContinueFrom, its a loop, fail
      console.log('iContinueFrom', iContinueFrom);
      set.add(iContinueFrom);
      debugger;

      let node = this.r;
      for (let i = iContinueFrom; i < n; i++) {
        if (!(key[i] in node.children)) {
          return false; // child dint match, fail
        }
        node = node.children[key[i]]; // child matched, move to child
        if (node.value !== undefined) {
          // and also a word completed here
          if (i === n - 1) {
            return true; // and also a serachWord completed here, done
          }
          if (bt(i + 1)) {
            return true; // but serachWord dint complete, so try starting from begin too
          }
        }
        // also continue further on childs
      }
      return false;
    };

    return bt(0);
  }
}

var wordBreak = function (s, words) {
  let t = new Trie();
  for (let word of words) {
    t.insert(word);
  }
  return t.findWithConcat(s);
};

// console.log("result", wordBreak("leetcode", ["leet", "code"]))
// console.log("result", wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
// console.log("result", wordBreak("applepenapple", ["apple", "pen"]))
console.log("result", wordBreak("abcd",
["a", "abc", "b", "cd"], ))