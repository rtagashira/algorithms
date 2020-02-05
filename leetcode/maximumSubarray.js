// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

const maxSubArray = (arr) =>{
    let current = arr[0],
        global = arr[0]

    for(let i=1;i<arr.length;i++){
        current = Math.max(current + arr[i], arr[i])
        if(current > global) global = current
    }
    return global
}

//too slow
// const maxSubArray = (arr) =>{
//     let sum = arr[0]
//     const add = (a)=> a.reduce((a,v)=>a+v)
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<=arr.length;j++){
//             let temp = add(arr.slice(i,j))
//             if(temp > sum) sum = temp
//         }
//     }
//     return sum
// }

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))//6