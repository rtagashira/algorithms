// Given an array nums of 0s and 1s and an integer k, return True if all 1's are at least k places away from each other, otherwise return False.

const kLengthApart = (nums, k) =>{
    let count = null
    for(let n of nums){
        if(count === null){
            if(n === 1) count = 0
        }else{
            if(n === 0){
                count++
            }else if(n === 1){
                if(count < k){
                    return false
                }else{
                    count = 0
                }
            }
        }
    }
    return true
}

console.log(kLengthApart(nums = [1,0,0,0,1,0,0,1], k = 2))//true
console.log(kLengthApart(nums = [1,0,0,1,0,1], k = 2))//false
console.log(kLengthApart(nums = [1,1,1,1,1], k = 0))//true
console.log(kLengthApart(nums = [0,1,0,1], k = 1))//true