// Given an array of integers subset and an integer n, find the number of integers between 1 and n, inclusive, whose set of divisors contains subset as a subset.



let divisorsSubset = (subset, n) =>{
    let final = 0
    for(let i=1;i<=n;i++){
        let divide = true
        for(let j=0;j<subset.length;j++){
            if(i % subset[j] !== 0){
                divide = false
                break
            }
        }
        if(divide) final++
    }
    return final
}

// let divisorsSubset = (subset, n) =>{
//     let final = 0
//     for(let i=1;i<=n;i++){
//         let count = 0
//         for(let j=0;j<subset.length;j++){
//             if(i % subset[j] === 0) count++
//         }
//         if(count === subset.length) final++
//     }
//     return final
// }

console.log(divisorsSubset([2,3],13))//2
console.log(divisorsSubset([1],62))//62
console.log(divisorsSubset([12, 2, 4, 6],143))//11