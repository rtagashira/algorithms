// You are given an integer array nums consisting of 2 * n integers.

// You need to divide nums into n pairs such that:

// Each element belongs to exactly one pair.
// The elements present in a pair are equal.
// Return true if nums can be divided into n pairs, otherwise return false.

const divideArray = (nums) =>{
    let obj = {}
    let set = new Set()

    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]){
            obj[nums[i]]++
            if(obj[nums[i]] % 2 !== 0){
                set.add(nums[i])
            }else{
                set.delete(nums[i])
            }
        }else{
            obj[nums[i]] = 1
            set.add(nums[i])
        }
    }
    return set.size === 0
}