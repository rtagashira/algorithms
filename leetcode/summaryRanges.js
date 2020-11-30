// You are given a sorted unique integer array nums.

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b

const summaryRanges = (nums) =>{
    let a = '',
        b = '',
        arr = []
    for(let i=0;i<nums.length;i++){
        if(a === ''){
            a = nums[i].toString()
        }else if(nums[i] != nums[i-1] + 1){
            b = nums[i-1].toString()
            a === b? arr.push(a) : arr.push(a + '->' + b)
            a = nums[i].toString()
        }
        if(i === nums.length - 1){
            b = nums[i].toString()
            a === b? arr.push(a) : arr.push(a + '->' + b)
        }
    }
    return arr
}

console.log(summaryRanges([0,1,2,4,5,7]))//["0->2","4->5","7"]
console.log(summaryRanges([0,2,3,4,6,8,9]))//["0","2->4","6","8->9"]