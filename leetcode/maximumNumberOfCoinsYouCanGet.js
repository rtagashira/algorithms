// There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:

// In each step, you will choose any 3 piles of coins (not necessarily consecutive).
// Of your choice, Alice will pick the pile with the maximum number of coins.
// You will pick the next pile with maximum number of coins.
// Your friend Bob will pick the last pile.
// Repeat until there are no more piles of coins.
// Given an array of integers piles where piles[i] is the number of coins in the ith pile.

// Return the maximum number of coins which you can have.

const maxCoins = (arr) =>{
    let sum = 0
    let l = 1
    let r = arr.length - 1
    arr.sort((a,b)=>b-a)

    while(l < r){
        sum += arr[l]
        l += 2
        r--
    }
    return sum
}

// const maxCoins = (arr) =>{
//     let sum = 0
//     let turn = 0
//     arr.sort((a,b)=>b-a)

//     while(arr.length>0){
//         if(turn === 0){
//             arr.shift()
//             turn++
//         }else if(turn === 1){
//             sum += arr.shift()
//             turn++
//         }else{
//             arr.pop()
//             turn = 0
//         }
//     }
//     return sum
// }

console.log(maxCoins([2,4,1,2,7,8]))//9
console.log(maxCoins([2,4,5]))//4
console.log(maxCoins([9,8,7,6,5,1,2,3,4]))//18