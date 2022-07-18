// You are given a 0-indexed integer array nums. In one operation, you may do the following:

// Choose two integers in nums that are equal.
// Remove both integers from nums, forming a pair.
// The operation is done on nums as many times as possible.

// Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.

const numberOfPairs = (nums) =>{
    let set = new Set()
    let count = 0
    for(let i=0;i<nums.length;i++){
        let n = nums[i]
        if(!set.has(n)){
            set.add(n)
        }else{
            count++
            set.delete(n)
        }
    }
    return [count, set.size]
}

console.log(numberOfPairs([1,3,2,1,3,2,2]))//[3,1]
console.log(numberOfPairs([1,1]))//[1,0]