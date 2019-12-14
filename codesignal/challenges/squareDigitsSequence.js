// Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.

// Given the first element a0, find the length of the sequence.

let squareDigitsSequence = (a0) =>{
  let s    = new Set([a0]),
      num  = a0,
      next = (num) =>{
          let str = num.toString(),
              sum = 0
          for(let digit of str){
              sum += digit ** 2
          }
          return sum
      }
  while(!s.has(next(num))){
      s.add(next(num))
      num = next(num)
  }
  return s.size + 1
}

// let squareDigitsSequence = (a0) =>{
//     let arr = [a0],
//         next= (num) =>{
//             let str = num.toString(),
//                 sum = 0
//             for(let digit of str){
//                 sum += digit ** 2
//             }
//             return sum
//         }
  
//     while(arr.indexOf(arr[arr.length - 1]) === arr.lastIndexOf(arr[arr.length - 1])){
//         arr.push(next(arr[arr.length - 1]))
//     }
//     return arr.length
// }

console.log(squareDigitsSequence(16))//9
console.log(squareDigitsSequence(103))//4
console.log(squareDigitsSequence(1))//2
console.log(squareDigitsSequence(13))//4
console.log(squareDigitsSequence(89))//9
console.log(squareDigitsSequence(612))//16