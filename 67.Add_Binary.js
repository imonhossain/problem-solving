var addBinary = function (a, b) {
  let carry = 0;
  let large = Math.max(a.length, b.length);
  let result = [];
  let j = a.length - 1;
  let k = b.length - 1;
  for(i = large-1; i>=0; i--){
    let sum = carry + (Number(a[j]) || 0) + (Number(b[k]) || 0);
    if(sum<=1) {
      result.unshift(sum);
      carry = 0;
    }else if (sum === 2){
      result.unshift(0);
      carry = 1;
    }else{
      result.unshift(1);
      carry= 1;
    }
    j--;
    k--;
  }
  if(carry){
    result.unshift(carry);
  }
  return result.join('');
};
console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
console.log(addBinary("1111", "1111"));