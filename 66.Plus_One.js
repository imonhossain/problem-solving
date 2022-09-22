var plusOne = function (digits) {
  let curry = 0;
  for (let i = digits.length-1; i>=0; i--){
    if (digits[i] < 9){
      digits[i] += 1;
      return digits
    }
    digits[i] = 0;
  }
  if (digits[0] === 0) {
   return [1, ...digits]
  }
  return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
console.log(plusOne([1,2,9]));