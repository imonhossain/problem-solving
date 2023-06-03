var findDisappearedNumbers = function(nums) {
    const obj = {}
    const missingItems = [];

    for(let i =0; i<nums.length; i++) obj[nums[i]] = nums[i];
    for(let i =1; i<=nums.length; i++) if(!obj[i]) missingItems.push(i);

    return missingItems;
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));