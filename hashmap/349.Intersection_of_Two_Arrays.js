
var intersection = function(nums1, nums2) {
  nums1 = Array.from(new Set(nums1));
  nums2 = Array.from(new Set(nums2));
  const result = [];
  const obj = {};
  for(const value of nums1){
    obj[value] =  obj[value] == undefined ? 1 : obj[value]+= 1;
  }
  for(const value of nums2){
    obj[value] =  obj[value] == undefined ? 1 : obj[value]+= 1;
  }
  for(const [key, value] of Object.entries(obj)){
    if(value == 2) result.push(key);
  }
  return result;
};

// Good solution
var intersection = function(nums1, nums2) {
  let nums1Map = new Set(nums1);
  let result = new Set();
  nums2.forEach(item => {
      if(nums1Map.has(item)){
          result.add(item)
      }
  })
  return [...result];
};

console.log(intersection([1,2,2,1], [2,2]));
console.log(intersection([4,9,5], [9,4,9,8,4]));