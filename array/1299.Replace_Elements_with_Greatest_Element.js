var replaceElements = function(arr) {
  // let last = -1;
  // let last = arr[arr.length - 1];
  const len = arr.length;
  // let last = -1;
  let last = arr[len -1]
  
  for(let i = arr.length - 2; i>=1; i--){
    // if(large > last){

    // }
    // let last = arr[i];
    // arr[i] = Math.max(last, arr[i-2]);

  }
  arr[len-1] = -1;
  return arr;
};

console.log(replaceElements([17,18,5,4,6,1]));
