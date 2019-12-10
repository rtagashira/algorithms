// We define the weakness of number x as the number of positive integers smaller than x that have more divisors than x.

// It follows that the weaker the number, the greater overall weakness it has. For the given integer n, you need to answer two questions:

// what is the weakness of the weakest numbers in the range [1, n]?
// how many numbers in the range [1, n] have this weakness?
// Return the answer as an array of two elements, where the first element is the answer to the first question, and the second element is the answer to the second question.

const weakNumbers = (n) =>{
  const obj = {}
  let weakness = 0,
      num = 0
  for(let i=1; i<=n;i++){
      let d = 0,
          w = 0
      // put divisors for the numbers between 1 and n in obj
      for(let j=1;j<=i;j++){
          if(i % j === 0) d++
      }
      obj[i] = {d}
      // loop back over the previous numbers before i to find i's weakness
      for(let k=1;k<i;k++){
          if(obj[k]['d'] > obj[i]['d']) w++
      }
      if(w > weakness){
          weakness = w
          num = 1
      }else if(w === weakness){
          num++
      }
  }
  return [weakness,num]
}

// const weakNumbers = (n) =>{
//     const obj = {}
//     let weakness = 0,
//         num = 0
//     for(let i=1; i<=n;i++){
//         let d = 0
//         for(let j=1;j<=i;j++){
//             if(i % j === 0) d++
//         }
//         obj[i] = {d}
//     }

//     for(let i=1;i<=n;i++){
//         let w = 0
//         for(let j=1;j<i;j++){
//             if(obj[j]['d'] > obj[i]['d']) w++
//         }
//         if(w > weakness){
//             weakness = w
//             num = 1
//         }else if(w === weakness){
//             num++
//         }
//     }
//     return [weakness,num]
// }

console.log(weakNumbers(9))//[2, 2]
console.log(weakNumbers(1))//[0, 1]
console.log(weakNumbers(2))//[0, 2]
console.log(weakNumbers(7))//[2, 1]
console.log(weakNumbers(500))//[403, 1]
console.log(weakNumbers(4))//[0, 4]