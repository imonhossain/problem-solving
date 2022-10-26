var maxSlidingWindow = function(nums, k) {
  let max = Number.MIN_VALUE;
  const list = []
  var findMax = function(index){
    let current =  -9999999;
    for(let i = index; i<k+index; i++){
      if(current < nums[i]){
        current = nums[i];
        max = current;
      }
      
    }
  }
  findMax(0);
  list.push(max);
  for(let i = 1; i <= (nums.length-k); i++){
    if(max< nums[k+i-1] ){
      max = nums[k+i-1];
    }else if(max === nums[i-1]){
      findMax(i);
    }
    list.push(max);
  }
  return list;  
};
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))
console.log(maxSlidingWindow([1], 1))
console.log(maxSlidingWindow([1, -1], 1))