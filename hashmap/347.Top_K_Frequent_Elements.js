// solved
var topKFrequent = function(nums, k) {
  const obj = {}, buckets = [], ans = [];
  for(const num of nums) obj[num] = obj[num] !== undefined ? obj[num] += 1 : 1
  for(let i = 0; i<= nums.length; i++) buckets.push([]);
  for(let [key, value] of Object.entries(obj)) buckets[value].push(key);
  for(let i = buckets.length-1; i>0 && ans.length< k; i--){
    if(buckets[i] !==null) ans.push(...buckets[i]);
  }
  return ans;
};

console.log(topKFrequent([1,1,1,2,2,3], 2));
// console.log(topKFrequent([1,1,11,7,2,2,3 ,9, 10], 2));
// console.log(topKFrequent([1], 1));