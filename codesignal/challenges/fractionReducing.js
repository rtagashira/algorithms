// Implement a function that can reduce a fraction.

let fractionReducing = (arr) =>{
  for(let i=Math.min(...arr);i>=1;i--)
      if(arr.every(x => x % i === 0)) return arr.map(x=>x/i)
}

// let fractionReducing = (arr) =>{
//     for(let i=Math.min(...arr);i>=1;i--){
//         if(arr[0] % i === 0 && arr[1] % i === 0) return arr.map(x=>x/i)
//     }
// }


// let fractionReducing = (arr) =>{
//     for(let i=Math.min(...arr);i>=1;i--){
//         if(arr[0] % i === 0 && arr[1] % i === 0) return [arr[0]/i,arr[1]/i]
//     }
// }

console.log(fractionReducing([2, 6]))//[1, 3]
console.log(fractionReducing([4, 1]))//[4, 1]
console.log(fractionReducing([5, 10]))//[1, 2]