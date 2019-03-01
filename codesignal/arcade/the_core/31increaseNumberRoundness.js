// Define an integer's roundness as the number of trailing zeroes in it.

// Given an integer n, check if it's possible to increase n's roundness by swapping some pair of its digits.

function increaseNumberRoundness(n) {
  let str = n.toString()
  let newStr = str.slice(0,str.lastIndexOf(str.match(/0+$/)))
  if(newStr.indexOf('0')>-1){
    return true
  }else{
    return false
  }
}

//--------------------------------------------------------------------------
// function increaseNumberRoundness(n) {
//   return /0[1-9]/.test(n);
// }

console.log(increaseNumberRoundness(902200100));//true
console.log(increaseNumberRoundness(11000));//false