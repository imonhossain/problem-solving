const helper = (root, res) => {
  if (!root) return;
  if (root.left) helper(root.left, res);
  res.push(root.val);
  if (root.right) helper(root.right, res);
}
var inorderTraversal = function (root) {
  let res = [];
  helper(root, res);
  return res;
}; 