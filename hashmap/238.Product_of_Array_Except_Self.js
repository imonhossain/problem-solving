// Solved 
var productExceptSelf = function(nums) {
  let total = 1;
  let zeroCount = 0;
  for(let i = 0; i<nums.length; i++){
    if(nums[i] !== 0){
      total *= nums[i]
    }else{
      zeroCount++;
    }
  }
  if(zeroCount > 1){
    for(let i = 0; i<nums.length; i++) nums[i] = 0;
    return nums;
  }
  for(let i = 0; i<nums.length; i++){
    nums[i] = nums[i] == 0 ? total : zeroCount === 0? total/nums[i]: -0;
  }
  return nums;
};

console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))
console.log(productExceptSelf([0,0]))