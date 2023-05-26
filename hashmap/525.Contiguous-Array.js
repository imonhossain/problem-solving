var findMaxLength = function(nums) {
    let maxLen = 0;
    let count = 0;
    const map = {0: -1};
    for(let i = 0; i<nums.length; i++){
        count += nums[i] == 0 ? -1 : 1;
        if(map[count] != undefined){
            maxLen = Math.max(maxLen, i - map[count]);
        }else{
            map[count] = i;
        }
    }
    return maxLen;

};

console.log(findMaxLength([0,0,0,1,1,1]))