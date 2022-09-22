var climbStairs2 = function (k) {
  let map = {};
  const f = (n) => {
    if(map[n]) return map[n]
    if(n <= 3) return n;
    map[n]= f(n-1) + f(n-2);
    return map[n];
  }
  return f(k);
};
var climbStairs = function (n) {
  const sqrt5 = Math.sqrt(5);
  const fibn = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1-sqrt5)/2, n+1);
  return Math.floor(fibn/sqrt5);
};

console.log(climbStairs(5))
console.log(climbStairs(2))
console.log(climbStairs(4))