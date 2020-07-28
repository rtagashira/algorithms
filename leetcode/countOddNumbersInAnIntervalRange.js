// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

const countOdds = (low, high) =>{
    let l = low % 2 
    let h = high % 2
    return l === h && h === 1? (high - low)/2 + 1 : Math.ceil((high - low) / 2) 
}
// const countOdds = (low, high) =>{
//     let count = 0
//     for(let i=low;i<=high;i++){
//         if(i % 2 !== 0) count++
//     }
//     return count
// }

console.log(countOdds(3,7))//3
console.log(countOdds(8,10))//1