// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

const buildArray = (nums) =>{
    let arr = []
    for(let i=0;i<nums.length;i++){
        arr[i] = nums[nums[i]]
    }
    return arr
}

console.log(buildArray([5,0,1,2,3,4]))//[4,5,0,1,2,3]