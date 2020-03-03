// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

const containsNearbyDuplicate = (nums, k) =>{
    const obj = {}
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]] != undefined){
            if(Math.abs(obj[nums[i]] - i) <= k){
                return true
            }else{
                obj[nums[i]] = i
            }
        }else{
            obj[nums[i]] = i
        }
    }
    return false
}

console.log(containsNearbyDuplicate([1,2,3,1],3))//true
console.log(containsNearbyDuplicate([1,0,1,1],1))//true
console.log(containsNearbyDuplicate([1,2,3,1,2,3],2))//false