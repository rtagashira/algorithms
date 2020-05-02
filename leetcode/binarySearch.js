// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

const search = (nums, target) =>{
    let i = 0,
        j = nums.length - 1,
        m

    while(i <= j){
        m = Math.floor((i+j)/2)
        if(nums[m] === target) return m
        if(target > nums[m]){
            i = m + 1
        }else{
            j = m - 1
        }
    }
    return -1
}

console.log(search([-1,0,3,5,9,12], 9))//4
console.log(search([-1,0,3,5,9,12], 2))//-1
console.log(search([5], 5))//0
console.log(search([2,5], 5))//1