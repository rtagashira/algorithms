// Find the smallest integer that is divisible by all integers on a given interval [left, right].

let smallestMultiple = (left, right) =>{
  let num = right
  while(true){
    for(let i=left;i<=right;i++){
      if(num % i != 0) break
      if(num % i === 0 && i === right) return num
    }
    num++
  }
}

// let smallestMultiple = (left, right) =>{
//     let num = right
//     while(true){
//         let div = 0
//         for(let i=left;i<=right;i++){
//             if(num % i != 0) break
//             if(num % i === 0) div++
//         }
//         if(div === right - left + 1) return num
//         num++
//     }
// }

console.log(smallestMultiple(2,4))//12
console.log(smallestMultiple(1,1))//1