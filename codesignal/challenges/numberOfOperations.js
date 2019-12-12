// For a pair of two positive integers a and b consider the following operation: if one of the integers is divisible by the other - replace this integer with the division result of the two.

// This operation is applied sequentially until it stops working. Return the number of times the operation is applied. It is guaranteed that the answer is a finite number.

let numberOfOperations = (a, b) =>{
  let c = 0
  while(a % b === 0 || b % a === 0){
      a > b? (a /= b,c++): b > a? (b /= a,c++):null
  }
  return c
}

// let numberOfOperations = (a, b) =>{
//     let count = 0
//     while(a % b === 0 || b % a === 0){
//         if(a > b){
//             a /= b
//             count++
//         }else if(b > a){
//             b /= a
//             count++
//         }
//     }
//     return count
// }

console.log(numberOfOperations(432,72))//4
console.log(numberOfOperations(7,14))//1