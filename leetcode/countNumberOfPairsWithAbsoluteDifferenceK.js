// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.

const countKDifference = (nums, k) =>{
    let count = 0
    let i = 0
    let j = 1
    nums.sort((a,b)=>a-b)
    while(i < nums.length-1){
        let sum = Math.abs(nums[i] - nums[j]) 
        if(sum === k){
            count++
        }

        if(sum > k){
            i++
            j = i + 1
        }
        else{
            j === nums.length - 1? (i++,j = i+1) : j++
        }
    }
    return count
}

console.log(countKDifference(nums = [1,2,2,1], k = 1))//4
console.log(countKDifference(nums = [1,3], k = 3))//0
console.log(countKDifference(nums = [3,2,1,5,4], k = 2))//3
console.log(countKDifference([9,3,1,1,4,5,4,9,5,10], 1))//8