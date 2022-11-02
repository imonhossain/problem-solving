// solved
var twoSum = function(numbers, target) {
  let [left, right] = [0, numbers.length-1];
  while(left<right){
    let sum = numbers[left] + numbers[right];
    if(sum === target) return [left+1, right+1];
    if(sum>target) right -= 1;
    if(sum<target) left += 1;
  }    
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([2,3,4], 6));
console.log(twoSum([-1,0], -1));