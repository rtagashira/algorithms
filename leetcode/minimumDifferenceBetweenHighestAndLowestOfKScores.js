// You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.

// Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.

// Return the minimum possible difference.

const minimumDifference = (nums, k) =>{
    if(k === 1) return 0
    let n
    nums.sort((a,b)=>a-b)

    for(let i=0;i<=nums.length-k;i++){
        let arr = nums.slice(i,i+k)
        let diff = arr[arr.length-1] - arr[0]
        if(n === undefined || diff < n) n = diff
    }
    
    return n
}

console.log(minimumDifference([90],1))//0
console.log(minimumDifference([9,4,1,7],2))//2