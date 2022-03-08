// You are given a 0-indexed integer array nums. You are also given an integer key, which is present in nums.

// For every unique integer target in nums, count the number of times target immediately follows an occurrence of key in nums. In other words, count the number of indices i such that:

// 0 <= i <= nums.length - 2,
// nums[i] == key and,
// nums[i + 1] == target.
// Return the target with the maximum count. The test cases will be generated such that the target with maximum count is unique.

const mostFrequent = (nums, key) =>{
    let obj = {}
    let count = 0
    let num
    for(let i=0;i<nums.length-1;i++){
        if(nums[i] === key){
            let n = nums[i+1]
            obj[n]? obj[n]++ : obj[n] = 1
            if(obj[n] > count){
                count = obj[n]
                num = n
            }
        }
    }
    return num
}