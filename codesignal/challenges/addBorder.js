// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

let addBorder = (a) =>{
  for(let i in a){
      a[i] = '*' + a[i] + '*'
  }
  let x = '*'.repeat(a[0].length)
  return [x,...a,x]
}

// let addBorder = (arr) =>{
//     let topAndBottom = '*'.repeat(arr[0].length + 2)
//     for(let i=0;i<arr.length;i++){
//         arr[i] = '*' + arr[i] + '*'
//     }
//     return [topAndBottom, ...arr, topAndBottom]
// }


console.log(addBorder(["abc", "ded"]))
//["*****", 
// "*abc*", 
// "*ded*", 
// "*****"]
console.log(addBorder(["a"]))
// ["***", 
//  "*a*", 
//  "***"]
console.log(addBorder(["aa", "**", "zz"]))
// ["****", 
//  "*aa*", 
//  "****", 
//  "*zz*", 
//  "****"]