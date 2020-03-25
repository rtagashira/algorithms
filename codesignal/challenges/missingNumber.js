// You are supposed to label a bunch of boxes with numbers from 0 to n, and all the labels are stored in the array arr. Unfortunately one of the labels is missing. Your task is to find it.

const missingNumber = (arr) =>{
    let set = new Set(arr)
    for(let i=0;i<=arr.length;i++){
        if(!set.has(i)) return i
    }
}

// const missingNumber = (arr) =>{
//     for(let i=0;i<=arr.length;i++){
//         if(arr.indexOf(i) < 0) return i
//     }
// }

console.log(missingNumber([3, 1, 0]))//2
console.log(missingNumber([1, 2]))//0
console.log(missingNumber(
[44, 26, 34, 25, 23, 42, 0, 43, 38, 14, 47, 19, 49, 6, 16, 41, 24, 
35, 10, 4, 32, 5, 8, 15, 31, 3, 46, 22, 2, 30, 28, 37, 1, 21, 39, 45, 
9, 48, 36, 17, 7, 27, 18, 29, 13, 40, 11, 20, 12]))//33