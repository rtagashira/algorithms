// Given an integer array nums (0-indexed) and two integers target and start, find an index i such that nums[i] == target and abs(i - start) is minimized. Note that abs(x) is the absolute value of x.

// Return abs(i - start).

// It is guaranteed that target exists in nums.

const getMinDistance = (nums, target, start) =>{
    let a = start
    let b = start
    if(nums[start] === target) return 0
    while(a >= 0 || b <= nums.length - 1){
        a--
        b++
        if(nums[a] === target) return Math.abs(a - start)
        if(nums[b] === target) return Math.abs(b - start)
    }
}

console.log(getMinDistance(nums = [1,2,3,4,5], target = 5, start = 3))//1
console.log(getMinDistance(nums = [1], target = 1, start = 0))//0
console.log(getMinDistance(nums = [1,1,1,1,1,1,1,1,1,1], target = 1, start = 0))//0