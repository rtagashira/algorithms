// Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true.

// The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).

const canBeIncreasing = (nums) =>{
    let count = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i] <= nums[i-1]){
            count++
            if(count > 1) return false
            if(nums[i] <= nums[i-2] && nums[i+1] <= nums[i-1]) return false
        }
    }
    return true
}

console.log(canBeIncreasing([1,2,10,5,7]))//true
console.log(canBeIncreasing([2,3,1,2]))//false
console.log(canBeIncreasing([1,1,1]))//false
console.log(canBeIncreasing([1,2,3]))//true
console.log(canBeIncreasing([541,783,433,744]))//false