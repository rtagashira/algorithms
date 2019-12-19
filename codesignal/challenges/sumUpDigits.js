// Find the sum of all digits that occur in a string.

let sumUpDigits = (str) => [...str].reduce((a,v)=>/\d/.test(v)?a+=+v:a,0)

// let sumUpDigits = (str) =>{
//     let sum = 0
//     for(let d of str)
//         if(/\d/.test(d)) sum += +d
//     return sum
// }

console.log(sumUpDigits("2 apples, 12 oranges"))//5
console.log(sumUpDigits("12345"))//15