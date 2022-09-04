var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const triplet = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] !== nums[i - 1]) {
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        const currentSum = nums[i] + nums[left] + nums[right];
        if (currentSum > 0) {
          right--;
        } else if (currentSum < 0) {
          left++;
        } else {
          triplet.push([nums[i], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        }
      }
    }
  }
  return triplet;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));