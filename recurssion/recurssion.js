// string Reverse 
const reverseString = (str) => {
  if(!str) return '';
  console.log("str.charAt(0)", str.charAt(0))
  return reverseString(str.substring(1)) + str.charAt(0)
}
console.log(reverseString("hello"));