// Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

const countElements = (nums) => {
    if(nums.length < 3) return 0
    let obj = {}
    let low
    let high
    for(let n of nums){
        obj[n]? obj[n]++ : obj[n] = 1
        if(n < low || low === undefined){
            low = n
        }
        if(n > high || high === undefined){
            high = n
        }
    }
    if(low === high) return 0
    return nums.length - (obj[low] + obj[high])
}

console.log(countElements([11,7,2,15]))//2