// Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

function sumUpNumbers(str) {
  let arr = str.match(/\d+/g)
  if(arr){
    if(arr.length === 1){
      return +(arr[0])
    }
    return arr.reduce((p,c)=>+p+(+c))
  }else{
    return 0
  }
}
//-----------------------------------------------------------------------\
function sumUpNumbers(inputString) {
  return (inputString.match(/\d+/g)||[]).reduce((a,b)=>a+ +b,0)
}

console.log(sumUpNumbers("2 apples, 12 oranges"))//14
console.log(sumUpNumbers("Your payment method is invalid"))//0
console.log(sumUpNumbers("123450"))//123450