
var majorityElement = function(nums) {
    let mejorNumber;
    let count = 0;
    for(const num of nums){
        if(count === 0) mejorNumber = num;
        count += (num === mejorNumber) ? 1: -1;  
    }
    return mejorNumber;
}; 

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));