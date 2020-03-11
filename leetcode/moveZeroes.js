// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

const moveZeroes = (nums) =>{
    let a = 0,
        z = false
    for(let i=0;i<nums.length;i++){
        if(nums[i] === 0 && !z){
            a = i
            z = true
        }else if(nums[i] !== 0 && z){
            [nums[i],nums[a]] = [nums[a],nums[i]]
            a += 1
        }
    }
}

let arr = [0,1,0,3,12]
moveZeroes(arr)
console.log(arr)//[1,3,12,0,0]
arr = [1,0,1]
moveZeroes(arr)
console.log(arr)//[1,1,0]