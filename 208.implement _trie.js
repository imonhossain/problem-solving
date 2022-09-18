
let Trie = function () {
  console.log('this', this);
  this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
 
  for (let letter of word) {
    console.log('node', node);
    if (node[letter] === undefined){   
      node[letter] = {};
    }
    node = node[letter]
  }
  node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;
  for(let letter of word){
    if(!node[letter]){
      return false;
    }else{
      node = node[letter]; 
    }
  }
  return node && node.isEnd === true;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (let letter of prefix){
    if(!node[letter]){
      return false;
    }else{
      node = node[letter];
    }
  }
  return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

let trie = new Trie();
trie.insert("apple");
const result = trie.search("apple");   // return True
console.log(result);
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
trie.insert("app");
// trie.search("app");     // return True