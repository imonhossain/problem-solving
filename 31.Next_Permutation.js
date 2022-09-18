var nextPermutation = function (nums) {
  let size = nums.length;
  let isDescending = true;
  for (let i = 1; i < size; i++){
    if(nums[i-1] < nums[i]){
      isDescending = false;
      break;
    }
  }
  if (isDescending){
    return nums.sort((a, b) => a - b);
  }
  for(let i = size-2; i>=0; i--){
    if(nums[i+1] > nums[i]){
      let temp = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = temp;
      break;
    }
  }
  return nums;
};
console.log(nextPermutation(
  [1, 3, 2]));