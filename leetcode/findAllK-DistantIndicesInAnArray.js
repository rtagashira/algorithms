// You are given a 0-indexed integer array nums and two integers key and k. A k-distant index is an index i of nums for which there exists at least one index j such that |i - j| <= k and nums[j] == key.

// Return a list of all k-distant indices sorted in increasing order.

const findKDistantIndices = (nums, key, k) =>{
    let keyI = []
    let arr = []
    for(let i=0;i<nums.length;i++){
        if(nums[i] === key) keyI.push(i)
    }
    
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<keyI.length;j++){
            if(Math.abs(i-keyI[j]) <= k){
                arr.push(i)
                break
            }
        }
    }
    return arr
}