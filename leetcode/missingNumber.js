// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

const missingNumber = (nums) =>{
    const set = new Set(nums)
    for(let i=0;i<=nums.length;i++){
        if(set.has(i))set.delete(i)
    }
    return set
    return [...set][0]
}

console.log(missingNumber([3,0,1]))//2
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))//8