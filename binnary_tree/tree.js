class Node {
  constructor(val){
    this.val = val;
    this.left = null
    this.right = null;
  }
}
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
// const g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
let counter = 0;
const helper = (root, res) => {
  if(!root) return;
  if(root.left) helper(root.left, res);
  res.push(root.val);
  if(root.right) helper(root.right, res);
}

const dfs = (root) => {
  let res = [];
  helper(root, res);
  return res;
}


console.log(dfs(a));

