// Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].

// Return the maximum difference. If no such i and j exists, return -1.

// const maximumDifference = (nums) =>{
//     let max = -1
//     for(let i=0;i<nums.length-1;i++){
//         for(let j=i+1;j<nums.length;j++){
//             let dif = nums[j] - nums[i]
//             if(dif > max && dif !== 0) max = dif
//         }
//     }
//     return max
// }

const maximumDifference = (nums) =>{
    let max = -1
    let low
    let high
    for(let i=0;i<nums.length;i++){
        if(nums[i] < low || low === undefined){
            low = nums[i]
            high = undefined
        }else if(nums[i] > high || high === undefined){
            high = nums[i]
            let dif = high - low
            if(dif > max && dif !== 0) max = dif
        }
    }
    return max
}

console.log(maximumDifference([7,1,5,4]))//4
console.log(maximumDifference([9,4,3,2]))//-1
console.log(maximumDifference([1,5,2,10]))//9