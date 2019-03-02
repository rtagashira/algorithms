// We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. 
// This means that at each step we take the last non 0 digit of the number and round it to 0 or to 10. If it's less 
// than 5 we round it to 0 if it's larger than or equal to 5 we round it to 10 (rounding to 10 means increasing the 
//   next significant digit by 1). The process stops immediately once there is only one non-zero digit left.

function rounders(n) {
  let str = n.toString()
  let carryTheOne
  let newStr = ''
  if(str.length ===1) return +str
  for(let i=str.length-1;i>=0;i--){
    if(i===str.length-1){    //-------------last digit
      newStr = '0' + newStr
      if(str[i]>=5){
        carryTheOne = true
      }else{
        carryTheOne = false
      }
    }else if(i!=str.length-1 && i!=0){ //---not the last or first digit
      newStr = '0' + newStr
      if(carryTheOne===true){
        if(+str[i]+1>=5){
          carryTheOne = true
        }else{
          carryTheOne = false
        }
      }else{
        if(+str[i]>=5){
          carryTheOne = true
        }else{
          carryTheOne = false
        }
      }
    }else{   //---------------------------------first digit
      return carryTheOne? +(+str[0]+1+newStr) : +(str[0]+newStr)
    }
  }
}

function rounders(n){
  let num = ''
  while(n>0){
    if(n<10){
      return +(n+num)
    }
    num+= '0'
    n= Math.round(n/10)
  }
}
//------------------------------------------------------
// function rounders(value) {
//   var r = 0
//   while (value > 10) {
//     value = Math.round(value/10)
//     r++
//   }
//   return value * Math.pow(10,r)
// }

console.log(rounders(15))//20
console.log(rounders(1234))//1000
console.log(rounders(1445))//2000