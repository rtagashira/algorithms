// Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence. 

// If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array. 

// Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.

const minSubsequence = (nums) =>{
    let sum = nums.reduce((a,b)=>a+b)
    let dif = 0
    let arr = []
    nums.sort((a,b)=>a-b)
    for(let i=nums.length-1;i>=0;i--){
        arr.push(nums[i])
        sum -= nums[i]
        dif += nums[i]
        if(dif > sum) return arr
    }
}

console.log(minSubsequence([4,3,10,9,8]))//[10,9]