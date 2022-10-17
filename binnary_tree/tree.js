class Node {
  constructor(val){
    this.val = val;
    this.left = null
    this.right = null;
  }
}
const a = new Node('3');
const b = new Node('9');
const c = new Node('20');
const d = new Node('15');
const e = new Node('7');
// const f = new Node('f');
// const g = new Node('g');

a.left = b;
a.right = c;
c.left = d;
c.right = e;
// b.right = e;
// let counter = 0;
const helper = (root, res) => {
  if(!root) return;
  if(root.left) helper(root.left, res);
  if(root.right) helper(root.right, res);
  res.push(root.val);
}

const dfs = (root) => {
  let res = [];
  helper(root, res);
  return res;
}
var maxDepth = function(root){
  if(!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

console.log(maxDepth(a));

