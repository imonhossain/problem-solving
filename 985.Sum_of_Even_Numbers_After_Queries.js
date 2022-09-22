/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries2 = function (nums, queries) {
  const output = [];
  for(let query of queries){
    nums[query[1]] += query[0];
    let  sum = 0;
    for (let item of nums){
      if(item % 2 ===0) sum += item;
    }
    output.push(sum);
  }
  return output;
};

var sumEvenAfterQueries = function (nums, queries) {
  const output = [];
  let evenSum = 0;
  for (let item of nums) {
    if (item % 2 === 0) evenSum += item;
  }
  for (let query of queries) {
    let index = query[1];
    if (nums[index] % 2 === 0) evenSum -= nums[index];
    let value = nums[index] + query[0];
    if (value % 2 === 0) evenSum += value;
    nums[index] =  value;
    output.push(evenSum);
  }
  return output;
};

console.log(sumEvenAfterQueries([1, 2, 3, 4], [[1, 0],[-3, 1], [-4, 0], [2, 3] ]));
// console.log(sumEvenAfterQueries([1], [[4, 0]]));