// Compare the two given fractions.

const fractionComparison = ([a,b], [c,d]) => a*d > b*c? '>': a*d < b*c? '<': '='

// const fractionComparison = (a, b) =>{
//     const one  = a[0] * b[1],
//           two = b[0] * a[1]
//     return one > two? '>': one < two? '<': '='
// }

// const fractionComparison = (a, b) =>{
//     const first  = a[0] * b[1],
//           second = b[0] * a[1]
//     if(first > second){
//         return '>'
//     }else if(first < second){
//         return '<'
//     }else{
//         return '='
//     }
// }

console.log(fractionComparison([3,4],[6,8]))//"="
console.log(fractionComparison([3,2],[2,5]))//">"
console.log(fractionComparison([3,5],[2,3]))//"<"