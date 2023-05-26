var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0;
    let j = 0;
    const mergedList = []
    for(let k = 0; k<(nums1.length+nums2.length); k++){
        if(nums1[i] == undefined && nums2[j] == undefined) break;
        else if(nums1[i] == undefined){
            mergedList.push(nums2[j]);
            j++;
        }else if(nums2[j] == undefined){
            mergedList.push(nums1[i]);
            i++;
        }else if(nums1[i] <= nums2[j]){
            mergedList.push(nums1[i])
            i++;
        }else{
            mergedList.push(nums2[j]);
            j++;
        }
    }
    const totalLength = nums1.length + nums2.length;
    if(totalLength % 2 === 1){
        return mergedList[Math.floor(totalLength/2)];
    }else{
        const total = (mergedList[Math.floor(totalLength/2)] + mergedList[Math.floor(totalLength/2) - 1]);
        return total /2;
    }
};

console.log(findMedianSortedArrays([1,3],[2]));
console.log(findMedianSortedArrays([1,2],[3,4]));