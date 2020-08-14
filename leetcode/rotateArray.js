// Given an array, rotate the array to the right by k steps, where k is non-negative.

const rotate = (nums, k) =>{
    let i = 0
    while(i < k){
        nums.unshift(nums.pop())
        i++
    }
    return nums
}

console.log(rotate([1,2,3,4,5,6,7], 3))//[5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99], 2))//[3,99,-1,-100]
console.log(rotate([1,2], 3))//[2,1]
console.log(rotate([1,2,3], 4))//[3,1,2]