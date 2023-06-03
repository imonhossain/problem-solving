// Not solved
var findSubsequences = function(nums) {
    const nonDecreasingList = [];
    for(let i = 1; i<=nums.length; i++){
        let subList = [];
        for(let j = i; j>=0; j--){
            subList.push(nums[j]);
            if(nums[j] < nums[j+1]){
                subList.push(nums[j+1]);
            }
        }
        if(subList.length >= 2) {
            nonDecreasingList.push(subList);
        }
    }
    return nonDecreasingList;
};

console.log((findSubsequences([4,6,7,7])));