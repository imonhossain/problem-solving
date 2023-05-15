var pivotIndex = function(nums) {
    let leftSum = 0, rightSum = 0;
    for(const number of nums) rightSum+=number;
    for(let i = 0; i< nums.length; i++){
       rightSum-=nums[i];
       if(rightSum === leftSum) return i;
       leftSum+=nums[i];
    }
    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6])); 
console.log(pivotIndex([2,1,-1])); 