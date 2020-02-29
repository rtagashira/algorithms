// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// const majorityElement = (nums) => nums.find(x=>nums.filter(y=>y===x).length > nums.length/2)

const majorityElement = (nums) =>{
    let obj = {}
    for(let i=0;i<nums.length;i++){
        obj[nums[i]]? obj[nums[i]]++ : obj[nums[i]] = 1
        if(obj[nums[i]] > nums.length/2) return nums[i]
    }
}

console.log(majorityElement([3,2,3]))//3
console.log(majorityElement([2,2,1,1,1,2,2]))//2
console.log(majorityElement([6,5,5]))//5