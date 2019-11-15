// We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. This means that at each step we take the last non 0 digit of the number and round it to 0 or to 10. If it's less than 5 we round it to 0 if it's larger than or equal to 5 we round it to 10 (rounding to 10 means increasing the next significant digit by 1). The process stops immediately once there is only one non-zero digit left.

let rounders = (n) =>{
  let r = false,
    str = n.toString(),
    final = '0'.repeat(str.length-1)
  
  for(let i=str.length-1;i>=0;i--){
    if(i === 0){
      if(r){
        if(str[i] === '9') return +('10' + final)
        return +((+str[i] + 1) + final)
      }else{
        return +(str[i] + final)
      }
    }
    
    if(r){
      +str[i] + 1 >= 5? r = true: r = false
    }else{
      +str[i] >= 5? r = true : r = false
    }
  }
}
// let rounders = (n) =>{
//   let str = n.toString(),
//   roundUp = false,
//   final   = ''
//   for(let i=str.length-1;i>=0;i--){
//     if(i === 0){
//       if(roundUp){
//         if(str[i] === '9') return +('10' + final)
//         return +((+str[i] + 1) + final)
//       }else{
//         return +(str[i] + final)
//       }
//     }
//     if(roundUp){
//       if(+str[i] + 1 >= 5){
//         roundUp = true
//         final = '0' + final
//       }else{
//         roundUp = false
//         final = '0' + final
//       }
//     }else{
//       if(+str[i] >= 5){
//         roundUp = true
//         final = '0' + final
//       }else{
//         roundUp = false
//         final = '0' + final
//       }
//     }
//   }
// }

console.log(rounders(15))//20
console.log(rounders(1234))//1000
console.log(rounders(1445))//2000
console.log(rounders(14))//10
console.log(rounders(2345))//2000