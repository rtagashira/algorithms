// You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.

// You then do the following steps:

// If original is found in nums, multiply it by two (i.e., set original = 2 * original).
// Otherwise, stop the process.
// Repeat this process with the new number as long as you keep finding the number.
// Return the final value of original.

const findFinalValue = (nums, o) =>{
    let set = new Set(nums)
    while(set.has(o)){
        o *= 2
    }
    return o
}


// const findFinalValue = (nums, o) =>{
//     let i = nums.indexOf(o)
//     while(i > -1){
//         o *= 2
//         i = nums.indexOf(o)
//     }
//     return o
// }