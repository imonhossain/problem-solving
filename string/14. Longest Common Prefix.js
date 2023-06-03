// var longestCommonPrefix = function(strs) {
//     let prefix = strs[0];
//     for(let i = 1; i <strs.length; i++){
//         while(strs[i].indexOf(prefix) !== 0){
//             prefix = prefix.substring(0, prefix.length - 1);
//         }
//     }
//     return prefix;
// };
var longestCommonPrefix = function(strs) {
    strs = strs.sort();
    const first =  strs[0];
    const last = strs[strs.length -1];
    let prefix = '';
    for(let i =0; i < first.length; i++){
        if(first[i] !== last[i]){
            break;
        }
        prefix = prefix + first[i];
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));