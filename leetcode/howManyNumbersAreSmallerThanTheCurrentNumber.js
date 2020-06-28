// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

const smallerNumbersThanCurrent = (nums) => nums.map((x,i)=>nums.filter((y,j)=>y<x && j!=i).length)

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))//[4,0,1,1,3]