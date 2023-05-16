// Time: O(n)
// Space: O(n)
// var judgeSquareSum = function(c) {
//     let leftIndex = 0;
//     let rightIndex = Math.ceil(Math.sqrt(c));
//     while(leftIndex<=rightIndex){
//         const sum =(leftIndex**2) +( rightIndex**2);
//         if(sum == c) return true;
//         if(sum<c) leftIndex++;
//         if(sum>c)rightIndex--;
//     }
//     return false;
// };

var judgeSquareSum = function(c) {
    let low = 0;
    let high = Math.ceil(Math.sqrt(c));
    while(low<=high){
        const sum = low**2 + high**2;
        let mid = Math.floor(low+(high-low)/ 2);
        if(c > sum) low = c > (mid**2 + high**2) ? mid+1: low+1;
        else if(c<sum) high = c < (mid**2 + low**2) ? mid-1: high-1;
        else return true;
    }
    return false;
}

console.log((judgeSquareSum(13)));