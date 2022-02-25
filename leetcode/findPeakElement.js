// A peak element is an element that is strictly greater than its neighbors.

// Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

const findPeakElement = (nums) =>{
    for(let i=0;i<nums.length;i++){
        if(i === 0 && nums[i] > nums[i+1]) return i
        if(i === nums.length - 1 && nums[i] > nums[i-1]) return i
        if(nums[i-1] < nums[i] && nums[i] > nums[i+1]) return i
    }
    return 0
}