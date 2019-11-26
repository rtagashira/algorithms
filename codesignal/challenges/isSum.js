// Triangular Numbers are positive integers that can be represented as a sum of all integers from 1 up to some n. Determine if the given number is Triangular.


let isSum = (v) =>{
  let i = 1
  while(v>0){
      if(v - i < 1) return v - i === 0
      v -= i
      i++
  }
}
// let isSum = (value) =>{
//     let sum = 0
//     for(let i=1;i<=value;i++){
//         sum += i
//         if(sum === value) return true
//         if(sum > value) return false
//     }
// }

console.log(isSum(10))//true
console.log(isSum(11))//false
console.log(isSum(100))//false
console.log(isSum(45))//true