// Given an integer n and an integer start.

// Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.

// Return the bitwise XOR of all elements of nums.

const xorOperation = (n, start) =>{
    let num = start
    for(let i=1;i<n;i++){
        num = num ^ (start + 2 * i)
    }
    return num
}