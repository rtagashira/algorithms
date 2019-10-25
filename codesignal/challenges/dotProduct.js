// Given two 3D vectors, find their dot product.

// A dot product is defined as the sum of the products of the corresponding entries of the two arrays.

let dotProduct = (v1, v2) => v1.reduce((acc,v,i)=> acc += v * v2[i], 0)

// let dotProduct = (v1, v2) =>{
//     let sum = 0
//     for(let i in v1){
//         sum += v1[i] * v2[i]
//     }
//     return sum
// }

// function dotProduct(v1, v2) {
//     let sum = 0
//     for(let i=0;i<v1.length;i++){
//         sum += v1[i] * v2[i] 
//     }
//     return sum
// }

console.log(dotProduct([1,1,1],[0,1,-1]))//0
console.log(dotProduct([0, 0, 1],[0, 5, -2]))//-2