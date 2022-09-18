//Computing Parity of word
function computingParity(x = 1011){
  result = 0;
  while(x){
    result ^= 1;
    console.log('result', result)
   // x>>=1
    //console.log('x', x)
  }
  return result;
}
console.log(computingParity());