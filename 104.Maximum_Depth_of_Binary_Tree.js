class Node {
  constructor(val) {
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

a.left = b;
a.right = c;
c.left = d;
c.right = e;

var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

console.log(maxDepth(a));
