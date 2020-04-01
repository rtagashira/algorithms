// Given an array of integers, determine whether there are two distinct indices i and j in the array such that:

// The absolute difference between i and j is at most k
// The absolute difference between nums[i] and nums[j] is at most t

const containsNearbyAlmostDuplicate = (nums, k, t) =>{
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<=i+k;j++){
            if(Math.abs(nums[i] - nums[j]) <= t) return true
        }
    }
    return false
}

console.log(containsNearbyAlmostDuplicate([1, 3, 1],2,1))//true
console.log(containsNearbyAlmostDuplicate([-3,3],2,4))//false