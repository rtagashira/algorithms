// Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).

// A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].

// If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.

// Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.

const findMiddleIndex = (nums) =>{
    const sum = arr => arr.reduce((acc,v)=>acc+v,0)

    for(let i=0;i<nums.length;i++){
        let l = nums.slice(0,i) 
        let r = nums.slice(i+1)
        if(sum(l) === sum(r)) return i
    }
    return -1
}

console.log(findMiddleIndex([2,3,-1,8,4]))//3
console.log(findMiddleIndex([1,-1,4]))//2
console.log(findMiddleIndex([2,5]))//-1