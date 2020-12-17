// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

const arrayPairSum = (nums) =>{
    let sum = 0    
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length-1;i+=2){
        sum += nums[i]
    }
    return sum
}

console.log(arrayPairSum([1,4,3,2]))//4
console.log(arrayPairSum([6,2,6,5,1,2]))//9