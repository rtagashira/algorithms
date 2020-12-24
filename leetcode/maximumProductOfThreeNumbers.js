// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

const maximumProduct = (nums)=>{
    nums.sort((a,b)=>a-b)
    let max = nums[nums.length-1] * nums[nums.length-2] * nums[nums.length-3]
    let neg = nums[0] * nums[1] * nums[nums.length-1]
    if(neg > max) max = neg
    return max
}

console.log(maximumProduct([1,2,3]))//6
console.log(maximumProduct([1,2,3,4]))//24
console.log(maximumProduct([-1,-2,-3]))//-6