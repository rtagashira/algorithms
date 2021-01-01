// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

const findShortestSubArray = (nums) =>{
    let obj = {}
    let count = 0
    let set = new Set()
    for(let i=0;i<nums.length;i++){
        obj[nums[i]]? obj[nums[i]]++ : obj[nums[i]] = 1
        if(obj[nums[i]] > count){
            count = obj[nums[i]]
            set = new Set([nums[i]])
        }else if(obj[nums[i]] === count){
            set.add(nums[i])
        }
    }
    if(count === 1) return 1
    let length = nums.length
    for(let n of set){
        let left = nums.indexOf(n)
        let right = nums.lastIndexOf(n)
        if(right - left + 1 < length) length = right - left + 1
    }
    return length
}

console.log(findShortestSubArray([1, 2, 2, 3, 1]))//2
console.log(findShortestSubArray([1,2,2,3,1,4,2]))//6
console.log(findShortestSubArray([2,1,1,2,1,3,3,3,1,3,1,3,2]))//7