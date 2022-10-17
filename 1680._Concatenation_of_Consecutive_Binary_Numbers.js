/**
 * @param {number} n
 * @return {number}
 */
// Time Limit Exceeded
// const MOD_VALUE = (10 ** 9) + 7;
// var concatenatedBinary = function (n) {
//   let binaryStr = ''
//   for (let i = 1; i <= n; i++) {
//     binaryStr += i.toString(2);
//   }
//   const mainNumber = BigInt('0b' + binaryStr);
//   return Number(mainNumber % BigInt(MOD_VALUE));
// };

var concatenatedBinary = function (n) {
  let ans = 1, len = 4
  for (let i = 2; i <= n; i++) {
    if (i === len) len *= 2;
    console.log('len', len);
    ans = (ans * len + i) % 1000000007
  }
  return ans
};
// console.log(concatenatedBinary(3));
console.log(concatenatedBinary(12));
// console.log(concatenatedBinary(100000));