// Define an integer's roundness as the number of trailing zeroes in it.

// Given an integer n, check if it's possible to increase n's roundness by swapping some pair of its digits.

let increaseNumberRoundness = (n) => /0[^0]/.test(n + '')

// let increaseNumberRoundness = (n) =>{
//     let zero = null,
//         str  = n.toString()
//     for(let i=0;i<str.length;i++){
//         if(zero === null){
//             if(str[i] === '0'){
//                 zero = i
//             }            
//         }else{
//             if(str[i] != '0'){
//                 return true
//             } 
//         }
//     }
//     return false
// }

console.log(increaseNumberRoundness(902200100))//true
console.log(increaseNumberRoundness(11000))//false
console.log(increaseNumberRoundness(99080))//true
console.log(increaseNumberRoundness(1022220))//true