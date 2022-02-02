// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

const findKthLargest = (nums, k) => nums.sort((a,b)=>b-a)[k-1]

console.log(findKthLargest(nums = [3,2,1,5,6,4], k = 2))//5