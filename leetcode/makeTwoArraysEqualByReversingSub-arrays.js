// Given two integer arrays of equal length target and arr.

// In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps.

// Return True if you can make arr equal to target, or False otherwise.

const canBeEqual = (target, arr) => target.sort().join() === arr.sort().join()

// const canBeEqual = (target, arr) =>{
//     if(target.length !== arr.length) return false
//     let obj = {}
//     for(let i=0;i<target.length;i++){
//         obj[target[i]]? obj[target[i]]++ : obj[target[i]] = 1
//     }
//     for(let i=0;i<arr.length;i++){
//         if(obj[arr[i]]){
//             obj[arr[i]]--
//         }else{
//             return false
//         }
//     }
//     return true
// }

console.log(canBeEqual([1,2,3,4],[2,4,1,3]))//true
console.log(canBeEqual([7],[7]))//true
console.log(canBeEqual([3,7,9],[3,7,11]))//false